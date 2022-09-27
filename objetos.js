var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

auto.marca //trae el valor
auto.annio

var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log("Auto " + this.modelo + "Año: " + this.annio);
    }
};