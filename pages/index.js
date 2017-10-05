// @flow

import * as React from 'react'
import Link from "next/link"

import Head from '../layout/components/head'
import Page from '../layout/components/page'
import Main from '../layout/components/main'
import Centered from '../layout/components/centered'
import Logo from '../layout/components/logo'

import Title from '../page/components/title'

export default () => (
  <Page>
    <Head title="Druffwienie" />
    <Main>
      <Centered>
        {/* <Logo /> */}
        <Title>Druphiny Inc.</Title>
        <nav>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ofchsupport">TWITTER</a>
          <Link prefetch href="/articles"><a>AKTUELLES</a></Link>
          <Link prefetch href="/merch"><a>MERCH</a></Link>
          <Link prefetch href="/events"><a>EVENTS</a></Link>
          <Link prefetch href="/monitor"><a>MONITOR</a></Link>
          <Link href="/contact"><a>KONTAKT</a></Link>
          <style jsx>{`
            nav {
              margin-top: 20px;
            }
            nav a {
              margin: 0 12px;
            }
          `}</style>
        </nav>
      </Centered>
    </Main>
  </Page>
)