const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const express = require ('express');
const users = require('./routes/users');
const products = require('./routes/products');
const orders = require('./routes/orders');
const app = express();
const port = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/',users);

app.use('/', products);

app.use('/', orders);






const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Api de Restaurante',
        version: '1.0.0'
      }
    },
    apis: ['index.js'],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
   
   



  app.listen(port, function() {

    console.log(`Corriendo en http://localhost:${port}`);

  });
