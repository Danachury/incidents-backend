export class AppConfig {
  static PORT = process.env.PORT || '3000'
  static CONTEXT = process.env.CONTEXT || '/poc-ib'
  static DEBUG = process.env.DEBUG || 'incidents-backend:server'
  static LOGGER_FORMAT = process.env.LOGGER_FORMAT || 'dev'
  static DB_USER = process.env.DB_USER || 'incuser'
  static DB_PASS = process.env.DB_PASS || '5MLlFPmeP5zoZ3VK'
  static DB_HOST = process.env.DB_NAME || 'localhost'
  static DB_NAME = process.env.DB_NAME || 'poc'

  static setEnvVar = (name: string, value: string) =>
    process.env[name] = value
}
