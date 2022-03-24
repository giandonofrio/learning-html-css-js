const jsonHelper = require(__dirname + "/jsonHelper");

//funcion para leer el archivo json de los departamentos, podes comentarla una vez visto para no generar contenido extra no deseado en la consola.
deptosJson = jsonHelper.leerJson("departamentos");

// Escribí tu codigo a partir de acá.

const inmobiliara = {
  // Crear un objeto literal que represente la inmobiliaria
  departamentos: deptosJson, // Una propiedad llamada departamentos que contenga los departamentos.
  listarDepartamentos: function (arrayDepartamentos) {
    // Agregar un método listarDepartamentos que reciba como parámetro un array de departamentos y los imprima por consola.
    for (let i = 0; i < arrayDepartamentos.length; i++) {
      console.log("---El id del departamento es: " + arrayDepartamentos[i].id);
      console.log(
        "---El precio del alquiler es: " + arrayDepartamentos[i].precioAlquiler
      );
      if (arrayDepartamentos[i].disponible === true) {
        console.log("---El departamento esta: Disponible");
      } else {
        console.log("---El departamento esta: Alquilado");
      }
      console.log("-------------------------------------------");
    }
  },

  departamentosDisponibles: function (arrayDeptosDisponibles) {
    let deptosDisponibles = [];
    for (let i = 0; i < arrayDeptosDisponibles.length; i++) {
      if (arrayDeptosDisponibles[i].disponible === true) {
        deptosDisponibles.push(arrayDeptosDisponibles[i]);
      }
    }
    return deptosDisponibles;
  },

  buscarPorId: function (departamentoId) {
    let deptoEncontrado = [];
    for (let i = 0; i < this.deparprotamentos.length; i++) {
      if (this.departamentos[i].id === departamentoId) {
        deptoEncontrado.push(this.departamentos[i]);
      }
    }
    return deptoEncontrado;
  },

  buscarPorPrecio: function (precioDepartamento) {
    let departamentosFiltrados = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (
        this.departamentosDisponibles &&
        this.departamentos[i].precioAlquiler <= precioDepartamento
      ) {
        departamentosFiltrados.push(this.departamentos[i]);
      }
    }
    return departamentosFiltrados;
  },

  precioConImpuesto: function (porcentajeImpuesto) {
    let departamentoConImpuestos = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      this.departamentos[i].precioAlquiler +=
        (this.departamentos[i].precioAlquiler * porcentajeImpuesto) / 100;
      departamentoConImpuestos.push(this.departamentos[i]);
    }
    return departamentoConImpuestos;
  },

  alquilarDepartamento: function (departamentoId) {
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].id === departamentoId) {
        this.departamentos[i].disponible = false;
      }
    }
    jsonHelper.escribirJson("departamentos", this.departamentos);
    return this.departamentos;
  },
};

console.log(inmobiliara.alquilarDepartamento(1));
