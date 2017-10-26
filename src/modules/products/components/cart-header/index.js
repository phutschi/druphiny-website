// @flow

import * as React from 'react';
// import Fontawesome from 'UI/Layout';

const CartHeader = () => (
  <div className="cart-header">
    <ul>
      <span className="counter" />
    </ul>
    <style jsx>{`
      .cart-header {
        width: 95%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
      }
      .cart-header ul {
        padding: 1.2em 0 0.5em;
      }
      .cart-header span {
        padding: 0 0 0 0.5em;
        color: #2b2d42;
      }
      .cart-header span:nth-of-type(2) {
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default CartHeader;
