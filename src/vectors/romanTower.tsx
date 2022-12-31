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

export const RomanTowerClubs: FC<{
  width?:string;
  height?:string;
classname?: string;
}> = ({ classname, width, height }) => {
return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="100%"
      className={classname}
      fill="none"
      viewBox="0 0 204 979"
    >
      <path
        fill="url(#paint0_linear_671_2581)"
        d="M158.237 0v.523c25.384.797 45.736 21.561 45.736 47.165 0 25.605-21.149 47.221-47.221 47.221-7.123 0-13.861-1.622-19.912-4.455v789.803l-136.795.192V.22L158.264.028 158.237 0z"
      ></path>
      <path
        fill="url(#paint1_linear_671_2581)"
        d="M1.338 185.004h134.76v776.685H1.338V185.004z"
      ></path>
      <path
        fill="#D7915C"
        d="M129.804 41.25c5.693-5.17 13.201-7.452 21.149-6.434 11.221 1.43 19.692 10.258 19.692 20.516s-8.554 18.289-19.884 18.289v-2.75c9.763 0 17.133-6.683 17.133-15.539s-7.425-16.529-17.298-17.794c-7.123-.907-13.861 1.128-18.949 5.748-5.556 5.033-8.636 12.678-8.416 20.984a27.38 27.38 0 0013.614 22.992v3.19c-9.791-5.033-16.062-15.016-16.364-26.127-.248-9.103 3.135-17.519 9.296-23.102l.027.028z"
      ></path>
      <path
        fill="url(#paint2_linear_671_2581)"
        d="M1.338 157.281h134.76v763.154H1.338V157.281z"
      ></path>
      <path
        fill="url(#paint3_linear_671_2581)"
        d="M136.621 171.831v708.424h-20.544V213.167a8.24 8.24 0 00-8.251-8.251 8.24 8.24 0 00-8.25 8.251v667.088H76.612V213.167a8.24 8.24 0 00-8.25-8.251 8.24 8.24 0 00-8.251 8.251v667.088H38.273V213.167a8.24 8.24 0 00-8.25-8.251 8.24 8.24 0 00-8.251 8.251v667.088H.1V171.831h136.52z"
      ></path>
      <path
        fill="url(#paint4_linear_671_2581)"
        d="M.1 936.083h175.93c15.457 0 27.97 9.544 27.97 21.342 0 11.798-12.513 21.341-27.97 21.341H.1L-1 891.475s139.518-24.339 149.061 5.171c9.543 29.509 27.969 39.437 27.969 39.437"
      ></path>
      <path
        fill="#EDC8A8"
        d="M.097 858.914h134.265c11.798 0 21.341 9.543 21.341 21.342 0 11.798-9.543 21.341-21.341 21.341H.097"
      ></path>
      <path
        stroke="#D7915C"
        strokeMiterlimit="10"
        strokeWidth="5.895"
        d="M144.762 936.083H.349"
      ></path>
      <path
        fill="#EDC8A8"
        d="M.105 129.149h134.264c11.799 0 21.342 9.544 21.342 21.342 0 11.798-9.543 21.342-21.342 21.342H.105"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_671_2581"
          x1="102.023"
          x2="102.023"
          y1="237.315"
          y2="7.508"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3AA86"></stop>
          <stop offset="0.34" stopColor="#E3AB88"></stop>
          <stop offset="0.48" stopColor="#E5B28F"></stop>
          <stop offset="0.58" stopColor="#E9BC9B"></stop>
          <stop offset="0.95" stopColor="#FFE9D8"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_671_2581"
          x1="68.718"
          x2="68.718"
          y1="783.689"
          y2="341.849"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC7754"></stop>
          <stop offset="0.44" stopColor="#CE886F"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_671_2581"
          x1="68.722"
          x2="68.722"
          y1="112.255"
          y2="521.95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CC7754"></stop>
          <stop offset="0.44" stopColor="#CE886F"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_671_2581"
          x1="67.894"
          x2="68.829"
          y1="282.307"
          y2="763.592"
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
        <linearGradient
          id="paint4_linear_671_2581"
          x1="101.5"
          x2="101.5"
          y1="1092.35"
          y2="887.35"
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
);
}