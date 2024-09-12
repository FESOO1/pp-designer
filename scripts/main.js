const copyBtn = document.querySelector('.copy-email-button');
const copyBtnText = document.querySelector('.copy-email-button-text');

// COPY FUNCTION

copyBtn.addEventListener('click', copyEmail);

function copyEmail() {
    navigator.clipboard.writeText('firdavs7794948@gmail.com');
    copyBtnText.textContent = 'Copied';

    setTimeout(() => {
        copyBtnText.textContent = 'E-mail'
    }, 3000);
};