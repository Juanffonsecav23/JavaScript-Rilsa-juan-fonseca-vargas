// PRIMERA ENTRAGA PROYECTO FINAL 

let datos = prompt("Para llenar el formulario escriba 1");
while  (datos != 0 ){

const nombre = prompt("Ingrese su nombre: ");
const apellido = prompt("Ingrese su apellido: ");
const correo = prompt("Ingrese su direccion de correo; ");
const telefono = prompt("Ingrese su numero de celular: "); 

    let entrada = prompt("Seleccionar equipo deseado 1 - Cellocator CR300 2 - Meitrack_T366 3 - Suntech_310U 4 - Teltonika_FMC130 ");
    while (entrada != 0 ){

    switch (entrada) {
        case "1":
        alert("Selecciono Cellocator CR300 ");
            break;
        case "2":
        alert("Selecciono Meitrack_T366 ");
            break;
        case "3": 
        alert("Selecciono Suntech_310U ");
            break;
        case "4":
        alert("Selecciono Teltonika_FMC130 ");
            break;
        default:
            alert("ERROR no eligio ninguna opcion valida");
            break;
    } 
    entrada = prompt("Para confirmar escriba 0 - de lo contrario - Seleccionar equipo deseado 1 - Cellocator CR300 2 - Meitrack_T366 3 - Suntech_310U 4 - Teltonika_FMC130");
}

const comentario = prompt("Cuentenos en que le podemos ayudar: "); 
datos = prompt("Para enviar el formulario escriba 0")

function nombreCompleto (){
    return "En los proximos minutos un integrante de nuestro equipo se comunicara con usted y le enviaremos un correo" + "                   " + "Nombre completo: "+  nombre + " " + apellido + " " + "Correo: " +  correo + " " + "Telefono: " +  telefono + " " + "Comentario adicional: " + comentario ; 
}
alert(nombreCompleto());

}

