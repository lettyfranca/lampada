/**
 * Controle de Lâmpadas
 * @author Letícia França
 */

function on(){
    document.querySelector("#lampada").src = "/img/on.jpg";
}

function off(){
    document.querySelector("#lampada").src = "/img/off.jpg";
}

function blink(){
    let intervalo = 0;
    let count = 0;
    while (count < 10){
        intervalo += 300;
		setTimeout("document.querySelector('#lampada').src='/img/on.jpg';",intervalo);
		intervalo += 300;
		setTimeout("document.querySelector('#lampada').src='/img/off.jpg';",intervalo);
		count++;
    }
}