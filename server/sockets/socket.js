const {io} = require('../server.js')

io.on('connection', (client) => {


    // client.emit('enviarMensaje', {
    //     usuario: 'administrador',
    //     mensaje: 'Bienvenido a la aplicacion'
    // })
    // console.log('connect');
    // client.on('disconnect', () => {
    //     console.log('disconnect');
    // });

    // // Escuchar a los clientes
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data)
        // if(mensaje.usuario){

        //     callback({
        //         res: 'todo salio bien'
        //     });
        // }else{
        //     callback({
        //         res: 'maallll'
        //     });
        // }
    });
})