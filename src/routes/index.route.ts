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
 *     tags:
 *      - Health Check
 *     produces:
 *      - application/json
 *     responses:
 *      200:
 *        description: Service is running.
 *      500:
 *        description: Unknown Error, some configuration should be added by administrator.
 */
IndexRouter.get('/', (req: Request, res: Response) =>
  res.status(200).json(responseBody(req))
)

export default IndexRouter
