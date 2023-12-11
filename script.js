
function calculoimc(){
    let altura = parseFloat(document.querySelector('#input-altura').value);
    let peso = parseFloat(document.querySelector('#input-peso').value);
    let imc = (peso / (altura * altura) ).toFixed(2);
    
   document.querySelector('.a-resultado').innerHTML = imc;






   if( altura.value || peso.value === ''){
    document.querySelector('.a-resultado').innerHTML = "Nenhum valor foi digitado";
   }else if(imc <= 18.5){
    document.querySelector('.resultado-condicao').innerHTML = 'Magreza!';
   } else if(imc >= 18 && imc <= 24.93 ){
    document.querySelector('.resultado-condicao').innerHTML = 'Seu peso está normal!';
   } else if(imc >= 25 && imc <= 29.90){
    document.querySelector('.resultado-condicao').innerHTML = 'Sobrepeso!';
   } else if(imc >= 30 && imc <= 34.90){
    document.querySelector('.resultado-condicao').innerHTML = 'Obesidade Grau I!';
   } else if(imc >= 35 && imc <= 39.90){
    document.querySelector('.resultado-condicao').innerHTML = 'Obesidade Grau II!';
   } else if(imc >= 40 ){
    document.querySelector('.resultado-condicao').innerHTML = 'Obesidade Grau III!';
   }

};

function limpar(){
    document.querySelector('.a-resultado').innerHTML = "";
    document.querySelector('.resultado-condicao').innerHTML = "";
    document.querySelector('#input-altura').value = "";
    document.querySelector('#input-peso').value = "";

    
}
 