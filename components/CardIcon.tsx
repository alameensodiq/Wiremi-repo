import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const CardIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width}
    height={props?.height}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={props.fill || "#989AAF"}
        d="M15.125 2.425h-7.5A3.38 3.38 0 0 0 4.25 5.8v5.25a3.38 3.38 0 0 0 3.375 3.375h7.5A3.38 3.38 0 0 0 18.5 11.05V5.8a3.38 3.38 0 0 0-3.375-3.375Zm-7.5.75h7.5c1.32 0 2.4.982 2.587 2.25H5.037c.188-1.268 1.268-2.25 2.588-2.25Zm7.5 10.5h-7.5A2.628 2.628 0 0 1 5 11.05V6.175h12.75v4.875a2.628 2.628 0 0 1-2.625 2.625Zm-1.215 2.377c.135.158.12.39-.03.533a3.35 3.35 0 0 1-2.235.84h-7.77A3.38 3.38 0 0 1 .5 14.05V8.395c0-1.2.645-2.325 1.688-2.925a.37.37 0 0 1 .51.135.37.37 0 0 1-.135.51A2.633 2.633 0 0 0 1.25 8.387v5.655a2.628 2.628 0 0 0 2.625 2.625h7.762a2.6 2.6 0 0 0 1.733-.66.386.386 0 0 1 .533.03l.007.015Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5.925h18v18H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default CardIcon;
