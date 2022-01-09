import { GameBg } from "@components/game/GameBg"
import { GameSection } from "@components/game/GameSection"
import { Modal } from "@components/game/Modal"
import { ArrowCircleRightIcon } from "@heroicons/react/outline"
import { useAuth } from "@lib/auth"
import { gameDialogue } from "@map/gameMap"
import { submitGame, submitSkipGame } from "@services/submitGame"
import { ticketTypes } from "@types"
import { LogoWhite } from "@vectors/Logo"
import classNames from "classnames"
import { Field, Form, Formik } from "formik"
import { AnimatePresence, motion } from "framer-motion"
import { NextPage } from "next"
import { useEffect, useState } from "react"

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
  const [changingScene, setChangeScene] = useState(false)

  useEffect(() => {
    if (changingScene) {
      setTimeout(() => {
        setChangeScene(false)
        setPage(page + 1)
      }, 1000)
    }
  }, [changingScene])

  return (
    <Modal
      isOpen={modalOpen}
      setModal={setModal}
      onDone={() => {
        submitSkipGame(auth)
      }}
    >
      <div className="antialiased">
        <GameBg
          onClick={(e) => {
            e.stopPropagation() // stops the main modal from triggering
            if (modalOpen) return setModal(false)

            if (["text", "opening", "determined", "blank"].includes(currPage.type)) setChangeScene(true)
          }}
          scene={currPage.scene}
          skey={`${currPage.scene}${currPage.type}${currPage?.text ?? "-"}`}
          className={classNames(
            ["text", "opening", "determined", "blank"].includes(currPage.type) && "cursor-pointer",
            currPage.type === "opening" ? "space-y-12" : "space-y-2"
          )}
        >
          <motion.div
            variants={{
              invisible: {
                opacity: 0,
                // x: -200,
              },
              visible: {
                opacity: 1,
                // x: 0,
              },
            }}
            transition={{ duration: 0.5, type: "tween" }}
            animate={changingScene ? "invisible" : "visible"}
            className={classNames(changingScene ? "none" : "inline")}
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
                    setChangeScene(true)
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
                          className="px-10 py-3 mb-3 shadow-sm border transition-colors hover:bg-white hover:text-gray-600 font-game font-light text-white-300 border-white rounded-xl sm:rounded-full"
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
              <GameSection type={["text", "opening", "determined"]} currType={currPage.type}>
                <p className="font-light text-sm text-gray-100 animate-pulse">กดที่หน้าจอเพื่อไปต่อ</p>
              </GameSection>

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

                        setChangeScene(true)
                      }}
                      className="text-sm backdrop-blur-md shadow-md font-light bg-slate-600 bg-opacity-20 transition-colors hover:bg-white hover:text-gray-600 font-game rounded-2xl px-6 py-4 border border-white"
                      key={c}
                    >
                      {c}
                    </button>
                  ))}
              </GameSection>
            </div>

            <GameSection type={["opening", "finale"]} currType={currPage.type}>
              <LogoWhite className="absolute left-1/2 -translate-x-1/2 bottom-[3.5rem] md:bottom-[5rem] w-[174px]" />
            </GameSection>
          </motion.div>
        </GameBg>
      </div>
    </Modal>
  )
}

export default Game
