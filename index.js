var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/api',function(req,res){
    res.send({data : req.ip});
})
    
app.listen(process.env.PORT || 3000,function()
{
	console.log('server is up and running on port 3000');
});
