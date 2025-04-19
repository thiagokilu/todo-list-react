// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json') // Arquivo db.json com dados da API
const middlewares = jsonServer.defaults()

// Delay de 5 segundos (5000ms)
server.use((req, res, next) => {
    setTimeout(next, 10000) // 5000ms = 5 segundos
})

// Usando middlewares padrão do json-server
server.use(middlewares)
server.use(router)

// Rodando o servidor na porta 3333
server.listen(3333, () => {
    console.log('JSON Server rodando em http://localhost:3333 com 5 segundos de delay')
})
