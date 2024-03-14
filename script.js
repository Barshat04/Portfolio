// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var collabButton = document.querySelector('.convo-button');
    var contactForm = document.querySelector('.contact-form');
    var sendButton = contactForm.querySelector('.send-button');
    var closeButton = contactForm.querySelector('.close-button');
    var skillButton = document.querySelector('a[href="#skills"]')  
    var skills = document.getElementById('skills')
    const toggleButton = document.getElementsByClassName('toggle-button') [0]
    const navbarlinks = document.getElementsByClassName('nav-links') [0]

    toggleButton.addEventListener('click', () => {
        navbarlinks.classList.toggle('active')
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

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        var nameInput = contactForm.querySelector('#name');
        var emailInput = contactForm.querySelector('#email');
        var infoInput = contactForm.querySelector('#info');
        var projectType = contactForm.querySelector('#project-type');

       
        // Validate name field
        if (nameInput.value.trim() === '') {
            showError(nameInput);
        } else {
            hideError(nameInput);
        }

        // Validate email field
        if (emailInput.value.trim() === '') {
            showError(emailInput);
        } else {
            hideError(emailInput);
        }

        if (infoInput.value.trim() === '') {
            showError(infoInput);
        } else {
            hideError(infoInput);
        }

        if (projectType.value.trim() === '') {
            showError(projectType);
        } else {
            hideError(projectType);
        }
    });

    // Function to show error message
    function showError(element) {
        var errorTxt = element.parentElement.querySelector('.error-txt');
        errorTxt.hidden = false;
    }

    // Function to hide error message
    function hideError(element) {
        var errorTxt = element.parentElement.querySelector('.error-txt');
        errorTxt.hidden = true;
    }

   

    
});