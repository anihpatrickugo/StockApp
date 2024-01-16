import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect width={64} height={64} fill="#FCF5E3" rx={24} />
    <Path
      fill="#E1AE3C"
      d="M41.08 24.333h1.813c-.253-.36-.52-.693-.8-1.026l-1.013 1.026ZM40.694 21.893c-.334-.28-.667-.546-1.027-.8v1.814l1.027-1.014Z"
    />
    <Path
      fill="#E1AE3C"
      d="m42.107 23.307 3.933-3.934a1.006 1.006 0 0 0 0-1.413 1.006 1.006 0 0 0-1.413 0l-3.934 3.933c.507.44.974.92 1.414 1.414ZM39.666 20c0-.547-.453-1-1-1a.995.995 0 0 0-.986.947c.693.333 1.36.706 1.986 1.146V20ZM45 25.333c0-.546-.453-1-1-1h-1.106c.44.627.826 1.294 1.146 1.987a.997.997 0 0 0 .96-.987ZM33 35.667h.4c.52 0 .933-.467.933-1.04 0-.72-.2-.827-.653-.987L33 33.4v2.267Z"
    />
    <Path
      fill="#E1AE3C"
      d="M44.054 26.32c-.014 0-.027.013-.054.013h-5.333c-.133 0-.253-.026-.387-.08a1.043 1.043 0 0 1-.546-.546c-.04-.12-.067-.24-.067-.374V20c0-.013.013-.027.013-.053a13.33 13.33 0 0 0-5.68-1.28c-7.36 0-13.333 5.973-13.333 13.333S24.64 45.333 32 45.333 45.334 39.36 45.334 32a13.33 13.33 0 0 0-1.28-5.68Zm-9.72 5.44c.853.293 2 .92 2 2.88 0 1.667-1.32 3.04-2.934 3.04H33v.333c0 .547-.453 1-1 1-.546 0-1-.453-1-1v-.333h-.106c-1.774 0-3.227-1.493-3.227-3.333 0-.56.453-1.014 1-1.014.547 0 1 .454 1 1 0 .734.547 1.334 1.227 1.334H31v-2.96l-1.333-.467c-.853-.293-2-.92-2-2.88 0-1.667 1.32-3.04 2.933-3.04h.4V26c0-.547.454-1 1-1 .547 0 1 .453 1 1v.333h.107c1.773 0 3.227 1.494 3.227 3.334 0 .546-.454 1-1 1-.547 0-1-.454-1-1 0-.734-.547-1.334-1.227-1.334H33v2.96l1.334.467Z"
    />
    <Path
      fill="#E1AE3C"
      d="M29.667 29.373c0 .72.2.827.653.987l.68.24v-2.267h-.4c-.506 0-.933.467-.933 1.04Z"
    />
  </Svg>
)
export default SvgComponent
