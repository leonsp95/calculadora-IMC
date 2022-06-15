const BTN = document.querySelector("#calc");

function calcImc() {
    const NAME = document.querySelector("#name").value;
    const HEIGHT = document.querySelector("#height").value;
    const WEIGHT = document.querySelector("#weight").value;
    
    if (NAME !== '' && HEIGHT !== '' && WEIGHT !=='' ) {
        const IMC = (WEIGHT / (HEIGHT * HEIGHT)).toFixed(2);
        let category = '';
    
        if (IMC <18.5) {
            category = "abaixo do peso."
        } else if (IMC >18.5 && IMC < 25) {
            category = "com o peso ideal."
        } else if (IMC >25 && IMC < 30) {
            category = "levemente acima do peso."
        } else if (IMC >30 && IMC < 35) {
            category = "com obesidade grau 1."
        } else if (IMC >35 && IMC < 40) {
            category = "com obesidade grau 2."
        } else {
            category = "com obesidade mórbida (grau 3)!"
        }


        alert(`${NAME}, o seu IMC é de ${IMC} e você está ${category}`)

    } else {
        alert("Favor preencher todos os campos!");
    }
}

BTN.addEventListener("click", calcImc);