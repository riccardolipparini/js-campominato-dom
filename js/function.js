// funzione genera div
function generaDiv(_tag, _classEl) {
    let element = document.createElement(_tag);
    element.classList.add(_classEl);
    return element
}

//generazione numeri random
function randomNum(max, min){
    return Math.floor(Math.random() * (max - min) + min);
}


