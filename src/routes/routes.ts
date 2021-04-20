import { Router } from 'express'
import IndexRouter from './index.route'
import IncidentsRouter from './incidents.route'
import { AppConfig } from '../config/app.config'
import { ApiDocsConfig } from '../config/swagger.config'

const swaggerUi = require('swagger-ui-express')

const Routes = Router()

/**
 * Routes indexed to server
 */
Routes.use(`/`, IndexRouter)
Routes.use(`${AppConfig.APP_CONTEXT}/api/v1/incidents`, IncidentsRouter)

console.log(ApiDocsConfig)

/**
 * Server Documentation setup
 */
Routes.use(`/docs`, swaggerUi.serve, swaggerUi.setup(ApiDocsConfig))

export default Routes
