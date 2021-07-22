const express = require("express");
const app = express();

const Post = require('./modulos/Post')
const cors = require('cors')
//Configurando BodyParse
app.use(cors())
app.use(express.json())


//Rotas
app.post('/register',async function(req, res){
    const result = await Post.create({

        email: req.body.email,
        senha: req.body.senha

    
    })
    res.send(result)
})

app.listen(3000);