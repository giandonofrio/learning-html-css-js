const jsonHelper = require(__dirname + "/jsonHelper");
let JsonTrabajadores = jsonHelper.leerJson("trabajadores");

//objeto literal con props y métodos
const catalogTrabajadores = {
  trabajadores: JsonTrabajadores,
  //NO modificar esto
  mostrarUnTrabajador: function (trabajador) {
    console.table({
      [trabajador.id]: {
        nombre: trabajador.nombre,
        oficio: trabajador.oficio,
        honorarios: trabajador.precioConsulta,
        consultas: trabajador.consultasRealizadas,
        matriculado: trabajador.matriculado,
      },
    });
  },
  listarTodos: function (trabajadoresAMostrar) {
    let datos = [];
    for (let i = 0; i < trabajadoresAMostrar.length; i++) {
      datos.push(this.traerUnTrabajador(trabajadoresAMostrar[i]));
    }
    console.table(datos);
  },
  traerUnTrabajador: function (trabajador) {
    return {
      nombre: trabajador.nombre,
      honorarios: "$" + trabajador.honorarioConsulta,
      oficio: trabajador.oficio,
      matriculado: trabajador.matriculado,
    };
  },
  //fin de NO modificar

  //tu código a partir de aquí...
  //...
  filtrarPorRating: function (ratingMinimo) {
    let arrayTrabajadoresFiltrados = [];
    for (let i = 0; i < this.trabajadores.length; i++) {
      if (ratingMinimo <= this.trabajadores[i].rating) {
        arrayTrabajadoresFiltrados.push(this.trabajadores[i]);
      }
    }
    return arrayTrabajadoresFiltrados;
  },

  buscarPorId: function (trabajadorId) {
    let trabajadorEncontrado = this.trabajadores;
    for (let i = 0; i < trabajadorEncontrado.length; i++) {
      if (trabajadorId === trabajadorEncontrado[i].id) {
        return trabajadorEncontrado[i];
      }
    }
    return {};
  },

  incrementarConsultasRealizadas: function(idProfesional ,consultas ){
    let trabajador = this.buscarPorId(idProfesional);
    trabajador.consultasRealizadas = trabajador.consultasRealizadas + consultas;
    jsonHelper.escribirJson ("trabajadores" , this.trabajadores);
    return trabajador

  }
};

//console.log("\n****** mostrar todos los trabajadores *****");
//catalogTrabajadores.listarTodos(JsonTrabajadores);

//console.log("\n****** punto 1 ¿cuál es la única propiedad del objeto literal? *****");
// responda aquí: La propiedad es "Trabajadores"

//console.log("\n****** punto 2 ¿cómo se denomina a las funciones dentro de un obj literal? *****");
// responda aquí: se denominan Metodos

console.log("\n****** punto 3 mostrar un trabajador *****");
const trabajador = JsonTrabajadores[0]// un trabajador del array a partir de un índice cualquiera (a modo de ejemplo para probar el metodo)
catalogTrabajadores.mostrarUnTrabajador(trabajador);

console.log("\n****** punto 4  filtrar trabajadores por rating******");
const rating = catalogTrabajadores.filtrarPorRating(4);
catalogTrabajadores.listarTodos(rating);

console.log("\n****** punto 5 buscar por id******");
const trabajadorEncontrado = catalogTrabajadores.buscarPorId(2);
catalogTrabajadores.mostrarUnTrabajador(trabajadorEncontrado);

console.log("\n****** punto 6 ******");
const trabajadorConConsultasIncrementadas = catalogTrabajadores.incrementarConsultasRealizadas(1,8);
catalogTrabajadores.mostrarUnTrabajador(trabajadorConConsultasIncrementadas);
