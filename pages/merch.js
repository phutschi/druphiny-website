// @flow

import * as React from 'react';

import { Main, Head, Container } from '../src/app/modules/layout/components';
import { CartHeader, ProductCard, ProductRow } from '../src/app/modules/products/components';

const Merch = () => (
  <Main>
    <Head title="druphiny > merch" />
    <Container width="100%">
      <CartHeader />
      <ProductRow>
        <ProductCard
          src="https://i.pinimg.com/originals/27/41/a4/2741a4de6ff6bb6e956a1a6552a2f2dc.png"
          price={94.95}
          name="Nice Shirt"
          description="Really Nice Shirt"
          details="Makes you look super sexy"
        />
        <ProductCard
          src="http://imagespng.com/Data/DownloadLogo/cup_PNG1996%20(1).png"
          price={37.95}
          name="Coffee Mug"
          description="Really Nice Mug"
          details="Keeps ya coffee super warm"
        />
        <ProductCard
          src="http://www.darkknightarmoury.com/images/Product/large/RC-68371.png"
          price={40.95}
          name="Yoda Sweet Bowl"
          description="Really Nice Sweet Bowl"
          details="Store the sweets until they go in your tummy"
        />
      </ProductRow>
    </Container>
  </Main>
);

export default Merch;
