const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Controle de Presença',
      version: '1.0.0',
      description: 'Gerenciamento de presença e frequência por turma'
    },
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }
      }
    },
    security: [{ bearerAuth: [] }],
    servers: [{ url: 'http://localhost:3000', description: 'Servidor Local' },
    {
      url: 'https://presenca-faculdade-api.azurewebsites.net',
      description: 'SERVIDOR AZURE'

    }

    ]
  },
  apis: ['./src/routes/*.js']
};
module.exports = swaggerOptions;
