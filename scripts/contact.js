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

    let errorContainer = [];

    if (nameInput.value.length < 5) {
        errorContainer.push('Less input entered');
        nameInput.style.border = '1px solid red';
    } else {
        nameInput.style.border = '1px solid rgba(255,255,255,0.05)';
    };
    if (messageInput.value.length < 5) {
        errorContainer.push('Less input entered');
        messageInput.style.border = '1px solid red';
    } else {
        messageInput.style.border = '1px solid rgba(255,255,255,0.05)';
    };
    if (emailInput.value.length < 5) {
        errorContainer.push('Less input entered');
        emailInput.style.border = '1px solid red';
    } else {
        emailInput.style.border = '1px solid rgba(255,255,255,0.05)';
    };


    if (errorContainer.length === 0) {
        sendMessageBtn.textContent = 'Sending...'
        setTimeout(() => {
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
            sendMessageBtn.textContent = 'Thank you';
            sendMessageBtn.style.backgroundColor = 'RGB(50, 150, 50)';
        }, 2000);
        setTimeout(() => {
            sendMessageBtn.textContent = 'Send Message';
            sendMessageBtn.style.backgroundColor = '#303030';
        }, 5000);
    };
});

subscribeBtn.addEventListener('click', e => {
    e.preventDefault();

    let errorContainer = [];

    if (subcribeEmailInput.value.length < 5) {
        errorContainer.push('Less input entered');
        subcribeEmailInput.style.border = '1px solid red';
    } else {
        subcribeEmailInput.style.border = '1px solid rgba(255,255,255,0.05)';
    };

    if (errorContainer.length === 0) {
        subscribeBtn.textContent = 'Sending...'
        setTimeout(() => {
            subcribeEmailInput.value = '';
            subscribeBtn.textContent = 'Thank you';
            subscribeBtn.style.backgroundColor = 'RGB(50, 150, 50)';
        }, 2000);
        setTimeout(() => {
            subscribeBtn.textContent = 'Send Message';
            subscribeBtn.style.backgroundColor = '#303030';
        }, 5000);
    };
});