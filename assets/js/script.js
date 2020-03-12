/* Author: Aniket*/
 /*=================================
  Slider function starts here
=================================*/
// Slider Container
var slider = document.querySelector(".slider");
// Control Buttons
var btns = document.querySelectorAll(".btn");
// Slides/Images
var slides = document.querySelectorAll(".slide figure");
// Carousel Dots
var dots = document.querySelectorAll('.dot');

// carousel utility function
function SliderCarousel(slider,btns,slides,dots) {
	var index = 1;
	var dotIndex = 0;
	var size = '100';

	// to Animate the caousel
	setInterval(ChangeDotOnBtn,4000);

// To transition the slides
	function slide() {
		slider.classList.remove('transition-inactive');		
		slider.classList.add('transition-active');
		update();
	}

	// To translate the slides
	function update() {
		slider.style.transform = "translateX("+ (-size * index) +"%)";
		// to make current Carousel dot active
		dots.forEach(function(dot) {
			dot.classList.remove('dot-active');
		});
		dots[dotIndex].classList.add('dot-active');
	}
	update();

	// change the index of carousel dots based on current slide
	function ChangeDotOnBtn() {
		if(this.id === "prev") {
			if(index <= 0) {
				return;
			}
			index--;
			if(dotIndex === 0){
				dotIndex = 4;
			}
			else {
				dotIndex--;
			}
		}
		else {
			if(index === slides.length-1 ) {
				return;
			}
			index++;
			if(dotIndex === 4) {
				dotIndex = 0;
			}
			else {
				dotIndex++;
			}
		}
		slide();
	}

	// get the dots current value from data-attribute
	function dotChange() {
		let i = Number(this.getAttribute('dot-index'));
		dotIndex = i;
		index = i + 1;
		slide();
	}

	// cloning of first and last slide to give slider effect at the end of every transition
	slider.addEventListener('transitionend', function() {
		if(slides[index].parentNode.id === "first") {
			slider.classList.add('transition-inactive');		
			slider.classList.remove('transition-active');
			index = slides.length - 2;
			slider.style.transform = "translateX("+ (-size * index) +"%)";
		}
		else if(slides[index].parentNode.id === "last") {
			slider.classList.add('transition-inactive');		
			slider.classList.remove('transition-active');
			index = 1;
			slider.style.transform = "translateX("+ (-size * index) +"%)";
		}
	})
	// Events assigned to the Control buttons
	btns.forEach( function(btn) {
		btn.addEventListener('click', ChangeDotOnBtn);
		clearInterval(ChangeDotOnBtn);
	});
	// Events assigned to the Carousel dots
	dots.forEach(function(dot) {
		dot.addEventListener('click', dotChange);
	});
}

// carousel utility function called
SliderCarousel(slider,btns,slides,dots);

 /*=================================
  Slider function ends here
=================================*/

 /*=================================
  Form Modal function starts here
=================================*/
// Get Elements Required for FormModal
var html = document.querySelector('html');
var signupBtn = document.querySelectorAll('.signup-Btn');
var FormModal = document.querySelector('.signup-modal');
var signupModalForm = document.querySelector('.signup-modal form');
var close = document.createElement('span');

// FormModal Function started
function SignUpFormModal(html,signupBtn,FormModal,signupModalForm,close) {
  // Hide FormModal At First
  var btnArray = Array.from(signupBtn);
  FormModal.classList.add('class','hidden');
  // Append Close Button to the FormModal Dynamically
  signupModalForm.appendChild(close);
  close.classList.add('close');
  // Add click function to every button
  for (var button in btnArray) {
    btnArray[button].addEventListener('click',openFormModal);
  }

  // openFormModal Function started
  function openFormModal(){
    // stop background scroll
    html.classList.add('noscroll');
    FormModal.classList.remove('hidden');
    // make FormModal appear
    FormModal.classList.add('visible');

  };
  // Close FormModal Function
  function closeFormModal(){
    FormModal.classList.remove('visible');
    FormModal.classList.add('hidden');
    html.classList.remove('noscroll');
  };
  // Calling close FormModal function on close button click 
  close.addEventListener('click',closeFormModal);
  // Calling close FormModal function on Background of FormModal click
  FormModal.addEventListener('click',function(e){
    if (e.target.classList.contains("signup-modal")) {
      FormModal.classList.add('hidden');
      html.classList.remove('noscroll');
    }
  });
}
// Calling FormModal Function
SignUpFormModal(html,signupBtn,FormModal,signupModalForm,close);
 /*=================================
  Form Modal function ends here
=================================*/