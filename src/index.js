import express from 'express';
import { connectDB } from './config/dbconnection.js';
import errorHandler from './api/middleware/errorHandler.js';
import morgan from 'morgan';

// Swagger
import SwaggerUi from 'swagger-ui-express';
import swaggerSpecs from './config/swagger.js';

// Routes
import category from './api/routes/category.js';
import product from './api/routes/product.js';


const Haveit = express();
const PORT = process.env.PORT || 3100;

const Start = async () => {
    try {
        await connectDB()
        Haveit.listen(PORT, () => console.log(`Haveit is listing at Port: ${PORT}`))
    } catch (error) {
        console.log(error)        
    }
}

Haveit.use(express.json());
Haveit.use(express.urlencoded({ extended: true }));
Haveit.use(morgan('combined'))


Haveit.get('/', (_, res) => { res.status(302).redirect('/api/v1/doc') })
Haveit.get('/api/v1', (_, res) => { res.status(302).redirect('/api/v1/doc') })

Haveit.use('/api/v1/doc', SwaggerUi.serve, SwaggerUi.setup(swaggerSpecs))
Haveit.use('/api/v1/category', category)
Haveit.use('/api/v1/product', product)

// Error Handler
Haveit.use(errorHandler)

Start()
