import { Request, Response, Router } from 'express'
import { AppConfig } from '../config/app.config'

const IndexRouter = Router()
const responseBody = (req: Request) => {
  return {
    status: 200,
    message: `${AppConfig.APP_NAME} is working!`,
    path: req.originalUrl
  }
}

/**
 * @openapi
 * /:
 *   get:
 *     summary: Health Check
 *     description: Check if server is up!
 */
IndexRouter.get('/', (req: Request, res: Response) =>
  res.status(200).json(responseBody(req))
)

export default IndexRouter
