const archivos = require(__dirname + "/lecturaEscritura");

const carrera = {
  autos: archivos.leerJson("autos"),
  autosPorTanda: 6,
  //Agregar un método autosHabilitados, que retorne todos los autos habilitados, es decir, aquellos que no estén sancionados.
  autosHabilitados: function () {
    return this.autos.filter((auto) => auto.sancionado === false);
  },
  //Agregar un método listarAutos que reciba como parámetro un array de autos e imprima por consola.
  listarAutos: function (arrayAuto) {
    arrayAuto.forEach((auto) => {
      console.log(
        "Piloto: " +
          auto.piloto +
          ", patente: " +
          auto.patente +
          ", peso: " +
          auto.peso +
          ", estado : " +
          (auto.sancionado ? "Sancionado" : "Habilitado")
      );
    });
    
  },
  //Agregar un método buscarPorPatente que permita buscar el auto en función de su patente.
  buscarPorPatente: function (stringPatente) {
    return this.autos.find((auto) => auto.patente === stringPatente);
  },
  //Agregar un método buscarPorCilindrada que permite filtrar los autos habilitados, siempre y cuando su propiedad cilindrada sea menor o igual a la cilindrada enviada como argumento.
  buscarPorCilindrada: function (maxCilindrada) {
    const autosHabilitados = this.autosHabilitados();
    return autosHabilitados.filter((auto) => auto.cilindrada <= maxCilindrada);
  },
  // Agregar un método ordenarPorVelocidad que ordene los autos de menor a mayor según su velocidad.
  ordenarPorVelocidad: function (arrayAutos) {
   return arrayAutos.sort((a,b)=> a.piloto < b.piloto)
  },
  // /Agregar un método generarTanda que permita retornar un array de autos, que cumplan con las siguientes condiciones:
  generarTanda: function (peso, maxCilindrada) {
    const autosHabilitadosYCilindrada = this.buscarPorCilindrada(maxCilindrada);
    const autosFiltradosPeso = autosHabilitadosYCilindrada.filter(
      (auto) => auto.peso <= peso
    );
     return autosFiltradosPeso.slice(0, this.autosPorTanda);
  },
 // reduce
  pesoTotalPorTanda: function(arrayAuto){
    return arrayAuto.reduce((acumm, item)=>  acumm+item.peso,0)
  },
  //Agregar un método listarPodio, que calcule el podio en función del puntaje de los pilotos y muestre el resultado por consola.
  listarPodio: function (arrayAutos) {
    arrayAutos.sort(
      (puntajeAuto1, puntajeAuto2) =>
        puntajeAuto2.puntaje - puntajeAuto1.puntaje
    );
    console.log(
      "El ganador es: " +
        arrayAutos[0].piloto +
        ", con un puntaje de " +
        arrayAutos[0].puntaje
    );
    console.log(
      "El segundo puesto es para: " +
        arrayAutos[1].piloto +
        ", con un puntaje de " +
        arrayAutos[1].puntaje
    );
    console.log(
      "El tercer puesto es para: " +
        arrayAutos[2].piloto +
        ", con un puntaje de " +
        arrayAutos[2].puntaje
    );
  

  },
};

console.log("-------- C) Autos Habilitados ------------ ");
console.table(carrera.autosHabilitados());
console.log("-------- D) Listar Auto ------------ ");
carrera.listarAutos(carrera.autos);
console.log("-------- E) Buscar Por Patente ------------ ");
console.table(carrera.buscarPorPatente("ABC123"));
console.log("-------- F) Buscar Por Cilindrada ------------ ");
console.table(carrera.buscarPorCilindrada(1600));
console.log("-------- G) Ordenar Por Velocidad ------------ ");
console.table(carrera.ordenarPorVelocidad(carrera.autos));
console.log("-------- H) Generar Tanda ------------ ");
console.table(carrera.generarTanda(2000, 2000));
console.log("-------- I) Podio ------------ ");
const autosTanda = carrera.generarTanda(2000,2000)
carrera.listarPodio(autosTanda);
console.log("-------------------- ");


