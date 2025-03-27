import http from 'node:http'

const user = []

const server = http.createServer((req, res)=>{
    const {method, url} = req

    if (method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-type', 'applicaion/json')
        .end(JSON.stringify(users))
    }

    if(method == 'POST' && url == '/users'){
        user.push({
            id: 1,
            name: 'Jhon Doe',
            email: 'jhondoe@example.com',
        })
        return res.writeHead(201).end('Criação de Usuários')
    }

    return res.writeHead(404).end("Hello World")
})

server.listen(3333)
