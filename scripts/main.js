const greetingsTextContainer = document.querySelector('.home-content-greeting-texts-inner');

function greetingsText() {
    setTimeout(() => {
        greetingsTextContainer.style.transform = 'translateY(-60px)';
    }, 3000);
    setTimeout(() => {
        greetingsTextContainer.style.transform = 'translateY(-120px)';
    }, 6000);
    setTimeout(() => {
        greetingsTextContainer.style.transform = 'translateY(-180px)';
    }, 9000);
    setTimeout(() => {
        greetingsTextContainer.style.transform = 'translateY(-240px)';
    }, 12000);
    setTimeout(() => {
        greetingsTextContainer.style.transform = 'translateY(0px)';
    }, 15000);
};

greetingsText();