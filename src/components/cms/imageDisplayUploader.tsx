import { useState, useEffect, useRef, FC } from 'react'
import { toBase64 } from 'src/utilities/imgToBase'
import { motion } from 'framer-motion'
import { PhotographIcon } from "@heroicons/react/outline"


const ImageUploader :FC<{

    // width: string
    // height: string
    // editable: boolean
    className?: string

  }> = ({ className }) => {

    const [image, setImage] = useState(null)

    const uploader = useRef(null)
    const doUpload = async (e) => {
        const data = await toBase64(e.target.files[0])
        //@ts-ignore
        setImage(data)
    }
    
    return (
      <div className={`relative w-full h-full mx-auto`}>
          {!image
            ? null
            : <img 
                alt={image}
                src={image}
                width="768"
                height="432"
                className={`mb-[0px] w-full h-full object-cover bg-[#D9D9D9] ${className}`}
              />
          }
          <input 
            className='hidden'
            ref={uploader}
            onChange={doUpload}
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