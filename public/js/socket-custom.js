
        var socket = io();
        socket.on('connect', function (client) {
            console.log('conectado al servidor');
        })

        //  el on es para escuchar
        socket.on('disconnect', function () {
            console.log('se desconecto perro')
        })

        //enviar informacion:
        socket.emit('enviarMensaje', {
            usuario: 'Fauricio',
            mensaje: 'hola'
        }, (resp)=>{
            // console.log('err: ', err);
            console.log('respuesta del server: ', resp);
            
        })
        // escuchar informacion
        socket.on('enviarMensaje', (mensaje)=>console.log(mensaje))