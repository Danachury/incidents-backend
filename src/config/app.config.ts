export class AppConfig {
  static APP_NAME = 'poc-incidents_backend'
  static APP_PORT = process.env.PORT || '3000'
  static APP_CONTEXT = process.env.CONTEXT || '/poc-ib'
  static APP_DEBUG = process.env.DEBUG || 'poc-incidents_backend:server'
  static APP_LOG_FORMAT = process.env.LOGGER_FORMAT || 'dev'

  static setEnvVar = (name: string, value: string) =>
    process.env[name] = value
}
