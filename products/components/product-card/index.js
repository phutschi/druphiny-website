// @flow

import * as React from 'react';

type Props = {
  src: string,
  description?: string,
  name: string,
  details: string,
  price: number,
};

const ProductCard = ( { src, description, name, details, price }: Props ) => (
  <div className="product">
    <div className="product-inner">
      <img src={src} alt={description} width="300" />
      <p>{name}</p>
      <p>{details}</p>
      <p>{price} €</p>
      <button>Add to basket</button>
    </div>
    <div className="product_overlay">
      <h2>Added to basket</h2>
      <i className="fa fa-check" />
    </div>
    <style jsx>{`
      .product {
        width: 15em;
        height: auto;
        padding: 2em;
        margin: 1em;
        overflow: scroll;
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: auto;
        flex: auto;
      }
      .product img {
        max-width: 100%;
        height: auto !important;
        text-align: center;
      }
      .product-inner {
        padding-bottom: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-flow: column wrap;
        flex-flow: column wrap;
      }
      .product-inner p {
        text-align: center;
        color: rgba(255, 255, 255, 0.9);
      }
      .product-inner button {
        border: 1px solid rgba(255, 255, 255, 0.5);
        color: #fff;
        border-radius: 3px;
        padding: 1em 3em 1em 4.5em;
        margin: 1em 0 0 0;
        background: none;
        bottom: 5px;
        position: absolute;
        cursor: pointer;
        -webkit-transition: background ease-in 0.25s;
        transition: background ease-in 0.25s;
      }
      .product-inner button:hover {
        background: white;
        color: #2b2d42;
      }
      .product-inner button:before {
        font-family: Fontawesome;
        font-size: 10px;
        content: '\f09d';
        color: #fff;
        position: absolute;
        margin: 1px -2em;
      }
      .product-inner button:hover:before {
        color: #2b2d42;
      }
      .product_overlay {
        background: rgba(255, 255, 255, 0.9);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        -webkit-transform: translateY(-500px);
        transform: translateY(-500px);
        opacity: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: column wrap;
        flex-flow: column wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .product_overlay h2 {
        color: rgba(43, 45, 66, 0.7);
        font-size: 1.2em;
        margin: 1em 0;
      }
      .product_overlay i {
        color: rgba(43, 45, 66, 0.7);
        font-size: 1.5em;
      }
    `}</style>
  </div>
);

ProductCard.defaultProps = { description : 'Nice Product Dude' };

export default ProductCard;
