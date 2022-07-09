
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
                url: "http://localhost:3100/api/v1",
                description: "Local Server"
            },
            {
                url: "https://haveit-backend.herokuapp.com/api/v1",
                description: "Production Server"
            }
        ],

        tags: [
            {
                name: "Product",
                description: "Product end points"
            },
            {
                name: "Category",
                description: "Category end point"
            },
            {
                name: "Customer",
                description: "Customer end point"
            },
            {
                name: "Cart",
                description: "Cart end point"
            },
            {
                name: "Admin",
                description: "Admin end point"
            }
        ]
    },

    apis: ["src/docs/*.js"]
    
}

export default swaggerJSDoc(options)