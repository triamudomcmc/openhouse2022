import { ArrowCircleRightIcon, XIcon } from "@heroicons/react/outline"
import { useAuth } from "@lib/auth"
import { gameDialogue } from "@map/gameMap"
import { submitGame, submitSkipGame } from "@services/submitGame"
import { ticketTypes } from "@types"
import { useWindowDimensions } from "@utils/useWindowDimensions"
import { LogoWhite } from "@vectors/Logo"
import classNames from "classnames"
import { Field, Form, Formik } from "formik"
import { AnimatePresence, motion } from "framer-motion"
import { NextPage } from "next"
import { Dispatch, FC, MouseEventHandler, SetStateAction, useEffect, useRef, useState } from "react"

const getBg = (scene: string, type: "primary" | "secondary" | "mobile") => {
  if (["black", "white"].some((s) => s === scene)) {
    if (scene === "black") {
      return "#081A35"
    } else if (scene === "white") {
      return "#fff"
    }
  } else {
    return `url('/images/backgrounds/${scene.replace("-up", "")}${
      type === "mobile" ? "-mobile" : type === "secondary" ? "-mobile-default" : ""
    }.jpg')`
  }

  return ""
}

const GameBg: FC<{ scene: string; skey: string; onClick: MouseEventHandler<HTMLDivElement>; className?: string }> = ({
  children,
  scene,
  skey,
  onClick,
  className,
}) => {
  const primary = { background: getBg(scene, "primary"), height: "1224px" }
  const secondary = { background: getBg(scene, "secondary"), height: "926px" }
  const mobile = { background: getBg(scene, "mobile"), height: "926px" }

  const { width } = useWindowDimensions()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      if (width > 0) {
        if (width > 640) {
          ref.current.style.background = primary.background
          ref.current.style.backgroundPosition = "center"
          ref.current.style.backgroundSize = "cover"
          ref.current.style.backgroundRepeat = "no-repeat"
        } else {
          if (width > 428) {
            ref.current.style.background = secondary.background
            ref.current.style.backgroundPosition = "center"
            ref.current.style.backgroundSize = "cover"
            ref.current.style.backgroundRepeat = "no-repeat"
          } else {
            ref.current.style.background = mobile.background
            ref.current.style.backgroundPosition = "center"
            ref.current.style.backgroundSize = "cover"
            ref.current.style.backgroundRepeat = "no-repeat"
          }
        }
      }
    }
  }, [
    width,
    secondary.background,
    secondary.height,
    primary.background,
    primary.height,
    mobile.background,
    mobile.height,
  ])

  return (
    <motion.main
      key={skey}
      onClick={onClick}
      style={{
        background: primary.background,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={classNames(
        "relative flex font-game font-medium flex-col items-center text-center justify-center text-lg px-4 md:px-[4rem] overflow-x-hidden min-h-screen pb-20 text-white",
        className
      )}
    >
      {children}
    </motion.main>
  )
}

const GameSection: FC<{ type: string | string[]; currType: string }> = ({ children, type, currType }) => {
  return (
    <>
      {((typeof type === "string" && type === currType) ||
        (typeof type === "object" && type.some((t) => t === currType))) &&
        children}
    </>
  )
}

const Modal: FC<{ isOpen: boolean; setModal: Dispatch<SetStateAction<boolean>>; onDone: () => void }> = ({
  children,
  isOpen,
  setModal,
  onDone,
}) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-[100] px-12 py-8 w-3/4 sm:w-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg font-game">
              <button onClick={() => setModal(false)} className="absolute top-4 right-4">
                <XIcon className="text-gray-400 w-5 h-5" />
              </button>
              <div className="flex flex-col items-center justify-center w-full text-center space-y-4">
                <div className="flex flex-col space-y-2">
                  <p className="text-lg text-pink-400">ข้ามเนื้อเรื่อง</p>
                  <p className="font-light text-gray-400 leading-tight">
                    ระบบจะทำการสุ่มตั๋วเดินทาง
                    <br />
                    แทนตั๋วที่จะได้รับจากการเล่นเกมต้อนรับสำเร็จ
                  </p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => setModal(false)}
                    className="font-light rounded-lg border border-gray-100 shadow-md bg-white text-gray-400 font-game px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-500"
                  >
                    ย้อนกลับ
                  </button>
                  <button
                    onClick={() => onDone()}
                    className="font-light rounded-lg shadow-md bg-pink-400 text-white transition-colors hover:bg-pink-500 font-game px-4 py-2"
                  >
                    ตกลง
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className={"w-full h-full blur-sm bg-opacity-40 bg-black"}
            onClick={() => {
              setModal(false)
            }}
          >
            {children}
          </motion.div>
        ) : (
          <>{children}</>
        )}
      </AnimatePresence>
    </>
  )
}

interface IScore {
  strong: number
  brave: number
  cheerful: number
  friendship: number
  passion: number
  strategist: number
  restoration: number
  determination: number
}

export interface IGameData {
  score: IScore
  ticket: ticketTypes
  choices: { choice: string; index: number }[]
  feedback: string
}

const calculateTicket: (score: IScore) => ticketTypes = (score) => {
  const sorted: [string, number][] = Object.entries(score).sort((a, b) => b[1] - a[1])
  const max = sorted[0][1]

  const result = sorted.filter((s) => s[1] === max).map((s) => s[0])

  if (result.length > 1) {
    return result[Math.floor(Math.random() * result.length)] as ticketTypes
  } else {
    return result[0] as ticketTypes
  }
}

