const express=require('express');
const db=require('./db/db');
const app=express();
const bodyParser=require('body-parser');
require("dotenv").config();


app.use(bodyParser.json());
// import router
const personRouter=require('./routers/personRouter');


//user middle were for router
app.use('/person',personRouter);


//port variable
const port=process.env.PORT;
app.listen(port,(error)=>{
console.log(`server is ready to accept request on port 3000`);
})
