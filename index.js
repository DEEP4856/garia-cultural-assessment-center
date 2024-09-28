// typing

    const textArray = ["Welcome to Garia Cultural Assessment Centre"];
    const typingSpeed = 100;
    const delayBetweenTexts = 1500;
    let textIndex = 0;
    let charIndex = 0;
    
    function typeText() {
        const typedTextElement = document.getElementById("typed-text");
        
        if (charIndex < textArray[textIndex].length) {
            typedTextElement.innerHTML += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(deleteText, delayBetweenTexts);
        }
    }

    function deleteText() {
        const typedTextElement = document.getElementById("typed-text");
        
        if (charIndex > 0) {
            typedTextElement.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteText, typingSpeed);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeText, typingSpeed);
        }
    }

    // Start typing effect on page load
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(typeText, delayBetweenTexts);
    });

