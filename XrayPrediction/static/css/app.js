console.log("working");

$(document).ready(()=>{
    $(window).scroll(()=>{
        if($(document).scrollTop()>5){
            $('nav').addClass("shrink")
        }
        else{
            $('nav').removeClass("shrink")
        }
    });
});