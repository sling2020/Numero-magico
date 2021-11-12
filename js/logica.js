
var max = 10;
var min = 1;
var tiempo = 80000;
var numero = 0;
var aleatorio = generar_numero_aleatorio();
var aux = false;
function generar_numero_aleatorio(){
	return (Math.floor(Math.random()*(max - min+1))+min);

}
function getMax(){
	return max;
}
function getMin(){
	return min;
}
function getTiempo(){
	return tiempo;
}
function getTiempoSeg(){
	return tiempo/1000;
}

function jugar(){
	aleatorio = generar_numero_aleatorio();
	alert(aleatorio);
	document.getElementById("indicador").style.backgroundColor = "green";	
	document.getElementById("listo").innerHTML = "";
	aux = false;
	setTimeout(function(){
	if(!aux){
		document.getElementById("listo").innerHTML = "Tiempo fuera, no pudiste encontrado el numero magico.";
		aux = true;
		document.getElementById("indicador").style.backgroundColor = "red";	
	}
	},tiempo);

}


function enviarNumero(){
	if(!aux){
		numero = document.getElementById("numero").value;
		if(numero == aleatorio){
			document.getElementById("listo").innerHTML = "FELICIDADES has encontrado el numero magico.";
			aux = true;
			document.getElementById("indicador").style.backgroundColor = "red";
		}else if(numero < aleatorio){
			document.getElementById("listo").innerHTML = "El numero ingresado es menor al que busca.";
		}else if(numero > aleatorio){
			document.getElementById("listo").innerHTML = "El numero ingresado es mayor al que busca.";
		}
	}
}