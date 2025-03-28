import http from 'node:http'

const user = []

const server = http.createServer(async (req, res)=>{
    const {method, url} = req

    const buffers = []
    
    for await (const chunk of req){
        buffers.push(chunk)
    }

    try{
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch {
        req.body = null
    }

    console.log(body.name)

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
