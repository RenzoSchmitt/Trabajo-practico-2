class Auto {
    //ATRIBUTOS
    _marca
    _modelo
    _color
    _velocidad_max
    constructor(marca,modelo,color,velocidad_max) {
        this._marca = marca;
        this._modelo = modelo;
        this._color = color;
        this._velocidad_max = velocidad_max;
    }
    //METODOS
    Puesta_Marcha() {
        return `Arrancando el auto ${this._marca}`;
    }
    calcular_tiempo() {
        let distancia = Number (prompt("Coloque los Kilometros por recorrer:"))
        let velocidad = Number (prompt("Coloque la velocidad media a la que se viajará:"))
        let tiempo = distancia/velocidad
        return "El tiempo que tardara es"; tiempo
    }
};
var autos = [{}];
const auto1 = new Auto ('Citroen','C3','Morado', 220)
const auto2 = new Auto ('Ford','Fiesta','Azul Electrico', 250);
const auto3 = new Auto ('Chevrolet','Camaro', 'Gris', 300);
const auto4 = new Auto ('Peugeot','205', 'Rojo', 120);
const auto5 = new Auto ('Fiat','Duna','Blanco', 200);
autos.push(auto1,auto2,auto3,auto4,auto5);
console.info(auto1.Puesta_Marcha());
console.log (autos)
