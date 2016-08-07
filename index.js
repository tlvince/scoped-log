const path = require('path')
const npmlog = require('npmlog')

if (process.env.LOG_LEVEL) {
  npmlog.level = process.env.LOG_LEVEL
}

const levels = [
  'silly',
  'verbose',
  'info',
  'http',
  'warn',
  'error'
]

const cwd = process.cwd()

function log (level, source) {
  const prefix = path.relative(cwd, source)
  // No ...rest in Node 5.x :(
  const messages = Array.prototype.slice.call(arguments, log.length)
  return npmlog[level](prefix, ...messages)
}

levels.forEach(level => {
  exports[level] = log.bind(null, level)
})
