import express from "express"
import bodyParser from "body-parser"
import router from "./router.js"

const app = express()

app.use(bodyParser.json())
app.use(router)


const port = 3001

app.listen(port, ()=>{
    console.log(`App is runing on port ${port}`)
})