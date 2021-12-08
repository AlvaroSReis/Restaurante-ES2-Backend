const client = require('./connection.js')
const express = require('express')
const cors = require('cors')
const app = express();


app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());


app.get('/mesa/?:id', (req, res)=>{
    client.query(`SELECT * FROM m WHERE username = ${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result);
        }
    });
    client.end;
})


app.get('/login/:username&:password', (req, res)=>{

    const user = String(req.params.username)
    const senha = String(req.params.password)
    client.query(`SELECT username,senha FROM usuario WHERE username = \'${user}\' and senha = \'${senha}\';`, (err, result)=>{
        //res.send(console.log(`SELECT * FROM usuario WHERE username = \'${user}\';`))
        if(!err){

            res.send(result.rows);
        }else{
            res.send(err)
        }
        
    });
    client.end;
})

app.get('/loginFuncionario/:username&:password', (req, res)=>{

    const user = String(req.params.username)
    const senha = String(req.params.password)
    client.query(`SELECT username,senha FROM funcionario WHERE username = \'${user}\' and senha = \'${senha}\';`, (err, result)=>{
        if(!err){

            res.send(result.rows);
        }else{
            res.send(err)
        }
        
    });
    client.end;
})

app.get('/loginAdmin/:username&:password', (req, res)=>{

    const user = String(req.params.username)
    const senha = String(req.params.password)
    client.query(`SELECT username,senha FROM administrador WHERE username = \'${user}\' and senha = \'${senha}\';`, (err, result)=>{
        if(!err){

            res.send(result.rows);
        }else{
            res.send(err)
        }
        
    });
    client.end;
})

app.get('/information/:username', (req, res)=>{

    const user = String(req.params.username)
    const senha = String(req.params.password)
    client.query(`SELECT nome, sobrenome, username, email FROM usuario WHERE username = \'${user}\';`, (err, result)=>{
        //res.send(console.log(`SELECT * FROM usuario WHERE username = \'${user}\';`))
        if(!err){

            res.send(result.rows);
        }else{
            res.send(err)
        }
        
    });
    client.end;
})

app.get('/informationFuncionario/:username', (req, res)=>{

    const user = String(req.params.username)
    const senha = String(req.params.password)
    client.query(`SELECT * FROM funcionario WHERE username = \'${user}\';`, (err, result)=>{
        //res.send(console.log(`SELECT * FROM usuario WHERE username = \'${user}\';`))
        if(!err){

            res.send(result.rows);
        }else{
            res.send(err)
        }
        
    });
    client.end;
})

app.get('/informationAdmin/:username', (req, res)=>{

    const user = String(req.params.username)
    const senha = String(req.params.password)
    client.query(`SELECT * FROM administrador WHERE username = \'${user}\';`, (err, result)=>{
        //res.send(console.log(`SELECT * FROM usuario WHERE username = \'${user}\';`))
        if(!err){

            res.send(result.rows);
        }else{
            res.send(err)
        }
        
    });
    client.end;
})



/*
app.get('/login?username=:username&senha=:senha', (req, res)=>{
    client.query(`Select username,senha from usuario where username = :usuario and senha = :senha`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
*/
app.get('/funcionario', (req, res)=>{
    client.query(`Select * from funcionario`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/novoUsuario', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into usuario(nome, sobrenome, username, email, senha) 
                       values('${user.nome}', '${user.sobrenome}', '${user.username}', '${user.email}', '${user.senha}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.post('/novoFuncionario', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into funcionario(nome, sobrenome, username, email, senha) 
                       values('${user.nome}', '${user.sobrenome}', '${user.username}', '${user.email}', '${user.senha}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})

app.post('/novoAdministrador', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into administrador(nome, sobrenome, username, email, senha) 
                       values('${user.nome}', '${user.sobrenome}', '${user.username}', '${user.email}', '${user.senha}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.get('/usuario/:username', (req, res)=>{
    client.query(`Select * from users where username=${req.params.username}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();


