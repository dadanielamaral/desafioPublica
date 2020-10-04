	
	var botaoAdd = document.querySelector("#adicionar-resultado");

	botaoAdd.addEventListener("click",function(evento){
		evento.preventDefault();

		var form = document.querySelector("#form-adiciona");

		var resultado = resultadoJogo(form);

		
		adicionarResultadoTabela(resultado);

		form.reset();
		
		var mensagensErro = document.querySelector("#mensagens-erro");
		mensagensErro.innerHTML = "";

		
		function adicionarResultadoTabela(resultado){
			var resultadoTr = montaTr(resultado)

			var tabela = document.querySelector("#tabela-partidas");
			
			tabela.appendChild(montaTr(resultado));
		}
		
		});

		function resultadoJogo(form){

			var resultado = {

				jogo : form.jogo.value,
				placar : form.placar.value,
				

			}	
		
			return resultado;
		}

		function montaTr(resultado){

			var resultadoTr = document.createElement('tr');
			resultadoTr.classList.add("partida");


			var minAnterior = pegaUltimoMin();
			var quebraMinAnterior = pegaQuebraMin();
			var maxAnterior = pegaUltimoMax();
			var quebraMaxAnterior = pegaQuebraMax();

			testarResultado(minAnterior,maxAnterior);
			

			function pegaUltimoMin(){

				var partidas = document.querySelectorAll(".partida");

				var i = partidas.length;
				var partida= partidas[i-1];
				var tdMin = partida.querySelector(".info-min");
				var min = tdMin.textContent;
				return min;

			
			}

			function pegaQuebraMin(){
				var partidas = document.querySelectorAll(".partida");

				var i = partidas.length;
				var partida= partidas[i-1];
				var tdQuebraMin = partida.querySelector(".info-quebramin");
				var quebraMin = tdQuebraMin.textContent;
				console.log(quebraMin);
				return parseInt(quebraMin);
			}

			function pegaUltimoMax(){

				var partidas = document.querySelectorAll(".partida");

				var i = partidas.length;
				var partida= partidas[i-1];
				var tdMax = partida.querySelector(".info-max");
				var max = tdMax.textContent;
				return max;

			
			}

			function pegaQuebraMax(){
				var partidas = document.querySelectorAll(".partida");

				var i = partidas.length;
				var partida= partidas[i-1];
				var tdQuebraMax = partida.querySelector(".info-quebramax");
				var quebraMax = tdQuebraMax.textContent;
				console.log(quebraMax);
				return parseInt(quebraMax);
			}

			function testarResultado(minAnterior,maxAnterior){
				
			if (resultado.placar < minAnterior){
				resultadoTr.appendChild(montaClasse(resultado.jogo,"info-jogo"));
				resultadoTr.appendChild(montaClasse(resultado.placar,"info-placar"));
				resultadoTr.appendChild(montaClasse(resultado.placar,"info-min"));
				resultadoTr.appendChild(montaClasse(maxAnterior,"info-max"));
				
				var quebraNovoMin = quebraMinAnterior + 1;
				resultadoTr.appendChild(montaClasse(quebraNovoMin,"info-quebramin"));

				resultadoTr.appendChild(montaClasse(quebraMaxAnterior,"info-quebramax"));


			} 

			if (resultado.placar > maxAnterior){
				resultadoTr.appendChild(montaClasse(resultado.jogo,"info-jogo"));
				resultadoTr.appendChild(montaClasse(resultado.placar,"info-placar"));
				resultadoTr.appendChild(montaClasse(minAnterior,"info-min"));
				resultadoTr.appendChild(montaClasse(resultado.placar,"info-max"));
				resultadoTr.appendChild(montaClasse(quebraMinAnterior,"info-quebramin"));
				var quebraNovoMax = quebraMaxAnterior + 1;
				resultadoTr.appendChild(montaClasse(quebraNovoMax,"info-quebramax"));
			}
			else {

				resultadoTr.appendChild(montaClasse(resultado.jogo,"info-jogo"));
				resultadoTr.appendChild(montaClasse(resultado.placar,"info-placar"));
				resultadoTr.appendChild(montaClasse(minAnterior,"info-min"));
				resultadoTr.appendChild(montaClasse(maxAnterior,"info-max"));
				resultadoTr.appendChild(montaClasse(quebraMinAnterior,"info-quebramin"));
				resultadoTr.appendChild(montaClasse(quebraMaxAnterior,"info-quebramax"));

			}

			}
			
			return resultadoTr;

		}

		function montaClasse(dado,classe){

			var td = document.createElement('td');

			td.textContent= dado;
			td.classList.add(classe);

			return td;

		}

		

		

		

		