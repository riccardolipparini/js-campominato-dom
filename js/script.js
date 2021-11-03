// Consegna L’utente indica un livello di difficoltà in base al quale viene generata 
// una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 



// 1 chiedere all'utente a che difficoltà vuole giocare
// 2 utilizzare una griglia in base alla difficoltà scelta
// 3 dare la possibilità all'utente di evidenziare i quadrati toccati
// 4 generare 16 numeri random in base alla difficoltà scelta
// fare in modo che al click su uno di questi numeri si verifichi l'evento bomba

const mineField = document.getElementById("campominato");

const chooseDif = prompt("A quale difficoltà vuoi giocare? scrivi facile, medio o difficile")

const bombe = [];


if (chooseDif == "facile") {
    for (i = 1; i < 101; i++) {
        let div = generaDiv("div", "grid1");
        // div click per cambiare colore
        div.addEventListener("click",
            function () {
                div.classList.add("click");
            }
        );
        mineField.append(div);
        div.append(i);
    }
    while (bombe.length < 16) {

        let num = randomNum(100, 1);
        if (bombe.includes(num) === false) {
            bombe.push(num);

        }

    }

} else if (chooseDif == "medio") {
    for (i = 1; i < 82; i++) {
        let div = generaDiv("div", "grid2");
        // div click per cambiare colore
        div.addEventListener("click",
            function () {
                div.classList.add("click");
            }
        );
        mineField.append(div);
        div.append(i);
    }
    while (bombe.length < 16) {

        let num = randomNum(81, 1);
        if (bombe.includes(num) === false) {
            bombe.push(num);

        }

    }

} else if (chooseDif == "difficile") {
    for (i = 1; i < 50; i++) {
        let div = generaDiv("div", "grid3");
        // div click per cambiare colore
        div.addEventListener("click",
            function () {
                div.classList.add("click");
            }
        );
        mineField.append(div);
        div.append(i);
    }
    while (bombe.length < 16) {

        let num = randomNum(49, 1);
        if (bombe.includes(num) === false) {
            bombe.push(num);

        }

    }

}






console.log(bombe);

























