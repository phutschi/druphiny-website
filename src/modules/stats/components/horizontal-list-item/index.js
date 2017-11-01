// @flow

import * as React from 'react';

type HorizontalListItemProps = {
  metric: string,
  value: string,
};

const HorizontalListItem = ( { metric, value }: HorizontalListItemProps ) => (
  <div className="metric">
    <div className="label">{metric.toUpperCase()}</div>
    <div className="value">{value}</div>
    <style jsx>{`
      .metric {
        display: inline-block;
        width: 25%;
        padding-bottom: 15px;
      }

      .label {
        color: #50e3c2;
        font-size: 12px;
        margin-bottom: 5px;
      }

      .value {
        font-size: 24px;
      }

      @media screen and (max-width: 700px) {
        .metric {
          padding-bottom: 20px;
          width: 33%;
        }
      }
    `}</style>
  </div>
);

export default HorizontalListItem;
