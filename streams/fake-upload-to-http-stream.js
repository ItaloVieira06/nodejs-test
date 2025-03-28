import {Readable} from 'node:stream'

class oneToHundredStream extends Readable{
    index = 1
    _read(){
      const i = this.index++
      setTimeout(() => {
        
        if (i > 5){
          this.push(null)
        } else{
          const buf = Buffer.from(string(i))

          this.push(buf)
        }
        
       }, 1000)

    }
}

fetch('http://localhost:3334', {
    method: 'POST',
    body: new oneToHundredStream(),
}).then(response => {
    response.text()
}).then(data => {
    console.log(data)
})