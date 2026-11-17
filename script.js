console.log("conectado");

const formIngreso = document.getElementById("form-ingreso");
formIngreso.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const rol = document.getElementById("rol").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario === "") {
        alert("Por favor, ingrese su nombre de usuario");
        return;
    }

    if (contrasena === "") {
        alert("Por favor, ingrese su contraseña");
        return;
    }

    if (rol === "") {
        alert("Por favor, seleccione su rol");
        return;
    }

    else if (rol === "administrador") {
        alert("Bienvenido a ecopunto, " + usuario + ". Rol: Administrador");
        window.location.href = "panel-administrador.html";
    }

    else if (rol === "delegado") {
        alert("Bienvenido a ecopunto, " + usuario + ". Rol: Delegado");
        window.location.href = "panel-delegado.html";
    }

});