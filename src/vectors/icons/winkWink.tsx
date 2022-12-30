import { FC } from "react"

const WinkWInk: FC<{
  width: string
  height?: string
  classname?: string
}> = ({ classname, width, height }) => {
  return (
    <svg
      className={classname}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 41 41"
    >
      <path
        fill="#F06A23"
        d="M19.692.953c.18-.88 1.436-.88 1.616 0l3.071 15.025c.066.324.32.577.643.643l15.026 3.071c.879.18.879 1.436 0 1.616l-15.026 3.071a.825.825 0 00-.643.643l-3.071 15.026c-.18.879-1.436.879-1.616 0l-3.071-15.026a.825.825 0 00-.643-.643L.953 21.308c-.88-.18-.88-1.436 0-1.616l15.025-3.071a.825.825 0 00.643-.643L19.692.953z"
      ></path>
    </svg>
  )
}

export default WinkWInk
