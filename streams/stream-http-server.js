import http from 'node: http'
import { Transform } from 'node:stream'

class InverseNumber extends Transform{
  _transform(chunk, econding, callback){
    const transformed = Number(chunk.toString()) * -1
    callback(null, Buffer.from(String(transformed)))
  }
}

const server = http.createServer((requestAnimationFrame, res) => {
    return req
     .pipe(new InverseNumber())
     .pipe(res)
})

server.listen(3334)