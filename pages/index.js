// @flow

import * as React from 'react'
import Link from 'next/link'

import Head from '../layout/components/head'
import Page from '../layout/components/page'
import Main from '../layout/components/main'
import Centered from '../layout/components/centered'
// import Logo from '../layout/components/logo'
import Divider from '../layout/components/divider'

import Title from '../page/components/title'
import Subtitle from '../page/components/subtitle'

const Index = () => (
  <Page>
    <Head title="Druffwienie" />
    <Main>
      <Centered>
        {/* <Logo /> */}
        <Title>Druphiny Inc.</Title>
        <Subtitle>52.506732, 13.433148</Subtitle>
        <nav>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ofchsupport">TWITTER</a>
          <Divider width="20" />
          <Link prefetch href="/articles"><a>AKTUELLES</a></Link>
          <Divider width="20" />
          <Link prefetch href="/merch"><a>MERCH</a></Link>
          <Divider width="20" />
          <Link prefetch href="/events"><a>EVENTS</a></Link>
          <Divider width="20" />
          <Link prefetch href="/monitor"><a>MONITOR</a></Link>
          <Divider width="20" />
          <Link href="/contact"><a>KONTAKT</a></Link>
          <style jsx>{`
            nav {
              margin-top: 60px;
            }
          `}</style>
        </nav>
      </Centered>
    </Main>
  </Page>
)

export default Index
