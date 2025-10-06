import express from 'express'

//menyimpan express di variable app
const app = express()

//router dengan http methode .get (menampilkan data)
app.get("/", (req, res) => {
    res.json({message:'hayo lo'})
})

//menjalankan di port
const port = 3000

app.listen(port, () => {
    console.log(`App is runing on port : ${port}`)
})