import { AdaptiveBg } from "@components/common/AdaptiveBg"
import Link from "next/link"

const EmailSent = () => {
  return (
    <AdaptiveBg
      primary={{ background: "url('/images/backgrounds/register.jpg')", height: "1024px" }}
      secondary={{ background: "url('/images/backgrounds/register-mobile.jpg')", height: "926px" }}
      mobile={{ background: "url('/images/backgrounds/register-mobile-default.jpg')", height: "926px" }}
      classname="relative w-full min-h-screen"
      element="main"
    >
      <div className="flex flex-col items-center h-screen justify-center py-8 px-4 space-y-2 text-center">
        <p className="text-xl">ระบบได้ส่งอีเมลยืนยันไปที่อีเมลดังกล่าวแล้ว</p>
        <p className="font-light text-gray-100 px-12">โปรดตรวจสอบกล่องข้อความในอีเมลของท่าน</p>
        <p className="font-light text-sm pt-12 text-gray-100 px-12">
          หากพบปัญหาในการเข้าสู่ระบบ สามารถติดต่อผู้จัดงานได้ที่
          <Link href="/contact">
            <a className="text-pink-900 hover:underline mx-1">ช่องทางดังนี้</a>
          </Link>
        </p>
      </div>
    </AdaptiveBg>
  )
}

export default EmailSent
