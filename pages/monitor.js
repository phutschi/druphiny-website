// @flow

import * as React from 'react'
import Particles from 'react-particles-js'

import Main from '../layout/components/main'
import Head from '../layout/components/head'
import Container from '../layout/components/container'

import HorizontalList, { HorizontalListItem } from '../stats/components/horizontal-list'

const params = {
  particles : {
    number : {value : 20,},
  },
}

const Monitor = () => (
  <Main>
    <Head title="druphiny > monitor" />
    <Container width="100%">
      <Particles
        style={{
          top      : 0,
          left     : 0,
          position : 'absolute',
        }}
        params={{
          particles : {
            shape  : { type : 'star' },
            number : {
              density : {
                enable     : true,
                value_area : 7500,
              },
              value : 200,
            },
            line_linked : {
              width   : 0.2,
              opacity : 1,
            },
          },
        }}
      />
      <HorizontalList region="Sensor 1">
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
