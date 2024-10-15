import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props?.width}
    height={props?.height}
    fill="none"
    {...props}
  >
    <Path
       fill={props.fill || "#989AAF"}
    //   stroke="#989AAF"
      d="M17.5 17.25V9.918l.854.853.182.183L17.5 17.25Zm0 0h.5m-.5 0h.5m0 0h1.25a.125.125 0 1 1 0 .25H1.75a.125.125 0 0 1 0-.25H3.5V9.929l-.851.84-.183.18-.003.003a.125.125 0 1 1-.177-.177l7.684-7.68a.75.75 0 0 1 1.06 0l7.684 7.68M18 17.25l.714-6.474m0 0a.126.126 0 0 1-.178.178l.178-.178Zm-6.339 6.474h.5V13a.813.813 0 0 0-.813-.813H8.938a.813.813 0 0 0-.813.813v4.25h4.25Z"
    />
  </Svg>
)
export default HomeIcon;