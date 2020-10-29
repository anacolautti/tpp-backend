const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send({
        nombre: 'fernando'
    });
});

app.post('/', function(req, res){
    let body = req.body;
    
    res.json({
        ok: true, 
        body
    })

})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});