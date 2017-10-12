// @flow

import * as React from 'react';

type HorizontalListProps = {
  region: string,
  children?: React.Node,
};

const HorizontalList = ( { region, children }: HorizontalListProps ) => (
  <div className="stats">
    <div className="list">
      <div className="region">
        <div className="region-label">REGION</div>
        <div className="region-value">{region.toUpperCase()}</div>
      </div>
      <div className="metrics">{children}</div>
    </div>
    <style jsx>{`
      .stats {
        padding: 0 15px;
        bottom: 76px;
        width: 100%;
      }

      .list {
        -webkit-animation-duration: 0.3s;
        animation-duration: 0.3s;
        -webkit-animation-name: fadeIndatajsx2871209408;
        animation-name: fadeIndatajsx2871209408;
        -webkit-animation-timing-function: ease;
        animation-timing-function: ease;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        text-align: left;
        padding-bottom: 24px;
        margin-bottom: 24px;
      }

      .region {
        border-right: 1px solid #333;
        margin-right: 30px;
        display: inline-block;
        width: 33%;
      }

      .metrics {
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }

      .region-label {
        color: #50e3c2;
        font-size: 12px;
        margin-bottom: 5px;
      }

      .region-value {
        font-size: 24px;
      }

      .region-value:after {
        content: '';
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 100%;
        background: #50e3c2;
        margin: 0 10px 5px;
      }

      @media screen and (max-width: 700px) {
        .stats {
          padding: 0;
          position: static;
          width: 100%;
        }

        .list {
          display: block;
        }

        .region {
          border-bottom: 1px solid #333;
          border-right: none;
          margin-right: 0;
          padding-bottom: 25px;
          padding-top: 0;
          width: 100%;
        }

        .metrics {
          display: inline-block;
          padding-top: 25px;
          width: 100%;
        }
      }
    `}</style>
  </div>
);

HorizontalList.defaultProps = { children : [] };

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

export default HorizontalList;
export { HorizontalListItem };
