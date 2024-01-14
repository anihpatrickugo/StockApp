import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Mask
        id="b"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          d="M23.557 9.818H12.375v4.637h6.436c-.6 2.945-3.109 4.636-6.436 4.636A7.077 7.077 0 0 1 5.285 12a7.077 7.077 0 0 1 7.09-7.09c1.69 0 3.218.6 4.418 1.58L20.284 3c-2.127-1.855-4.854-3-7.909-3-6.655 0-12 5.345-12 12s5.345 12 12 12c6 0 11.455-4.364 11.455-12 0-.71-.11-1.473-.273-2.182Z"
        />
      </Mask>
      <G mask="url(#b)">
        <Path fill="#FBBC05" d="M-.716 19.09V4.91L8.557 12l-9.273 7.09Z" />
      </G>
      <Mask
        id="c"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          d="M23.557 9.818H12.375v4.637h6.436c-.6 2.945-3.109 4.636-6.436 4.636A7.077 7.077 0 0 1 5.285 12a7.077 7.077 0 0 1 7.09-7.09c1.69 0 3.218.6 4.418 1.58L20.284 3c-2.127-1.855-4.854-3-7.909-3-6.655 0-12 5.345-12 12s5.345 12 12 12c6 0 11.455-4.364 11.455-12 0-.71-.11-1.473-.273-2.182Z"
        />
      </Mask>
      <G mask="url(#c)">
        <Path
          fill="#EA4335"
          d="M-.716 4.91 8.557 12l3.818-3.327 13.091-2.128V-1.09H-.716v6Z"
        />
      </G>
      <Mask
        id="d"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          d="M23.557 9.818H12.375v4.637h6.436c-.6 2.945-3.109 4.636-6.436 4.636A7.077 7.077 0 0 1 5.285 12a7.077 7.077 0 0 1 7.09-7.09c1.69 0 3.218.6 4.418 1.58L20.284 3c-2.127-1.855-4.854-3-7.909-3-6.655 0-12 5.345-12 12s5.345 12 12 12c6 0 11.455-4.364 11.455-12 0-.71-.11-1.473-.273-2.182Z"
        />
      </Mask>
      <G mask="url(#d)">
        <Path
          fill="#34A853"
          d="M-.716 19.09 15.648 6.546l4.309.546 5.509-8.182v26.182H-.716v-6Z"
        />
      </G>
      <Mask
        id="e"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <Path
          fill="#fff"
          d="M23.557 9.818H12.375v4.637h6.436c-.6 2.945-3.109 4.636-6.436 4.636A7.077 7.077 0 0 1 5.285 12a7.077 7.077 0 0 1 7.09-7.09c1.69 0 3.218.6 4.418 1.58L20.284 3c-2.127-1.855-4.854-3-7.909-3-6.655 0-12 5.345-12 12s5.345 12 12 12c6 0 11.455-4.364 11.455-12 0-.71-.11-1.473-.273-2.182Z"
        />
      </Mask>
      <G mask="url(#e)">
        <Path
          fill="#4285F4"
          d="M25.466 25.09 8.556 12l-2.181-1.636 19.09-5.455v20.182Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
