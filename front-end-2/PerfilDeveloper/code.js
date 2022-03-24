/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
};

const listado = [{
        imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
        lenguajes: "HTML y CSS",
        bimestre: "1er bimestre",
    },
    {
        imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
        lenguajes: "Javascript",
        bimestre: "2do bimestre",
    },
    {
        imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
        lenguajes: "React JS",
        bimestre: "3er bimestre",
    },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    datosPersona.nombre = prompt("Ingresa tu nombre:");
    datosPersona.edad = prompt("Ingresa el año en que naciste:");
    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives:");
    datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?");
}

function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    document.getElementById("nombre").innerHTML = datosPersona.nombre;
    document.getElementById("edad").innerHTML = 2021 - datosPersona.edad;
    document.getElementById("ciudad").innerHTML = datosPersona.ciudad;
    if (datosPersona.interesPorJs) {
        datosPersona.interesPorJs = "Si";
    } else {
        datosPersona.interesPorJs = "No";
    }
    document.getElementById("javascript").innerHTML = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    const fila = document.getElementById("fila");
    listado.forEach((materia) => {
        fila.innerHTML += ` <div class="caja">
  <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
  <p>Lenguajes: ${materia.lenguajes}</p>
  <p>Bimestre: ${materia.bimestre}</p>
  </div>`;
    });
    materiasBtn.removeEventListener(
        "click",
        recorrerListadoYRenderizarTarjetas);
}

function alternarColorTema() {
    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    document.getElementById("sitio").classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", function(e) {
    if (e.key === "f" || e.key === "F") {
        document.getElementById("sobre-mi").classList.remove("oculto");
    }
});