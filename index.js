require("dotenv/config")
const express = require("express")
const setUpMiddleware = require('./middlewares/middleware.js')
const dbConnection = require('./dbConnection/mongodb.js')
const productRoutes = require('./routers/productRouter.js')
const app = express()
const PORT = 3000;


//calling middleware
setUpMiddleware(app)

//calling Routers
app.use(productRoutes);

dbConnection()

app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}`);
})