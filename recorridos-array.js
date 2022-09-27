var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Laptop", costo: 2000},
    {nombre: "Celular", costo: 500},
    {nombre: "Lapiz", costo: 300},
    {nombre: "Cuaderno", costo: 100},
    {nombre: "Audifonos", costo: 5000}
]

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Bici"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});