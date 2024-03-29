import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect width={64} height={64} fill="#FCF5E3" rx={24} />
    <Path
      fill="#E1AE3C"
      d="M44 46.333H20c-.547 0-1-.453-1-1 0-.546.453-1 1-1h24c.547 0 1 .454 1 1 0 .547-.453 1-1 1ZM23.467 27.173h-2.134c-.733 0-1.333.6-1.333 1.334V40c0 .733.6 1.333 1.333 1.333h2.134c.733 0 1.333-.6 1.333-1.333V28.507c0-.747-.6-1.334-1.333-1.334ZM33.066 22.92h-2.133c-.733 0-1.333.6-1.333 1.333V40c0 .733.6 1.333 1.333 1.333h2.133c.734 0 1.334-.6 1.334-1.333V24.253c0-.733-.6-1.333-1.334-1.333ZM42.667 18.667h-2.134c-.733 0-1.333.6-1.333 1.333v20c0 .733.6 1.333 1.333 1.333h2.134c.733 0 1.333-.6 1.333-1.333V20c0-.733-.6-1.333-1.333-1.333Z"
    />
  </Svg>
)
export default SvgComponent

