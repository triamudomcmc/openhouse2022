import { useEffect, useState } from "react"
import classnames from "classnames"

const COLORS = {
  bts: "#CA4141",
  bus: "#E96F26",
  mrt: "#37498B",
}

export default function Directions() {
  const [currentTab, setCurrentTab] = useState<"bus" | "bts" | "mrt">("bts")
  const [map, setMap] = useState(
    <object
      key={"b"}
      data="/assets/images/directions/bts.svg"
      className="w-[100%] h-[404px] lg:w-[700px] lg:h-[884px]"
    />
  )

  const des = {
    bts: (
      <div className="space-y-10 mt-10">
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="w-10 h-10 rounded-full font-black text-2xl flex justify-center items-center"
          >
            1
          </p>
          <div>
            <h2 className="text-xl font-semibold">เดินจากสถานี BTS สยาม</h2>
            <p className="text-lg font-light">ฝั่งถนนพญาไท ประมาณ 900 เมตร</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="w-10 h-10 rounded-full font-black text-2xl flex justify-center items-center"
          >
            2
          </p>
          <div>
            <h2 className="text-xl font-semibold">เดินจากสถานี BTS สยาม</h2>
            <p className="text-lg font-light">ฝั่งถนนอังรีดูนังต์ ประมาณ 700 เมตร</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="w-10 h-10 rounded-full font-black text-2xl flex justify-center items-center"
          >
            3
          </p>
          <div>
            <h2 className="text-xl font-semibold">เดินจากสถานี BTS สนามกีฬาฯ</h2>
            <p className="text-lg font-light">ฝั่งถนนพญาไท ประมาณ 800 เมตร</p>
          </div>
        </div>
      </div>
    ),
    bus: (
      <div className="space-y-10 mt-10">
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="w-10 h-10 rounded-full font-black text-2xl flex justify-center items-center"
          >
            1
          </p>
          <div>
            <h2 className="text-xl font-semibold">รถประจำทาง</h2>
            <p className="text-lg font-light">
              ลงป้ายรถประจำทางหน้าโรงเรียน
              <br />
              ฝั่งถนนพญาไท
              <br />
              สาย 21, 25, 29, 34, 36, 40, 47, 50
              <br />
              93, 113, 141, 187, 542
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="w-10 h-10 rounded-full font-black text-2xl flex justify-center items-center"
          >
            2
          </p>
          <div>
            <h2 className="text-xl font-semibold">รถประจำทาง</h2>
            <p className="text-lg font-light">
              ลงป้ายรถประจำทางหน้าโรงเรียน <br />
              ฝั่งถนนอังรีดูนังต์
              <br />
              สาย 16, 21
            </p>
          </div>
        </div>
      </div>
    ),
    mrt: (
      <div className="space-y-10 mt-10">
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="w-10 h-10 rounded-full font-black text-2xl flex justify-center items-center"
          >
            1
          </p>
          <div>
            <h2 className="text-xl font-semibold">เดินจากสถานี MRT สามย่าน</h2>
            <p className="text-lg font-light">ฝั่งถนนพญาไท ประมาณ 800 เมตร</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <p
            style={{ backgroundColor: COLORS[currentTab] }}
            className="w-10 h-10 rounded-full font-black text-2xl flex justify-center items-center"
          >
            2
          </p>
          <div>
            <h2 className="text-xl font-semibold">เดินจากสถานี MRT สามย่าน</h2>
            <p className="text-lg font-light">ฝั่งถนนอังรีดูนังต์ ประมาณ 1,200 เมตร</p>
          </div>
        </div>
      </div>
    ),
  }

  useEffect(() => {
    switch (currentTab) {
      case "bts":
        setMap(
          <object
            key={"b"}
            data="/assets/images/directions/bts.svg"
            className="w-[100%] h-[404px] lg:w-[700px] lg:h-[884px]"
          />
        )
        break
      case "bus":
        setMap(
          <object
            key={"a"}
            data="/assets/images/directions/bus.svg"
            className="w-[100%] h-[404px] lg:w-[700px] lg:h-[884px]"
          />
        )
        break
      case "mrt":
        setMap(
          <object
            key={"d"}
            data="/assets/images/directions/mrt.svg"
            className="w-[100%] h-[404px] lg:w-[700px] lg:h-[876px]"
          />
        )
    }
  }, [currentTab])

  return (
    <main className="min-h-screen text-white bg-normal-gradient">
      <div className="pt-32 pb-24 max-w-[2200px] mx-auto">
        <h1 className="text-2xl font-black text-center">การเดินทาง</h1>

        {/* การเดินทาง */}

        <div className="flex md:flex-row flex-col">
          <div className="relative mx-auto min-w-[320px]">
            {map}
            <div className="absolute top-24 right-0 flex flex-col md:hidden space-y-2">
              {/* bus */}
              <div>
                <div
                  onClick={() => {
                    setCurrentTab("bus")
                  }}
                  style={{
                    backgroundColor: currentTab === "bus" ? COLORS[currentTab] : "white",
                  }}
                  className={classnames(
                    "cursor-pointer flex justify-center items-center w-[60px] h-[60px] rounded-full shadow-md"
                  )}
                >
                  <svg
                    viewBox="0 0 53 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classnames("w-[28px]", currentTab !== "bus" ? "text-[#C4C4C4]" : "text-white")}
                  >
                    <path
                      d="M26.6727 0.03125C40.8754 0.03125 52.3789 1.63794 52.3789 12.8843V45.017C52.3789 47.8607 51.1257 50.3832 49.1657 52.1504V57.8701C49.1657 59.6374 47.7197 61.0834 45.9525 61.0834H42.7391C40.9557 61.0834 39.5259 59.6374 39.5259 57.8701V54.6569H13.8196V57.8701C13.8196 59.6374 12.3898 61.0834 10.6064 61.0834H7.3932C5.62595 61.0834 4.17998 59.6374 4.17998 57.8701V52.1506C2.21994 50.3833 0.966759 47.8608 0.966759 45.0171V12.8843C0.966606 1.63794 12.4701 0.03125 26.6727 0.03125ZM41.1324 48.2303C43.7995 48.2303 45.9523 46.0775 45.9523 43.4104C45.9523 40.7434 43.7995 38.5905 41.1324 38.5905C38.4653 38.5905 36.3125 40.7434 36.3125 43.4104C36.3125 46.0775 38.4655 48.2303 41.1324 48.2303ZM12.213 48.2303C14.88 48.2303 17.0329 46.0775 17.0329 43.4104C17.0329 40.7434 14.88 38.5905 12.213 38.5905C9.54589 38.5905 7.39305 40.7434 7.39305 43.4104C7.39305 46.0775 9.54604 48.2303 12.213 48.2303ZM7.39305 28.9507H45.9523V12.8843H7.39305V28.9507Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-center text-xs mt-1">รถประจำทาง</h2>
              </div>

              {/* bts */}
              <div>
                <div
                  onClick={() => {
                    setCurrentTab("bts")
                  }}
                  style={{
                    backgroundColor: currentTab === "bts" ? COLORS[currentTab] : "white",
                  }}
                  className={classnames(
                    "cursor-pointer flex justify-center items-center w-[60px] h-[60px] rounded-full shadow-md"
                  )}
                >
                  <svg
                    viewBox="0 0 52 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classnames("w-[28px]", currentTab !== "bts" ? "text-[#575757]" : "text-white")}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M49.5082 12.8724L49.6111 18.8122C42.0015 18.7626 37.6714 20.8552 33.0288 23.7185C26.2116 28.1003 22.3952 35.8408 19.9558 45.1224C19.2202 49.8675 18.5832 52.9383 18.8235 59.3576H12.4414C12.9814 46.2241 13.7959 44.2843 14.6031 42.0501C16.0887 36.2863 18.3333 31.4285 21.191 27.3029C24.2642 23.2742 27.4926 19.6059 31.3818 17.4714C35.408 15.1096 39.4421 12.8088 49.5082 12.8724Z"
                      fill="#C4C4C4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.48438 12.8242L2.5119 18.6924C10.1682 18.5499 14.4574 20.8535 19.1 23.7168C26.0948 28.9817 29.5156 36.4955 31.8642 45.3255C32.4652 50.026 32.9236 52.7304 33.3053 59.3559H39.6874C39.1474 46.2224 38.3329 44.2826 37.5257 42.0484C36.0401 36.2846 33.7955 31.4268 30.9378 27.3012C27.8646 23.2725 24.6362 19.6042 20.747 17.4697C16.3157 15.1079 11.9085 12.8468 2.48438 12.8242Z"
                      fill="#E7E7E7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.0236 59.3538H28.7881C28.8457 55.8595 29.366 51.1789 30.247 46.0463C31.2307 41.8507 33.1065 37.7819 36.0114 33.8594C37.6907 32.4145 39.4296 30.963 43.5258 29.2509C45.9937 28.8088 47.8768 28.894 49.5333 28.9901L49.58 22.6406C47.2676 22.6538 44.9757 22.7081 42.9082 23.2086C40.4084 23.7284 37.7582 24.6667 33.438 28.0219C30.2153 31.0838 28.2302 34.556 26.6442 38.1607C24.0599 44.6161 22.7891 52.1495 23.0236 59.3538Z"
                      fill="#C4C4C4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.8144 59.4049H22.9965C22.9389 55.9107 22.5077 51.1769 21.6266 46.0443C20.643 41.8487 18.7671 37.7799 15.8622 33.8574C14.1829 32.4124 12.444 30.9609 8.34779 29.2489C5.87994 28.8068 4.9663 28.7168 2.5625 28.7199L2.57085 22.5563C9.35104 22.4898 13.6858 24.4684 18.4356 28.0199C21.6584 31.0817 23.6434 34.554 25.2294 38.1586C27.8137 44.614 29.0489 52.2007 28.8144 59.4049Z"
                      fill="#E4E4E4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.60168 1.98438L2.53125 8.9681L16.1478 8.98367C18.2325 8.07384 17.9476 6.64428 17.2277 5.42563C18.2622 3.60374 17.7232 2.60641 16.2965 1.98438H2.60168ZM4.51895 3.11329L15.3574 3.21451C16.1222 3.48871 16.0049 4.57479 15.3339 4.81835L6.64752 4.78721L5.52846 6.03291L15.3183 6.07184C16.1699 6.25028 15.9461 7.45251 15.3339 7.56668L4.55026 7.54332L4.51895 3.11329Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.7773 3.05793L19.643 1.99408L34.3332 1.96875L33.2893 3.15924L27.0517 3.13391L27.0629 8.97978L25.0404 8.97767V3.10858L18.7773 3.05793Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M49.5591 1.94492L36.2052 1.9375C35.5089 1.93848 34.3224 2.90367 34.3088 4.04727C34.2951 5.1908 35.1638 6.07109 36.2244 6.18545L47.2272 6.24561C47.9205 6.29463 48.1498 6.6243 48.1324 6.996C48.1151 7.3677 47.9092 7.6194 47.3432 7.6799L35.6072 7.6694L34.5135 8.98629L48.2604 9.01903C48.5359 9.04178 49.8012 8.45002 49.8 6.8916C49.7989 5.33319 48.6222 4.94181 48.283 4.95172L36.3671 4.93915C36.0966 4.92103 35.7615 4.61365 35.7653 4.1286C35.7691 3.64308 36.061 3.32244 36.3416 3.24206L48.3115 3.26948L49.5591 1.94492Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <h2 className="text-center text-xs mt-1">BTS</h2>
              </div>

              {/* mrt */}
              <div>
                <div
                  onClick={() => {
                    setCurrentTab("mrt")
                  }}
                  style={{
                    backgroundColor: currentTab === "mrt" ? COLORS[currentTab] : "white",
                  }}
                  className={classnames(
                    "cursor-pointer flex justify-center items-center w-[60px] h-[60px] rounded-full shadow-md"
                  )}
                >
                  {currentTab !== "mrt" ? (
                    <svg className="w-[38px]" viewBox="0 0 72 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1221_4808)">
                        <path
                          d="M36.0691 0.539062C16.4341 0.539062 0.515625 16.2372 0.515625 35.6091C0.515625 46.322 5.38457 55.9135 13.0572 62.3474H59.0728C66.7471 55.9135 71.6226 46.3234 71.6226 35.6091C71.6226 16.2372 55.7041 0.539062 36.0691 0.539062Z"
                          fill="#C4C4C4"
                        />
                        <path
                          d="M12.5 55.1724V14.8398H27.1373L36.0674 32.2562L45.1146 14.8398H59.6208V55.1724H46.4992V33.5984L40.2683 46.2725H31.3537L25.0743 33.5984V55.1724H12.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1221_4808">
                          <rect
                            width="71.1069"
                            height="61.8083"
                            fill="white"
                            transform="translate(0.515625 0.539062)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg className="w-[38px]" viewBox="0 0 72 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1221_5087)">
                        <path
                          d="M36.0691 0.539062C16.4341 0.539062 0.515625 16.2372 0.515625 35.6091C0.515625 46.322 5.38457 55.9135 13.0572 62.3474H59.0728C66.7471 55.9135 71.6226 46.3234 71.6226 35.6091C71.6226 16.2372 55.7041 0.539062 36.0691 0.539062Z"
                          fill="white"
                        />
                        <path
                          d="M12.5 55.1724V14.8398H27.1373L36.0674 32.2562L45.1146 14.8398H59.6208V55.1724H46.4992V33.5984L40.2683 46.2725H31.3537L25.0743 33.5984V55.1724H12.5Z"
                          fill={COLORS[currentTab]}
                        />
                        <path
                          d="M12.5 55.1724V14.8398H27.1373L36.0674 32.2562L45.1146 14.8398H59.6208V55.1724H46.4992V33.5984L40.2683 46.2725H31.3537L25.0743 33.5984V55.1724H12.5Z"
                          fill="black"
                          fillOpacity="0.2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1221_5087">
                          <rect
                            width="71.1069"
                            height="61.8083"
                            fill="white"
                            transform="translate(0.515625 0.539062)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>

                <h2 className="text-center text-xs mt-1">MRT</h2>
              </div>
            </div>
          </div>
          <div className="relative z-50 mt-8 mx-auto md:mt-64 md:ml-[-200px]">
            <div className="space-x-4 hidden md:flex">
              {/* bus */}
              <div>
                <div
                  onClick={() => {
                    setCurrentTab("bus")
                  }}
                  style={{
                    backgroundColor: currentTab === "bus" ? COLORS[currentTab] : "white",
                  }}
                  className={classnames(
                    "cursor-pointer flex justify-center items-center w-[107px] h-[107px] rounded-full shadow-md"
                  )}
                >
                  <svg
                    width="53"
                    height="62"
                    viewBox="0 0 53 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classnames(currentTab !== "bus" ? "text-[#C4C4C4]" : "text-white")}
                  >
                    <path
                      d="M26.6727 0.03125C40.8754 0.03125 52.3789 1.63794 52.3789 12.8843V45.017C52.3789 47.8607 51.1257 50.3832 49.1657 52.1504V57.8701C49.1657 59.6374 47.7197 61.0834 45.9525 61.0834H42.7391C40.9557 61.0834 39.5259 59.6374 39.5259 57.8701V54.6569H13.8196V57.8701C13.8196 59.6374 12.3898 61.0834 10.6064 61.0834H7.3932C5.62595 61.0834 4.17998 59.6374 4.17998 57.8701V52.1506C2.21994 50.3833 0.966759 47.8608 0.966759 45.0171V12.8843C0.966606 1.63794 12.4701 0.03125 26.6727 0.03125ZM41.1324 48.2303C43.7995 48.2303 45.9523 46.0775 45.9523 43.4104C45.9523 40.7434 43.7995 38.5905 41.1324 38.5905C38.4653 38.5905 36.3125 40.7434 36.3125 43.4104C36.3125 46.0775 38.4655 48.2303 41.1324 48.2303ZM12.213 48.2303C14.88 48.2303 17.0329 46.0775 17.0329 43.4104C17.0329 40.7434 14.88 38.5905 12.213 38.5905C9.54589 38.5905 7.39305 40.7434 7.39305 43.4104C7.39305 46.0775 9.54604 48.2303 12.213 48.2303ZM7.39305 28.9507H45.9523V12.8843H7.39305V28.9507Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className="text-center mt-1">รถประจำทาง</h2>
              </div>
              {/* bts */}
              <div>
                <div
                  onClick={() => {
                    setCurrentTab("bts")
                  }}
                  style={{
                    backgroundColor: currentTab === "bts" ? COLORS[currentTab] : "white",
                  }}
                  className={classnames(
                    "cursor-pointer flex justify-center items-center w-[107px] h-[107px] rounded-full shadow-md"
                  )}
                >
                  <svg
                    width="52"
                    height="61"
                    viewBox="0 0 52 61"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classnames(currentTab !== "bts" ? "text-[#575757]" : "text-white")}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M49.5082 12.8724L49.6111 18.8122C42.0015 18.7626 37.6714 20.8552 33.0288 23.7185C26.2116 28.1003 22.3952 35.8408 19.9558 45.1224C19.2202 49.8675 18.5832 52.9383 18.8235 59.3576H12.4414C12.9814 46.2241 13.7959 44.2843 14.6031 42.0501C16.0887 36.2863 18.3333 31.4285 21.191 27.3029C24.2642 23.2742 27.4926 19.6059 31.3818 17.4714C35.408 15.1096 39.4421 12.8088 49.5082 12.8724Z"
                      fill="#C4C4C4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.48438 12.8242L2.5119 18.6924C10.1682 18.5499 14.4574 20.8535 19.1 23.7168C26.0948 28.9817 29.5156 36.4955 31.8642 45.3255C32.4652 50.026 32.9236 52.7304 33.3053 59.3559H39.6874C39.1474 46.2224 38.3329 44.2826 37.5257 42.0484C36.0401 36.2846 33.7955 31.4268 30.9378 27.3012C27.8646 23.2725 24.6362 19.6042 20.747 17.4697C16.3157 15.1079 11.9085 12.8468 2.48438 12.8242Z"
                      fill="#E7E7E7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.0236 59.3538H28.7881C28.8457 55.8595 29.366 51.1789 30.247 46.0463C31.2307 41.8507 33.1065 37.7819 36.0114 33.8594C37.6907 32.4145 39.4296 30.963 43.5258 29.2509C45.9937 28.8088 47.8768 28.894 49.5333 28.9901L49.58 22.6406C47.2676 22.6538 44.9757 22.7081 42.9082 23.2086C40.4084 23.7284 37.7582 24.6667 33.438 28.0219C30.2153 31.0838 28.2302 34.556 26.6442 38.1607C24.0599 44.6161 22.7891 52.1495 23.0236 59.3538Z"
                      fill="#C4C4C4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.8144 59.4049H22.9965C22.9389 55.9107 22.5077 51.1769 21.6266 46.0443C20.643 41.8487 18.7671 37.7799 15.8622 33.8574C14.1829 32.4124 12.444 30.9609 8.34779 29.2489C5.87994 28.8068 4.9663 28.7168 2.5625 28.7199L2.57085 22.5563C9.35104 22.4898 13.6858 24.4684 18.4356 28.0199C21.6584 31.0817 23.6434 34.554 25.2294 38.1586C27.8137 44.614 29.0489 52.2007 28.8144 59.4049Z"
                      fill="#E4E4E4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.60168 1.98438L2.53125 8.9681L16.1478 8.98367C18.2325 8.07384 17.9476 6.64428 17.2277 5.42563C18.2622 3.60374 17.7232 2.60641 16.2965 1.98438H2.60168ZM4.51895 3.11329L15.3574 3.21451C16.1222 3.48871 16.0049 4.57479 15.3339 4.81835L6.64752 4.78721L5.52846 6.03291L15.3183 6.07184C16.1699 6.25028 15.9461 7.45251 15.3339 7.56668L4.55026 7.54332L4.51895 3.11329Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.7773 3.05793L19.643 1.99408L34.3332 1.96875L33.2893 3.15924L27.0517 3.13391L27.0629 8.97978L25.0404 8.97767V3.10858L18.7773 3.05793Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M49.5591 1.94492L36.2052 1.9375C35.5089 1.93848 34.3224 2.90367 34.3088 4.04727C34.2951 5.1908 35.1638 6.07109 36.2244 6.18545L47.2272 6.24561C47.9205 6.29463 48.1498 6.6243 48.1324 6.996C48.1151 7.3677 47.9092 7.6194 47.3432 7.6799L35.6072 7.6694L34.5135 8.98629L48.2604 9.01903C48.5359 9.04178 49.8012 8.45002 49.8 6.8916C49.7989 5.33319 48.6222 4.94181 48.283 4.95172L36.3671 4.93915C36.0966 4.92103 35.7615 4.61365 35.7653 4.1286C35.7691 3.64308 36.061 3.32244 36.3416 3.24206L48.3115 3.26948L49.5591 1.94492Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <h2 className="text-center mt-1">BTS</h2>
              </div>
              {/* mrt */}
              <div>
                <div
                  onClick={() => {
                    setCurrentTab("mrt")
                  }}
                  style={{
                    backgroundColor: currentTab === "mrt" ? COLORS[currentTab] : "white",
                  }}
                  className={classnames(
                    "cursor-pointer flex justify-center items-center w-[107px] h-[107px] rounded-full shadow-md"
                  )}
                >
                  {currentTab !== "mrt" ? (
                    <svg width="72" height="63" viewBox="0 0 72 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1221_4808)">
                        <path
                          d="M36.0691 0.539062C16.4341 0.539062 0.515625 16.2372 0.515625 35.6091C0.515625 46.322 5.38457 55.9135 13.0572 62.3474H59.0728C66.7471 55.9135 71.6226 46.3234 71.6226 35.6091C71.6226 16.2372 55.7041 0.539062 36.0691 0.539062Z"
                          fill="#C4C4C4"
                        />
                        <path
                          d="M12.5 55.1724V14.8398H27.1373L36.0674 32.2562L45.1146 14.8398H59.6208V55.1724H46.4992V33.5984L40.2683 46.2725H31.3537L25.0743 33.5984V55.1724H12.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1221_4808">
                          <rect
                            width="71.1069"
                            height="61.8083"
                            fill="white"
                            transform="translate(0.515625 0.539062)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg width="72" height="63" viewBox="0 0 72 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1221_5087)">
                        <path
                          d="M36.0691 0.539062C16.4341 0.539062 0.515625 16.2372 0.515625 35.6091C0.515625 46.322 5.38457 55.9135 13.0572 62.3474H59.0728C66.7471 55.9135 71.6226 46.3234 71.6226 35.6091C71.6226 16.2372 55.7041 0.539062 36.0691 0.539062Z"
                          fill="white"
                        />
                        <path
                          d="M12.5 55.1724V14.8398H27.1373L36.0674 32.2562L45.1146 14.8398H59.6208V55.1724H46.4992V33.5984L40.2683 46.2725H31.3537L25.0743 33.5984V55.1724H12.5Z"
                          fill={COLORS[currentTab]}
                        />
                        <path
                          d="M12.5 55.1724V14.8398H27.1373L36.0674 32.2562L45.1146 14.8398H59.6208V55.1724H46.4992V33.5984L40.2683 46.2725H31.3537L25.0743 33.5984V55.1724H12.5Z"
                          fill="black"
                          fillOpacity="0.2"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1221_5087">
                          <rect
                            width="71.1069"
                            height="61.8083"
                            fill="white"
                            transform="translate(0.515625 0.539062)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </div>

                <h2 className="text-center mt-1">MRT</h2>
              </div>
            </div>
            {des[currentTab]}
          </div>
        </div>

        {/* Google Maps */}

        <div className="py-4 px-6 max-w-[1380px] mx-auto mt-14">
          <h2 className="text-2xl mt-8 mb-8 font-semibold text-center">Google Maps</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.637467491092!2d100.52848511460412!3d13.740385290354828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed3828ba8e5%3A0xf0db3be87e158217!2sTriam%20Udom%20Suksa%20School!5e0!3m2!1sen!2sth!4v1642656766845!5m2!1sen!2sth"
            width="600"
            height="450"
            className="mx-auto rounded-lg aspect-square sm:aspect-video w-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  )
}
