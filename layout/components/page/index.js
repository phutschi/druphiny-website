// @flow

import * as React from 'react'
import Link from 'next/link'

type Props = {
  children?: React.Node
}

const Page = ({ children }: Props) => (
  <div className="app">
    <div className="logo">
      <Link prefetch href="/"><a>druphiny.co</a></Link>
    </div>
    { children }
    <style jsx global>{`
      * {
        margin: 0;
      }
      body {
        min-height: 100%;
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
      }
      .app {
        padding: 25px 50px;
      }
      .logo {
        padding-bottom: 50px;
      }
      a {
        text-decoration: none;
        color: #b3c100;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        text-decoration: none;
        display: inline-block;
        padding: 0 1px;
      }
      a:hover {
        color: #fff;
        background: #b3c100;
        text-decoration: none; 
      }
      @media (max-width: 500px) {
        .app {
          padding: 25px 15px;
        }
        .logo {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </div>
)

Page.defaultProps = {
  children: []
}

export default Page