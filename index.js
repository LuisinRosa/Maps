var express=require('express'); 
var app=express();
var http=require('http').server(app);
var io=require('socket.io')(http);

app.use(express.static(__dirname +  '/public'));//aqui se serviran archivos estaticos

//le decimos en que puerto se ejecutara
var port=process.env.PORT || 3000;//esto lo exige heroku

//cuando alguien haga una peticion get al sitio, redireccionara al index
app.get('/',function(req,res) {
	res.sendFile(__dirname+'/index.html');//ruta para index
});

http.listen(port,function(){
	console.log('Escuchando en el puerto: '+port);
});
