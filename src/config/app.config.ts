export class AppConfig {
  static APP_PORT = process.env.PORT || '3000'
  static APP_CONTEXT = process.env.CONTEXT || '/poc-ib'
  static APP_DEBUG = process.env.DEBUG || 'poc-incidents_backend:server'
  static APP_LOG_FORMAT = process.env.LOGGER_FORMAT || 'dev'
  static DB_USER = process.env.DB_USER || 'incuser'
  static DB_PASS = process.env.DB_PASS || '5MLlFPmeP5zoZ3VK'
  static DB_NAME = process.env.DB_NAME || 'poc'

  static setEnvVar = (name: string, value: string) =>
    process.env[name] = value
}
