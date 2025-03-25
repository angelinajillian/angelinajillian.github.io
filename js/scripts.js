/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

// Nav bar shrink

let mail = document.body.querySelector('#Mail');
document.addEventListener("click", () => {
    console.log("hellO");
})

window.addEventListener('DOMContentLoaded', event => {
    $('.carousel').carousel()
    
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// For typing effect

document.addEventListener("DOMContentLoaded", function () {
    const textArray = ["Product Developer", "Software Engineer", "Project Manager"];
    const typingSpeed = 100; // Speed of typing
    const erasingSpeed = 50; // Speed of erasing
    const delayBetween = 1500; // Delay before erasing
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typingEffect");

    function typeEffect() {
        let currentText = textArray[textIndex];
        if (isDeleting) {
            typingElement.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => (isDeleting = true), delayBetween);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }

        setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
    }

    typeEffect();
});


// Animation for underlining the headline
// document.addEventListener("DOMContentLoaded", function () {
//     const phrases = [
//         "customer experiences", 
//         "drive business impact", 
//         "create products that lead to innovative solutions to real-world problems"
//     ];

//     let textIndex = 0;
//     let charIndex = 0;
//     let isDeleting = false;
//     const typingElement = document.getElementById("dynamicText");

//     function typeEffect() {
//         let currentPhrase = phrases[textIndex];
        
//         if (isDeleting) {
//             typingElement.innerHTML = currentPhrase.substring(0, charIndex - 1);
//             charIndex--;
//         } else {
//             typingElement.innerHTML = currentPhrase.substring(0, charIndex + 1);
//             charIndex++;
//         }

//         // Apply underline animation when text is fully typed
//         if (!isDeleting && charIndex === currentPhrase.length) {
//             typingElement.classList.add("animated");
//             setTimeout(() => isDeleting = true, 1500); // Pause before deleting
//         } else if (isDeleting && charIndex === 0) {
//             typingElement.classList.remove("animated");
//             isDeleting = false;
//             textIndex = (textIndex + 1) % phrases.length; // Loop to next phrase
//         }

//         setTimeout(typeEffect, isDeleting ? 50 : 100); // Speed control
//     }

//     typeEffect();
// });
