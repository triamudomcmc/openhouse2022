import Link from "next/link"

export const Nav = () => {
  return (
    <header
      className="flex absolute z-50 top-0 left-0 py-2 px-8 mb-16 w-full text-white border-b border-white border-opacity-20 backdrop-blur-lg font-display navbar-bg">
      <div className="flex justify-between mx-auto w-full max-w-6xl">
        <div className="flex space-x-2">
          <img src="/images/logos/openhouse.png"/>
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">
              TRIAM UDOM
              <p className="leading-[10px]">ONLINE OPEN HOUSE 2022</p>
            </h1>
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-12">
          <Link href="/_index">
            <span className="font-medium flex-shrink-0 cursor-pointer">หน้าแรก</span>
          </Link>
          <span className="flex-shrink-0 cursor-pointer">สายการเรียน</span>
          <Link href="/clubs">
            <span className="flex-shrink-0 cursor-pointer">ชมรม</span>
          </Link>
          <span className="flex-shrink-0 cursor-pointer">วิดีโอ</span>
          <span className="flex-shrink-0 cursor-pointer">บทความ</span>
          <span className="flex-shrink-0 cursor-pointer">ข้อมูลเพิ่มเติม</span>
        </nav>
      </div>
    </header>
  )
}
