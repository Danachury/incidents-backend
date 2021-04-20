const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Incidents Backend API',
      version: '1.0.0',
      description: 'This is an Express server to manage Incidents',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html'
      },
      contact: {
        name: 'LogRocket',
        url: 'https://logrocket.com',
        email: 'info@email.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Api v1'
      }
    ]
  },
  apis: ['../**/*.route.js']
}

export const ApiDocsConfig = swaggerJsdoc(options)
