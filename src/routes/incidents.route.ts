import { Request, Response, Router } from 'express'
import { Incident, IncidentsModel } from '../models/incident.model'
import { internalServerError } from '../util/http/response.http'

const IncidentsRouter = Router()

/**
 * @swagger
 * /poc-ib/api/v1/incidents:
 *   get:
 *     summary: Incidents list
 *     description: Retrieve all incidents that match with query params. All parameter are optional.
 *     tags:
 *      - Incidents
 *     produces:
 *      - application/json
 *     parameters:
 *      - name: incidentId
 *        description: Incident Id
 *        in: query
 *        type: string
 *      - name: incidentId
 *        in: query
 *        type: string
 *      - name: incidentDescription
 *        in: query
 *        type: string
 *      - name: brand
 *        in: query
 *        type: string
 *      - name: incidentType
 *        in: query
 *        type: string
 *      - name: incidentTypeAttack
 *        in: query
 *        type: string
 *      - name: incidentStatus
 *        in: query
 *        type: string
 *      - name: source
 *        in: query
 *        type: string
 *      - name: country
 *        in: query
 *        type: string
 *      - name: countryCode
 *        in: query
 *        type: string
 *      - name: url
 *        in: query
 *        type: string
 *      - name: elapsedTime
 *        in: query
 *        type: number
 *      - name: inactiveTime
 *        in: query
 *        type: number
 *      - name: incidentDate
 *        in: query
 *        type: string
 *      - name: lastChecked
 *        in: query
 *        type: string,
 *      - name: company
 *        in: query
 *        type: number,
 *      - name: incidentTakedownStatus
 *        in: query
 *        type: boolean,
 *      - name: incidentProactiveDetection
 *        in: query
 *        type: boolean,
 *      - name: attachment
 *        in: query
 *        type: boolean,
 *      - name: ip
 *        in: query
 *        type: string,
 *      - name: domain
 *        in: query
 *        type: string,
 *      - name: html
 *        in: query
 *        type: boolean,
 *      - name: whois
 *        in: query
 *        type: string,
 *      - name: geolocation
 *        in: query
 *        type: boolean,
 *      - name: agent
 *        in: query
 *        type: string,
 *      - name: reactivatedFrom
 *        in: query
 *        type: string,
 *      - name: relatedIncidents
 *        in: query
 *        type: string,
 *      - name: incidentLevel
 *        in: query
 *        type: string,
 *      - name: incidentScore
 *        in: query
 *        type: number,
 *      - name: bookmark
 *        in: query
 *        type: boolean,
 *     responses:
 *      200:
 *        description: Retrieve incidents list
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
 *                  example: /poc-ib/api/v1/incidents
 *                data:
 *                  type: object
 *                  description: Incident object
 *                  example: [{}]
 *      204:
 *        description: There is not data for current params
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
 *                  example: /poc-ib/api/v1/incidents
 *                message:
 *                  type: string
 *                  example: Not data found.
 *      400:
 *        description: GET Request has not valid entries
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                  example: 400
 *                message:
 *                  type: string
 *                  example: Request invalid. Please check your request.
 *                path:
 *                  type: string
 *                  example: /poc-ib/api/v1/incidents
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: integer
 *                  example: 500
 *                message:
 *                  type: string
 *                  example: There was an INTERNAL SERVER ERROR. Please contact with administrator. Or try again later.
 *                path:
 *                  type: string
 *                  example: /poc-ib/api/v1/incidents
 */
IncidentsRouter.get('/', (req: Request, res: Response) => {
  IncidentsModel.find((err: Error, incidents: Incident[]) => {
    if (!!err)
      return internalServerError(req, res)
    else
      res.json(incidents)
  })
})

export default IncidentsRouter
