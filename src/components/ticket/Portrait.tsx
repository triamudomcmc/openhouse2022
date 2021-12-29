import { FC } from "react"
import { TicketProps } from "./Square"
import css from "./portrait.module.scss"
import classNames from "classnames"
import _data from "@map/ticketOutput.json"
import { Facebook } from "@vectors/Facebook"
import { Instagram } from "@vectors/Instagram"
import { Twitter } from "@vectors/Twitter"
import { Youtube } from "@vectors/Youtube"

export const PortraitTicket: FC<TicketProps> = ({
  width,
  name = "nark",
  type = "brave",
  uid = "4tZbV8PSzLf5Uxt4kyzu0rg9AFW2",
}) => {
  const data = _data.find((d) => d.id === type) ?? {
    id: "strong",
    name: "ดาวแห่งความเข้มแข็ง",
    text: "คุณเป็นคนที่จะไม่ย่อท้อต่อคำสบประมาท แม้ว่าจะมีอุปสรรคเข้ามามากมายสักเพียงใด แต่คุณจะไม่ยอมแพ้ คุณเป็นคนที่มีจิตใจเข้มแข็งและพร้อมที่จะฝ่าฟันทุกอย่างไปให้ถึงจุดหมายปลายทางให้ได้",
  }

  return (
    <div
      style={{
        ["--width" as string]: `${width}px`,
        backgroundImage: `url(/images/ticket/${data.id}.png`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={classNames(css["background"])}
    >
      <div className={classNames(css["overlay"], "rounded-3xl border border-gray-200 backdrop-blur-xl px-8 py-4")}>
        <div className={css["vertical"]}>
          <p className={css["ticket-number"]}>Passport No. {uid}</p>
        </div>
        <div>
          <p className={"font-display font-semibold text-white text-2xl"}>TRIAM UDOM</p>
          <p className={"font-display font-light -mt-2 text-white text-xl"}>Online Open House 2022</p>
        </div>
        <div>
          <p className="font-game font-light text-white">To: {name}</p>
          <p className="font-game text-4xl drop-shadow-md font-semibold text-white">{data.name}</p>
          <p className="font-game font-light text-white leading-relaxed">{data.text}</p>
        </div>
        <div className="flex flex-col text-white font-display">
          <div>
            <a href="https://twitter.com/triamudomoph" target="_blank" rel="noreferrer">
              triamudomoph <Twitter fill="#fff" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/triamudom.oph/" target="_blank" rel="noreferrer">
              triamudom.oph <Instagram fill="#fff" />
            </a>
          </div>
          <div>
            <a href="https://www.youtube.com/c/TriamUdomOpenHouse" target="_blank" rel="noreferrer">
              Triam Udom Open House <Youtube fill="#fff" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/triamudom.oph/" target="_blank" rel="noreferrer">
              Triam Udom Open House <Facebook fill="#fff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
