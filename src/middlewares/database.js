export class Database{
    #database = {}

    select(table){
        const data = this.#database[tale] ?? []

        return data
    }

    insert(table, data){
      if (Array.isArray(this.#database[table])){
        this.database[table].push(data)
      }  else{
        this.database[table] = [data]
      }

      return data;
    }
}