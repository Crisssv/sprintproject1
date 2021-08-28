const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const express = require ('express');
const users = require('./routes/users');
const products = require('./routes/products');
const orders = require('./routes/orders');
const methods = require('./routes/methods')
const app = express();
const port = 3000;



const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Api de Restaurante',
      version: '1.0.0'
    }
  },
  apis: ['./routes/users.js','./routes/products.js','./routes/orders.js','./routes/methods.js'],
  explorer: true
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/users',users);

app.use('/products', products);

app.use('/orders', orders);

app.use('/methods', methods);






  app.listen(port, function() {

    console.log(`Corriendo en http://localhost:${port}/api-docs`);

  });
