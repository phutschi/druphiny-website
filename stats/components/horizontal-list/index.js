// @flow

import * as React from 'react'

type HorizontalListProps = {
  title : string,
  children?: React.Node,
}

const HorizontalList = ( { title, children }: HorizontalListProps ) => (
  <div className="stats">
    <h2>{title}</h2>
    { children }
    <style jsx>{`
      .stats {
        margin-bottom: 2rem;
      }
      .stats h2 {
        margin-top: 0;
        color: #5f5f5f;
      }
      .stats h2:after {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 100%
        background: #50e3c2;
        margin: 0 10px 4px;
        display: inline-block;
      }
    `}</style>
  </div>
)

HorizontalList.defaultProps = { children : [] }

type HorizontalListItemProps = {
  metric  : string,
  value   : string,
}

const HorizontalListItem = ( { metric, value }: HorizontalListItemProps ) => (
  <div className="stat">
    <h4>{metric}</h4>
    <p>{value}</p>
    <style jsx>{`
      .stat {
        width: 50%;
        display: inline-block;
        padding-top: 5px;        
      }
      @media (min-width: 640px) {
        .stat {
          width: 33%;
        }
      }
      @media (min-width: 1000px) {
        .stat {
          width: 25%;
        }
      }
      .stat h4 {
        margin-bottom: 0.1rem;
        margin-top: 0;
        color: #9c9c9c;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 0.65rem;
      }
      @media (min-width: 640px) {
        .stat h4 {
          font-size: 0.7rem;
        }
      }
      .stat p {
        line-height: 1;
        font-weight: 800;
        color: #14ff55;
        margin: 0;
        font-size: 2.25rem;
      }
      @media (min-width: 640px) {
        .stat p {
          font-size: 3rem;
        }
      }
    `}</style>
  </div>
)

export default HorizontalList
export { HorizontalListItem }
