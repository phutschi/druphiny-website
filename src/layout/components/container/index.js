// @flow

import * as React from 'react';

type Props = {
  width: string,
  children?: React.Node,
};

const Container = ( { children, width }: Props ) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        max-width: ${width};
        margin: 70px 10%;
      }
    `}</style>
  </div>
);

Container.defaultProps = {
  children : [],
  width    : '80%',
};

export default Container;
