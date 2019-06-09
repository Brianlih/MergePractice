$(document).ready(function(){
    $("#first_roll_button").click(function(){
        $("html,body").animate({scrollTop:$("#first_roll").offset().top}, 800);
    }); 
    $("#second_roll_button").click(function(){
        $("html,body").animate({scrollTop:$("#second_roll").offset().top}, 800);
    }); 
    $("#third_roll_button").click(function(){
        $("html,body").animate({scrollTop:$("#third_roll").offset().top}, 800);
    }); 
});
