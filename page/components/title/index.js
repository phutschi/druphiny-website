// @flow

import * as React from 'react'

type Props = {
  children?: React.Node
}

const Title = ( { children }: Props ) => (
  <div className="title">
    { children }
    <style jsx>{`
      .title {
        display: block;
        padding: 20px 0;
        text-align: center;
        font-weight: 300;
        font-size: 14px;
      }
    `}</style>
  </div>
)

Title.defaultProps = { children : [] }

export default Title
