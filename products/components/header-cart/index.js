// @flow

import * as React from 'react'
import FontAwesome from 'react-fontawesome'

const HeaderCart = () => (
  <div className="header-cart">
    <ul>
      <FontAwesome name="shopping-cart" />
      <span className="counter" />
    </ul>
    <style jsx>{`
      .header-cart {
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
      .header-cart ul {
        padding: 1.2em 0 0.5em;
      }
      .header-cart span {
        padding: 0 0 0 0.5em;
        color: #2B2D42;
      }
      .header-cart span:nth-of-type(2) {
        cursor: pointer;
      }
    `}</style>
  </div>
)

export default HeaderCart
