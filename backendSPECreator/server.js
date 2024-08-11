const express = require('express')
const cors = require("cors");
const fs = require("fs")

const app = express()
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const port = 3000

const obj = {
  "name": "Nikita",
  "password": "111"
}

app.use(cors(corsOptions))
app.use(express.json())
// Response Отправка данных
// Request Получение данных
app.get('/', (_, response) => {
  response.send(fs.readFileSync('users.json', 'utf8'))
})

app.post('/', (request, _) => {
  let user = request.body
  fs.writeFileSync('users.json', JSON.stringify(user))
  console.log(user)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))