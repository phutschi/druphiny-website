// @flow

import * as React from 'react'

type Props = {
  children: React.Node
}

const List = ({ children }: Props) => (
  <ul>
    { children }
    <style jsx>{`
      ul {
        margin: 0 0 20px 0;
        padding: 0;
        list-style-type: none;
      }
    `}</style>
  </ul>
)

const ListItem = ({ children }: Props) => (
  <li>
    { children }
    <style jsx>{`
      li {
        margin-bottom: 5px;
        padding-left: 20px;
        line-height: 24px;
      }
      li:before {
        content: '-';
        color: #ABABAB;
        position: absolute;
        margin-left: -20px;
      }
    `}</style>
  </li>
)

export { List, ListItem }