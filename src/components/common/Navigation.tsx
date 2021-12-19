export const Navigation = () => {
  return (
    <div className="flex py-2 px-8 w-full text-white border-b border-white border-opacity-20 font-display navbar-bg">
      <div className="flex justify-between mx-auto w-full max-w-6xl">
        <div className="flex space-x-2">
          <img src="/images/logos/openhouse.png"/>
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">TRIAM UDOM</h1>
            <p className="leading-[10px]">ONLINE OPEN HOUSE 2022</p>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-12">
          <span className="font-medium underline flex-shrink-0">หน้าแรก</span>
          <span className="flex-shrink-0">สายการเรียน</span>
          <span className="flex-shrink-0">ชมรม</span>
          <span className="flex-shrink-0">วิดีโอ</span>
          <span className="flex-shrink-0">บทความ</span>
          <span className="flex-shrink-0">ข้อมูลเพิ่มเติม</span>
        </div>
      </div>
    </div>
  )
}
