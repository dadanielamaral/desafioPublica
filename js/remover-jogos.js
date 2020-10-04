

var tabela = document.querySelector("#tabela-partidas");



tabela.addEventListener("dblclick",function(event){

	var alvoEvento = event.target; //Em mquem eu dei duplo clique na tabela
	var paiEvento = alvoEvento.parentNode ;// Para excluir a linha inteira
	paiEvento.classList.add("fadeOut");

	setTimeout(function(){	
	paiEvento.remove();
  	},500);

});

