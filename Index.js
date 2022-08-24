var eventos = require('events');
var EmisorEventos = eventos.EventEmitter;
var ee = new EmisorEventos();

var contador ={
    cuenta: 123,
    fyh: new Date()
}; 
var ms = 2000;
var ms2 = 20000;



const formatAhora = function(){
    var ahora = new Date();
    var days = ahora.getDate()+'/'+ahora.getMonth()+'/'+ahora.getFullYear();
    var times = ahora.getHours()+':'+ahora.getMinutes()+':'+ahora.getSeconds();
    contador.fyh = days+' '+times;
    
}

formatAhora();

console.log(contador);

ee.on('incrementar', function(){
    contador.cuenta++;
    console.log("Cuenta: "+contador.cuenta);
    formatAhora();
    console.log(contador);
});

ee.on('parar',function(){
    console.log('¡¡¡chau!!!')
    clearInterval(interval);
    formatAhora();
    console.log(contador);
});

var interval = setInterval(function(){
	ee.emit('incrementar');
},ms);

setTimeout(function(){
    ee.emit('parar');
}, ms2)



/*--------------------------SOLUCIÓN-------------------------*/
/*
var contador = 123

var refTimer = setInterval(function() {
    var obj = { contador: contador++ , fyh: new Date().toLocaleString() }
    console.log(obj)
},2000)

setTimeout(function() {
    clearInterval(refTimer)
},20000)

process.on('exit', function() {
    console.log('chau!!!')
})
*/