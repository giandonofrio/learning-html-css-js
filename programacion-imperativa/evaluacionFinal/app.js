
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

// 1.
const jsonHelper = require(__dirname + "/jsonHelper");
const peliculasJson = jsonHelper.leerJson("peliculas");
// 2.
const gestionDePeliculas = {
  // 2.A.
  peliculas: jsonHelper.leerJson("peliculas"),

  // 2.B.
  listarPeliculas: function (arrayPeliculas) {
    arrayPeliculas.forEach((pelicula) => {
      console.log(
        "Titulo: " +
          pelicula.titulo +
          ", director: " +
          pelicula.director +
          ", duracion en minutos: " +
          pelicula.duracionEnMinutos +
          ", calificacion: " +
          pelicula.calificacionIMDB +
          (pelicula.ganoOscar ? ", premiada" : ", sin premios")
      );
    });
  },
  // 2.C.
  buscarPorId: function (idPelicula) {
    return this.peliculas.find((pelicula) => pelicula.id === idPelicula);
  },
  // 2.D.
  peliculasPremiadas: function () {
    return this.peliculas.filter((pelicula) => pelicula.ganoOscar === true);
  },
  // 2.E.
  filtrarPorDuracion: function (duracionMinima, duracionMaxima) {
    return this.peliculas.filter(
      (pelicula) =>
        pelicula.duracionEnMinutos >= duracionMinima &&
        pelicula.duracionEnMinutos <= duracionMaxima
    );
  },
  // 2.F.
  ordenarPorCalificacion: function (arrayPeliculas) {
    return arrayPeliculas.sort(
      (calificacionA, calificacionB) =>
        calificacionA.calificacionIMDB - calificacionB.calificacionIMDB
    );
  },
  // 2.G.
  duracionTotal: function () {
    return this.peliculas.reduce(
      (acum, item) => acum + item.duracionEnMinutos,
      0
    );
  },
  // 2.H.
  premiarPeliculaPorTitulo: function (tituloABuscar) {
    const pelicula = this.peliculas.find(
      (pelicula) => pelicula.titulo === tituloABuscar
    );
    if (pelicula.ganoOscar === false) {
      pelicula.ganoOscar = true;
    }
    jsonHelper.escribirJson("peliculas", this.peliculas);
    return pelicula;
  },
  // 2.I.
  eliminarPorId: function (idAEliminar) {
    for (var i = 0; i < this.peliculas.length; i++) {
      if (this.peliculas[i].id == idAEliminar) {
        this.peliculas.splice(i, 1);
      }
    }
    jsonHelper.escribirJson("peliculas", this.peliculas);
    console.table(this.peliculas);
  },
};

/******************************/
/* Ejecución de las consignas */
/******************************/

console.log("***** 2.B. *****");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas);
console.log("****************\n");
console.log("***** 2.C. *****");
console.table(gestionDePeliculas.buscarPorId(2));
// Ejecución aquí
console.log("****************\n");
console.log("***** 2.D. *****");
console.table(gestionDePeliculas.peliculasPremiadas());
// Ejecución aquí
console.log("****************\n");
console.log("***** 2.E. *****");
console.table(gestionDePeliculas.filtrarPorDuracion(90, 600));
// Ejecución aquí
console.log("****************\n");
console.log("***** 2.F. *****");
console.table(
  gestionDePeliculas.ordenarPorCalificacion(gestionDePeliculas.peliculas)
);
// Ejecución aquí
console.log("****************\n");
console.log("***** 2.G. *****");
console.log(
  "La duración en minutos de todas las peliculas sumadas es de " +
    gestionDePeliculas.duracionTotal() +
    " minutos"
);
// Ejecución aquí
console.log("****************\n");
console.log("***** 2.H. *****");
console.table(gestionDePeliculas.premiarPeliculaPorTitulo("Summer and Smoke"));
// Ejecución aquí
console.log("****************\n");
console.log("***** 2.I. *****");
gestionDePeliculas.eliminarPorId(1);
// Ejecución aquí
console.log("****************\n");
