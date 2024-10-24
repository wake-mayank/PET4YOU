var crsr = document.querySelector("#cursor") //yahan humne cursor ko crsr variable me store kardia h. 
// var blur = document.querySelector("#cursor-blur")  

document.addEventListener("mousemove",function(dets){ //isme jitni baar bhi apna cursor move hoga yeh hume bataega!!
    crsr.style.left = dets.x+ 10 +"px"
    crsr.style.top = dets.y+ 0+"px" //dets yeh btata h jb hmara mouse move karta hai then kya kya hota h use yeh show karta hai.
})
//yeh code likha h alag

gsap.to("#nav",{
    backgroundColor :"#997950",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor : "#997950",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,  //yeh marker show karte h screen pr jaise end scroll down.
        start:"top -25%",
        end:"top -70%",
        scrub:1 //isse particular time ke baad color change hoga.
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        // markers: true,
        start:"top 60%",
        end:"top 55%",
        scrub: 1
    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        // markers: true,
        start:"top 70%",
        end:"top 65%",
        scrub: 1

    }
})



document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input, select, textarea');

    // Load saved data from localStorage
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(input.id);
        if (savedValue) input.value = savedValue;
    });

    // Save data to localStorage on input change
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            localStorage.setItem(this.id, this.value);
        });
    });

    // Clear localStorage on form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission for this example
        inputs.forEach(input => localStorage.removeItem(input.id));
        alert('Form submitted! Saved data has been cleared.');
        form.reset();
    });
});

