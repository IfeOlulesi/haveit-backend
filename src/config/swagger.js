
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Haveit API",
            version: "1.0.0",
            description: "Engine powering the HaveIt eCommerce platform"
        },
        servers: [
            {
                url: "http://localhost:3100"
            }
        ],
    },
    apis: ["./api/routes/*.js"]
}

export default swaggerJSDoc(options)