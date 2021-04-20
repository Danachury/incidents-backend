import { Request, Response, Router } from 'express'
import { Incident, IncidentsModel } from '../models/incident.model'

const IncidentsRouter = Router()
const responseBody = (req: Request, status: number = 200, msg?: string) => {
  return {
    status: status,
    message: msg,
    path: req.originalUrl
  }
}

/**
 * @swagger
 * /incidents:
 *   get:
 *     summary: Health Check
 *     description: Check if server is up!
 */
IncidentsRouter.get('/', (req: Request, res: Response) => {
  IncidentsModel.find((err: Error, incidents: Incident[]) => {
    if (!!err)
      res.status(500).json(responseBody(req, 500, err.message))
    else
      res.json(incidents)
  })
})

export default IncidentsRouter
