// @flow

import * as React from 'react';

import { Main, Head, Container } from '../modules/layout/components';
import { HorizontalList, HorizontalListItem } from '../modules/stats/components';

const Monitor = () => (
  <Main>
    <Head title="druphiny > monitor" />
    <Container>
      <HorizontalList region="Chuck Norris">
        <HorizontalListItem metric="Humidity" value="70%" />
        <HorizontalListItem metric="Temp" value="28˚C" />
        <HorizontalListItem metric="Light" value="1420lx" />
        <HorizontalListItem metric="Power" value="430W" />
      </HorizontalList>
      <HorizontalList region="Kitt">
        <HorizontalListItem metric="Humidity" value="72%" />
        <HorizontalListItem metric="Temp" value="27.5˚C" />
        <HorizontalListItem metric="Light" value="1380lx" />
        <HorizontalListItem metric="Power" value="425W" />
      </HorizontalList>
      <HorizontalList region="Nyan">
        <HorizontalListItem metric="Humidity" value="69%" />
        <HorizontalListItem metric="Temperature" value="26.5˚C" />
        <HorizontalListItem metric="Light" value="1580lx" />
        <HorizontalListItem metric="Power" value="455W" />
      </HorizontalList>
    </Container>
  </Main>
);

export default Monitor;
