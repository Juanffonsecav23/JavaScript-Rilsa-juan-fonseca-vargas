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

function guardarDatos(array) {
    return sessionStorage.setItem('datos' , JSON.stringify(array))
}

//Evento

formContacto.addEventListener('submit', (submit)=>{
submit.preventDefault();
const newData = new Datos (nombre.value, apellido.value, email.value, celular.value);
console.log(`Nombre: ${newData.nombre} Apellido: ${newData.apellido} Correo: ${newData.email} Celular: ${newData.celular} Equipo seleccionado: ${opciones.value} Comentario adicional: ${coments.value} `); 
dataSave(newData);
guardarDatos(newData);
})
