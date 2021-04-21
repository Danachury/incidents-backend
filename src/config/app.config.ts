export class AppConfig {
  static PORT = '3000'
  static CONTEXT = '/poc-ib'
  static DEBUG = 'incidents-backend:server'
  static LOGGER_FORMAT = 'dev'
  static DB_USER = 'incuser'
  static DB_PASS = '5MLlFPmeP5zoZ3VK'
  static DB_HOST = 'incidents.oek60.mongodb.net'
  static DB_NAME = 'poc'

  static setEnvVar = (name: string, value: string) =>
    console.log('Here should be environment variable set...')
}
