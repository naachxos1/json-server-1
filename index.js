const jsonServer = require("json-server"); // IMPORTAMOS JSONSERVER
const server = jsonServer.create()
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001; // PUEDE COLOCAR CUALQUIER PUERTO

server.use(middlewares)
server.use(router)
server.listen(port)