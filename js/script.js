// JavaScript Document
    $(function(){
        var ulPic=$('.pic li');
        var ulCar=$('.car li');
        var i=0;

        function autopaly(){
            ulCar.eq(i).find('p').animate({width:'100%'},3000,function(){
                ulCar.find('p').css('width','0');
                    i++;
                    if(i>2){
                      i=0;
                    }
                });
                ulPic.eq(i).fadeIn(500).siblings().fadeOut(500);
        }

        autopaly();

        setInterval(function(){
            autopaly();
        },3000);
    })