/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef, FC } from "react"
import Image from "next/image"

import { toBase64 } from "@utilities/imgToBase"

import { motion } from "framer-motion"
import { PhotographIcon } from "@heroicons/react/outline"

const ImageUploader: FC<{
  // width: string
  // height: string
  editable: boolean
  className?: string
  uploadFunction?
  purpose?
  link?
}> = ({ className, uploadFunction, purpose, link }) => {
  const [image, setImage] = useState(null)

  const uploader = useRef(null)
  // const doUpload = async (e) => {
  //     const data = await toBase64(e.target.files[0])
  //     //@ts-ignore
  //     setImage(data)
  // }

  async function setLocalImage(e) {
    const data = await toBase64(e.target.files[0])
    setImage(data)
  }

  return (
    <div className={`relative w-full h-full mx-auto`}>
      {!image ? (
        <img
          alt={link ? link : null}
          src={link ? link : null}
          width="768"
          height="432"
          className={`mb-[0px] w-full h-full object-cover bg-[#D9D9D9] ${className}`}
        />
      ) : (
        <img
          alt={image}
          src={image}
          width="768"
          height="432"
          className={`mb-[0px] w-full h-full object-cover bg-[#D9D9D9] ${className}`}
        />
      )}
      <input
        className="hidden"
        ref={uploader}
        onChange={(e) => {
          uploadFunction(e, purpose)
          setLocalImage(e)
        }}
        type="file"
        accept="image/png, image/jpeg, image/heif"
      />
      <motion.div
        onClick={() => {
          uploader.current.click()
        }}
        initial={{ opacity: 0.4 }}
        whileHover={{ opacity: 1 }}
        className={`absolute top-0 flex items-center justify-center w-full h-full opacity-0 cursor-pointer ${className}`}
      >
        {/* <PhotographIcon /> */}
      </motion.div>
    </div>
  )
}

export default ImageUploader
