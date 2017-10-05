// @flow

import * as React from 'react'

type Props = {
  children?: React.Node
}

const Title = ({ children }: Props) => (
  <h1>
    <a href="#">{ children }</a>
    <style jsx>{`
      h1 {
        font: 18px Helvetica Neue, Helvetica,
          Arial, "Lucida Grande", sans-serif;
        font-weight: 500;
        margin-bottom: 10px;
      }

      a {
        color: #004d9e;
        text-decoration: none;
      }

      a:hover {
        background-color: #004d9e;
        color: #fff;
      }
    `}</style>
  </h1>
)

Title.defaultProps = {
  children: []
}

export default Title