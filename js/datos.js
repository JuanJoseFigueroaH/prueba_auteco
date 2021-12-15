function traerDatos() {
    fetch("zapato.json")
        .then(res => res.json())
        .then(datos => {
            console.log(datos)
            //tabla(datos)
        })
}
traerDatos();