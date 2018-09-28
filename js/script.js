setTimeout(ApresentarModal,5000);
function ApresentarModal(){
    var modal = document.querySelector(".modal");
    
    if(modal == null)
    {
       
    }else{
        document.querySelector(".modal").style.display = "block";

        document.querySelector(".modal a").addEventListener("click", function(){
            document.querySelector(".modal").style.display = "none";
        });
    }
}


alert(document.forms["modal_form"]);