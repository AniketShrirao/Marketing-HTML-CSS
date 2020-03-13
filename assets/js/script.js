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
				dotIndex = 2;
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
			if(dotIndex === 2) {
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

 /*=================================
  owners-lightBox function starts here
=================================*/

// Get Elements Required for LightBox
var html = document.querySelector('html');
var ownersLightBox = document.querySelectorAll('.owners article');
var Lightbox = document.querySelector('.owners-lightBox');
var contentInsideLightbox = document.querySelector('.lightBox-Article');

// LightBox Function started
function LightBox(html,ownersLightBox,Lightbox,contentInsideLightbox,close) {
  // Hide LightBox At First
  var articleArray = Array.from(ownersLightBox);
  Lightbox.classList.add('class','hidden');
  // Append Close Button to the LightBox Dynamically
  Lightbox.appendChild(close);
  close.classList.add('close');
  // Add click function to every post
  for (var article in articleArray) {
    articleArray[article].addEventListener('click',openlightbox);
  }

  // openlightbox Function started
  function openlightbox(){
    // Get Current image/Post & source on click
    var currentImg = this.children[0].children[0];
    var currentHeading = this.children[1].innerText;
    var currentSpan = this.children[2].innerText;
    var currentPara = this.children[3].innerText;
    var url = currentImg.src; 

    // stop background scroll
    html.classList.add('noscroll');
    Lightbox.classList.remove('hidden');
    // make Lightbox appear
    Lightbox.classList.add('visible');
    // add current image path to lightbox image 
    contentInsideLightbox.children[0].setAttribute('src',url);
    contentInsideLightbox.children[1].innerText = currentHeading;
    contentInsideLightbox.children[2].innerText = currentSpan;
    contentInsideLightbox.children[3].innerText = currentPara;
  };
  // Close LightBox Function
  function closeLightbox(){
    Lightbox.classList.remove('visible');
    Lightbox.classList.add('hidden');
    html.classList.remove('noscroll');
  };
  // Calling close Lightbox function on close button click 
  close.addEventListener('click',closeLightbox);
  // Calling close Lightbox function on Background of lightbox click
  Lightbox.addEventListener('click',function(e){
    if (e.target.classList.contains("owners-lightBox")) {
      Lightbox.classList.add('hidden');
      html.classList.remove('noscroll');
    }
  });
}
// Calling LightBox Function
LightBox(html,ownersLightBox,Lightbox,contentInsideLightbox,close);

 /*=================================
  owners-lightBox function ends here
=================================*/


 /*=================================
  Modal form Validation function starts here
=================================*/


 /*=================================
  Modal form Validation function ends here
=================================*/


 /*=================================
 Validation function start here
=================================*/

// Selecting Every Input field
var inputs = Array.from(document.querySelectorAll('.Contact-form .form-group input'));
// Selecting Every Input field of Modal
var inputsModal = Array.from(document.querySelectorAll('.signup-modal .form-group input'));
// Regex for every input fields
var Regex = [
  firstNameRegex = /^([a-zA-Z]){0,20}$/,
  emailRegex = /^([0-9a-zA-Z\_\.\-]+)@([0-9a-zA-Z\_\.\-]+)\.([a-zA-Z]+)$/,
  subjectRegex = /([a-zA-Z]){0,50}$/,
  messageRegex = /([a-zA-Z]){0,50}$/
];
// Regex for every input fields in Modal
var RegexModal = [
  firstNameRegex = /^([a-zA-Z]){0,20}$/,
  emailRegex = /^([0-9a-zA-Z\_\.\-]+)@([0-9a-zA-Z\_\.\-]+)\.([a-zA-Z]+)$/,
  passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/,
  confirmPasswordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8})/
];

// selecting form element
var Contactform = document.querySelector('.Contact-form');
var signupform = document.querySelector('.signup-modal form');

// Declaration of Reset Function make whole form reset
function resetIt(e) {
  var currentInputs;
  if(e.target.id == "submit") {
    currentInputs = inputsModal;
  } else {
    currentInputs = inputs;
  }
  currentInputs.forEach(function (input) {
    var HelperClass = input.nextElementSibling.classList.contains("helperMessage");
    var successClass = input.nextElementSibling.classList.contains("success");
    var errorClass = input.nextElementSibling.classList.contains("error");
    if (input.value == "") {
      input.nextElementSibling.classList = "helperMessage none";
      input.nextElementSibling.innerText = "";
    } else if (HelperClass || successClass || errorClass) {
      input.nextElementSibling.classList = "helperMessage  none";
      input.nextElementSibling.innerText = "";
    };
  });
};

// Send Button assigned a click Function
var Button1 = document.querySelector('.send');
Button1.addEventListener('click', function (e) {
  e.preventDefault();
  validateOnSubmit(e);
});

// Submit Button assigned a click Function
var Button2 = document.querySelector('#submit');
Button2.addEventListener('click', function (e) {
  e.preventDefault();
  validateOnSubmit(e);
});

// Keyup event on each input to check if it is valid
inputs.forEach(function (input) {
  var index = inputs.indexOf(input);
  input.addEventListener("keyup", function () {
    validate(Regex[index], this);
  });
});

