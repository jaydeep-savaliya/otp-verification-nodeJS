const express = require('express');
const routes = require('./router/router');
const app = express();
app.use(express.json())
app.use(routes);
app.listen(8000,()=>{
    console.log("server listen at port 8000")
})