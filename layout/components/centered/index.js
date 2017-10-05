// @flow

import * as React from 'react'

type Props = {
  children?: React.Node
}

const Centered = ( { children }: Props ) => (
  <div className="centered">
    { children }
    <style jsx global>{`
      .centered {
        text-align: center;
      }
    `}</style>
  </div>
)

Centered.defaultProps = { children : [] }

export default Centered
