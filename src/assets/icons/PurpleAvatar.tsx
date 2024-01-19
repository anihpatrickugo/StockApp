import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect width={40} height={40} y={0.5} fill="#FDE3F8" rx={20} />
    <Path
      fill="#990D81"
      d="M20 20.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20 23c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5Z"
    />
  </Svg>
)
export default SvgComponent