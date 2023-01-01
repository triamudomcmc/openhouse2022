import { TriamOPHMap } from "@components/map"

export default function Map() {
  return (
    <main
      style={{ background: "linear-gradient(131.48deg, #FFF1E1 0%, #CFCCD9 104.77%)" }}
      className="min-h-screen w-full py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <h1 className="text-2xl font-bold text-blue-text text-center">แผนผังงาน</h1>
          <p className="text-xl font-bold text-blue-text text-center">Triam Udom Open House 2023</p>
        </div>

        <div className="flex justify-center mt-8">
          <TriamOPHMap className="max-h-[64rem]" />
        </div>
      </div>
    </main>
  )
}
