import { TriamOPHMap } from "@components/map"
import classNames from "classnames"
import { useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

export default function Map() {
  const [selected, setSelected] = useState<"all" | "program" | "club" | "gifted" | "org">("all")

  return (
    <main
      style={{ background: "linear-gradient(131.48deg, #FFF1E1 0%, #CFCCD9 104.77%)" }}
      className="min-h-screen w-full py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold text-blue-text text-center">แผนผังงาน</h1>
          <p className="text-xl font-bold text-blue-text text-center">Triam Udom Open House 2023</p>
        </div>

        <TransformWrapper
          initialScale={1}
          initialPositionX={0}
          initialPositionY={0}
          velocityAnimation={{ sensitivity: 0.02 }}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <div className="flex flex-col items-center mt-8">
              {/* <div className="tools">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform()}>x</button>
              </div> */}
              <div className="flex gap-4">
                <button
                  className={classNames(
                    selected === "all" ? "bg-orange text-white" : "bg-white text-black",
                    "rounded-md px-6 py-2"
                  )}
                >
                  All
                </button>
                <button
                  className={classNames(
                    selected === "program" ? "bg-orange text-white" : "bg-white text-black",
                    "rounded-md px-6 py-2"
                  )}
                >
                  สายการเรียน
                </button>
                <button
                  className={classNames(
                    selected === "club" ? "bg-orange text-white" : "bg-white text-black",
                    "rounded-md px-6 py-2"
                  )}
                >
                  ชมรม
                </button>
                <button
                  className={classNames(
                    selected === "gifted" ? "bg-orange text-white" : "bg-white text-black",
                    "rounded-md px-6 py-2"
                  )}
                >
                  Gifted
                </button>
                <button
                  className={classNames(
                    selected === "org" ? "bg-orange text-white" : "bg-white text-black",
                    "rounded-md px-6 py-2"
                  )}
                >
                  องค์กร
                </button>
              </div>

              <TransformComponent>
                <TriamOPHMap className="cursor-grab w-full h-[64rem]" />
              </TransformComponent>
            </div>
          )}
        </TransformWrapper>
      </div>
    </main>
  )
}
