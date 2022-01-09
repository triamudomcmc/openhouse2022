import { GameBg } from "@components/game/GameBg"
import { GameSection } from "@components/game/GameSection"
import { Modal } from "@components/game/Modal"
import { ArrowCircleRightIcon } from "@heroicons/react/outline"
import { useAuth } from "@lib/auth"
import { gameDialogue } from "@map/gameMap"
import { submitGame, submitSkipGame } from "@services/submitGame"
import { ticketTypes } from "@types"
import { LogoWhite } from "@vectors/Logo"
import { SpeakerMute } from "@vectors/music/SpeakerMute"
import { SpeakerUnmute } from "@vectors/music/SpeakerUnmute"
import classNames from "classnames"
import { Field, Form, Formik } from "formik"
import { AnimatePresence, motion } from "framer-motion"
import { NextPage } from "next"
import { useEffect, useRef, useState } from "react"

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
  const [mute, setMute] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (changingScene) {
      const nextScene = page + 1
      setTimeout(() => {
        setChangeScene(false)
        if (page === 10) {
          if (audioRef.current !== null) {
            audioRef.current.src = `/music/obstacle.mp3`
            audioRef.current.play()
          }
        } else if (page === 26) {
          if (audioRef.current !== null) {
            audioRef.current.src = `/music/finale.mp3`
            audioRef.current.play()
          }
        }
        setPage(nextScene)
      }, 1000)
    }
  }, [changingScene])

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.loop = true
      audioRef.current.volume = 0.1
    }
  }, [])

  return (
    <div
      onMouseOver={() => {
        if (audioRef.current) audioRef.current.play()
      }}
    >
      <audio muted={mute} ref={audioRef} id="song">
        <source src={`/music/start.mp3`}></source>
      </audio>
      <div className="fixed bottom-0 w-screen z-[99]">
        <button
          className="absolute text-center right-6 bottom-4 cursor-pointer w-[36px] h-[36px]"
          onClick={() => {
            setMute(!mute)
          }}
        >
          {mute ? <SpeakerMute className="w-full h-full" /> : <SpeakerUnmute className="w-[80%] h-[80%]" />}
        </button>
      </div>
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

              if (["text", "opening", "determined", "blank"].includes(currPage.type)) {
                if (!changingScene) setChangeScene(true)
              }
            }}
            scene={currPage.scene}
            skey={`${currPage.scene}${currPage.type}${currPage?.text ?? "-"}`}
            className={classNames(
              ["text", "opening", "determined", "blank"].includes(currPage.type) && "cursor-pointer",
              currPage.type === "opening" ? "space-y-12" : "space-y-12"
            )}
          >
            <GameSection type={["text", "opening", "determined", "textInput", "choice"]} currType={currPage.type}>
              <motion.div whileHover={{ scale: 1.1 }} className="absolute right-4 sm:right-6 top-6 sm:top-2">
                <p
                  className="font-light text-sm sm:text-md cursor-pointer transition-opacity hover:opacity-100 opacity-90"
                  onClick={(e) => {
                    e.stopPropagation() // stops the main div from triggering
                    if (modalOpen) return
                    setModal(true)
                  }}
                >
                  ข้ามเนื้อเรื่อง <ArrowCircleRightIcon className="inline text-white w-6 h-6" />
                </p>
              </motion.div>
            </GameSection>

            <motion.div
              variants={{
                invisible: {
                  opacity: 0,
                  // x: 200,
                  // scale: 0,
                },
                visible: {
                  opacity: 1,
                  // x: 0,
                  // scale: 1,
                },
              }}
              transition={{ duration: 0.6, type: "tween" }}
              animate={changingScene ? "invisible" : "visible"}
              className={(classNames(changingScene ? "none" : "inline"), "flex flex-col items-center justify-center")}
            >
              <div>
                <p className="whitespace-pre-line text-[14px] sm:text-sm leading-loose drop-shadow-md">
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
                      if (!changingScene) setChangeScene(true)
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
                  "flex flex-col space-y-4 mt-4 md:mt-6 mb-12 sm:mb-16",
                  currPage.type === "choice" && "justify-center items-center w-[20rem] md:w-[25rem]"
                )}
              >
                <GameSection type="opening" currType={currPage.type}>
                  <p className="font-light text-[12px] sm:text-sm text-gray-100">(เปิดเสียงเพื่ออรรถรสในการเล่น)</p>
                </GameSection>
                <GameSection type={["text", "opening", "determined"]} currType={currPage.type}>
                  <p className="font-light text-[12px] sm:text-sm text-gray-100 animate-pulse">กดที่หน้าจอเพื่อไปต่อ</p>
                </GameSection>

                <GameSection type="finale" currType={currPage.type}>
                  <p
                    className="font-light text-sm sm:text-md cursor-pointer transition-opacity hover:opacity-100 opacity-90"
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

                          if (!changingScene) setChangeScene(true)
                        }}
                        className="text-sm w-full backdrop-blur-md shadow-md font-light bg-slate-600 bg-opacity-20 transition-colors hover:bg-white hover:text-gray-600 font-game rounded-2xl px-6 py-4 border border-white"
                        key={c}
                      >
                        {c}
                      </button>
                    ))}
                </GameSection>
              </div>

              <GameSection type={["opening", "finale"]} currType={currPage.type}>
                <div className="flex justify-center mt-4 sm:mt-6">
                  <LogoWhite className="w-[174px]" />
                </div>
              </GameSection>
            </motion.div>
          </GameBg>
        </div>
      </Modal>
    </div>
  )
}

export default Game
