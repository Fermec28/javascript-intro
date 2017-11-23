$( "body" ).keyup(function(e) {

	if (e.key==="q"){

		player=$("#player1_strip .active")
		player.removeClass("active")

		player.next().addClass("active")		
		if(player.next().hasClass("last")){
			alert("Win player1_strip")
		}


	}
	else if (e.key==="p"){
		player=$("#player2_strip .active")
		player.removeClass("active")
		player.next().addClass("active")
		if(player.next().hasClass("last")){
			alert("Win player2_strip")
		}
	}
	
  
});