const archivos = require(__dirname + "/lecturaEscritura");

const carrera = {
  bicicletas: archivos.leerJson("bicicletas"),
  bicicletasPorTanda: 4,
  //Agregar un método ciclistasHabilitados que devuelva una lista donde los ciclistas tengan un dopaje negativo.
  ciclistasHabilitados: function () {
    return this.bicicletas.filter(
      (ciclitaHabilitado) => ciclitaHabilitado.dopaje === false
    );
  },
  //Agregar un método listarBicicletas que reciba como parámetro un array de ciclistas e imprima por consola la siguiente información.
  listarBicicletas: function (arrayBicicletas) {
    arrayBicicletas.forEach((ciclista) => {
      const dopajeCiclista = ciclista.dopaje ? "Inhabilitado" : "Habilitado";
      console.log(
        "Ciclista: " +
          ciclista.ciclista +
          ", marca: " +
          ciclista.marca +
          ", rodado: " +
          ciclista.rodado +
          ", peso bicicleta: " +
          ciclista.peso +
          "KG, largo bicicleta: " +
          ciclista.largo +
          "CM, estado ciclita: " +
          dopajeCiclista
      );
    });
  },
  //Agregar un método buscarPorId que permita buscar un ciclista en función de su id.
  buscarPorId: function (ciclistaId) {
    return this.bicicletas.find((ciclista) => ciclista.id === ciclistaId);
  },
  //Agregar un método buscarPorRodado que permita filtrar los ciclistas habilitados, siempre y cuando su rodado sea igual al enviado como argumento.
  buscarPorRodado: function (rodadoBicicleta) {
    const ciclistaHabilitado = this.ciclistasHabilitados();
    return ciclistaHabilitado.filter(
      (bicis) => bicis.rodado === rodadoBicicleta
    );
  },
  //Agregar un método ordenarPorRodado que ordene las bicicletas de menor a mayor según su rodado.
  ordenarPorRodado: function () {
    return this.bicicletas.sort(
      (rodadoBici1, rodadoBici2) => rodadoBici1.rodado - rodadoBici2.rodado
    );
  },
  //Agregar un método generarTanda que retorne un array de ciclistas, que cumplan con las siguientes condiciones:
  generarTanda: function (rodadoBici, pesoBici) {
    const ciclistaHabilitado = this.buscarPorRodado(rodadoBici);
    const biciPeso = ciclistaHabilitado.filter((bici) => bici.peso <= pesoBici);
    return biciPeso.slice(0, this.bicicletasPorTanda);
  },
  //Agregar un método que permita calcularPodio, el mismo deberá calcular al ganador y los siguientes dos puestos en función de su puntaje.
  calcularPodio: function (generarTanda) {
    const tandaPodio = generarTanda.sort(
      (puntajeCiclista1, puntajeCiclista2) =>
        puntajeCiclista2.puntaje - puntajeCiclista1.puntaje
    );
    console.log(
      "El ganador es: " +
        tandaPodio[0].ciclista +
        ", con un puntaje de: " +
        tandaPodio[0].puntaje
    );
    console.log(
      "El segundo puesto es para: " +
        tandaPodio[1].ciclista +
        ", con un puntaje de: " +
        tandaPodio[1].puntaje
    );
    console.log(
      "El tercer puesto es para:  " +
        tandaPodio[2].ciclista +
        ", con un puntaje de: " +
        tandaPodio[2].puntaje
    );

  },

  modificarDopaje: function (ciclistaId) {
    const ciclista = this.buscarPorId(ciclistaId);
    if (ciclista.dopaje) {
      ciclista.dopaje = false;
    } else {
      ciclista.dopaje = true;
    }
    archivos.escribirJson("bicicletas", this.bicicletas);
    return ciclista;
  },
  modificarRodado: function (ciclistaId, rodadoNuevo) {  
    const ciclista = this.bicicletas.find(bicis => bicis.id === ciclistaId);
    ciclista.rodado = rodadoNuevo;
    archivos.escribirJson("bicicletas",this.bicicletas);
    return ciclista;
  },

  modificarPuntaje: function(ciclistaId, puntajeNuevo){
    const buscarCiclista = this.bicicletas.find(auto => auto.id === ciclistaId);
    buscarCiclista.puntaje =+ puntajeNuevo;
    archivos.escribirJson("bicicletas", this.bicicletas);
    return buscarCiclista
  }

};

console.log("------------ C) Ciclistas Habilitados ------------");
console.table(carrera.ciclistasHabilitados());
console.log("------------ E) Buscar Por ID ------------");
console.table(carrera.buscarPorId(7));
console.log("------------ F) Buscar Por Rodado ------------");
console.table(carrera.buscarPorRodado(24));
console.log("------------ G) Ordenar Por Rodado ------------");
console.table(carrera.ordenarPorRodado());
console.log("------------ H) Generar Tanda ------------");
console.table(carrera.generarTanda(28, 15));
console.log("------------ I) Calcular Podio ------------");
carrera.calcularPodio(carrera.bicicletas);
// console.log("------------------------");
// console.log(carrera.modificarDopaje(1));
// console.log("------------------------");
// console.table(carrera.modificarRodado(1,30));
// console.log("------------------------");
// console.table(carrera.modificarPuntaje(7,30));
