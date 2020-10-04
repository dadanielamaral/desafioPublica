
var filtrar = document.querySelector("#filtro-jogo");

filtrar.addEventListener("input",function(){
	console.log(this.value);
	var partidas = document.querySelectorAll(".partida");
	
	if(this.value.length > 0){
	for( var i=0; i < partidas.length; i++){
		var partida = partidas[i];
        var tdJogo = partida.querySelector(".info-jogo");
        var jogo = tdJogo.textContent;
        var expressao = new RegExp(this.value,"i")
    
        if( !expressao.test(jogo)){
				partida.classList.add("sumir");
			}else {
				partida.classList.remove("sumir");
			}
		}
	}else {
		for(var i=0; i < partidas.length; i++){
			partidas[i].classList.remove("sumir");
		}
	}


});