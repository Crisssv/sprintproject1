const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const express = require ('express');
const users = require('./routes/users');
const products = require('./routes/products');
const app = express();
const port = 3000;



app.use(express.json());

app.use('/users',users);

app.use('/products', products);






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


  app.listen(port, function() {

    console.log(`Corriendo en http://localhost:${port}`);

  });
