// @flow

import * as React from 'react'

type Props = {
  children?: React.Node
}

const Tldr = ( { children }: Props ) => (
  <div className="wrap">
    <b>tl;DR:</b>
    {' '}
    <div className="content">{ children }</div>
    <style jsx>{`
      .wrap {
        margin-bottom: 25px;
        padding: 15px;
        background: #eee;
        line-height: 20px;
      }

      .content {
        display: inline;
        font-style: oblique;
      }
    `}</style>
  </div>
)


Tldr.defaultProps = { children : [] }

export default Tldr
