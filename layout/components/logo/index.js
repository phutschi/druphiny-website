import * as React from 'react'

type Props = {
  height?: number,
}

const Logo = ( { height }: Props ) => (
  <div className="logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="793.7007866666665" height="1122.5196799999999">
      <g>
        <g externalResourcesRequired="false" id="layer1">
          <path
            transform="translate(33 7)"
            fill="#F62A00"
            stroke="#F62A00"
            strokeWidth="18.700001"
            strokeMiterlimit="4"
            id="path7"
            d="m259.243011,318.145996c-93.192902,0 -168.827271,68.619019 -168.827271,153.166992c0,172.001038 191.243256,217.098999 321.562256,387.140991c123.208038,-168.998962 321.563019,-220.630981 321.563019,-387.140991c0,-84.547974 -75.63501,-153.166992 -168.827026,-153.166992c-67.597992,0 -125.778992,36.212006 -152.735992,88.309998c-26.957001,-52.097992 -85.136993,-88.309998 -152.734985,-88.309998z"
          />
        </g>
      </g>
    </svg>
  </div>
)

Logo.defaultProps = { height : 48 }

export default Logo
