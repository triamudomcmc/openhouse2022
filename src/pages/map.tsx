import { TriamOPHMap } from "@components/map"
import classNames from "classnames"
import { useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

export type ViewMode = "all" | "program" | "club" | "gifted" | "org"

const buttons: { name: ViewMode; text: string }[] = [
  { name: "all", text: "All" },
  { name: "program", text: "สายการเรียน" },
  { name: "club", text: "ชมรม" },
  { name: "gifted", text: "Gifted" },
  { name: "org", text: "องค์กร" },
]

const doZoom = (resetZoom: () => void, zoomFunc: (anchorId: string) => void, variant: string) => {
  switch (variant) {
    case "all":
      resetZoom()
      zoomFunc("all-anchor")
      return
    case "program":
      resetZoom()
      zoomFunc("larnbarnyen-anchor")
      return
    case "club":
      resetZoom()
      zoomFunc("clubs-anchor")
      return
    case "org":
      resetZoom()
      zoomFunc("clubs-anchor")
      return
    case "gifted":
      resetZoom()
      zoomFunc("gifted-anchor")
      return
  }
}

export default function Map() {
  const [selected, setSelected] = useState<ViewMode>(buttons[0].name)

  return (
    <main
      style={{ background: "linear-gradient(131.48deg, #FFF1E1 0%, #CFCCD9 104.77%)" }}
      className="min-h-screen w-full py-28"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {({ zoomIn, zoomOut, resetTransform, zoomToElement }) => (
            <div className="flex flex-col items-center mt-2 sm:mt-8">
              {/* <div className="tools">
                <button onClick={() => zoomIn()}>+</button>
                <button onClick={() => zoomOut()}>-</button>
                <button onClick={() => resetTransform()}>x</button>
              </div> */}
              <div className="flex mb-8 gap-4">
                {buttons.map((button) => (
                  <button
                    key={button.name}
                    onClick={() => {
                      doZoom(resetTransform, zoomToElement, button.name)
                      setSelected(button.name)
                    }}
                    className={classNames(
                      selected === button.name ? "bg-orange text-white" : "bg-white text-black",
                      "text-sm sm:text-base rounded-md px-2 sm:px-6 py-2"
                    )}
                  >
                    {button.text}
                  </button>
                ))}
              </div>

              <TransformComponent>
                <TriamOPHMap className="cursor-grab w-full h-[32rem] sm:h-[64rem]" selected={selected} />
              </TransformComponent>
            </div>
          )}
        </TransformWrapper>
      </div>
    </main>
  )
}
