// OOP En Javascript

//------------------------------------------------------------------------------------------------------------------
// TU CODIGO: Crea un Objeto literal "garden", y funcion constuctora y prototipos para Flower aca.
//------------------------------------------------------------------------------------------------------------------
garden={}


var Flower = function(name,color){
  this.name = name
  this.color= color

}

garden.plant = function (flowers){
  this.flowers = flowers
}

garden.name ="Kula Botanical Garden"
garden.location = "Makawao"
garden.selectByColor = function(color){
    this.flowers.filter(function(element){
    return (color === element.color)
  })  

}

//------------------------------------------------------------------------------------------------------------------
// PRUEBAS: **NO** Cambies nada debajo de esta linea. Tu trabajo es implementar el codigo arriba para hacer que estas pruebas pasen.
//------------------------------------------------------------------------------------------------------------------

function assert(test, message) {
  if (!test) {
    throw "ERROR: " + message;
  }
  return true;
}





var flowers = [
  new Flower("Aster", "red"),
  new Flower("Bird of Paradise", "orange"),
  new Flower("Daffodil", "yellow"),
  new Flower("Gladiolus", "pink"),
  new Flower("Iris", "purple"),
  new Flower("Narcissus", "white"),
  new Flower("Chrysanthemum", "yellow"),
];
garden.plant= function(flowers){
  this.flowers=flowers
}
garden.name = "Kula Botanical Garden"

garden.plant(flowers);
garden.location = "Makawao"
garden.selectByColor = function(color){

  return this.flowers.filter(function(element){
    return (element.color === color)
  })
}

garden.selectByName= function(name){
  return this.flowers.filter(function(element){
    return (element.name === name)
  })
}


assert(
  garden.name === "Kula Botanical Garden", "the garden has a name"
);
assert(
  garden.location === "Makawao", "the garden is located in Maui"
);
assert(
  garden.selectByColor("yellow").length === 2, "the garden should have 2 yellow flowers"
);
assert(
  garden.selectByName("Iris").length === 1, "the garden should have 1 Iris"
);
assert(
  flowers[0].identify() === "I am an Aster and I am red.", "asters are red"
);
assert(
  flowers[2].name === "Daffodil", "expected 'Daffodil'"
);
assert(
  flowers[0].identify === flowers[5].identify, "only one implementation of the identify() function should exist"
);

console.log("Terminaste todo funciona");
