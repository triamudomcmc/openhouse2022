import { Storage } from "@google-cloud/storage"
import fs from 'fs'

import { getFirestore } from "@lib/firebase-admin"
import { gcpCert } from "@config/gcpConfig"
import { updateImage, updateProfileImage } from "@lib/dbMethod"

const gcpStorage = new Storage(gcpCert)
const gcpBucket = gcpStorage.bucket(process.env.GCP_BUCKET_NAME)

export const getImage = async (req, ID) => {
    const data = await JSON.parse(req)
    const gcpOptions = {
        version: 'v4',
        action: 'read',
        expires: Date.now() + 60 * 60 * 1000, // 60 minutes
    }

    let finalUrl = {}
    for (let key in data) {
        //@ts-ignore
        const url = await gcpBucket.file(data[key]).getSignedUrl(gcpOptions)
        finalUrl[key] = url
    }
    return finalUrl
}

export const toGCP = async (req, ID) => {
    const data = JSON.parse(req)
    const gcpOptions = {
        expires: Date.now() + 1 * 60 * 1000, //  1 minute,
        fields: { "x-goog-meta-test": "data" },
      }
    const tmpFileName = `${ID}-${data.purpose}-${data.fileName}`
    const file = gcpBucket.file(tmpFileName)

    if ((data.purpose).includes('profile')){
        let mdat = data.Reviews
        mdat[data.ReviewIndex]['Image'] = tmpFileName
        await updateProfileImage(ID, mdat)
    }
    else await updateImage(ID, tmpFileName, data.purpose)
    
    const [response] = await file.generateSignedPostPolicyV4(gcpOptions)
    return response
}

export const downGCP = async (req, ID) => {
    const data = JSON.parse(req)
    const tmpFileName = data.fileName

    for (let index in tmpFileName) {
        const gcpOptions = {
            destination: `public/images/${ID}/${tmpFileName[index]}.jpg`
        }
        
        if (!fs.existsSync(`public/images/${ID}`)) fs.mkdirSync(`public/images/${ID}`)
        await gcpBucket.file(tmpFileName[index]).download(gcpOptions)
        await delGCP(tmpFileName[index])
    }
    return true
}

export const delGCP = async (fileName) => {
    return await gcpBucket.file(fileName).delete()
}
