const copyBtn = document.querySelector('.contact-content-ways-of-contacting-left-copy-email-button');
const copyBtnText = document.querySelector('.contact-content-ways-of-contacting-left-copy-email-button-text');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');
const subcribeEmailInput = document.getElementById('subcribeEmailInput');
const subscribeBtn = document.getElementById('subscribeBtn');

// COPY FUNCTION

copyBtn.addEventListener('click', copyEmail);

function copyEmail() {
    navigator.clipboard.writeText('firdavs7794948@gmail.com');
    copyBtnText.textContent = 'Copied';

    setTimeout(() => {
        copyBtnText.textContent = 'E-mail'
    }, 3000);
};

// FORM

sendMessageBtn.addEventListener('click', e => {
    e.preventDefault();
    sendMessageBtn.textContent = 'Sending...'
    setTimeout(() => {
        sendMessageBtn.textContent = 'Thank you';
        sendMessageBtn.style.backgroundColor = 'RGB(50, 150, 50)';
    }, 2000);
    setTimeout(() => {
        sendMessageBtn.textContent = 'Send Message';
        sendMessageBtn.style.backgroundColor = '#303030';
    }, 5000);
});