#!/usr/bin/env node
// noinspection ES6PreferShortImport

/**
 * Module dependencies.
 */

import App from '../src/app'
import http from 'http'
import { AppConfig } from '../src/config/app.config'
import { Logger } from '../src/util/logging/logger'

const logger = new Logger('www')

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(AppConfig.PORT)
App.set('port', port)

/**
 * Create HTTP server.
 */

const server = http.createServer(App)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

/**
 * Normalize a port into a number, string, or null.
 */
function normalizePort(val: string): number | string | null {
  const p: number = parseInt(val, 10)

  if (isNaN(p)) {
    // named pipe
    return val
  }

  if (p >= 0) {
    // port number
    return p
  }

  return null
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen')
    throw error

  const bind = typeof port === 'string'
               ? 'Pipe ' + port
               : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      logger.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address()
  if (!addr) {
    logger.error(`Cannot start server. Address not valid!`)
    process.exit(1)
  }
  const bind = typeof addr === 'string'
               ? `Pipe ${addr}`
               : `Port ${addr.port}`
  logger.info(`Listening on ${bind}`)
}
