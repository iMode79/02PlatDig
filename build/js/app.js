//Scipt para Formulario
//Variable Datos
const datos = {
    nombre : '',
    telefono : '',
    mail : '',
    mensaje : ''
}
//Declaración de variables
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const mail = document.querySelector('#mail');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

//Asignación de inputs
nombre.addEventListener('input', leertexto);
telefono.addEventListener('input', leertexto);
mail.addEventListener('input', leertexto);
mensaje.addEventListener('input', leertexto);

//Función para evento submit
formulario.addEventListener('submit' ,function (evento){
    evento.preventDefault ();
    //Deconstructing de la variable datos
    const { nombre, telefono, mail, mesanje } = datos;
    //Validación de campos vacios
    if (nombre === '', telefono === '', mail === '' ) {
        alerta ('Campos con * son obligatorios', true)//se manda un segundo argumento para validar mediante el, en este caso será error true o null Función alerta
        return;
    }   else {
            alerta ('Mensaje enviado')            
    }
    //console.log(datos);
    //Se limpia formulario
    datos.nombre = '';
    datos.telefono = '';
    datos.mail = '';
    datos.mensaje = '';
    formulario.reset();
});
//Función para leer los inputs
function leertexto (e) {
    datos [e.target.id] = e.target.value;
}
//Función alerta para el mensaje de campos vacios o mensaje enviado
function alerta (mensaje, error = null) {//Se recive el parametro mensaje y el 2o parametro booleano para el if
    const aviso = document.createElement('P');
    aviso.textContent = mensaje;
    if ( error) {                       
        aviso.classList.add('avisomal');    
    }   else {        
        aviso.classList.add('avisobien');
        }
    //Función para agregar el resultado de la alerta y un timer de eliminacion de alerta
    formulario.appendChild(aviso);   
    setTimeout(() => {
        aviso.remove();
    }, 2000);
}