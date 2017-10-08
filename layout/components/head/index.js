// @flow

import * as React from 'react'
import NextHead from 'next/head'

type Props = {
  title?        : string,
  description?  : string,
  url?          : string,
  ogImage?      : string,
}

const Head = ( props: Props ) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
    <link rel="manifest" href="/static/manifest.json" />
    <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
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
  </NextHead>
)

Head.defaultProps = {
  title       : '',
  description : '',
  url         : '',
  ogImage     : '',
}

export default Head
