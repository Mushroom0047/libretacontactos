//variables ingreso
let loginMail = document.getElementById('email').value;
let loginPass = document.getElementById('password').value;

//variables registro
let signUser = document.getElementById('usuario').value;
let signMail = document.getElementById('signMail').value;
let signPass = document.getElementById('pass1').value;
let signPass2 = document.getElementById('pass2').value;

function ingresar(){
    if(loginMail != '' && loginPass != ''){
        console.log('funciona');
    }else{
        console.log('no es vacio');
    }
}

function registrar(){
    if(signUser != '' && signMail != '' && signPass != '' && signPass2 != ''){
        console.log('todo ok');
    }
}