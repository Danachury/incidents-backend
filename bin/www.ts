#!/usr/bin/env node

/**
 * Module dependencies.
 */

import App from '../src/app'
import http from 'http'
import { AppConfig } from '../src/config/app.config'

AppConfig.setEnvVar('DEBUG', AppConfig.APP_DEBUG)

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(AppConfig.APP_PORT)
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
 * Normalize a port into a number, string, or undefined.
 */

function normalizePort(val: string) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return undefined
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof port === 'string'
               ? 'Pipe ' + port
               : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
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
    console.error(`Cannot start server. Address not valid!`)
    process.exit(1)
  }
  const bind = typeof addr === 'string'
               ? `pipe ${addr}`
               : `port ${addr.port}`
  console.info(`Listening on ${bind}`)
}