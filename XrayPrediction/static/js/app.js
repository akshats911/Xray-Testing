gsap.registerPlugin(ScrollTrigger);
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


var tl = gsap.timeline({
    paused: "true"
});
tl.to(".menu",{
    duration: 1,
    x: "0%",
    ease: Expo.easeInOut
});

tl.fromTo(".li",{
    y:"-100%",
    opacity: 0
},{
    duration: 0.5,
    opacity: 1,
    y: "0%",
    stagger: 0.25
});
tl.fromTo(".social-li",{
    y: "-50%",
    opacity: 0
},{
    duration: 0.8,
    opacity: 1,
    stagger: 0.25,
    ease: Expo.easeOut
},
"-=0.5");

function toggle(){
    tl.play();
}

function togglec(){
    tl.reverse();
}

console.log("working fine");


var cursor = document.querySelector(".cursor");
var cursorScale = document.querySelectorAll(".cursor-scale");

var mouseX;
var mouseY;

window.addEventListener("mousemove", function(e){
    mouseX=e.clientX;
    mouseY=e.clientY;
    // console.log(mouseX, mouseY);
});

gsap.to({},0.010,{
    repeat: -1,
    onRepeat: function(){
        gsap.set(cursor,{
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});

// console.log(mouseX);
// console.log(mouseY);
