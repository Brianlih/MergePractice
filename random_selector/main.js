$(document).ready(function() {
    $("#123").click(function()
    {
        var numbers_of_li = $("#choice li").length;
        var random_list_number = Math.floor(Math.random()*numbers_of_li);
        var image = ["a0002019_main.jpg", "feature-10.jpg", "d2753399.jpg", "f123.png", "F1463977460723.jpg", "g083.jpg", "hero_image_27_1553227874.jpg", "miami-beach-xlarge.jpg", "beach_title.jpg"];
        $("#place_image").attr("src", image[random_list_number]);
        $("#place_image").width(700);
        $("#place_image").height(500);
        
        
        $("#234").text($("#choice li").eq(random_list_number).text());
    });
});