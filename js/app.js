const formulario = document.getElementById("formulario");
const input = document.querySelectorAll('#formulario input');
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,14}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    correo: false,
    pass: false
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'usuario':
            if (expresiones.usuario.test(e.target.value)) {
                document.getElementById('usuario').classList.add('bg-blanco');
                campos['usuario'] = true;
            } else {
                document.getElementById('usuario').classList.add('bg-rojo');
                campos['usuario'] = false;
            }
            break;
        case 'email':
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('correo').classList.add('bg-blanco');
                campos['correo'] = true;
            } else {
                document.getElementById('correo').classList.add('bg-rojo');
                campos['correo'] = false;
            }
            break;
        case 'password1':
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('pass1').classList.add('bg-blanco');
            } else {
                document.getElementById('pass1').classList.add('bg-rojo');
            }
            break;
        case 'password2':
            let p1 = document.getElementById('pass1');
            let p2 = document.getElementById('pass2');

            if(p1.value == p2.value){
                p1.classList.add('bg-blanco');
                p2.classList.add('bg-blanco');
                p1.classList.remove('bg-rojo');
                p2.classList.remove('bg-rojo');
                campos['pass'] = true;
            } else {
                p1.classList.remove('bg-blanco');
                p2.classList.remove('bg-blanco');
                p1.classList.add('bg-rojo');
                p2.classList.add('bg-rojo');
                campos['pass'] = false;
            }
            break;
    }

}


input.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.usuario && campos.correo && campos.pass){
        formulario.reset();
    }
});
