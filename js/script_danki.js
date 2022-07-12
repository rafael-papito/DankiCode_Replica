$(function(){
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offSet().top;
        $('html,body').animate('scrollTop' + offSetTop);
        return false
    })
    $('.mobile').click(function(){
        $('.mobile ul').slideToggle();
    })
 })