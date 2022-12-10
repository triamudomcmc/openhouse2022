import { FC } from "react"


const RomanTower:FC<{
    classname: string
  }> = ({classname}) => {
    return (
      <div className={classname}>
        <svg height='100%' viewBox="0 0 321 1545" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
            <path d="M71.768 0V0.916943C31.9353 2.31649 0 38.7529 0 83.6831C0 128.613 33.1868 166.546 74.0984 166.546C85.2758 166.546 95.849 163.698 105.343 158.728V1544.66L320 1545V0.337821L71.7249 0H71.768Z" fill="url(#paint0_linear_749_679)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M320.15 202.926H105.393V1544.66L320.15 1545V202.926Z" fill="url(#paint1_linear_749_679)"/>
            <path d="M116.45 64.7655C107.513 56.6485 95.7257 53.0649 83.2479 54.6624C65.6321 56.9075 52.3339 70.767 52.3339 86.8716C52.3339 102.976 65.7616 115.584 83.5501 115.584V111.266C68.2227 111.266 56.6515 100.774 56.6515 86.8716C56.6515 72.969 68.309 60.9229 83.8092 58.9368C94.9917 57.512 105.57 60.707 113.557 67.9605C122.279 75.8617 127.115 87.8647 126.769 100.904C126.381 115.972 118.22 129.529 105.397 136.999V142.007C120.768 134.106 130.612 118.433 131.087 100.99C131.475 86.6989 126.165 73.4871 116.493 64.7223L116.45 64.7655Z" fill="#D7915C"/>
            <path d="M106 270V1545H138.203V344.394C138.203 336.178 143.98 329.545 151.137 329.545C158.293 329.545 164.07 336.178 164.07 344.394V1545H200.067V344.394C200.067 336.178 205.844 329.545 213 329.545C220.156 329.545 225.933 336.178 225.933 344.394V1545H260.163V344.394C260.163 336.178 265.94 329.545 273.096 329.545C280.252 329.545 286.029 336.178 286.029 344.394V1545H320V270H106Z" fill="url(#paint2_linear_749_679)"/>
            <path d="M320.066 202.758H109.282C90.7591 202.758 75.7771 217.74 75.7771 236.263C75.7771 254.785 90.7591 269.767 109.282 269.767H320.066" fill="#EDC8A8"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_749_679" x1="160.022" y1="416.437" x2="160.022" y2="13.175" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E3AA86"/>
            <stop offset="0.34" stop-color="#E3AB88"/>
            <stop offset="0.48" stop-color="#E5B28F"/>
            <stop offset="0.58" stop-color="#E9BC9B"/>
            <stop offset="0.64" stop-color="#EDC8A8"/>
            <stop offset="0.69" stop-color="#EFCCAD"/>
            <stop offset="0.82" stop-color="#F5D5B9"/>
            <stop offset="0.95" stop-color="#F7D9BE"/>
            </linearGradient>
            <linearGradient id="paint1_linear_749_679" x1="233.884" y1="1544.31" x2="236.68" y2="335.592" gradientUnits="userSpaceOnUse">
            <stop offset="0.0939509" stop-color="#CE886F" stop-opacity="0.35"/>
            <stop offset="0.684063" stop-color="#CE886F"/>
            <stop offset="0.95814" stop-color="#CC7754"/>
            </linearGradient>
            <linearGradient id="paint2_linear_749_679" x1="213.733" y1="468.831" x2="211.801" y2="1335.03" gradientUnits="userSpaceOnUse">
            <stop stop-color="#E3AA86"/>
            <stop offset="0.02" stop-color="#E4AD89"/>
            <stop offset="0.11" stop-color="#E9BC9A"/>
            <stop offset="0.22" stop-color="#ECC5A4"/>
            <stop offset="0.35" stop-color="#EDC8A8"/>
            <stop offset="0.59" stop-color="#ECC5A5"/>
            <stop offset="0.76" stop-color="#E9BD9B"/>
            <stop offset="0.91" stop-color="#E4AF8B"/>
            <stop offset="0.95" stop-color="#E3AA86"/>
            </linearGradient>
            </defs>
        </svg>

      </div>
    )
  }

  export default RomanTower
  