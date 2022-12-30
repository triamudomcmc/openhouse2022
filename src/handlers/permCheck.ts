import { getUserData } from "@lib/clientDB"

export const executeOverPerm = async (req, res, perms, callback: (req, res) => any) => {
  const uid = JSON.parse(req.body).executerUid
  const executerRoles = Object.keys((await getUserData(uid)).roles)
  const permCheck = executerRoles.some((r) => perms.indexOf(r) >= 0)

  if (!permCheck) return { permCheck: permCheck, permError: "insufficient permission" }
  return await callback(req, res)
}
