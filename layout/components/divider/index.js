// @flow

import * as React from 'react'

type Props = {
  width: string
}

const Divider = ( { width }: Props ) => (
  <div className="divider">
    <style jsx global>{`
      .divider {
        width: ${width}px;
        display: inline-block;
        border-bottom: 2px solid #00293c;
        opacity: .6;
        margin: 0 15px 3px;
      }
    `}</style>
  </div>
)

Divider.defaultProps = { children : [] }

export default Divider
