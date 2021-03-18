const express = require('express')
const fs = require('fs')
const d3 = require( 'd3')
const csv = require('csv-parser')
const cors = require('cors')
const bodyParser = require('body-parser')

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

var woorden = []
fs.createReadStream(__dirname + '/woorden.txt')
  .pipe(csv({ separator: '|', quote: ''}))
  .on('data', row => woorden.push(row))    
  .on('end', x => {
    console.log('CSV file successfully processed')
  })

const app = express()
app.use(express.static('./frontend'))
app.use(cors())
app.use(bodyParser.json())

app.get("/nummers", (req, res) =>{
	var uitk = [... new Set(woorden.map(x => parseInt(x.tekst_id)))]	
	res.send(uitk)
})

app.get("/upos", (req, res) =>{
	console.log(woorden.filter(x => x.upos == "48"))
	var uitk = [... new Set(woorden.map(x => x.upos))]
	res.send(uitk)
})

app.post("/", (req, res) =>{
	var uitk = woorden.filter(x => x.tekst_id == req.body.tekst_id)
	res.charset = 'utf-8';
	res.json(uitk)
})
app.listen(port)
