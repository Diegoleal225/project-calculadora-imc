function root(){
    const form=document.querySelector('.form');
    function recebeEvento( evento){
        evento.preventDefault();
        verify();  
    }    
    form.addEventListener('submit',recebeEvento);
}
function verify(){
    const firstName= document.querySelector('.name-input').value;
    const lastName= document.querySelector('.last-name-input').value;
    const peso= Number(document.querySelector('.peso-input').value);
    const altura= Number(document.querySelector('.altura-input').value);
    const idade=Number(document.querySelector('.idade-input').value);
    
    const imc=(peso/(altura*altura)).toPrecision(4);
    const spanImcResult= document.querySelector('.p-result');
    const spanNameResultV=document.querySelector('.name-result');
    const spanLastName= document.querySelector('.last-name-result');
    const spanResultComp= document.querySelector('.result-comp');

    if (!firstName){
        const gridResultContBack= document.querySelector('.grid-result-container').style.background='red';
        clearSpan();
        spanImcResult.innerHTML= `Nome invalido `;
        return ;

    } else if (!lastName){
        const gridResultContBack= document.querySelector('.grid-result-container').style.background='red';
        clearSpan();
        spanImcResult.innerHTML= `Sobre nome invalido `;
        return ;
    } else if(!peso){
        const gridResultContBack= document.querySelector('.grid-result-container').style.background='red';
        clearSpan();
        spanImcResult.innerHTML= `Peso invalido ${peso}`;
        return;
    }else if (!altura){
        clearSpan();
        const gridResultContBack= document.querySelector('.grid-result-container').style.background='red';
        spanImcResult.innerHTML= `Altura invalida ${altura}`;
        return;
    }else{
        spanImcResult.innerHTML=` `;
        spanNameResultV.innerHTML=firstName;
        spanLastName.innerHTML=lastName;
        spanResultComp.innerHTML=imcResult(imc);
    }
}
function clearSpan(){
    const spanNameResultV=document.querySelector('.name-result');
    const spanLastName= document.querySelector('.last-name-result');
    const spanResultComp= document.querySelector('.result-comp');
    spanNameResultV.innerHTML=` `;
    spanLastName.innerHTML=` `;
    spanResultComp.innerHTML=` `;
}
function imcResult(imc){
    const gridResultContBack= document.querySelector('.grid-result-container').style.background='red';
    const gridResultContFont= document.querySelector('.grid-result-container').style.color='white';
    if (imc>=50){
        return imc=` Obesidade gravissima Imc:${imc}`;
    }else if(imc>=40){
        return imc=` Obesidade grave Imc:${imc}`;
    }else if(imc>=35){
        return imc=` Obesidade moderada Imc:${imc}`;
    }else if(imc>25){
        const gridResultContBack1= document.querySelector('.grid-result-container').style.background=' rgba(255, 255, 0, 0.685)';
        return imc=` Sobrepeso Imc:${imc}`;
    }else if(imc>=18){
        const gridResultContBack= document.querySelector('.grid-result-container').style.background='#00fa9a';
        return imc=` Peso ideal Imc:${imc}`;
    }else{
        return imc='Abaixo do peso'
    }
}
root();
