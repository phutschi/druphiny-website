// @flow

import * as React from 'react'

import Main from '../layout/components/main'
import Head from '../layout/components/head'
import Container from '../layout/components/container'

import HeaderCart from '../products/components/header-cart'
import ProductRow from '../products/components/product-row'
import ProductCard from '../products/components/product-card'

const Merch = () => (
  <Main>
    <Head title="druphiny > merch" />
    <Container width="100%">
      <HeaderCart />
      <ProductRow>
        <ProductCard
          src="https://i.pinimg.com/originals/27/41/a4/2741a4de6ff6bb6e956a1a6552a2f2dc.png"
          price={94.95}
          name="Nice Shirt"
          description="Really Nice Shirt"
          details="XL"
        />
        <ProductCard
          src="https://i.pinimg.com/originals/27/41/a4/2741a4de6ff6bb6e956a1a6552a2f2dc.png"
          price={94.95}
          name="Nice Shirt"
          description="Really Nice Shirt"
          details="XL"
        />
        <ProductCard
          src="https://i.pinimg.com/originals/27/41/a4/2741a4de6ff6bb6e956a1a6552a2f2dc.png"
          price={94.95}
          name="Nice Shirt"
          description="Really Nice Shirt"
          details="XL"
        />
      </ProductRow>
    </Container>
  </Main>
)

export default Merch
