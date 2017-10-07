// @flow

import * as React from 'react'

type Props = {
  children  : React.Node
}

const Subtitle = ( { children }: Props ) => (
  <div className="subtitle">
    { children }
    <style jsx>{`
      .subtitle {
        font-size: 12px;
        text-align: center;
        text-transform: lowercase;
        // font-family: Operator Mono;
        font-style: italic;
        letter-spacing: 1px;
      }
    `}</style>
  </div>
)

Subtitle.defaultPros = { children : [] }

export default Subtitle
