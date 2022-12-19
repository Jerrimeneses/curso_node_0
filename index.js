const promesaCumplida = true;

const miPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(promesaCumplida) {
            resolve('Promesa cumplida');
        } else {
            reject('Promesa rechazada...');
        }
    }, 3000);
});

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
}

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
}

miPromise.then( manejarPromesaCumplida, manejarPromesaRechazada);

//ejempo con catch
// const estadoPedido = () => {
//     return Math.random() < 0.8;
// }

// const miPedidoSePizza = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(estadoPedido()) {
//             resolve('pedido exitoso');
//         } else {
//             reject('ocurrio un error');
//         }
//     }, 3000)
// });

// miPedidoSePizza.then(manejarPedido, rechazarPedido);

// miPedidoSePizza.then((mensajeConfirmacion) => 
//     {
//         console.log(mensajeConfirmacion);
//     }).catch((mensajeError) => {
//         console.log(mensajeError);
//     });