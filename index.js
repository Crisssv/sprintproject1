const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const express = require ('express');
const app = express();
const port = 3008;


const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Api de Restaurante',
        version: '1.0.0'
      }
    },
    apis: ['./index.js'],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);

  app.use('/api-docs',
   swaggerUI.serve,
   swaggerUI.setup(swaggerDocs));
   
   

   /**
 * @swagger
 * /estudiantes:
 *  post:
 *
 */
app.post('/estudiantes', (req, res) => {
    res.status(201).send();
  });

  app.listen(port, function() {

    console.log(`Corriendo en http://localhost:${port}`);

  });