const Game: NextPage = () => {
  const [page, setPage] = useState(0)
  const [modalOpen, setModal] = useState(false)
  const [score, setScore] = useState<IScore>({
    strong: 0,
    brave: 0,
    cheerful: 0,
    friendship: 0,
    passion: 0,
    strategist: 0,
    restoration: 0,
    determination: 0,
  })
  const [choices, setChoices] = useState<{ choice: string; index: number }[]>([])
  const [feedback, setFeedback] = useState("")
  const currPage = gameDialogue[page]
  const auth = useAuth()

  return (
    <Modal
      isOpen={modalOpen}
      setModal={setModal}
      onDone={() => {
        submitSkipGame(auth)
      }}
    >
      <AnimatePresence>
        <GameBg
          onClick={(e) => {
            e.stopPropagation() // stops the main modal from triggering
            if (modalOpen) return setModal(false)

            if (["text", "opening", "determined", "blank"].some((e) => e === currPage.type)) setPage(page + 1)
          }}
          scene={currPage.scene}
          skey={`${currPage.scene}${currPage.type}${currPage?.text ?? "-"}`}
          className={classNames(
            ["text", "opening", "determined", "blank"].some((e) => e === currPage.type) && "cursor-pointer",
            currPage.type === "opening" ? "space-y-12" : "space-y-2"
          )}
        >
          <div>
            <p className="whitespace-pre-line leading-loose drop-shadow-md">
              <GameSection type="determined" currType={currPage.type}>
                {currPage?.outcomes && `“${currPage?.outcomes[choices[choices.length - 1].index]}”`}
              </GameSection>

              <GameSection type={["text", "opening", "choice", "textInput"]} currType={currPage.type}>
                “{currPage?.text}”
              </GameSection>

              <GameSection type="finale" currType={currPage.type}>
                {currPage?.text}
              </GameSection>
            </p>
          </div>

          <div>
            <GameSection type="textInput" currType={currPage.type}>
              <Formik
                initialValues={{
                  feedback: "",
                }}
                validate={(values: any) => {
                  const errors: any = {}
                  // if (
                  //   !values.feedback
                  // )
                  //   errors.feedback = ""
                  return errors
                }}
                onSubmit={(data) => {
                  setFeedback(data.feedback)
                  setPage(page + 1)
                }}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ errors }) => (
                  <Form className="flex flex-col py-4 text-sm w-[20rem] sm:w-[24rem] font-display" noValidate>
                    <>
                      <Field
                        className={classNames(
                          "border block shadow-sm w-full bg-transparent p-4 focus:outline-none rounded-xl placeholder-white placeholder-opacity-75",
                          errors.feedback ? "border-red-400" : "border-white"
                        )}
                        id="feedback"
                        name="feedback"
                        placeholder="ความรู้สึกของคุณ..."
                        type="text"
                      />
                      {errors.feedback ? (
                        <p className="mt-1 text-red-400">{errors.feedback}</p>
                      ) : (
                        <div className="h-6" aria-hidden></div>
                      )}
                    </>
                    {/* submit */}
                    <div className="">
                      <button
                        className="px-10 py-3 mb-3 shadow-sm border transition-colors hover:bg-white hover:text-gray-600 font-game font-light text-white-300 border-white rounded-full"
                        type="submit"
                      >
                        ไปต่อ
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </GameSection>
          </div>

          <div
            className={classNames(
              "flex flex-col space-y-4 mt-20 md:mt-36",
              currPage.type === "choice" && "w-[20rem] md:w-[25rem]"
            )}
          >
            <GameSection type="opening" currType={currPage.type}>
              <p
                className="font-light text-sm cursor-pointer transition-opacity hover:opacity-100 opacity-90"
                onClick={(e) => {
                  e.stopPropagation() // stops the main div from triggering
                  if (modalOpen) return
                  setModal(true)
                }}
              >
                ข้ามเนื้อเรื่อง <ArrowCircleRightIcon className="inline text-white w-5 h-5" />
              </p>
            </GameSection>

            <GameSection type="finale" currType={currPage.type}>
              <p
                className="font-light text-sm cursor-pointer transition-opacity hover:opacity-100 opacity-90"
                onClick={(e) => {
                  e.stopPropagation() // stops the main div from triggering
                  if (modalOpen) return

                  submitGame(auth, {
                    score,
                    ticket: calculateTicket(score),
                    choices,
                    feedback,
                  })
                }}
              >
                ดูผลลัพธ์ <ArrowCircleRightIcon className="inline text-white w-5 h-5" />
              </p>
            </GameSection>

            <GameSection type={["text", "opening", "determined"]} currType={currPage.type}>
              <p className="font-light text-sm text-gray-100 animate-pulse">กดที่หน้าจอเพื่อไปต่อ</p>
            </GameSection>

            <GameSection type="choice" currType={currPage.type}>
              {currPage?.choices &&
                currPage?.choices.map((c, i) => (
                  <button
                    onClick={() => {
                      setChoices((prevChoices) => [...prevChoices, { choice: c, index: i }])
                      setScore((prevScore) => {
                        const temp = { ...prevScore }
                        const score = currPage.score[i]

                        Object.keys(score).forEach((s) => {
                          // @ts-ignore
                          temp[s] = temp[s] + score[s]
                        })

                        return temp
                      })

                      setPage(page + 1)
                    }}
                    className="text-sm backdrop-blur-md shadow-md font-light transition-colors hover:bg-white hover:text-gray-600 font-game rounded-2xl px-6 py-4 border border-white"
                    key={c}
                  >
                    {c}
                  </button>
                ))}
            </GameSection>
          </div>

          <GameSection type={["opening", "finale"]} currType={currPage.type}>
            <LogoWhite className="absolute bottom-[3.5rem] md:bottom-[5rem] w-[174px]" />
          </GameSection>
        </GameBg>
      </AnimatePresence>
    </Modal>
  )
}

export default Game
