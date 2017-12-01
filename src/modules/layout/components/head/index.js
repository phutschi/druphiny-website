// @flow

import * as React from 'react';
import NextHead from 'next/head';

type Props = {
  title?        : string,
  description?  : string,
  url?          : string,
  ogImage?      : string,
  children?     : React.Node,
};

const Head = ( props: Props ) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
    <link rel="manifest" href="/static/manifest.json" />
    <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <meta name="msapplication-config" content="/static/browserconfig.xml" />
    <meta name="theme-color" content="#ffffff" />
    <meta property="og:url" content={props.url} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta name="twitter:site" content={props.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage} />
    <meta property="og:image" content={props.ogImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    {props.children}
  </NextHead>
);

Head.defaultProps = {
  title       : '',
  description : '',
  url         : '',
  ogImage     : '',
  children    : [],
};

export default Head;
