// @flow

import * as React from 'react'

const ProductRow = ( { children } ) => (
  <div className="product-row">
    { children }
    <style jsx>{`
    .product-row {
      width: 100%;
      -webkit-box-pack: start;
        -ms-flex-pack: start;
      justify-content: flex-start;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-flow: row wrap;
          flex-flow: row wrap;
    }
  `}</style>
  </div>
)

export default ProductRow
