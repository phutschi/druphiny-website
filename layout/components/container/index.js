// @flow

import * as React from 'react'

type Props = {
  children?: React.Node
}

const Container = ( { children }: Props ) => (
  <div className="container">
    { children }
    <style jsx>{`
      .container {
        width: 80%;
        max-width: 900px;
        margin: 70px 10%;
      }
    `}</style>
  </div>
)

Container.defaultProps = { children : [] }

export default Container
