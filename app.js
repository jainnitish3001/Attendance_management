const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const app=express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});
const studentSchema={
  Name:String,
  Year:Number,
  Branch:String,
  Batch:String,
  Email id:String,
  Password:String,
  Contact:String,
  Father_Name:String,
  Mother_Name:String,
  Parent_Contact:String
};
app.get("/",function(req,res){
  res.render("admin");
})

app.post("/",function(req,res){
  const action=req.body.add;
  //console.log(action);
  if(action==="add_teacher")
  {
    res.render("add_teacher");
  }
  else{
    res.render("add_student");
  }
})


app.get("/student")
app.listen(3000,function(){
  console.log("server set up at 3000");
})
