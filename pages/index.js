// @flow

import * as React from 'react'
import Link from 'next/link'

import Title from '../page/components/title'
import Subtitle from '../page/components/subtitle'

import Main from '../layout/components/main'
import Head from '../layout/components/head'
import Introduction from '../layout/components/introduction'
import Logo from '../layout/components/logo'
import Footer from '../layout/components/footer'

const Index = () => (
  <Main>
    <Head title="druphiny.co" />
    <Introduction>
      <Logo height={150} />
      <Title>druphiny Inc.</Title>
      <Subtitle>50.123321, 13.254561</Subtitle>
    </Introduction>
    <Footer />
  </Main>
)

export default Index
