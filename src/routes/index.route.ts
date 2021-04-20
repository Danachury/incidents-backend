import { Request, Response, Router } from 'express'

const IndexRouter = Router()

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
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                  example: 200
 *                path:
 *                  type: string
 *                  example: /
 *                message:
 *                  type: string
 *                  example: App is running correctly!
 *      500:
 *        description: Unknown Error, some configuration should be added by administrator.
 */
IndexRouter.get('/', (req: Request, res: Response) =>
  res.status(200).json({
    status: 200,
    message: `App is running correctly!`,
    path: req.originalUrl
  })
)

export default IndexRouter
