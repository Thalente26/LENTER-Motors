/* --- 1. NAVIGATION & BURGER MENU --- */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-list');

if (menu && menuLinks) {
    menu.addEventListener('click', () => {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(n => {
        n.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLinks.classList.remove('active');
        });
    });
}

/* --- 2. HOME PAGE BACKGROUND SLIDER --- */
const mainSlides = document.querySelectorAll('.slide');
if (mainSlides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
        mainSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % mainSlides.length;
        mainSlides[currentSlide].classList.add('active');
    }, 5000);
}

/* --- 3. MODELS PAGE CAROUSEL --- */
const modelSlides = document.querySelectorAll('.model-slide');
let currentModelIdx = 0;

function changeModelSlide(direction) {
    if (modelSlides.length > 0) {
        modelSlides[currentModelIdx].classList.remove('active');
        currentModelIdx = (currentModelIdx + direction + modelSlides.length) % modelSlides.length;
        modelSlides[currentModelIdx].classList.add('active');
    }
}

/* --- 4. FORM & BUTTON INTERACTIONS --- */

// Pre-order Interaction
function confirmPreorder(event) {
    const btn = document.getElementById('preorderBtn');
    if (btn) {
        setTimeout(() => {
            btn.innerText = "NOTED";
            btn.classList.add('btn-success');
            btn.style.backgroundColor = "#28a745";
            btn.style.color = "#fff";
        }, 500);
    }
}

// Contact Form Interaction
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', () => {
        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn) {
            submitBtn.innerText = "SUBMITTED";
            submitBtn.classList.add('btn-success');
            submitBtn.style.backgroundColor = "#28a745";
            submitBtn.style.borderColor = "#28a745";
            submitBtn.style.color = "#fff";
        }
        // Note: Formspree handles the actual redirect/submission
    });
}