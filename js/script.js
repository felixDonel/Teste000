setTimeout(ApresentarModal,1000);
function ApresentarModal(){
    var modal = document.querySelector(".modal");
    
    if(modal != null)
    {
        document.querySelector(".modal").style.display = "block";

        document
            .querySelector(".modal a")
            .addEventListener("click", function(){
            document.querySelector(".modal").style.display = "none";
        });
    }
}


if(document.forms["modal_form"]!= undefined){
    //validação
    var form = document.forms["modal_form"];
    
    form.addEventListener("submit", validarFormModal);
}

function validarFormModal(evt){
    var form = document.forms["modal_form"];
    var imputEmail= form.email;
    var valorEmail = form.email.value;
    
    
    var posicaoArroba = valorEmail.indexOf("@");
    if(
        valorEmail != "" &&
        valorEmail.indexOf("@") > 3 && //o 3 é o numero de caracter antes do @
        valorEmail.lastIndexOf(".") > posicaoArroba
    ){
        alert("E-mail valido");
    }else{
        alert("E-mail invalido");
        
        evt.preventDefault();
    }
    valorEmail;
