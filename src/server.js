import http from 'node:http'
import { json } from './middlewares/json.js'

const user = []

const server = http.createServer(async (req, res)=>{
    const {method, url} = req

    await json(req, res)

    if (method == 'GET' && url == '/users'){

        return res
        .setHeader('Content-type', 'applicaion/json')
        .end(JSON.stringify(users))
    }

    if(method == 'POST' && url == '/users'){
        
        const {name, email} = body

        user.push({
            id: 1,
            name,
            email,
        })
        return res.writeHead(201).end('Criação de Usuários')
    }

    return res.writeHead(404).end("Hello World")
})

server.listen(3333)
