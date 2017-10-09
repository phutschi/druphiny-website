// @flow

import * as React from 'react'

import Main from '../layout/components/main'
import Head from '../layout/components/head'
import Container from '../layout/components/container'

import HorizontalList, { HorizontalListItem } from '../stats/components/horizontal-list'

const Monitor = () => (
  <Main>
    <Head title="druphiny > monitor" />
    <Container>
      <HorizontalList title="GREENHOUSE 1">
        <HorizontalListItem
          metric="Humidity"
          value="70%"
        />
        <HorizontalListItem
          metric="Temperature"
          value="28˚C"
        />
        <HorizontalListItem
          metric="Light"
          value="1420lx"
        />
        <HorizontalListItem
          metric="Power"
          value="430W"
        />
      </HorizontalList>
    </Container>
  </Main>
)

export default Monitor
