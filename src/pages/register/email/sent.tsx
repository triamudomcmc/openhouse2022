import Link from "next/link"

const EmailSent = () => {
  return (
    <div className="flex flex-col font-display items-center h-screen justify-center py-8 px-4 space-y-6 text-center">
      <p className="text-xl">ระบบได้ส่งอีเมลยืนยันไปที่อีเมลดังกล่าวแล้ว</p>
      <p className="font-light text-gray-100 px-12">โปรดตรวจสอบกล่องข้อความในอีเมลของท่าน</p>
      <div className="font-light rounded-lg bg-slate-900 border border-gray-400 bg-opacity-25 backdrop-blur-lg text-sm py-4 mt-12 text-gray-100 px-12">
        หากพบปัญหาในการเข้าสู่ระบบ สามารถติดต่อผู้จัดงานได้ที่
        <Link passHref href="/contact">
          <a className="text-white underline mx-1">ช่องทางดังนี้</a>
        </Link>
        <br />
        <div className="mt-4">
          หมายเหตุ:
          <ul>
            <li>1. ต้องใช้ browser เดียวกันกับ browser นี้ในการยืนยันลิงก์ที่ส่งจากทางอีเมล</li>
            <li>2. หากตรวจสอบแล้วไม่พบอีเมลยืนยัน รบกวนตรวจสอบ spam mail ในกล่องข้อความของท่าน</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EmailSent
