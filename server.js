const http = require('http')


const port = process.env.PORT || 3002

const server = http.createServer()
server.listen(port)