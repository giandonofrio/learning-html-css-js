const miConsole = {
  miLogLindo: function (array) {
    for (let i = 0; i < array.length; i++) {
      const mensaje =
        "Nombre: " +
        array[i].nombre +
        ", DNI: " +
        array[i].dni +
        ", Profesion : " +
        array[i].profesion +
        ", Habilitado: " +
        array[i].habilitado;
      console.log(mensaje);
    }
  },

  miLogArray: function (array) {
    for (let i = 0; i < array.length; i++) {
      console.table(array[i]);
    }
  },

  // miLog: function (objeto) {
  //const objetosMenosPropiedades = {
  //nombre: objeto.nombre,
  //dni : objeto.dni
  // };
  // console.table(objetosMenosPropiedades);
  //},
};

module.exports = miConsole;
