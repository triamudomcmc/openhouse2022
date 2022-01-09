import { AdaptiveBg } from "@components/common/AdaptiveBg"
import Link from "next/link"

const EmailSent = () => {
  return (
    <AdaptiveBg
      primary={{ background: "/images/backgrounds/register.jpg", height: "1024px" }}
      secondary={{ background: "/images/backgrounds/register-mobile.jpg", height: "926px" }}
      mobile={{ background: "/images/backgrounds/register-mobile-default.jpg", height: "926px" }}
      classname="relative w-full min-h-screen"
      element="main"
    >
      <div className="flex flex-col font-display items-center h-screen justify-center py-8 px-4 space-y-6 text-center">
        <p className="text-xl">ระบบได้ส่งอีเมลยืนยันไปที่อีเมลดังกล่าวแล้ว</p>
        <p className="font-light text-gray-100 px-12">โปรดตรวจสอบกล่องข้อความในอีเมลของท่าน</p>
        <div className="font-light rounded-lg bg-slate-900 border border-gray-400 bg-opacity-25 backdrop-blur-lg text-sm py-4 mt-12 text-gray-100 px-12">
          หากพบปัญหาในการเข้าสู่ระบบ สามารถติดต่อผู้จัดงานได้ที่
          <Link href="/contact">
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
    </AdaptiveBg>
  )
}

export default EmailSent
