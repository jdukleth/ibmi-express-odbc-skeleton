import { db2Query } from '../../../utils/db2Database.js'

export const test = async () => {
  const sql = getSql()
  const params = []
  const results = await db2Query(sql, params)

  return results
}

const getSql = () => {
  return `
    SELECT * FROM qsys2.subsystem_info
    LIMIT 5
  `
}
