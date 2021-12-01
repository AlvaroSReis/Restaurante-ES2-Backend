const client = require('./connection.js')
const express = require('express')
const cors = require('cors')
const app = express();


app.use(cors())
/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
*/

const bodyParser = require("body-parser");
app.use(bodyParser.json());



app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

app.get('/usuario', (req, res, next)=>{
    client.query(`Select * from usuario`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
/*
app.route('/usuario/')
    .get(function (req, res){
        client.query(`Select * from usuario`, (err, result)=>{
            if(!err){
                res.send(result.rows);
            }
        });
    })
    .post( function (req, res)  {
        const usuario = req.body;
        let insertQuery = `insert into usuario(nome, sobrenome, location) 
                           values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`
    
        client.query(insertQuery, (err, result)=>{
            if(!err){
                res.send('Insertion was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    })
    .put( function (req, res) {
        let user = req.body;
        let updateQuery = `update users
                           set firstname = '${user.firstname}',
                           lastname = '${user.lastname}',
                           location = '${user.location}'
                           where id = ${user.id}`
    
        client.query(updateQuery, (err, result)=>{
            if(!err){
                res.send('Update was successful')
            }
            else{ console.log(err.message) }
        })
        client.end;
    })
*/
app.get('/usuario/:username', (req, res, next)=>{
    client.query(`Select * from users where username=${req.params.username}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
/*
app.get('/usuario/:senha', (req, res)=>{
    client.query(`Select * from users where senha=${req.params.senha}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})
*/