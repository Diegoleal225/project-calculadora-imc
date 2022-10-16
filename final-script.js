(() => {
    (() => {
        const body = document.querySelector("body");
        const recEvent = (event) => {
            event.preventDefault();
        }
        body.addEventListener("submit", recEvent);
    })();
    function Calculadora() {
        const nome= document.querySelector(".name-input");
        const sobreNome= document.querySelector(".last-name-input");
        const peso= document.querySelector(".peso-input");
        const altura= document.querySelector(".altura-input");
        const idade= document.querySelector(".idade-input");
        const display= document.querySelector(".p-text");
        const containerDisplay=document.querySelector(".grid-result-container");
        this.clickRec=()=>{
            document.addEventListener("click", (event) => {
                const recEvent = event.target;
                if (recEvent.classList.contains("buttonEnviar")) {
                   this.handleErro();
                } else if (recEvent.classList.contains("buttonClear")) {
                    this.clearDisplay();
                }
            })
        }
        this.handleErro=()=>{
            if(!nome.value){
                containerDisplay.style.background="red";
                display.innerHTML="Nome não informado";
                return;
            }else if(!sobreNome.value){
                containerDisplay.style.background="red";
                display.innerHTML="Sobrenome não informado";
                return;
            }else if(!peso.value){
                containerDisplay.style.background="red";
                display.innerHTML="Peso não informado";
                return;
            }else if(!altura.value){
                containerDisplay.style.background="red";
                display.innerHTML="Altura não informado";
                return;
            }
            else{
                this.showDisplay();
            }
        }
        this.showDisplay=()=>{
            const pesoN = Number(peso.value.replace(",","."));
            const alturaN = Number(altura.value.replace(",","."));
            const nomeN = nome.value;
            const sobreNomeN =sobreNome.value ;
            display.innerHTML = `${nomeN} ${sobreNomeN} imc:${this.imc(pesoN, alturaN)}`;
        }
        this.imc=(peso, altura) => {
            const imcValue =( peso / (altura ** 2)).toPrecision(3);
            return this.classifiqueImc(imcValue);
        }
        this.classifiqueImc=(imc) => {
            containerDisplay.style.background = "red";
            display.style.color='white';
            if (imc >= 40) {
                return `${imc} Obesidade grave!`;
            } else if (imc <= 39.9 && imc >= 30) {
                return `${imc} Obesidade!`;
            } else if (imc <= 29.9 && imc >= 25) {
                containerDisplay.style.background = '#dade00';
                return `${imc} Sobrepeso!`;
            } else if (imc <= 24.9 && imc >= 18.5) {
                containerDisplay.style.background = '#00fa9a';
                return `${imc} Peso ideal!`;
            } else if (imc < 18.5) {
                return `${imc} Magreza!`;
                }
            }
        this.clearDisplay=()=>{
            containerDisplay.style.background = 'rgba(0, 84, 133, 0.979)';
            return display.innerHTML = " ";
        }
    }
    const callCalculadora = new Calculadora();
    callCalculadora.clickRec();
})();
