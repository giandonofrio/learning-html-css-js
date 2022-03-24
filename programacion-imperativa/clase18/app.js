const { log } = require("console");
const fs = require ("fs");
const jsonHelper = require ("./jsonHelper")

const concesionaria = {
    autos: jsonHelper.leerJson("AUTOS"),

    filtrarVendidos: function () {
        let autosVendidos = [];
        for (let i = 0; i < this.autos.length; i++) {
            const auto = this.autos[i];
            if (auto.vendido) {
                autosVendidos.push(auto);
            }
        }
        return autosVendidos;
    }
}

// const arrayVendidos = concesionaria.filtrarVendidos();
// console.log(arrayVendidos);