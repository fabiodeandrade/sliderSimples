//Lista de variáveis
let time = 2000;
let currentImageIndex = 0;
let images = document.querySelectorAll("#slider img");
let max = images.length;

//principais funções

    function trocaImg() {
        images[currentImageIndex].classList.remove("selected")

        currentImageIndex++

        if (currentImageIndex >= max)
            currentImageIndex = 0

        images[currentImageIndex].classList.add("selected")    
    }


    function start() {
    setInterval(() => {
        trocaImg()
    }, time);
}

//ouvir evento
window.addEventListener("load", start)