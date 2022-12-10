import { FC } from "react";

const RomanTower: FC<{
  classname: string;
}> = ({ classname }) => {
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 321 1545"
    >
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
  );
};

export default RomanTower;