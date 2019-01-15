/* todo, setja upp express */
const express = require('express')
const app = express()
const port = 3000 //rétt port
//vantað path

app.get('/', (req,res) => res.send('Hello World!'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))