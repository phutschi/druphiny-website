// @flow

import * as React from 'react'

type Props = {
  children?: React.Node
}

const Main = ({ children }: Props) => (
  <div className="main">
    { children }
    <style jsx>{`
      .main {
        margin: 0;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }
    `}</style>
  </div>
)

Main.defaultProps = {
  children: []
}

export default Main