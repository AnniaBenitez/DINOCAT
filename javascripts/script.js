const michi = document.getElementById("michi");
const lana = document.getElementById("lana");
const score = document.querySelector(".score");
let sound = new Audio('../img/ANIMALCAT.mp3');
let count = 0;

function jump() {
    if (michi.classList != "jump") {
        michi.classList.add("jump");

        setTimeout(function () {
            michi.classList.remove("jump");
        }, 1000);
    }
}

let isAlive = setInterval(function () {
    // se obtiene la posicion del gato
    let catTop = parseInt(window.getComputedStyle(michi).getPropertyValue("top"));
    console.log(catTop)

    // se obtiene la posicion de la lana en eje X
    let lanaPosition = parseInt(window.getComputedStyle(lana).getPropertyValue("left"));
    console.log(lanaPosition)

    // Vemos si hay colisión
    if (lanaPosition < 0 && lanaPosition > -100 && catTop > -40) {
        // Chocaron
        //PONER SONIDO
        sound.play();
        //SALE GAME OVER
        alert(`Perdiste! Tu puntaje es de: ${count}`);
        count = 0;
    }
    count++;
    score.innerHTML = `SCORE: ${count}`;
}, 100);

document.addEventListener("keydown", function (event) {
    jump();
});

