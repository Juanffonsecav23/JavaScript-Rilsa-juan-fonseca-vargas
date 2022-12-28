// PRIMERA ENTRAGA PROYECTO FINAL 

let datos = prompt("Para llenar el formulario escriba 1");
while  (datos != 0 ){

    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingrese su apellido: ");
    let correo = prompt("Ingrese su direccion de correo; ");
    let telefono = prompt("Ingrese su numero de celular: ");  

    let userData = [];

    function agregarDatos() {
    let user = {nombre, apellido, correo, telefono}
    userData.push(user)
    
    }

    agregarDatos();

    let entrada = prompt("Seleccionar equipo deseado 1 - Cellocator CR300 2 - Meitrack_T366 3 - Suntech_310U 4 - Teltonika_FMC130 ");
    while (entrada != 0 ){

    switch (entrada) {   
        case "1":
        alert("Selecciono Cellocator CR300 ");
        let selc1 = console.log("Selecciono Cellocator CR300 ")
            break;
        case "2":
        alert("Selecciono Meitrack_T366 ");
        let selc2 = console.log("Selecciono Meitrack_T366 ")
            break;
        case "3": 
        alert("Selecciono Suntech_310U ");
        let selc3 = console.log("Selecciono Cellocator CR300 ")
            break;
        case "4":
        alert("Selecciono Teltonika_FMC130 ");
        let selc4 = console.log("Selecciono Teltonika_FMC130 ")
            break;
        default:
            alert("ERROR no eligio ninguna opcion valida");
            break;
    } 
    entrada = prompt("Para confirmar escriba 0 - de lo contrario - Seleccionar equipo deseado 1 - Cellocator CR300 2 - Meitrack_T366 3 - Suntech_310U 4 - Teltonika_FMC130");
    }

    const comentario = prompt("Cuentenos en que le podemos ayudar: "); 
    datos = prompt("Para enviar el formulario escriba 0")
    alert("En los proximos minutos uno de los miembros de nuestro equipo de atencion del cliente le enviara un correo con los siguientes datos: " + "Nombre completo: "+  nombre + apellido + "                    " + "Correo: " +  correo + "                                              " + "Telefono: " +  telefono + "                                                      " + "Comentario adicional: " + comentario );
}

