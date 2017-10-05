// @flow

import * as React from 'react'

type Props = {
  children?: React.Node
}

const P = ( { children }: Props ) => (
  <p>
    { children }
    <style jsx>{`
      p {
        font-size: 14px;
        line-height: 24px;
        margin-bottom: 20px;
      }
    `}</style>
  </p>
)

P.defaultProps = { children : [] }

export default P
