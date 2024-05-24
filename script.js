// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var collabButton = document.querySelector('.convo-button');
    var contactForm = document.querySelector('.contact-form');
    var closeButton = contactForm.querySelector('.close-button');
    var skillButton = document.querySelector('a[href="#skills"]')  

    var skills = document.getElementById('skills')


    // Get the toggle button, navbar links, and any other necessary elements
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.nav-links');

// Add an event listener to the toggle button
    toggleButton.addEventListener('click', () => {
    // Toggle the 'active' class on the navbar links
    navbarLinks.classList.toggle('active');
});


const navLinks = document.querySelectorAll('.nav_link');


window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Iterate over each section to check if it's in view
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the current section is in view
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            // Remove active class from all navigation links
            navLinks.forEach(navLink => navLink.classList.remove('active'));

            // Find the corresponding navigation link and add active class
            const correspondingNavLink = document.querySelector(`.nav_link[href="#${section.id}"]`);
            if (correspondingNavLink) {
                correspondingNavLink.classList.add('active');
            }
        }
    });
});
        
     skillButton.addEventListener('click', function() {
        skills.removeAttribute('hidden');
        skills.scrollIntoView({behavior: 'smooth'});
     });
    

    collabButton.addEventListener('click', function() {
        contactForm.removeAttribute('hidden');
        contactForm.scrollIntoView({ behavior: 'smooth' });
    });
    closeButton.addEventListener('click', function() {
        contactForm.setAttribute('hidden', 'hidden');
        contactForm.reset();
    });

    contactForm.addEventListener('submit', function(event) {
        var nameInput = contactForm.querySelector('#name');
        var emailInput = contactForm.querySelector('#email');
        var infoInput = contactForm.querySelector('#info');
        var projectType = contactForm.querySelector('#project-type');

        var isValid = true;

        // Validate name field
        if (nameInput.value.trim() === '') {
            showError(nameInput);
            isValid = false;
        } else {
            hideError(nameInput);
        }

        // Validate email field
        if (emailInput.value.trim() === '') {
            showError(emailInput);
            isValid = false;
        } else {
            hideError(emailInput);
        }

        // Validate info field
        if (infoInput.value.trim() === '') {
            showError(infoInput);
            isValid = false;
        } else {
            hideError(infoInput);
        }

        // Validate project type field
        if (projectType.value.trim() === '') {
            showError(projectType);
            isValid = false;
        } else {
            hideError(projectType);
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Function to show error message
    function showError(element) {
        var errorTxt = element.parentElement.querySelector('.error-txt');
        if (errorTxt) {
            errorTxt.hidden = false;
        }
    }

    // Function to hide error message
    function hideError(element) {
        var errorTxt = element.parentElement.querySelector('.error-txt');
        if (errorTxt) {
            errorTxt.hidden = true;
        }
    }
});