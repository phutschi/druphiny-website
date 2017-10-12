// @flow

import * as React from 'react';

type Props = {
  by: string,
  children?: React.Node,
};

const Quote = ( { by, children }: Props ) => (
  <blockquote>
    <p>
      {children}
      <br />
      {by && `– ${by}`}
    </p>
    <style jsx>{`
      blockquote {
        margin: 30px 0;
        color: #9b9b9b;
        font-style: oblique;
        font-size: 12px;
      }

      p {
        line-height: 24px;
      }
    `}</style>
  </blockquote>
);

Quote.defaultProps = {
  by       : 'Druphiny',
  children : [],
};

export default Quote;
