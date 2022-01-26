let animation = anime({
    targets: '.letter',
    opacity: 1,
    translateY: 50, 
    rotate: {
      value: 360,
      duration: 2000,
      easing: 'easeInExpo'
    }, 
    scale: anime.stagger([0.7, 1], {from: 'center'}), 
    delay: anime.stagger(100, {start: 1000}), 
    translateX: [-10, 30]
});
  



function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}