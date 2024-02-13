 // timer code

 let countdownStartTime = localStorage.getItem('countdownStartTime');
 console.log(countdownStartTime)
if (!countdownStartTime) {
countdownStartTime = new Date().getTime();
localStorage.setItem('countdownStartTime', countdownStartTime);
}

const countdownEndTime = new Date(parseInt(countdownStartTime, 10) + 10 * 60 * 1000);

const triggerSection = document.getElementById('section3');

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
scrollTrigger: {
   trigger: "#section3",
   scroller:"body",
   start: 'top center',
   onEnter: () => startCountdown(countdownEndTime)
}
});

function startCountdown(endTime) {
const countdownElement = document.getElementById('countdown');

const countdownInterval = setInterval(() => {
   const now = new Date().getTime();
   const distance = endTime - now;

   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   countdownElement.textContent = `${hours}:${minutes}:${seconds}`;

   if (distance < 0) {
       clearInterval(countdownInterval);
       countdownElement.textContent = 'EXPIRED';
   }
}, 1000);
}


 var t1 = gsap.timeline();

var click =  document.getElementById('registerButton')
click.addEventListener('click', function() {
alert('Redirecting to the registration page');


});

gsap.to("#Countdowntimer h5", {
   y: 26,
   duration: 0.8,
   repeat: -1,
   yoyo: true,
 });

   function load(){

     var a = 0;
     setInterval(() => {

       a = a+ Math.floor(Math.random()*25)
       if(a<100)
       {
         document.querySelector("#loader h1").innerHTML = a + "%"

       }
       else{
         a = 100
         document.querySelector("#loader h1").innerHTML = a + "%"

       }

     }, 100);
   }

   t1.to("#loader h1",{
     scale:4,
     delay:1,
     duration :1,
     onStart : load(),                       // used to include function in an prgram
   })
   t1.to("#loader",{
     top:"-100vh",
     duration:2,
     pin:true

   })

 t1.from("#hero-section #nav img,#nav h3,#nav h4,.left a", {
   y: -100,
   opacity: 0,
   duration: 0.5,
   onComplete: () => {
     console.log("Animation completed");
   },

   delay: 0.5,
   stagger: 0.1,
 });
 t1.from(".left h1", {
   x: -80,
   opacity: 0,
   duration: 0.5,
   delay: 0.2,
   stagger: 0.2,
 });
 t1.from(".right #pic", {
   scale: 0,
   duration: 0.5,
   delay: .1,
 });


 gsap.from('#registrationForm', { 
 duration: 1, 
 x:1700,
 scale: .5, 
 opacity: 0,
 delay:15,      
  ease: 'back' 
});

document.getElementById('closeBtn').addEventListener('click', function () {
 // document.getElementById('overlay').style.display = 'none';
 document.getElementById('registrationForm').style.display = 'none';
});