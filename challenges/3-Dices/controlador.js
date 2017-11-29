$(document).ready(function() {  // Codigo Procedural Procedimental --> OOP
  // Event Listener
  $('#roller button.add').on('click', function() { // Controlador
     numDados +=1
     pintaDado(numDados)
  })

  // Event listener
  $('#roller button.roll').on('click', function() { // Controlador
    dados.forEach(function(dado){ // Controlador
      dado.Lanzar()      
    }) 
  })
})
