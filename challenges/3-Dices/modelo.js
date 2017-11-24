var Dado = function(id){
  this.cara=1;
  this.id=id
}

Dado.prototype.Lanzar = function(){
  this.cara = Math.floor((Math.random()*6)+1)
  pintaCaraDado(this.id,this.cara)  
}