// Keyup event on each input to check if it is valid
inputsModal.forEach(function (input) {
  var index = inputsModal.indexOf(input);
  if (input.id !== "confirmPassword") {
    input.addEventListener("keyup", function () {
      validate(RegexModal[index], this);
    });
  } else {
    //  special keyup event on confirm password to check if it matches with password field
    input.addEventListener("keyup", function (e) {
      if (inputsModal[2].value === inputsModal[3].value) {
        validate(RegexModal[index], this);
      } else {
        input.nextElementSibling.classList = "helperMessage error";
        errors(input, input.nextElementSibling);
      }
    });
  }
});

// Defiination of Validate Function on Keyup
function validate(RegularExpression, input) {
  if (input.value == "") {
    input.nextElementSibling.classList = "helperMessage";
  } else if (RegularExpression.test(input.value)) {
    input.nextElementSibling.classList = "helperMessage success";
    input.nextElementSibling.innerText = "yay ! you are Correct!";
  } else {
    input.nextElementSibling.classList = "helperMessage error";
      errors(input, input.nextElementSibling);
  }
}

// Defiination of Validate Function on submitButton
function validateOnSubmit(e) {
  var currentInputs;
  if(e.target.id == "submit") {
    currentInputs = inputsModal;
  } else {
    currentInputs = inputs;
  }
  var allEmpty = false;
  currentInputs.forEach(function (input) {
    if (input.value == "") {
      allEmpty = true;
    };
  });
  // If every fields are empty show error
  if (allEmpty) {
    e.preventDefault();
    currentInputs.forEach(function (input) {
      if (input.value == "") {
        input.nextElementSibling.classList.remove('none');
        input.nextElementSibling.classList.add('empty');
        errors(input, input.nextElementSibling);
      };
    });
    if(e.target.id== 'submit') {
      alert("Please Fill the Form Correctly!");
      return false;
    }
    var Customalert = document.querySelector('.contact .customAlert');
    var ok = document.querySelector('.contact .confirmButton');
    var message = document.querySelector('.message');
    message.innerText = "Please Fill the Form Correctly!";
    Customalert.classList.remove('fadeout');
    Customalert.classList.add('morefadein');
    ok.addEventListener('click', function () {
      resetIt(e);
      Customalert.classList.add('fadeout');
      Customalert.classList.remove('morefadein');
      Customalert.classList = "customAlert";

    });
    return false;
  }
  var helperSpans;
  if(e.target.id== 'submit') {
    helperSpans = document.querySelectorAll('.signup-modal .helperMessage');
  } else {
    helperSpans = document.querySelectorAll('.Contact-form .helperMessage');
  }
  // If every fields are invalid show errors message
  var allCorrect = false;

  for(var index = 0; index< helperSpans.length; index++) {
    var SomeErrorify = false;
    var AllCorrected = helperSpans[index].classList.contains('success');
      if(AllCorrected === true) {
        allCorrect = true;
      } else {
        SomeErrorify = true;
      }
      if(SomeErrorify == true) {
        allCorrect = false;
        break;
      }
  }
  if(e.target.id== "submit") {
    alert('Your Form Has Submitted Successfully!');
    e.target.parentNode.parentNode.reset();
    resetIt(e);
    return false;
  }
  // If every fields are correct Customalert success message
  if (allCorrect == true) {
    Contactform.reset();
    var Customalert = document.querySelector('.contact .customAlert');
    var ok = document.querySelector('.customAlert .confirmButton');
    var message = document.querySelector('.customAlert .message');
    message.innerText = "Your Form Has Submitted Successfully!";
    resetIt(e);
    Customalert.classList.remove('fadeout');
    Customalert.classList.add('fadein');
    ok.addEventListener('click', function () {
      Customalert.classList.add('fadeout');
      Customalert.classList.remove('fadein');
    });
  }
}

// Error function Declaration for every set of errors
function errors(input, span) {
  if (input.value == "") {
    span.innerText = "Please fill the empty field!";
    return;   
  }
  switch (input.id) {
    case "Contact-form-name":
      span.innerText = "Must Contains Only Alphabets.";
      break;
    case "Contact-form-email":
      span.innerText = "Entered Email is Invalid.";
      break;
    case "name":
      span.innerText = "Must Contains Only Alphabets.";
      break;
    case "email":
      span.innerText = "Entered Email is Invalid.";
      break;
    case "password":
      span.innerText = "Must Contains One Alphabet(upperCase & LowerCase each) and a Number and Special Character.";
      break;
    case "confirmPassword":
      span.innerText = "confirm password & password fields must match";
      break;
    default:
      break;
  }
}
 /*=================================
 Validation function ends here
=================================*/

 /*=================================
  to the top function starts here
=================================*/

var toTop = document.querySelector('.to-top');
toTop.addEventListener('click',function(e){
  document.body.scrollTop = 0;
  html.style.scrollBehavior = "smooth";
  html.scrollTop = 0;
});

 /*=================================
  to the top function ends here
=================================*/