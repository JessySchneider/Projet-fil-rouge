/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




$('.creer-une-partie').on("click",createGame);


$('.icone-message').on("click","#message",removeMessageFromDOM);

$('.icone-message').on("click","#message",function(){
    alert("Click icone");
});

function createGame(event){
    event.preventDefault();
    var nomPartie = $("input[name=nomPartie]").val();      
    if(nomPartie.length > 0 ){
        $("#message").html("<div class='message-succes'>Votre partie : "+nomPartie+" a bien été créée <i class='fas fa-times-circle icone-message'></i></div>").animate({'opacity': 1}, 400);
    }else{
        $("#message").html("<div class='message-error'>Veuillez renseigner un nom de partie <i class='fas fa-times-circle icone-message'></i></div>").animate({'opacity': 1}, 400);
    }
}

function removeMessageFromDOM(){
    $('#message').html('').slow();
    $('#message').css('opacity',0);
}

