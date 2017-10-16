// @flow

import * as React from 'react';
import Link from 'next/link';

const Footer = () => (
  <div className="footer">
    <div className="left">
      © 2017 —{' '}
      <Link href="mailto:hi@druphiny.co">
        <a>hi@druphiny.co</a>
      </Link>
    </div>
    <div className="right">
      {/* <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ofchsupport">TWITTER</a> */}
      <Link href="/articles">
        <a>AKTUELLES</a>
      </Link>
      <Link href="/merch">
        <a>MERCH</a>
      </Link>
      <Link href="/events">
        <a>EVENTS</a>
      </Link>
      <div className="monitor">
        <Link prefetch href="/monitor">
          <a>MONITOR</a>
        </Link>
      </div>
      {/* <Link href="/contact"><a>KONTAKT</a></Link> */}
    </div>
    <style jsx>{`
      .footer {
        color: #999;
        bottom: 20px;
        font-size: 13px;
        position: absolute;
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
      }

      .footer a {
        color: #999;
        margin: 0;
        transition: all 0.2s;
      }

      .footer a:last-child {
        margin-right: 0;
      }

      .footer a:hover {
        color: white;
      }

      .monitor {
        display: inline-block;
      }

      .monitor:after {
        content: '';
        width: 7px;
        height: 7px;
        display: inline-block;
        border-radius: 100%;
        background: #50e3c2;
        margin: 0 10px 1px;
      }

      .left {
        display: inline-block;
        margin-bottom: 30px;
        margin-left: 0;
        margin-right: 30px;
      }

      .right {
        display: inline-block;
      }

      .right a {
        display: inline-block;
        margin-right: 30px;
      }

      @media only screen and (max-width: 40em) {
        .left {
          display: block;
          margin-right: 0;
        }
        .right {
          display: block;
        }
        .right a:last-child {
          margin-right: 0;
        }
      }
    `}</style>
  </div>
);

export default Footer;
