

	//Selecionar Partidas
	var partidas = document.querySelectorAll(".partida");
	

	//Jogo e Resultado

	for ( var i = 0; i < partidas.length;i++){

	var partida= partidas[i];

	var tdJogo = partida.querySelector(".info-jogo");
	var tdPlacar = partida.querySelector(".info-placar");
	var tdMin = partida.querySelector(".info-min");
	var tdMax = partida.querySelector(".info-max");
	var tdQuebraMin = partida.querySelector(".info-quebramin");
	var tdQuebraMax = partida.querySelector(".info-quebramax");

	var jogo = tdJogo.textContent;
	var placar = tdPlacar.textContent;
	var min = tdMin.textContent;
	var max = tdMax.textContent;
	var quebraMax = tdQuebraMax.textContent;
	var quebraMin = tdQuebraMin.textContent;


	}

	