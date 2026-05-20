const textElement = document.getElementById('type-text');
const textToType = "I hope this message finds you well.";
let index = 0;

function typeEffect() {
    if (index < textToType.length) {
        textElement.textContent += textToType.charAt(index);
        index++;
        setTimeout(typeEffect, 50); 
    }
}

// Start the effect
typeEffect();