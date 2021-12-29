import { FC } from "react"

export const Instagram: FC<{ fill?: string; className?: string }> = ({ fill = "#6670AD", className }) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.204937 15.8526C0.128728 8.59842 0.097744 5.64915 2.68854 2.84651C5.40754 -0.0896431 8.37683 -0.063821 18.7746 0.0266021C20.9277 0.0453258 23.3992 0.0668195 26.2531 0.0653587C30.8564 0.0737168 31.1179 0.113249 31.9904 0.245152L32.0403 0.252699C36.0288 0.850484 39.0557 3.80194 39.4417 8.92313C39.494 9.60778 39.494 31.392 39.4433 32.063C39.0803 36.8709 36.4245 39.6282 33.1605 40.5053C30.7158 41.1643 9.02528 41.1643 6.57725 40.5087C-0.162535 38.6946 -0.000910134 31.8152 0.177079 24.2393C0.206123 23.003 0.235602 21.7483 0.235602 20.4939C0.235602 18.7716 0.21945 17.2341 0.204937 15.8526ZM18.4233 5.40405C18.8968 5.40761 19.3738 5.4112 19.8528 5.41121C20.4225 5.4112 20.9734 5.40732 21.5065 5.40357C26.1357 5.37103 29.4155 5.34796 31.9079 7.94371C34.3906 10.5278 34.373 13.8876 34.3468 18.8667C34.3441 19.394 34.3412 19.9394 34.3412 20.504C34.3412 21.0262 34.343 21.529 34.3447 22.0137C34.3578 25.652 34.3672 28.2697 33.5808 30.3888C31.5918 35.7033 26.537 35.6554 21.3478 35.6062C20.8497 35.6015 20.3505 35.5968 19.8525 35.5968C19.3756 35.5968 18.9 35.6004 18.4276 35.604C13.0621 35.6448 8.1008 35.6825 6.12592 30.3888C5.34094 28.2842 5.35139 25.1546 5.36275 21.7488C5.36412 21.3374 5.36551 20.9221 5.36551 20.504C5.36551 19.9893 5.36376 19.4927 5.36207 19.0132C5.34924 15.3735 5.33988 12.7183 6.12592 10.6176C8.10549 5.32646 13.0292 5.36349 18.4233 5.40405ZM20.8874 8.11491C20.1569 8.12208 19.381 8.12969 18.5574 8.13105V8.12764C8.8961 8.13786 7.98034 8.32861 7.98034 20.4972C7.98034 32.5261 8.3123 32.8702 19.8574 32.8702C20.44 32.8702 21.0126 32.8767 21.5724 32.8831C27.0962 32.9462 31.3689 32.9951 31.6495 26.5977C32.4616 8.00138 31.1419 8.01433 20.8874 8.11491ZM25.8524 12.4467C25.8524 11.447 26.6308 10.6363 27.5907 10.6363C28.5506 10.6363 29.329 11.447 29.329 12.4467C29.329 13.4464 28.5506 14.2571 27.5907 14.2571C26.6308 14.2571 25.8524 13.4464 25.8524 12.4467ZM12.4152 20.504C12.4152 16.2241 15.7463 12.7532 19.8558 12.7532C23.9653 12.7532 27.2947 16.2241 27.2947 20.504C27.2947 24.7839 23.9653 28.2531 19.8558 28.2531C15.7463 28.2531 12.4152 24.7839 12.4152 20.504ZM19.8558 15.4731C26.2416 15.4731 26.2498 25.5349 19.8558 25.5349C13.4716 25.5349 13.4618 15.4731 19.8558 15.4731Z"
        fill={fill}
      />
    </svg>
  )
}
