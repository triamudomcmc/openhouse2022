import Head from "next/head"

export const MetaData = () => {
  return (
    <Head>
      <title>Triam Udom Online Open House 2022</title>
      <meta
        name="description"
        content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://openhouse.triamudom.ac.th/" />
      <meta property="og:title" content="Triam Udom Online Open House 2022" />
      <meta
        property="og:description"
        content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
      />
      <meta property="og:image" content="/meta/preview.png" />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://openhouse.triamudom.ac.th/" />
      <meta property="twitter:title" content="Triam Udom Online Open House 2022" />
      <meta
        property="twitter:description"
        content="งานนิทรรศการประจำปีของโรงเรียนเตรียมอุดมศึกษา พบกับกิจกรรมที่น่าสนใจจากนักเรียนโรงเรียนเตรียมอุดมศึกษา อาทิ แนะแนวการศึกษาต่อ แนะนำสายการเรียน และกิจกรรมจากชมรมต่าง ๆ"
      />
      <meta property="twitter:image" content="/meta/preview.png" />
    </Head>
  )
}
