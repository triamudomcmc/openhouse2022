import Image from "next/image"
import Link from "next/link"

function LinkELement({ href, src, alt, text }: { href: string; src: string; alt: string; text: string }) {
  return (
    <Link href={href} passHref>
      <a>
        <div className="flex items-center gap-6 rounded-full border border-white bg-white bg-opacity-70 px-8 py-6 transition-opacity delay-200 hover:bg-opacity-90">
          <Image width={48} height={48} src={src} alt={alt} />
          <p className="font-bold w-36 text-md text-[#000]">{text}</p>
        </div>
      </a>
    </Link>
  )
}

function OPHContact() {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col gap-6">
        <LinkELement
          src="/assets/logo/facebook.png"
          alt="Facebook"
          href="https://www.facebook.com/TriamUdomOPH/"
          text="Triam Udom Open House"
        />
        <LinkELement
          src="/assets/logo/twitter.png"
          alt="Twitter"
          href="https://twitter.com/triamudomoph"
          text="triamudom.oph"
        />
        <LinkELement
          src="/assets/logo/tiktok.png"
          alt="TikTok"
          href="https://www.tiktok.com/@triamudom.oph"
          text="triamudom.oph"
        />
      </div>
      <div className="flex flex-col gap-6">
        <LinkELement
          src="/assets/logo/instagram.png"
          alt="Instagram"
          href="https://www.instagram.com/triamudom.oph/"
          text="triamudom.oph"
        />
        <LinkELement
          src="/assets/logo/youtube.png"
          alt="YouTube"
          href="https://www.youtube.com/c/TriamUdomOpenHouse"
          text="Triam Udom Open House"
        />
      </div>
    </div>
  )
}

function TUCMCContact() {
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <LinkELement
        src="/assets/logo/facebook.png"
        alt="Facebook"
        href="https://www.facebook.com/TriamUdomOPH/"
        text="TUCMC"
      />
      <LinkELement
        src="/assets/logo/instagram.png"
        alt="Instagram"
        href="https://www.facebook.com/TriamUdomOPH/"
        text="tucmc_official"
      />
    </div>
  )
}

export default function Contact() {
  return (
    <main className="text-white px-8 pt-[6.5rem] pb-[2rem] min-h-full bg-normal-gradient">
      <div className="flex flex-col items-center flex-1 w-full max-w-xl mx-auto">
        <h1 className="text-3xl text-center font-bold">
          ช่องทางการติดต่อ
          <br />
          <span className="text-2xl text-center font-medium">Triam Udom Open House 2023</span>
        </h1>

        <OPHContact />

        <hr className="text-white w-full my-6 h-6" />

        <h2 className="text-3xl font-bold">ติดตามผู้จัดงาน</h2>
        <TUCMCContact />
      </div>
    </main>
  )
}
