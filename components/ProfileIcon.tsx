import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const ProfileIcon = (props: any) => (
  <Svg
  xmlns="http://www.w3.org/2000/svg"
  width={props?.width}
  height={props?.height}
  fill="none"
  {...props}
>
  <Path
     stroke={props?.color}
    strokeLinejoin="round"
    d="M3.833 15.927a3.333 3.333 0 0 1 3.334-3.333h6.667a3.333 3.333 0 0 1 3.333 3.333 1.667 1.667 0 0 1-1.667 1.667h-10a1.666 1.666 0 0 1-1.667-1.667Z"
  />
  <Path
     stroke={props?.color}
    d="M10.5 9.26a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</Svg>
)
export default ProfileIcon;
