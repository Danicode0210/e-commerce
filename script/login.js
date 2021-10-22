
jsonPersona = {
    name: '',
    usuario: '',
    email: '',
    contraseña: ''
}


/* const registroUsuario = () => {

} */

const inicioSesion = () => {
    let usuarios = read();
    let credenciales = capturarDatosInicioSesion();

    const result = usuarios.filter(usuario => 
        (usuario.usuario === credenciales.usuario && usuario.contraseña === credenciales.contraseña)? 
        window.location.href = '/index.html' : '/login.html');

    /* for( let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === credenciales.usuario && usuarios[i].contraseña === credenciales.contraseña) {
            console.log('logeado')
            window.location.href = "/login.html"
            break;
        }
        else {
            window.location.href = "/registro.html"
            console.log('Incorrecto');
            break;
        }
    } */
}

const capturarDatosInicioSesion = () => {
    return {
        usuario: document['formLogin']['loginName'].value,
        contraseña: document['formLogin']['loginPassword'].value
    }
}

const guardarUsuario = () => {
    let usuario = capturarDatosRegistro();
    let usuarioAnterior = read() || []
    let usuariosFinales = [...usuarioAnterior, usuario]
    localStorage.setItem('usuarios', JSON.stringify(usuariosFinales));
}

const read = () => JSON.parse(localStorage.getItem('usuarios'))

const capturarDatosRegistro = () => {
    return {
        nombre: document['formReg']['registerName'].value,
        usuario: document['formReg']['registerUsername'].value,
        email: document['formReg']['registerEmail'].value,
        contraseña: document['formReg']['registerPassword'].value,
    }
}

document.getElementById('btn-register').addEventListener('click', (event) => {
    event.preventDefault();
    guardarUsuario();
})

document.getElementById('btn-login').addEventListener('click', (event) => {
    event.preventDefault();
    inicioSesion();
})

