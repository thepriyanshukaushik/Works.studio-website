
function loading() {
    var tl = gsap.timeline()

    gsap.to("#yellow1", {
        top: "-100%",
        delay: .5,
        duration: 1,
        ease: "expo.out"
    }
    )

    tl.to("#yellow1", {
        top: "-100%",
        delay: .5,
        duration: 1,
        ease: "expo.out"
    }
    )
    tl.from("#yellow2", {
        top: "100%",
        delay: .6,
        duration: 1,
        ease: "expo.out"
    }, "anim"
    )

    tl.to("#loader h1", {
        delay: .1,
        duration: 0.7,
        color: "black"
    }, "anim  ")

    tl.to("#loader", {
        opacity: 0
    }
    )
    tl.to("#loader", {
        display: "none"
    }
    )
}

loading();
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var  elems = document.querySelectorAll(".elem")
var page2 = document.querySelector("#page2")
elems.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        var bgimg = ele.getAttribute ("data-img")
        page2.style.backgroundImage = `url(${bgimg})`

    })
})


const timeDiv = document.getElementById("time");

function updateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  timeDiv.textContent = formattedTime;
}

setInterval(updateTime, 1000);