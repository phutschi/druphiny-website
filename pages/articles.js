// @flow

import * as React from 'react';

import { Main, Head, Container } from '../src/app/modules/layout/components';

const Articles = () => (
  <Main white>
    <Head title="druphiny > aktuelles" />
    <Container width="100%">
      <div>Hello Container</div>
    </Container>
  </Main>
);

export default Articles;
