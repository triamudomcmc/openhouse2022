import { Storage } from "@google-cloud/storage"
import { getFirestore } from "@lib/firebase-admin"

import { gcpCert } from "@config/gcpConfig"
import { executeOverPerm } from "./permCheck"
import { updatePendingImage } from "@lib/dbMethod"

export const toGCP = async (req, ID) => {
    const gcpStorage = new Storage(gcpCert)
    const gcpOptions = {
        expires: Date.now() + 1 * 60 * 1000, //  1 minute,
        fields: { "x-goog-meta-test": "data" },
      }
    const gcpBucket = gcpStorage.bucket(process.env.GCP_BUCKET_NAME)
    const tmpFileName = `${ID}-${new Date().getTime()}`

    const file = gcpBucket.file(tmpFileName)
    await updatePendingImage(ID, {
        
    })
    
    const [response] = await file.generateSignedPostPolicyV4(gcpOptions)

    return response
}
