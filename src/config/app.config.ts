export class AppConfig {
  static PORT = process.env.PORT || '3000'
  static CONTEXT = process.env.CONTEXT || '/poc-ib'
  static DB_USER = process.env.DB_USER || 'incuser'
  static DB_PASS = process.env.DB_PASS || '5MLlFPmeP5zoZ3VK'
  static DB_HOST = process.env.DB_HOST || 'incidents.oek60.mongodb.net'
  static DB_NAME = process.env.DB_NAME || 'poc'
}
