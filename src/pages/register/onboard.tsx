import { NextPage } from "next"

const Onboard: NextPage = () => {
  return (
    <main className="relative py-2 w-full min-h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <p className="font-display text-6xl text-white text-center font-extrabold py-2">ลงทะเบียน</p>
          <p className="font-display text-3xl text-white text-center font-extrabold py-2">กรอกข้อมูลผู้โดยสาร</p>
        </div>
      </div>
    </main>
  )
}

export default Onboard
