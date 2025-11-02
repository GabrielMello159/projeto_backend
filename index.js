const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = require('./doc/extend');
const sequelize = require('./src/config/database');

const userRoutes = require('./src/routes/userRoute');
const presencaRoutes = require('./src/routes/presencaRoute');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors('*'));

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/auth', userRoutes);
app.use('/presenca', presencaRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () =>
    console.log(`API rodando em http://localhost:3000/api-docs`)
  );
});
