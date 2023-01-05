import chalk from 'chalk'
import dayjs from 'dayjs'

export const log = {
  info: (message) => {
    if (log.isOff('info')) return false
    log.log(message)
  },

  connection: (message, data = '') => {
    if (log.isOff('connection')) return false
    log.log(`${chalk.hex('#ffa500').bgHex('#333333')(message)} ${chalk.hex('#777777')(data)}`)
  },

  request: (name, data) => {
    if (log.isOff('request')) return false
    log.log(`${chalk.cyanBright('calling ')}${chalk.hex('#FF69B4')(name)}:`, chalk.hex('#777777').bold(data))
  },

  response: (name, data) => {
    if (log.isOff('response')) return false
    log.log(`${chalk.greenBright('response from ')}${chalk.hex('#FF69B4')(name)}:`, chalk.hex('#777777').bold(JSON.stringify(data)))
  },

  error: (error) => {
    log.log(`${chalk.hex('#f27474').bgHex('#333333')(error)}`)
  },

  log: (message, data = '') => {
    const dateTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
    console.log(`[${dateTime}] ${message}`, data)
  },

  isOff: (type) => {
    return !process.env.LOGS.split(',').includes(type)
  }
}
