// @flow

import * as React from 'react'

type Props = {
  children: React.Node,
}

export default ({ children }: Props) => (
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