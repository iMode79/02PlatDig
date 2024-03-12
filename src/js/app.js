const datos = {
    nombre : '',
    telefono : '',
    mail : '',
    mensaje : ''
}

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const mail = document.querySelector('#mail');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', leertexto);
telefono.addEventListener('input', leertexto);
mail.addEventListener('input', leertexto);
mensaje.addEventListener('input', leertexto);


formulario.addEventListener('submit' ,function (evento){
    evento.preventDefault ();

    const { nombre, telefono, mail, mesanje } = datos;
    
    if (nombre === '', telefono === '', mail === '' ) {
        alerta ('Campos con * son obligatorios', true)//se manda un segundo argumento para validar mediante el en este caso será error true o null
        return;
    }   else {
            alerta ('Mensaje enviado')            
    }
    
    console.log(datos);
    //Se limpia formulario
    datos.nombre = '';
    datos.telefono = '';
    datos.mail = '';
    datos.mensaje = '';
    formulario.reset();
});

function leertexto (e) {
    datos [e.target.id] = e.target.value;
}

function alerta (mensaje, error = null) {
    const aviso = document.createElement('P');
    aviso.textContent = mensaje;
    if ( error) {                       
        aviso.classList.add('avisomal');
    
}   else {        
        aviso.classList.add('avisobien');
}

    formulario.appendChild(aviso);   
    setTimeout(() => {
        aviso.remove();
    }, 2000);
}