import odbc from 'odbc'
import { log } from './log.js'

let db2Pool

// connections shows up in ACT under QZDASOINIT ODBCUSER01 PJ
export const db2Connect = async () => {
  try {
    if (!db2Pool || !db2Pool.isOpen) {
      db2Pool = await odbc.pool({
        connectionString: `DSN=${process.env.IBM_HOSTNAME}`,
        connectionTimeout: 30, // how long before an idle connection will close, in seconds
        loginTimeout: 3, // how long before the connection process will attempt to connect before timing out, in seconds.
        initialSize: 10, // the initial number of Connections created in the Pool
        incrementSize: 10, // how many additional Connections to create when all of the Pool's connections are taken
        maxSize: 20, // the maximum number of open Connections the Pool will create
        shrink: true // whether or not the number of Connections should shrink to initialSize as they free up
      })
      log.connection('DB2 pool created')
    }
  } catch (e) {
    console.log(e)
  }

  return db2Pool
}

export const db2Query = async (sql, params) => {
  log.info(`DB2 Pool Size: ${db2Pool.poolSize}`)
  log.request('DB2 query', `${params} ${sql}`)

  await db2Connect()
  const poolConnection = await db2Pool.connect()
  const results = await poolConnection.query(sql, params)
  await poolConnection.close()

  log.response('DB2 query', results)

  return results
}
