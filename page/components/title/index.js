// @flow

import * as React from 'react'

type Props = {
  children?: React.Node
}

const Title = ( { children }: Props ) => (
  <div className="title">
    { children }
    <style jsx>{`
      .title {
        display: block;
        margin-bottom: 20px;
        text-align: center;
        font-weight: normal;
        font-size: 18px;
      }
    `}</style>
  </div>
)

Title.defaultProps = { children : [] }

export default Title
