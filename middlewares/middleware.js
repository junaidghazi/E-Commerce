const bodyParser = require('body-parser')
const morgan = require('morgan')

const setUpMiddleware = (app) => {
    app.use(bodyParser.json())
    app.use(morgan('tiny'))
}
module.exports = setUpMiddleware;