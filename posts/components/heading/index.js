// @flow

import * as React from 'react'

type Props = {
  id: string,
  level: number,
  fontSize?: number,
  children?: React.Node
}

const Heading = ( { id, level, fontSize, children }: Props ) => (
  <div>
    {
      React.createElement( `h${level}`,
        { style : { fontWeight : 500, fontSize } },
        <span>
          <a href={`#${id}`} id={id}>#</a>
        </span>,
        children,
      )
    }

    <style jsx>{`
      div {
        margin: 25px 0;
        font-family: Helvetica Neue, Helvetica, Arial, "Lucida Grande", sans-serif;
      }
      span {
        position: absolute;
        margin-left: -15px;
        width: 15px;
      }
      a {
        visibility: hidden;
      }
      div:hover a, span:hover a {
        visibility: visible;
      }
    `}</style>
  </div>
)

Heading.defaultProps = {
  fontSize  : 18,
  children  : [],
}

const H1 = Heading
const H2 = ( props: Props ) => Heading( {
  ...props,
  level     : 2,
  fontSize  : 16,
} )

const H3 = ( props: Props ) => Heading( {
  ...props,
  level     : 3,
  fontSize  : 14,
} )

const H4 = ( props: Props ) => Heading( {
  ...props,
  level     : 4,
  fontSize  : 12,
} )

export { H1, H2, H3, H4 }
