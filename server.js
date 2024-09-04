const express = require("express");
const db = require("./db/db");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const passport=require("passport");
const LocalStrategy=require("passport-local").Strategy;
const Person=require('./model/Person');
app.use(bodyParser.json());
// Middleware Function

const longRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.originalUrl}`);

  next();
};
app.use(longRequest);

passport.use(new LocalStrategy(async (USERNAME,password,done)=>{
try{
console.log('Recevied credential : ',USERNAME,password);
const user=await Person.findOne({username:USERNAME});
if(!user) return done(null,false,{message:"Incorect username . "});
const isPasswordMatch=user.password===password?true:false;
if(isPasswordMatch)
{
return done(null,user);
}else
{
return done(null,false,{message:"Incorrect Password"});
}
}catch(err)
{
return done(err);
}

}));

app.use(passport.initialize());

app.get("/",passport.authenticate('local',{session:false}), longRequest, (req, res) => {
  console.log("cool thinga take time middle ware");
  res.send("welcome to our hotel ...");
});

// import router
const personRouter = require("./routers/personRouter");
const menuItemRoutes = require("./routers/menuItemRoutes");

//user middle were for router
app.use("/person", personRouter);
app.use("/menu", menuItemRoutes);

//port variable
const port = process.env.PORT;
app.listen(port, (error) => {
  console.log(`server is ready to accept request on port 3000`);
});
