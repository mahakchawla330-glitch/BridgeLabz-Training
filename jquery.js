//console.log($);
//console.log(jQuery);
//Syntax:$(selectors).action();
//3 Type Selectors
//Element Selector
$(document).ready (function(){})
$(p).click();
$(p).click(function(){
    console.log("You clicked on P",this);
    $(this).hide();
    $("#second").click();
});


//ID Selector
$("#second").click();

//class Selector
$(".odd").click();


//other Selectors
//$("*").click();
$("p:odd").click();

//Events in JQuery
//1.Mouse Events =  click, dblclick, mouseenter, mouseleave
//2.Keyboard Events =  keydown, keypress, MediaKeyStatusMap
//3.Form Events = submit, change, focus, blur
//4.Document/Window Events = load, resize, scroll, unload

//Demoing on Method

$('p').on({
    click:function(){
        console.log("Thanks for clicking this", this);

    },
    mouseleave:function(){
        console.log("mouseleave");
    }
})


$("#gla").slideup , function (){
    console.log("Slideup is done");
    $(this).slideDown(5000);
}

//Animate function in jquery
$("#gla").animate({
    opacity:0.5,
    height:"150px",
    width:"300px"
});


//css property 

$("#gla").addClass("myclass");
$("#gla").removeClass("myclass");

$("#gla").css("background-color","red");
