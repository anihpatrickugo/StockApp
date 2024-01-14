import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#EDC55E"
        fillOpacity={0.05}
        d="M80 160c44.183 0 80-35.817 80-80S124.183 0 80 0 0 35.817 0 80s35.817 80 80 80Z"
      />
    </G>
    <G clipPath="url(#b)">
      <Path
        fill="#EDC55E"
        fillOpacity={0.1}
        d="M80 155c41.421 0 75-33.579 75-75S121.421 5 80 5 5 38.579 5 80s33.579 75 75 75Z"
      />
    </G>
    <G clipPath="url(#c)">
      <Path
        fill="#EDC55E"
        fillOpacity={0.15}
        d="M80 145c35.899 0 65-29.101 65-65 0-35.898-29.101-65-65-65-35.898 0-65 29.102-65 65 0 35.899 29.102 65 65 65Z"
      />
    </G>
    <G clipPath="url(#d)">
      <Path
        fill="#E1AE3C"
        d="M80 130c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50Z"
      />
      <Path
        fill="#fff"
        stroke="#fff"
        strokeWidth={4.889}
        d="M100.534 65.229a2.13 2.13 0 0 0-2.992 0L72.2 90.328l-9.742-9.648a2.13 2.13 0 0 0-2.992 0 2.08 2.08 0 0 0 0 2.963L70.703 94.77a2.13 2.13 0 0 0 2.991 0l26.84-26.58a2.08 2.08 0 0 0 0-2.962Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h160v160H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill="#fff" d="M5 5h150v150H5z" />
      </ClipPath>
      <ClipPath id="c">
        <Path fill="#fff" d="M15 15h130v130H15z" />
      </ClipPath>
      <ClipPath id="d">
        <Path fill="#fff" d="M30 30h100v100H30z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
