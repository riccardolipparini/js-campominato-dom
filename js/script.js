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
let totaleBombe;
let baseClass;

if (chooseDif == "facile") {
    totaleBombe = 100;
    baseClass = "grid1";
    generaGriglia();
} else if (chooseDif == "medio") {
    totaleBombe = 81;
    baseClass = "grid2";
    generaGriglia();
} else if (chooseDif == "difficile") {
    totaleBombe = 49;
    baseClass = "grid3";
    generaGriglia();
}


function generaBombe() {
    while (bombe.length < 16) {
        let num = randomNum(totaleBombe, 1);
        if (bombe.includes(num) === false) {
            bombe.push(num);
        }
    }
    console.log(bombe);
}

function generaGriglia() {
    generaBombe();
    
    for (i = 1; i <= totaleBombe; i++) {
        let div = generaDiv("div", baseClass);
        div.id = i;
        // div click per cambiare colore
        div.addEventListener("click",
            function () {
                div.classList.add("click");
                // const id = parseInt(div.id);
                // const id = this.innerText;
                if (bombe.includes(id)) {
                    // è una bomba, ho perso
                    alert('ho perso');
                }
            }
        );
        mineField.append(div);
        div.append(i);
    }
    
}


























