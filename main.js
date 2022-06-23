const {log} = console



// function for the nav-links active state
const skillsDropdown = document.getElementById('skills-dropdown').addEventListener('click', skillListToggler)
const skillList = document.getElementsByClassName('skill-list')[0]

function skillListToggler(e){
    let btn = e.target
    skillList.classList.toggle('skill-list-toggled')
    log(btn)
}

// typewriter effect
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// nav-list-toggler
const navLinksToggle = document.getElementsByClassName('nav-list-toggled')[0]
const navLinksToggler = document.getElementsByClassName('nav-toggler')[0]
const navLinksTogglerClose = document.getElementById('nav-toggler-close')
navLinksToggler.addEventListener('click', ()=>{
    navLinksToggle.classList.add('open')
})

navLinksTogglerClose.addEventListener('click', ()=>{
    navLinksToggle.classList.remove('open')
})

// my appraisal slide action

let slideIndex = 0;

carousel();

function carousel() {
  let mySlides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("dot");
   
  
//   log(x)
  for (let i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none"; 
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > mySlides.length) {slideIndex = 1} 
  mySlides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  setTimeout(carousel, 7000); 
}

// var slideIndex = 1;
      showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let mySlides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");
    if (n > mySlides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = mySlides.length}
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    mySlides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}




