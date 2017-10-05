// @flow

import * as React from 'react'

type Props = {
  children?: React.Node
}

const Snippet = ({ children }: Props) => (
  <pre>
    <code>{ children }</code>
    <style jsx>{`
      pre {
        line-height: 20px;
        margin-bottom: 20px;
        font-size: 12px;
      }

      code {
        color: #999;
      }
    `}</style>
  </pre>
)

Snippet.defaultProps = {
  children: []
}

export default Snippet