let formulario = document.querySelector("#paymentForm");
let inputs = document.querySelectorAll("#paymentForm input");
//small: messages of error
 let smallError1=document.getElementById("error1");
 let smallError2=document.getElementById("error2");
 let smallError3=document.getElementById("error3");
 let smallError4=document.getElementById("error4");
 let smallError5=document.getElementById("error5");
 let smallError6=document.getElementById("error6");
 let smallError7=document.getElementById("error7");

 //inputs
 let cardInput=document.getElementById("cardInput");
let ccvInput=document.getElementById("ccvInput");
let amountInput=document.getElementById("amountInput");
let firstInput=document.getElementById("firstInput");
let lastInput=document.getElementById("lastInput");
let cityInput=document.getElementById("cityInput");
let postalInput=document.getElementById("postalInput");
let stateInput=document.getElementById("stateInput")

//let cardSelectionInput=document.getElememtById("cardSelection")

//radio inputs
let radio1=document.getElementById("radio1");
let radio2=document.getElementById("radio2");
let radio3=document.getElementById("radio3");
let radio4=document.getElementById("radio4");

//funcion remover estilos añadidos
 function removeStyles(elementoInput){
         elementoInput.style.background="none"
     elementoInput.style.borderColor="#c3c3c3"
 }


//div error message
let errorDiv=document.getElementById("missingFields");


formulario.addEventListener("submit",(e)=>{
    let errorMessages=[]

    if(cardInput.value=== "" || cardInput.value.length<16){
        errorMessages.push("Su número de tarjeta debe contener 16 digitos!")
        cardInput.style.borderColor="red"
        cardInput.style.background="#ffcbdb"
        errorDiv.classList.add("alert-active")
    }
    if(ccvInput.value=== "" || ccvInput.value.length<4){
        errorMessages.push("Su CCV debe contener 4 digitos!")
        ccvInput.style.borderColor="red"
        ccvInput.style.background="#ffcbdb"
        errorDiv.classList.add("alert-active")
    }
    if(amountInput.value=== ""){
        errorMessages.push("La cuenta no debe estar vacia")
        amountInput.style.borderColor="red"
        amountInput.style.background="#ffcbdb"
        errorDiv.classList.add("alert-active")
    }
    if(firstInput.value=== ""){
        errorMessages.push("Escriba su Nombre")
        firstInput.style.borderColor="red"
        firstInput.style.background="#ffcbdb"
        errorDiv.classList.add("alert-active")
    }
    if(lastInput.value=== ""){
        errorMessages.push("Escriba su apellido")
        lastInput.style.borderColor="red"
        lastInput.style.background="#ffcbdb"
         errorDiv.classList.add("alert-active")
    }
    if(cityInput.value=== ""){
        errorMessages.push("Debe escribir su ciudad")
        cityInput.style.borderColor="red"
        cityInput.style.background="#ffcbdb"
        errorDiv.classList.add("alert-active")
    }
    if(postalInput.value=== ""){
        errorMessages.push("Escriba su codigo postal, por favor!")
        postalInput.style.borderColor="red"
        postalInput.style.background="#ffcbdb"
        errorDiv.classList.add("alert-active")
    }
    if(radio1.checked===false && radio2.checked===false && radio3.checked===false && radio4.checked===false){
        errorMessages.push("Seleccione el tipo de tarjeta.")
        errorDiv.classList.add("alert-active")
    }
    if(stateInput.value==="Pick a state"){
        errorMessages.push("Seleccione el estado")
        stateInput.style.borderColor="red"
        stateInput.style.background="#ffcbdb"
    }
    if(errorMessages.length>0){
        e.preventDefault();
        errorDiv.innerHTML=errorMessages.join("<br>");
    }
})

const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  numeros: /^\d{0,16}$/, 
   numerosDos: /^\d{0,4}$/,
    numerosTres: /^\d{0,100}$/
};

let validarFormulario=(e)=>{
    switch(e.target.name){
    case "Nombre de la tarjeta":
        if(expresiones.numeros.test(e.target.value)){
            document.getElementById("error1").classList.remove("alert1-active")
             document.getElementById("error1").classList.add("alert1")
             cardInput.style.background="none"
             cardInput.style.borderColor="#c3c3c3"
              removeStyles(cardInput);
        }else{
            document.getElementById("error1").classList.add("alert1-active")
            cardInput.style.background="#ffcbdb"
            cardInput.style.borderColor="red"

        }
    break;
    case "Número ccv":
        if(expresiones.numerosDos.test(e.target.value)){
            document.getElementById("error2").classList.remove("alert2-active")
             document.getElementById("error2").classList.add("alert2")
              ccvInput.style.background="none"
             ccvInput.style.borderColor="#c3c3c3"
              
        }else{
            document.getElementById("error2").classList.add("alert2-active")
             ccvInput.style.background="#ffcbdb"
             ccvInput.style.borderColor="red"
        }
    break;
    case "Cuenta":
        if(expresiones.numerosTres.test(e.target.value)){
            document.getElementById("error3").classList.remove("alert3-active")
             document.getElementById("error3").classList.add("alert3")
              amountInput.style.background="none"
             amountInput.style.borderColor="#c3c3c3"
        }else{
            document.getElementById("error3").classList.add("alert3-active")
            amountInput.style.background="#ffcbdb"
             amountInput.style.borderColor="red"
        }
    break;
    case "Nombre":
         if(expresiones.nombre.test(e.target.value)){
            document.getElementById("error4").classList.remove("alert4-active")
             document.getElementById("error4").classList.add("alert4")
              firstInput.style.background="none"
             firstInput.style.borderColor="#c3c3c3"
        }else{
            document.getElementById("error4").classList.add("alert4-active")
            firstInput.style.background="#ffcbdb"
             firstInput.style.borderColor="red"
        }
    break;
    case "Apellido":
         if(expresiones.nombre.test(e.target.value)){
            document.getElementById("error5").classList.remove("alert5-active")
             document.getElementById("error5").classList.add("alert5")
              lastInput.style.background="none"
             lastInput.style.borderColor="#c3c3c3"
        }else{
            document.getElementById("error5").classList.add("alert5-active")
            lastInput.style.background="#ffcbdb"
             lastInput.style.borderColor="red"
             entradas.nombre=false;
        }
    break;
    case "Ciudad":
         if(expresiones.nombre.test(e.target.value)){
            document.getElementById("error6").classList.remove("alert6-active")
             document.getElementById("error6").classList.add("alert6")
              cityInput.style.background="none"
             cityInput.style.borderColor="#c3c3c3"
        }else{
            document.getElementById("error6").classList.add("alert6-active")
            cityInput.style.background="#ffcbdb"
             cityInput.style.borderColor="red"
        }
    break;
    
    }
}



inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
})

//
 function limpiarFormulario(){
 formulario.reset();
  document.getElementById("missingFields").classList.remove("alert-active");
     removeStyles(cardInput);
     removeStyles(ccvInput);
     removeStyles(amountInput);
     removeStyles(firstInput);
     removeStyles(lastInput);
     removeStyles(cityInput);
     removeStyles(stateInput);
     removeStyles(postalInput);
          smallError1.classList.remove("alert1-active");
          smallError2.classList.remove("alert2-active");
          smallError3.classList.remove("alert3-active");
          smallError4.classList.remove("alert4-active");
          smallError5.classList.remove("alert5-active");
          smallError6.classList.remove("alert6-active");
         

}
document.getElementById("limpiarForm").addEventListener("click", limpiarFormulario);
