/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('.creer-une-partie').on("click",createGame);
$(document).on("click",".icone-message",removeMessageFromDOM);
 $(".container-creation-partie").submit(generateHTMLListePartie);

function createGame(event){
    var nomPartie = $("input[name=nomPartie]").val();      
    if(nomPartie.length > 0 ){
        $("#message").html("<div class='message-succes'>Votre partie : "+nomPartie+" a bien été créée <i class='fas fa-times-circle icone-message'></i></div>");
        $("#message").animate({'opacity': 1, 'height':'show'}, 400);
    }else{
        $("#message").html("<div class='message-error'>Veuillez renseigner un nom de partie <i class='fas fa-times-circle icone-message'></i></div>");
        $("#message").animate({'opacity': 1,' height':'show'}, 400);
    }
}

function removeMessageFromDOM(){
    $('#message').animate({'opacity' :0, 'height':'hide'},400);
    $('[class^="message"]').animate({'opacity' :0, 'height':'hide'},400).html("");    
}

function generateHTMLListePartie(e){
    e.preventDefault();  //prevent form from submitting
    var data = $("#create-partie-form :input").serializeArray();
    if(data[0].value !== ""){
        var html = '<div class="bloc-partie"><div class="nom-partie">'+data[0].value+'</div><button class="rejoindre-partie">Rejoindre la partie</button></div>';
        $('.container-listes-parties').append(html).animate({'height':'show'},400);
    }
    
}

   