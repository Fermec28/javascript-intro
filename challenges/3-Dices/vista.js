var dados=[]
var numDados=0;
pintaDado = function (num){	
	 $('.panel').append('<div class="dado1" id='+num+'></div>') // Vista
	 dados.push(new Dado(num))

} 

var pintaCaraDado = function(id,cara){
	$("#"+id+"").removeClass().addClass("dado"+cara)
}
