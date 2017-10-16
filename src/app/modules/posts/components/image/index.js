// @flow

import * as React from 'react';

type ImageProps = {
  width?: string,
  src: string,
  alt?: string,
};

const Image = ( props: ImageProps ) => (
  <div>
    <img width={props.width} src={props.src} alt={props.alt} />
    <style jsx>{`
      img {
        max-width: 100%;
        margin: 15px 0;
      }
    `}</style>
  </div>
);

Image.defaultProps = {
  width : '',
  alt   : '',
};

export default Image;
