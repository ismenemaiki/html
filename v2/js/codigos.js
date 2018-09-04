$(document).ready(carregou);

function carregou() {   

    $("#btn1").click(submeter);

    function submeter(){
        var conteudocaixa = $("#cxtxt").val();
        $(".resultados").html("Bem vindo, " + conteudocaixa + " !")
      

        }
    }
