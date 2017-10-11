// @flow

import * as React from 'react'
import Link from 'next/link'

type Props = {
  white?    : boolean,
  children? : React.Node
}

const Main = ( { children, white }: Props ) => (
  <div className={'main ' + ( white ? "white" : null )}>
    <div className="return">
      <Link prefetch href="/"><a>druphiny.co</a></Link>
    </div>
    { children }
    <style jsx global>{`
      html,
      body {
        background: black;
      }

      a {
        color: white;
        display: inline-block;
        margin: 0 20px;
        position: relative;
        text-decoration: none;
      }

      a:after {
        content: "";
        height: 1px;
        background: white;
        position: absolute;
        pointer-events: none;
        bottom: -5px;
        left: 0;
        right: 0;
        opacity: 0;
        transform: scale(0, 1);
        transition: all .2s;
      }

      a:hover:after {
        opacity: 1;
        transform: scale(1, 1);
      }

      .main {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          -webkit-animation: fadein 2s;
             -moz-animation: fadein 2s;
              -ms-animation: fadein 2s;
               -o-animation: fadein 2s;
                  animation: fadein 2s;
      }

      .main.white {
        color: black;
        background: white;
      }

      .main.white a:after {
        background: black;
      }

      .main.white .return a:hover {
        color: black;
      }

      .return {
        z-index: 2;
        font-size: 13px;
        top: 25px;
        left: 50px;
        position: absolute;
      }

      @media only screen and (max-width: 640px) {
        .return {
          left: 25px;
        }
      }

      .return a {
        color: #999;
        margin: 0;
        transition: all .2s;
      }

      .return a:hover {
        color: white
      }

      @keyframes fadein {
        from  { opacity: 0; }
        to    { opacity: 1; }
      }

      @-moz-keyframes fadein {
        from  { opacity: 0; }
        to    { opacity: 1; }
      }

      @-webkit-keyframes fadein {
        from  { opacity: 0; }
        to    { opacity: 1; }
      }
    `}</style>
  </div>
)

Main.defaultProps = {
  white    : false,
  children : [],
}

export default Main
