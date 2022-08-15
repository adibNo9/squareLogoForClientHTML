$(function() {
    $(".container-box8").hover(function() {
        $('.container-box8').fadeTo(150,1);
        $('.container-box5').fadeTo(10,1);
    },function() {
        $('.container-box8').fadeTo(150,0);
        $('.container-box5').fadeTo(150,0);
    });
    $(".container-box5").hover(function() {
        $('.container-box8').fadeTo(150,1);
        $('.container-box5').fadeTo(10,1);
    },function() {
        $('.container-box8').fadeTo(150,0);
        $('.container-box5').fadeTo(150,0);
    });
    



    $(".container-box3").hover(function() {
        $('.container-box3').fadeTo(250,1);
        $('.container-box6').fadeTo(150,1);
        $('.container-box7').fadeTo(10,1);
    },function() {
        $('.container-box3').fadeTo(150,0);
        $('.container-box6').fadeTo(150,0);
        $('.container-box7').fadeTo(150,0);
    });
    $(".container-box6").hover(function() {
        $('.container-box3').fadeTo(250,1);
        $('.container-box6').fadeTo(150,1);
        $('.container-box7').fadeTo(10,1);
    },function() {
        $('.container-box3').fadeTo(150,0);
        $('.container-box6').fadeTo(150,0);
        $('.container-box7').fadeTo(150,0);
    });
    $(".container-box7").hover(function() {
        $('.container-box3').fadeTo(250,1);
        $('.container-box6').fadeTo(150,1);
        $('.container-box7').fadeTo(10,1);
    },function() {
        $('.container-box3').fadeTo(150,0);
        $('.container-box6').fadeTo(150,0);
        $('.container-box7').fadeTo(150,0);
    });
});

$(window).on('load', function(){
    $('.boxes').each(function() {
        $(this).fadeOut().delay(750).fadeIn();
    });

    
});


