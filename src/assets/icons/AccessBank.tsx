import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle cx={20} cy={20} r={19.5} fill="#fff" stroke="#D1D1D1" />
    <Path
      fill="#F57E20"
      d="m19.406 13.265 7.092 7.103-6.12 6.153-6.12-6.153 2.946-3.048h-1.201L13 20.368l7.378 7.419 7.35-7.42L19.433 12l-.028 1.265Z"
    />
    <Path
      fill="#F57E20"
      d="m19.434 17.348-1.286-.028-2.946 3.048 5.176 5.204 5.176-5.204-6.12-6.183-.028 1.208 4.947 4.975-3.975 3.997-3.946-3.997 3.003-3.02Z"
    />
    <Path
      fill="#F57E20"
      d="m20.35 18.585 1.801 1.783-1.801 1.783-1.802-1.783 1.802-1.783Zm3.03 1.783-3.03-3.048-3.032 3.048 3.032 3.048 3.03-3.048Z"
    />
  </Svg>
)
export default SvgComponent

