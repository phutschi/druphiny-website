// @flow

import * as React from 'react';
import Link from 'next/link';

import { Title, Subtitle } from 'UI/Page';
import { Main, Head, Introduction, Logo, Footer } from 'UI/Layout';

const Index = () => {
  return (
    <Main>
      <Head title="druphiny.co" />
      <Introduction>
        <Logo height={150} />
        <Title>druphiny</Title>
        <Subtitle>
          <Link href="https://www.google.de/maps/place/52%C2%B030'11.4%22N+13%C2%B026'25.6%22E/@52.5031822,13.4382597,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x0:0x0!2zNTDCsDA3JzI0LjAiTiAxM8KwMTUnMTYuNCJF!3b1!8m2!3d50.123321!4d13.254561!3m5!1s0x0:0x0!7e2!8m2!3d52.5031787!4d13.4404426">
            <a target="_blank">52.503179, 13.440443</a>
          </Link>
        </Subtitle>
      </Introduction>
      <Footer />
    </Main>
  );
};

export default Index;
