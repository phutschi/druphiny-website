// @flow

import * as React from 'react'
import YouTube from 'react-youtube'

type Props = {
  opts: any
}

const Youtube = (props: Props) => (
  <div>
    <YouTube {...withDefault(props)} />
    <style jsx>{`
      div {
        margin: 15px 0;
      }
    `}</style>
  </div>
)

const withDefault = (props) => (
  Object.assign({}, props, {
    opts: Object.assign({}, props.opts || {}, {
      width: '100%'
    })
  })
)

export default Youtube