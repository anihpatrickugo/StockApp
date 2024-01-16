import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill={props.color}
      d="M17.359 6.675 11.9 2.308c-1.066-.85-2.733-.858-3.791-.008L2.65 6.675C1.867 7.3 1.392 8.55 1.56 9.533l1.05 6.284c.241 1.408 1.55 2.516 2.975 2.516h8.833c1.408 0 2.742-1.133 2.983-2.525l1.05-6.283c.15-.975-.325-2.225-1.091-2.85ZM10.625 15a.63.63 0 0 1-.625.625.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625V15Z"
    />
  </Svg>
)
export default SvgComponent
