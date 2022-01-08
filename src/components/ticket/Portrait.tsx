import { FC } from "react"
import { TicketProps } from "./Square"
import css from "./portrait.module.scss"
import classNames from "classnames"
import _data from "@map/ticketOutput.json"
import { Facebook } from "@vectors/Facebook"
import { Instagram } from "@vectors/Instagram"
import { Twitter } from "@vectors/Twitter"
import { Youtube } from "@vectors/Youtube"
import { ticketTypes } from "@types"
import { SITE_URL } from "@utils/constants"

const QRCode = require("qrcode.react")

const getOverlayBG = (type: ticketTypes) => {
  if (type === "brave")
    return "linear-gradient(180deg, rgba(170, 187, 248, 0) 0%, rgba(249, 224, 188, 0.24) 0.01%, rgba(213, 125, 104, 0.28) 47.92%, rgba(157, 34, 29, 0.32) 100%)"
  else if (type === "cheerful")
    return "linear-gradient(180deg, rgba(255, 255, 255, 0.384) 0%, rgba(226, 188, 157, 0.32) 0.01%, rgba(217, 109, 162, 0.36) 47.92%, rgba(151, 135, 211, 0.4) 100%)"
  else if (type === "determination")
    return "linear-gradient(180deg, rgba(225, 130, 106, 0) 0%, rgba(225, 130, 106, 0.322222) 0.01%, rgba(225, 130, 106, 0.3625) 42.19%, rgba(241, 115, 83, 0.52) 100%)"
  else if (type === "friendship")
    return "linear-gradient(180deg, rgba(248, 207, 170, 0) 0%, rgba(255, 212, 172, 0.322222) 0.01%, rgba(214, 112, 55, 0.3625) 47.92%, rgba(215, 122, 93, 0.4) 100%)"
  else if (type === "passion")
    return "linear-gradient(180deg, rgba(225, 130, 106, 0) 0%, rgba(253, 215, 240, 0.144) 0.01%, rgba(196, 103, 175, 0.208) 47.92%, rgba(211, 106, 201, 0.272) 100%)"
  else if (type === "restoration")
    return " linear-gradient(180deg, rgba(225, 130, 106, 0) 0%, rgba(204, 189, 247, 0.322222) 0.01%, rgba(189, 171, 239, 0.168) 0.02%, rgba(150, 126, 220, 0.2) 42.19%, rgba(107, 77, 143, 0.296) 100%)"
  else if (type === "strategist")
    return "linear-gradient(180deg, rgba(225, 130, 106, 0) 0%, rgba(214, 253, 213, 0.104) 0.01%, rgba(135, 193, 108, 0.136) 47.92%, rgba(35, 67, 59, 0.192) 100%)"
  else if (type === "strong")
    return "linear-gradient(180deg, rgba(170, 187, 248, 0) 0%, rgba(187, 222, 254, 0.2) 0.01%, rgba(49, 87, 162, 0.24) 26.04%, rgba(21, 49, 102, 0.28) 100%)"
}

export const PortraitTicket: FC<TicketProps> = ({
  width,
  name = "nark",
  type = "strong",
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
      className={classNames(css["background"], "flex antialiased justify-center items-center")}
    >
      <div
        style={{ background: getOverlayBG(type) }}
        className={classNames(
          css["overlay"],
          "flex flex-col justify-between border border-gray-200 backdrop-blur-md px-8 py-4"
        )}
      >
        <div className={css["vertical"]}>
          <p className={css["ticket-number"]}>Passport No. {uid.slice(0, 5)}</p>
        </div>
        <div>
          <div className={css["header"]}>
            <p className={classNames(css["triam"], "font-display font-semibold text-white")}>TRIAM UDOM</p>
            <p className={classNames(css["openhouse"], "font-display font-light text-white")}>Online Open House 2022</p>
          </div>
          <div className={css["content"]}>
            <div className={css["to"]}>
              <p className="font-game font-light text-white">To: {name}</p>
            </div>
            <p className={classNames(css["name"], "font-game drop-shadow-md font-semibold text-white")}>{data.name}</p>
            <p className={classNames(css["text"], "font-game font-light leading-loose")}>{data.text}</p>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col items-center">
            <QRCode
              value={`${SITE_URL}/ticket/${uid}`}
              renderAs="svg"
              bgColor="none"
              fgColor="#ffffff"
              excavate="true"
              size={width / 8}
            />
            <p className={classNames(css["qr-text"], "font-display font-light text-white")}>ดูบัตรได้ที่นี่เลย !</p>
          </div>
          <div className={classNames(css["contact"], "flex flex-col text-white font-semibold font-display")}>
            <div className={classNames(css["method"], "flex justify-end")}>
              <a href="https://twitter.com/triamudomoph" target="_blank" rel="noreferrer">
                triamudomoph <Twitter fill="#fff" className={classNames(css["vector"], "inline")} />
              </a>
            </div>
            <div className={classNames(css["method"], "flex justify-end")}>
              <a href="https://www.instagram.com/triamudom.oph/" target="_blank" rel="noreferrer">
                triamudom.oph <Instagram fill="#fff" className={classNames(css["vector"], "inline")} />
              </a>
            </div>
            <div className={classNames(css["method"], "flex justify-end")}>
              <a href="https://www.youtube.com/c/TriamUdomOpenHouse" target="_blank" rel="noreferrer">
                Triam Udom Open House <Youtube fill="#fff" className={classNames(css["vector"], "inline")} />
              </a>
            </div>
            <div className={classNames(css["method"], "flex justify-end")}>
              <a href="https://www.instagram.com/triamudom.oph/" target="_blank" rel="noreferrer">
                Triam Udom Open House <Facebook fill="#fff" className={classNames(css["vector"], "inline")} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
