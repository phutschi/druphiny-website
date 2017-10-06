// @flow

import * as React from 'react'

type Props = {
  children?  : React.Node,
}

const Introduction = ( { children }: Props ) => (
  <div className="introduction">
    { children }
    <style jsx>{`
      .introduction {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        padding-bottom: 20px; 
      }
    `}</style>
  </div>
)

Introduction.defaultProps = { children : [] }

export default Introduction
