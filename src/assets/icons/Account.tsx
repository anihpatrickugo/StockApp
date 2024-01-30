import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect width={48} height={48} fill={props.color} rx={24} />
    <Path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M24 24a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM32.59 34c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"
    />
  </Svg>
)
export default SvgComponent
