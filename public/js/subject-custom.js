var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola Mundo'
}, function(response) {
    console.log(response);
});

socket.on('enviarMensaje', function(message) {
    console.log(message);
});