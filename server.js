'use strict'
require('dotenv').configu();
const express=require('express');
const cors= require('cors');
const superagent=require('superagent');
const pg =require('pg');
const methodOverride=require('method-override');
const PORT= process.env.PORT||3000;
const app=express();
app.use(cors());
const client=new pg.Client(process.env.DATABASE_URL);
client.on ('error',err =>console.error(err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride);
app.set('view engine','ejs');

//test route 
app.get ('/test',(req,res)=>{
    res.status(200).send("hello");
});

app.get('/main ',(req,res)=>{
let SQL='SELECT * FROM po';
client.query(SQL)
.then (data=>{
    res.render('pages/index',{po:data.rows});
});
});


app.post('./searches', (req,res)=>{

   let url='https://digimon-api.herokuapp.com/api/digimon'
   
   superagent.get(url)
   .then (data=>{

 consol.log(data);
 let po=data.body;
 res.render('pages/searches/show',{po:po});
   })
   .catch(error =>{
       res.render('pages/error');
   });

   app.get('*',function(req,res){
       res.render('pages/error');
   });

   app.post('detail',(req,res)=>
   {
       let SQL="SELECT id from po where name=$1 and img=$2 and level=$3";
       let{name,img,level}=req.body;
       let values=[name,img,level];
       client.query(SQL,values)
       .then (results =>{
let id =result.rows[0].id;
res.render('pages/detail',{po:{id,name,level}});


app.post('/',(req,res)=>
{
let{name,img,level}=req.body;
let SQL="INSERT INTO po( name ,img,level) VALUES ($1,$2,$3)";
let values=[name,img,level];
client.query(SQL,values)
.then (()=>{
    res.render('pages/detail',{po:req.body});
}).catch(function(err){
    console.log(print,err);
});
});

app.post('update',(req,res)=>{
    res.render('/pages/edit',{po:req.body});

});
app.post('/edit',(req,res)=>{
    let {id,nam,img,level}=req.body;
    let SQL='UPDATE po SET name=$1,img=$2,level=$3 WHERE id=$4';
    let values=[name,img,value,id];
client.query(SQL,values)
.then (()=>{
    res.render('/')
});
});

app.delete('/delete/:bo_id',(req,res)=>
{
let SQL='DELETE FROM po where id=$1';
let values=[req.params.po_id];

client.query(SQL,values)
.then (()=>{
    res.render('/')
});

function updefunction (req,res){

if(req.body&& typeof req.body === "object"&&'_method'in req.body){
}





};

function PO (data){
this.name=data.name;
this.img=data.img;
this.level=data.level;


}

client.connect()
.then(()=>{
    app.listen(PORT,() =>
    console.log(`my server ready${PORT}`)
    );
})
.catch((err)=>{
    throw new Error(`startup error${err}`);
});