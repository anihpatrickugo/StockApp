import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.5 18.333h15M4.667 6.983H3.333a.836.836 0 0 0-.833.834V15c0 .458.375.833.833.833h1.334A.836.836 0 0 0 5.5 15V7.817a.836.836 0 0 0-.833-.834ZM10.667 4.325H9.333a.836.836 0 0 0-.833.833V15c0 .458.375.833.833.833h1.334A.836.836 0 0 0 11.5 15V5.158a.836.836 0 0 0-.833-.833ZM16.667 1.667h-1.334a.836.836 0 0 0-.833.833V15c0 .458.375.833.833.833h1.334A.836.836 0 0 0 17.5 15V2.5a.836.836 0 0 0-.833-.833Z"
    />
  </Svg>
)
export default SvgComponent