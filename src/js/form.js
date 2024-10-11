const inputSubmit = document.querySelector(".enviar");

const inputCampo = document.querySelectorAll(".campo");

const alerta = document.querySelectorAll(".obrigatorio");

inputSubmit.addEventListener('click', () => {

    inputCampo.forEach(input => {
        
            if(input.value !== ""){
                input.style.border = "solid " + 1 + "px #00C22B" ;
                ocultar(input);
                
            } else if(input.value === ""){
                input.style.border = "solid " + 1 + "px #F52E2E" ;
                revelar(input);
            }

    })

    function ocultar(x){

        alerta.forEach(ocultar =>{
            if (x.classList.contains("nome") && ocultar.classList.contains("nome")) {
                ocultar.classList.add("esconder"); 

            } else if (x.classList.contains("email") && ocultar.classList.contains("email") ){
                ocultar.classList.add("esconder");

            } else if (x.classList.contains("telefone") && ocultar.classList.contains("telefone") ){
                ocultar.classList.add("esconder");

            } else if (x.classList.contains("mensagem") && ocultar.classList.contains("mensagem") ){
                ocultar.classList.add("esconder");

            } 

        })

    }

    function revelar(x){
        
        alerta.forEach(revelar => {
            if (x.classList.contains("nome") && revelar.classList.contains("nome")) {
                revelar.classList.remove("esconder");  

            } else if (x.classList.contains("email") && revelar.classList.contains("email") ){
                revelar.classList.remove("esconder");

            } else if (x.classList.contains("telefone") && revelar.classList.contains("telefone") ){
                revelar.classList.remove("esconder");

            } else if (x.classList.contains("mensagem") && revelar.classList.contains("mensagem") ){
                revelar.classList.remove("esconder");
                
            } 

        })

    }

});