import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const AnalyticsIcon = (props: any) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width}
    height={props?.height}
    fill="none"
    {...props}
  >
    <Path
      stroke={props?.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18 18.425H8.833c-2.75 0-4.125 0-4.979-.854C3 16.716 3 15.34 3 12.59V3.425m3.333.833h.834m-.834 2.5h3.334"
    />
    <Path
      stroke={props?.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.667 17.591c.891-1.622 2.102-5.817 4.421-5.817 1.604 0 2.019 2.044 3.59 2.044 2.703 0 2.311-4.56 5.322-4.56"
    />
  </Svg>
)
export default AnalyticsIcon;
