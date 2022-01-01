import { gameDialogue } from "@map/gameMap"
import { NextPage } from "next"
import { useState } from "react"

const maxPage = gameDialogue.length - 1

const Game: NextPage = () => {
  const [page, setPage] = useState(0)

  return <div>hi</div>
}

export default Game
