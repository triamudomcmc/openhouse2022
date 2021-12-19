import Router from "next/router"

export default function Home() {

  return (
    <div className="font-display">
      <div>
        <div style={{background: "url('images/backgrounds/branches.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", minHeight: "1771px", backgroundPosition: "center"}}
             className="overflow-x-hidden min-h-screen pb-20 text-white">
          <div className="pl-[200px] mx-auto w-max h-[760px]">
            <div className="mt-[300px] relative w-max">
              <h1 className="text-6xl font-semibold leading-[80px] z-[10] relative w-max">
                มาตามหา<br/>
                สายการเรียน<br/>
                ที่คุณอยากจะ<br/>
                ทำความรู้จักกัน !
              </h1>
              <div className="w-[394px] h-[96px] absolute border-[5px] border-yellow-500 rounded-[50%] rotate-[-6deg] top-[74px] left-[-34px] z-[2]"/>
              <h1 className="font-light text-xl tracking-wider mt-10 w-max">คลิกที่ดวงดาวเพื่ออ่านข้อมูลสายการเรียน</h1>
            </div>
          </div>
          <div className="flex flex-row mx-auto justify-evenly max-w-[1440px]">
            <div className="space-y-20 flex-shrink-0">
              <div onClick={() => {Router.push("/programmes/sci-math")}} className="text-center">
                <img src="images/branches/sci-math.png"/>
                <h1 className="font-light">วิทย์-คณิต</h1>
              </div>
              <div className="text-center">
                <img src="images/branches/frances.png"/>
                <h1 className="font-light">ศิลป์ฝรั่งเศส</h1>
              </div>
            </div>
            <div className="space-y-20 mt-20 flex-shrink-0">
              <div className="text-center">
                <img src="images/branches/art-math.png"/>
                <h1 className="font-light">ศิลป์คำนวณ</h1>
              </div>
              <div className="text-center">
                <img src="images/branches/chinese.png"/>
                <h1 className="font-light">ศิลป์จีน</h1>
              </div>
            </div>
            <div className="space-y-20 flex-shrink-0">
              <div className="text-center">
                <img src="images/branches/german.png"/>
                <h1 className="font-light">ศิลป์เยอรมัน</h1>
              </div>
              <div className="text-center">
                <img src="images/branches/japanese.png"/>
                <h1 className="font-light">ศิลป์ญี่ปุ่น</h1>
              </div>
            </div>
            <div className="space-y-20 mt-20 flex-shrink-0">
              <div className="text-center">
                <img src="images/branches/espanol.png"/>
                <h1 className="font-light">ศิลป์สเปน</h1>
              </div>
              <div className="text-center">
                <img src="images/branches/koera.png"/>
                <h1 className="font-light">ศิลป์เกาหลี</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
