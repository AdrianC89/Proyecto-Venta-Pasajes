const Cat = require('./models/pasajes.models')
require ('./mongoose-connect')
const express = require('express')
const app = express()
const port = 3000

//para no tener problemas de cors en el backend
const cors = requiere('cors');
app.use(cors([ 
    origin ='http://127.0.0.1:5173']))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/pasajes', async (req, res) => {
    const pasaje1 = {
        name: req.body.name,
        race: req.body.race
    }
    try{
        const newPasaje = new Pasaje(pasaje1);
        newPasaje.save();
        res.json({message: 'pasaje agregado'})
    }
    catch(error){
        console.log(error);
    }

    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})