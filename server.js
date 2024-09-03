const express=require('express');
const db=require('./db/db');
const app=express();
const bodyParser=require('body-parser');
const cron = require('node-cron');

app.use(bodyParser.json());
// import router
const personRouter=require('./routers/personRouter');


//user middle were for router
app.use('/person',personRouter);

app.listen(3000,(error)=>{
console.log(`server is ready to accept request on port 3000`);
})
