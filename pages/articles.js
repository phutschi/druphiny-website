// @flow

import * as React from 'react'

import Main from '../layout/components/main'
import Head from '../layout/components/head'
import Container from '../layout/components/container'

const Articles = () => (
  <Main white>
    <Head title="druphiny > aktuelles" />
    <Container width="100%">
      "Hello Container"
    </Container>
  </Main>
)

export default Articles
