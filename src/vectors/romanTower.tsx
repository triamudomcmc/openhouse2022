import { FC } from "react"

const RomanTower: FC<{
  classname: string
}> = ({ classname }) => {
  return (
    <svg className={classname} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 321 1545">
      <g opacity="0.5">
        <path
          fill="url(#paint0_linear_749_679)"
          d="M71.768 0v.917C31.935 2.317 0 38.753 0 83.683c0 44.93 33.187 82.863 74.098 82.863 11.178 0 21.751-2.848 31.245-7.818V1544.66L320 1545V.338L71.725 0h.043z"
        ></path>
        <path
          fill="url(#paint1_linear_749_679)"
          fillRule="evenodd"
          d="M320.15 202.926H105.393V1544.66l214.757.34V202.926z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#D7915C"
          d="M116.45 64.766c-8.937-8.118-20.724-11.701-33.202-10.104-17.616 2.245-30.914 16.105-30.914 32.21 0 16.104 13.428 28.712 31.216 28.712v-4.318c-15.327 0-26.898-10.492-26.898-24.394 0-13.903 11.657-25.95 27.157-27.935 11.183-1.425 21.761 1.77 29.748 9.023 8.722 7.902 13.558 19.905 13.212 32.944-.388 15.068-8.549 28.625-21.372 36.095v5.008c15.371-7.901 25.215-23.574 25.69-41.017.388-14.291-4.922-27.503-14.594-36.268l-.043.044z"
        ></path>
        <path
          fill="url(#paint2_linear_749_679)"
          d="M106 270v1275h32.203V344.394c0-8.216 5.777-14.849 12.934-14.849 7.156 0 12.933 6.633 12.933 14.849V1545h35.997V344.394c0-8.216 5.777-14.849 12.933-14.849s12.933 6.633 12.933 14.849V1545h34.23V344.394c0-8.216 5.777-14.849 12.933-14.849s12.933 6.633 12.933 14.849V1545H320V270H106z"
        ></path>
        <path
          fill="#EDC8A8"
          d="M320.066 202.758H109.282c-18.523 0-33.505 14.982-33.505 33.505 0 18.522 14.982 33.504 33.505 33.504h210.784"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_749_679"
          x1="160.022"
          x2="160.022"
          y1="416.437"
          y2="13.175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3AA86"></stop>
          <stop offset="0.34" stopColor="#E3AB88"></stop>
          <stop offset="0.48" stopColor="#E5B28F"></stop>
          <stop offset="0.58" stopColor="#E9BC9B"></stop>
          <stop offset="0.64" stopColor="#EDC8A8"></stop>
          <stop offset="0.69" stopColor="#EFCCAD"></stop>
          <stop offset="0.82" stopColor="#F5D5B9"></stop>
          <stop offset="0.95" stopColor="#F7D9BE"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_749_679"
          x1="233.884"
          x2="236.68"
          y1="1544.31"
          y2="335.592"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.094" stopColor="#CE886F" stopOpacity="0.35"></stop>
          <stop offset="0.684" stopColor="#CE886F"></stop>
          <stop offset="0.958" stopColor="#CC7754"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_749_679"
          x1="213.733"
          x2="211.801"
          y1="468.831"
          y2="1335.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3AA86"></stop>
          <stop offset="0.02" stopColor="#E4AD89"></stop>
          <stop offset="0.11" stopColor="#E9BC9A"></stop>
          <stop offset="0.22" stopColor="#ECC5A4"></stop>
          <stop offset="0.35" stopColor="#EDC8A8"></stop>
          <stop offset="0.59" stopColor="#ECC5A5"></stop>
          <stop offset="0.76" stopColor="#E9BD9B"></stop>
          <stop offset="0.91" stopColor="#E4AF8B"></stop>
          <stop offset="0.95" stopColor="#E3AA86"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default RomanTower

export const RomanTowerRegist: FC<{
  className
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 226 1228" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50.4917 0V0.583279C22.4678 1.47355 0 24.6514 0 53.2323C0 81.8132 23.3482 105.943 52.1312 105.943C59.9949 105.943 67.4336 104.131 74.1132 100.969V982.588L225.133 982.802V0.245599L50.4613 0.0307057L50.4917 0Z"
        fill="url(#paint0_linear_1013_3225)"
      />
      <path d="M225 207H75V1228H225V207Z" fill="url(#paint1_linear_1013_3225)" />
      <path
        d="M81.8862 46.0487C75.6013 40.2772 67.3125 37.7292 58.5379 38.8651C46.1503 40.4614 36.7988 50.3159 36.7988 61.7666C36.7988 73.2174 46.2414 82.1816 58.7505 82.1816V79.1116C47.972 79.1116 39.835 71.6518 39.835 61.7666C39.835 51.8815 48.0327 43.3165 58.9326 41.9043C66.7963 40.8912 74.2349 43.163 79.8519 48.3204C85.985 53.9384 89.3855 62.4727 89.1426 71.7439C88.8693 82.4579 83.131 92.0974 74.1135 97.4084V100.969C84.9223 95.3515 91.8448 84.2077 92.1788 71.8053C92.452 61.6438 88.7175 52.2499 81.9165 46.018L81.8862 46.0487Z"
        fill="#D7915C"
      />
      <path
        d="M74.9326 192.422V1228H97.6129V252.847C97.6129 246.173 101.681 240.786 106.721 240.786C111.762 240.786 115.83 246.173 115.83 252.847V1228H141.182V252.847C141.182 246.173 145.251 240.786 150.291 240.786C155.331 240.786 159.399 246.173 159.399 252.847V1228H183.507V252.847C183.507 246.173 187.575 240.786 192.615 240.786C197.655 240.786 201.724 246.173 201.724 252.847V1228H225.649V192.422H74.9326Z"
        fill="url(#paint2_linear_1013_3225)"
      />
      <path
        d="M225.072 144.163H76.846C63.8207 144.163 53.2852 154.816 53.2852 167.986C53.2852 181.156 63.8207 191.808 76.846 191.808H225.072"
        fill="#EDC8A8"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1013_3225"
          x1="112.551"
          y1="264.903"
          x2="112.551"
          y2="8.38086"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3AA86" />
          <stop offset="0.34" stopColor="#E3AB88" />
          <stop offset="0.48" stopColor="#E5B28F" />
          <stop offset="0.58" stopColor="#E9BC9B" />
          <stop offset="0.64" stopColor="#EDC8A8" />
          <stop offset="0.69" stopColor="#EFCCAD" />
          <stop offset="0.82" stopColor="#F5D5B9" />
          <stop offset="0.95" stopColor="#F7D9BE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1013_3225"
          x1="150"
          y1="994.009"
          x2="150"
          y2="413.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC7754" />
          <stop offset="0.44" stopColor="#CE886F" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1013_3225"
          x1="150.807"
          y1="353.916"
          x2="148.997"
          y2="1057.46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3AA86" />
          <stop offset="0.02" stopColor="#E4AD89" />
          <stop offset="0.11" stopColor="#E9BC9A" />
          <stop offset="0.22" stopColor="#ECC5A4" />
          <stop offset="0.35" stopColor="#EDC8A8" />
          <stop offset="0.59" stopColor="#ECC5A5" />
          <stop offset="0.76" stopColor="#E9BD9B" />
          <stop offset="0.91" stopColor="#E4AF8B" />
          <stop offset="0.95" stopColor="#E3AA86" />
        </linearGradient>
      </defs>
    </svg>
  )
}
