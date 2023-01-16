/* // PRIMERA ENTRAGA PROYECTO FINAL 

let datos = prompt("Para llenar el formulario escriba 1");
while  (datos != 0 ){

    let nombre = document.getElementById("nombre")
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

 */

// TERCERA ENTREGA DEL PROYECTO FINAL

const formContacto = document.getElementById('formContacto');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('correo');
const celular = document.getElementById('celular');
const opciones = document.getElementById('opciones');
const coments = document.getElementById('coments')
let datos;


//Condicional con operador ternario

sessionStorage.getItem('datos') ? datos = JSON.parse(sessionStorage.getItem('datos')) : datos = [];

//Datos del usuario

class Datos {
    constructor(nombre, apellido, email, celular){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.celular = celular;
    }
}

//Guardado de datos

function dataSave(data) {
    return datos.push(data)
}

//Guardar en SS

function saveData(array) {
    return sessionStorage.setItem('datos' , JSON.stringify(array))
}

//Evento

formContacto.addEventListener('submit', (submit)=>{
submit.preventDefault();
const newData = new Datos (nombre.value, apellido.value, email.value, celular.value);
console.log(`Nombre: ${newData.nombre} Apellido: ${newData.apellido} Correo: ${newData.email} Celular: ${newData.celular} Equipo seleccionado: ${opciones.value} Comentario adicional: ${coments.value} `); 
})

//Selectores

