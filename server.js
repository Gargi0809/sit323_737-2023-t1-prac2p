var express = require('express')
var app =express()


//our website index.html is fetched by the code on line 6 :
app.use(express.static(__dirname))



var server=app.listen(3000,()=>{

    console.log("server is listening to port",server.address().port);
})