const copyBtn = document.querySelector('.copy-email-button');
const copyBtnText = document.querySelector('.copy-email-button-text');
const serviceContainer = document.querySelectorAll('.service');

// COPY FUNCTION

copyBtn.addEventListener('click', copyEmail);

function copyEmail() {
    navigator.clipboard.writeText('firdavs7794948@gmail.com');
    copyBtnText.textContent = 'Copied';

    setTimeout(() => {
        copyBtnText.textContent = 'E-mail'
    }, 3000);
};

// SERVICES

for (let i = 0; i < serviceContainer.length; i++) {
    serviceContainer[i].addEventListener('click', () => {
        serviceContainer[i].classList.toggle('service-container-js');
    });
    serviceContainer[i].addEventListener('mouseenter', () => {
        serviceContainer[i].classList.add('service-container-hover');
    });
    serviceContainer[i].addEventListener('mouseleave', () => {
        serviceContainer[i].classList.remove('service-container-hover');
    });
};
