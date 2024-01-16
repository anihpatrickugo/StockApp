import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.667 9.5c0 .642.5 1.167 1.108 1.167h1.25c.534 0 .967-.459.967-1.017 0-.608-.267-.825-.658-.967l-2-.7c-.4-.141-.667-.358-.667-.966C6.667 6.458 7.1 6 7.634 6h1.25C9.5 6.008 10 6.525 10 7.167M8.333 10.708v.617M8.333 5.342v.65"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.325 14.983a6.658 6.658 0 1 0 0-13.316 6.658 6.658 0 0 0 0 13.316ZM10.816 16.567a4.12 4.12 0 0 0 3.375 1.75 4.13 4.13 0 0 0 4.125-4.125 4.134 4.134 0 0 0-1.725-3.359"
    />
  </Svg>
)
export default SvgComponent
