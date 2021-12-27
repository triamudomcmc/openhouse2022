import Link from "next/link"

export const Nav = () => {
  return (
    <header className="flex absolute z-50 top-0 left-0 py-2 px-8 mb-16 w-full text-white border-b border-white border-opacity-20 backdrop-blur-lg font-display navbar-bg">
      <div className="flex justify-between mx-auto w-full max-w-6xl">
        <div className="flex space-x-2">
          <img src="/images/logos/openhouse.png" />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold">
              TRIAM UDOM
              <p className="leading-[10px]">ONLINE OPEN HOUSE 2022</p>
            </h1>
          </div>
        </div>
        <nav className="hidden lg:flex items-center space-x-12">
          <Link href="/">
            <a className="font-light hover:border-white border-b border-transparent">หน้าแรก</a>
          </Link>
          <Link href="/programmes">
            <a className="font-light hover:border-white border-b border-transparent">สายการเรียน</a>
          </Link>
          <Link href="/clubs">
            <a className="font-light hover:border-white border-b border-transparent">ชมรม</a>
          </Link>
          <Link href="/videos">
            <a className="font-light hover:border-white border-b border-transparent">วิดีโอ</a>
          </Link>
          <Link href="/articles">
            <a className="font-light hover:border-white border-b border-transparent">บทความ</a>
          </Link>
          <Link href="/info">
            <a className="font-light hover:border-white border-b border-transparent">ข้อมูลเพิ่มเติม</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
