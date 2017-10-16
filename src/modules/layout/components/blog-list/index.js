// @flow

import * as React from 'react';

type Props = {
  children?: React.Node,
};

const BlogList = ( { children }: Props ) => <div>{children}</div>;

BlogList.defaultProps = { children : [] };

export default BlogList
