// @flow

import * as React from 'react'

type Props = {
  children  : React.Node,
}

const Code = ( { children }: Props ) => (
  <code>
    { children }
    <style jsx>{`
      code {
        color: #666;
        font-family: monospace;
      }
    `}</style>
  </code>
)

export default Code
