import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#4D4D4D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 4.5v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.742a2 2 0 0 0-.602-1.43L16.083 3.07a2 2 0 0 0-1.398-.57H10a2 2 0 0 0-2 2Z"
    />
    <Path
      stroke="#4D4D4D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 18.5v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h2"
    />
  </Svg>
)
export default SvgComponent
