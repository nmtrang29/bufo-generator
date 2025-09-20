// Game state
let currentEyeIndex = 0;
let currentMouthIndex = 0;
let currentHatIndex = 0;
let currentCheekIndex = 0;
let currentEyebrowIndex = 0;
let currentLeftHandIndex = 0;
let currentRightHandIndex = 0;

// Style options
const eyeStyles = [
    './assets/eye-1.png',
    './assets/eye-2.png',
    './assets/eye-3.png',
    './assets/eye-4.png',
    './assets/eye-5.png',
    './assets/eye-6.png',
    './assets/eye-7.png'
];

const mouthStyles = [
    './assets/mouth-1.png',
    './assets/mouth-2.png',
    '' // no mouth
];

const hatStyles = [
    '🎉', // party hat
    '🎩', // top hat
    '👑', // crown
    '🎓', // graduation cap
    '🧢', // baseball cap
    '🎀', // bow
    '🌸', // flower
    '⭐', // star
    '🎪', // circus tent
    '' // no hat
];



const cheekStyles = [
    './assets/cheek.png', // blush cheeks
    '' // no cheeks
];

const eyebrowStyles = [
    './assets/eye-brow-1.png', // eyebrow style 1
    './assets/eye-brow-2.png', // eyebrow style 2
    './assets/eye-brow-3.png', // eyebrow style 3
    '' // no eyebrow
];

const leftHandStyles = [
    './assets/lefthand-1.png',
    './assets/lefthand-2.png',
    './assets/lefthand-3.png',
    './assets/lefthand-4.png',
    './assets/lefthand-5.png',
    './assets/lefthand-6.png',
    '' // no left hand
];

const rightHandStyles = [
    './assets/righthand-1.png',
    './assets/righthand-2.png',
    './assets/righthand-3.png',
    './assets/righthand-4.png',
    '' // no right hand
];

// Initialize the game
function initGame() {
    createOptionGrids();
    updateCat();
    updateActiveStates();
}

// Create option grids for all categories
function createOptionGrids() {
    createEyeOptions();
    createMouthOptions();
    createHatOptions();
    createCheekOptions();
    createEyebrowOptions();
    createLeftHandOptions();
    createRightHandOptions();
}

// Create eye options grid
function createEyeOptions() {
    const container = document.getElementById('eye-options');
    container.innerHTML = '';
    
    eyeStyles.forEach((style, index) => {
        const option = document.createElement('div');
        option.className = 'option-item eye-option';
        option.style.backgroundImage = `url('${style}')`;
        option.style.backgroundSize = 'contain';
        option.style.backgroundRepeat = 'no-repeat';
        option.style.backgroundPosition = 'center';
        option.onclick = () => selectEye(index);
        option.title = `Eye style ${index + 1}`;
        container.appendChild(option);
    });
}

// Create mouth options grid
function createMouthOptions() {
    const container = document.getElementById('mouth-options');
    container.innerHTML = '';
    
    mouthStyles.forEach((style, index) => {
        const option = document.createElement('div');
        option.className = 'option-item mouth-option';
        if (style === '') {
            option.classList.add('no-mouth');
            option.title = 'No mouth';
        } else {
            option.style.backgroundImage = `url('${style}')`;
            option.style.backgroundSize = 'contain';
            option.style.backgroundRepeat = 'no-repeat';
            option.style.backgroundPosition = 'center';
            option.title = `Mouth style ${index + 1}`;
        }
        option.onclick = () => selectMouth(index);
        container.appendChild(option);
    });
}

// Create hat options grid
function createHatOptions() {
    const container = document.getElementById('hat-options');
    container.innerHTML = '';
    
    hatStyles.forEach((style, index) => {
        const option = document.createElement('div');
        option.className = 'option-item';
        if (style === '') {
            option.classList.add('no-hat');
            option.title = 'No hat';
        } else {
            option.textContent = style;
            option.title = `Hat style ${index + 1}`;
        }
        option.onclick = () => selectHat(index);
        container.appendChild(option);
    });
}



// Create cheek options grid
function createCheekOptions() {
    const container = document.getElementById('cheek-options');
    container.innerHTML = '';
    
    cheekStyles.forEach((style, index) => {
        const option = document.createElement('div');
        option.className = 'option-item cheek-option';
        if (style === '') {
            option.classList.add('no-cheek');
            option.title = 'No cheeks';
        } else {
            option.style.backgroundImage = `url('${style}')`;
            option.style.backgroundSize = 'contain';
            option.style.backgroundRepeat = 'no-repeat';
            option.style.backgroundPosition = 'center';
            option.title = `Cheek style ${index + 1}`;
        }
        option.onclick = () => selectCheek(index);
        container.appendChild(option);
    });
}

// Create eyebrow options grid
function createEyebrowOptions() {
    const container = document.getElementById('eyebrow-options');
    container.innerHTML = '';
    
    eyebrowStyles.forEach((style, index) => {
        const option = document.createElement('div');
        option.className = 'option-item eyebrow-option';
        if (style === '') {
            option.classList.add('no-eyebrow');
            option.title = 'No eyebrow';
        } else {
            option.style.backgroundImage = `url('${style}')`;
            option.style.backgroundSize = 'contain';
            option.style.backgroundRepeat = 'no-repeat';
            option.style.backgroundPosition = 'center';
            option.title = `Eyebrow style ${index + 1}`;
        }
        option.onclick = () => selectEyebrow(index);
        container.appendChild(option);
    });
}

// Create left hand options grid
function createLeftHandOptions() {
    const container = document.getElementById('lefthand-options');
    container.innerHTML = '';
    
    leftHandStyles.forEach((style, index) => {
        const option = document.createElement('div');
        option.className = 'option-item lefthand-option';
        if (style === '') {
            option.classList.add('no-lefthand');
            option.title = 'No left hand';
        } else {
            option.style.backgroundImage = `url('${style}')`;
            option.style.backgroundSize = 'contain';
            option.style.backgroundRepeat = 'no-repeat';
            option.style.backgroundPosition = 'center';
            option.title = `Left hand style ${index + 1}`;
        }
        option.onclick = () => selectLeftHand(index);
        container.appendChild(option);
    });
}

// Create right hand options grid
function createRightHandOptions() {
    const container = document.getElementById('righthand-options');
    container.innerHTML = '';
    
    rightHandStyles.forEach((style, index) => {
        const option = document.createElement('div');
        option.className = 'option-item righthand-option';
        if (style === '') {
            option.classList.add('no-righthand');
            option.title = 'No right hand';
        } else {
            option.style.backgroundImage = `url('${style}')`;
            option.style.backgroundSize = 'contain';
            option.style.backgroundRepeat = 'no-repeat';
            option.style.backgroundPosition = 'center';
            option.title = `Right hand style ${index + 1}`;
        }
        option.onclick = () => selectRightHand(index);
        container.appendChild(option);
    });
}

// Selection functions
function selectEye(index) {
    currentEyeIndex = index;
    updateCat();
    updateActiveStates();
    playSound();
}

function selectMouth(index) {
    currentMouthIndex = index;
    updateCat();
    updateActiveStates();
    playSound();
}

function selectHat(index) {
    currentHatIndex = index;
    updateCat();
    updateActiveStates();
    playSound();
}



function selectCheek(index) {
    currentCheekIndex = index;
    updateCat();
    updateActiveStates();
    playSound();
}

function selectEyebrow(index) {
    currentEyebrowIndex = index;
    updateCat();
    updateActiveStates();
    playSound();
}

function selectLeftHand(index) {
    currentLeftHandIndex = index;
    updateCat();
    updateActiveStates();
    playSound();
}

function selectRightHand(index) {
    currentRightHandIndex = index;
    updateCat();
    updateActiveStates();
    playSound();
}

// Update active states for all option grids
function updateActiveStates() {
    // Update eye options
    const eyeOptions = document.querySelectorAll('#eye-options .option-item');
    eyeOptions.forEach((option, index) => {
        option.classList.toggle('active', index === currentEyeIndex);
    });
    
    // Update mouth options
    const mouthOptions = document.querySelectorAll('#mouth-options .option-item');
    mouthOptions.forEach((option, index) => {
        option.classList.toggle('active', index === currentMouthIndex);
    });
    
    // Update hat options
    const hatOptions = document.querySelectorAll('#hat-options .option-item');
    hatOptions.forEach((option, index) => {
        option.classList.toggle('active', index === currentHatIndex);
    });
    

    
    // Update cheek options
    const cheekOptions = document.querySelectorAll('#cheek-options .option-item');
    cheekOptions.forEach((option, index) => {
        option.classList.toggle('active', index === currentCheekIndex);
    });
    
    // Update eyebrow options
    const eyebrowOptions = document.querySelectorAll('#eyebrow-options .option-item');
    eyebrowOptions.forEach((option, index) => {
        option.classList.toggle('active', index === currentEyebrowIndex);
    });
    
    // Update left hand options
    const leftHandOptions = document.querySelectorAll('#lefthand-options .option-item');
    leftHandOptions.forEach((option, index) => {
        option.classList.toggle('active', index === currentLeftHandIndex);
    });
    
    // Update right hand options
    const rightHandOptions = document.querySelectorAll('#righthand-options .option-item');
    rightHandOptions.forEach((option, index) => {
        option.classList.toggle('active', index === currentRightHandIndex);
    });
}

// Update cat appearance
function updateCat() {
    // Update eye
    const eye = document.getElementById('eye-content');
    eye.style.backgroundImage = `url('${eyeStyles[currentEyeIndex]}')`;
    eye.style.backgroundSize = 'contain';
    eye.style.backgroundRepeat = 'no-repeat';
    eye.style.backgroundPosition = 'center';
    eye.textContent = ''; // Clear any text content
    
    // Update mouth
    const mouth = document.getElementById('mouth-content');
    if (mouthStyles[currentMouthIndex] === '') {
        // No mouth selected
        mouth.style.backgroundImage = '';
        mouth.textContent = '';
    } else {
        mouth.style.backgroundImage = `url('${mouthStyles[currentMouthIndex]}')`;
        mouth.style.backgroundSize = 'contain';
        mouth.style.backgroundRepeat = 'no-repeat';
        mouth.style.backgroundPosition = 'center';
        mouth.textContent = ''; // Clear any text content
    }
    
    // Update hat
    const hat = document.getElementById('hat-content');
    hat.textContent = hatStyles[currentHatIndex];
    

    
    // Update cheek
    const cheek = document.getElementById('cheek-content');
    if (cheekStyles[currentCheekIndex] === '') {
        // No cheek selected
        cheek.style.backgroundImage = '';
    } else {
        cheek.style.backgroundImage = `url('${cheekStyles[currentCheekIndex]}')`;
        cheek.style.backgroundSize = 'contain';
        cheek.style.backgroundRepeat = 'no-repeat';
        cheek.style.backgroundPosition = 'center';
    }
    
    // Update eyebrow
    const eyebrow = document.getElementById('eyebrow-content');
    if (eyebrowStyles[currentEyebrowIndex] === '') {
        // No eyebrow selected
        eyebrow.style.backgroundImage = '';
    } else {
        eyebrow.style.backgroundImage = `url('${eyebrowStyles[currentEyebrowIndex]}')`;
        eyebrow.style.backgroundSize = 'contain';
        eyebrow.style.backgroundRepeat = 'no-repeat';
        eyebrow.style.backgroundPosition = 'center';
    }
    
    // Update left hand
    const leftHand = document.getElementById('lefthand-content');
    if (leftHandStyles[currentLeftHandIndex] === '') {
        // No left hand selected
        leftHand.style.backgroundImage = '';
        leftHand.textContent = '';
    } else {
        leftHand.style.backgroundImage = `url('${leftHandStyles[currentLeftHandIndex]}')`;
        leftHand.style.backgroundSize = 'contain';
        leftHand.style.backgroundRepeat = 'no-repeat';
        leftHand.style.backgroundPosition = 'center';
        leftHand.textContent = '';
    }
    
    // Update right hand
    const rightHand = document.getElementById('righthand-content');
    if (rightHandStyles[currentRightHandIndex] === '') {
        // No right hand selected
        rightHand.style.backgroundImage = '';
        rightHand.textContent = '';
    } else {
        rightHand.style.backgroundImage = `url('${rightHandStyles[currentRightHandIndex]}')`;
        rightHand.style.backgroundSize = 'contain';
        rightHand.style.backgroundRepeat = 'no-repeat';
        rightHand.style.backgroundPosition = 'center';
        rightHand.textContent = '';
    }
    
    // Add animation effect
    animateChange();
}

// Animation effect for changes
function animateChange() {
    const cat = document.getElementById('pusheen');
    const catContainer = document.querySelector('.cat-container');
    
    // Add excited animation
    cat.style.animation = 'none';
    setTimeout(() => {
        cat.style.animation = 'floatBounce 3s ease-in-out infinite, excited 0.8s ease-out';
    }, 10);
    
    // Add container glow effect
    catContainer.style.boxShadow = '0 0 30px rgba(129, 199, 132, 0.6), 0 0 60px rgba(129, 199, 132, 0.3)';
    catContainer.style.transition = 'box-shadow 0.3s ease';
    
    setTimeout(() => {
        catContainer.style.boxShadow = '';
    }, 800);
    
    // Create floating particles effect
    createParticles();
}

// Create floating particles effect
function createParticles() {
    const catContainer = document.querySelector('.cat-container');
    const particles = ['✨', '💫', '⭐', '🌟'];
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.textContent = particles[Math.floor(Math.random() * particles.length)];
            particle.style.position = 'absolute';
            particle.style.fontSize = '20px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = 'floatUp 2s ease-out forwards';
            
            catContainer.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 2000);
        }, i * 100);
    }
}

// Legacy functions for keyboard controls
function changeEyes(direction) {
    currentEyeIndex = (currentEyeIndex + direction + eyeStyles.length) % eyeStyles.length;
    updateCat();
    updateActiveStates();
    playSound();
}

function changeMouth(direction) {
    currentMouthIndex = (currentMouthIndex + direction + mouthStyles.length) % mouthStyles.length;
    updateCat();
    updateActiveStates();
    playSound();
}

function changeHat(direction) {
    currentHatIndex = (currentHatIndex + direction + hatStyles.length) % hatStyles.length;
    updateCat();
    updateActiveStates();
    playSound();
}



function changeCheek(direction) {
    currentCheekIndex = (currentCheekIndex + direction + cheekStyles.length) % cheekStyles.length;
    updateCat();
    updateActiveStates();
    playSound();
}

function changeEyebrow(direction) {
    currentEyebrowIndex = (currentEyebrowIndex + direction + eyebrowStyles.length) % eyebrowStyles.length;
    updateCat();
    updateActiveStates();
    playSound();
}

// Reset cat to default
function resetCat() {
    currentEyeIndex = 0;
    currentMouthIndex = 0;
    currentHatIndex = 0;
    currentCheekIndex = 0;
    currentEyebrowIndex = 0;
    currentLeftHandIndex = 0;
    currentRightHandIndex = 0;
    
    updateCat();
    updateActiveStates();
    
    // Special reset animation
    const cat = document.getElementById('pusheen');
    cat.style.transform = 'rotate(360deg) scale(1.1)';
    cat.style.transition = 'transform 0.5s ease';
    
    setTimeout(() => {
        cat.style.transform = 'rotate(0deg) scale(1)';
    }, 500);
    
    playSound();
}

// Random outfit generator
function randomOutfit() {
    const cat = document.getElementById('pusheen');
    const catContainer = document.querySelector('.cat-container');
    
    // Add spinning animation first
    cat.style.animation = 'none';
    cat.style.transform = 'scale(1.2) rotate(0deg)';
    cat.style.transition = 'transform 0.8s ease';
    
    setTimeout(() => {
        cat.style.transform = 'scale(1.2) rotate(720deg)';
    }, 10);
    
    // Change attributes mid-spin
    setTimeout(() => {
        currentEyeIndex = Math.floor(Math.random() * eyeStyles.length);
        currentMouthIndex = Math.floor(Math.random() * mouthStyles.length);
        currentHatIndex = Math.floor(Math.random() * hatStyles.length);
        currentCheekIndex = Math.floor(Math.random() * cheekStyles.length);
        currentEyebrowIndex = Math.floor(Math.random() * eyebrowStyles.length);
        currentLeftHandIndex = Math.floor(Math.random() * leftHandStyles.length);
        currentRightHandIndex = Math.floor(Math.random() * rightHandStyles.length);
        
        updateCat();
        updateActiveStates();
        
        // Add rainbow glow effect
        catContainer.style.boxShadow = '0 0 40px rgba(255, 0, 255, 0.5), 0 0 80px rgba(0, 255, 255, 0.3), 0 0 120px rgba(255, 255, 0, 0.2)';
        catContainer.style.transition = 'box-shadow 0.5s ease';
    }, 400);
    
    // Reset animation
    setTimeout(() => {
        cat.style.transform = 'scale(1.2) rotate(720deg)';
        cat.style.animation = 'floatBounce 3s ease-in-out infinite';
        catContainer.style.boxShadow = '';
        
        // Create celebration particles
        createCelebrationParticles();
    }, 800);
    
    playSound();
}

// Create celebration particles for random outfit
function createCelebrationParticles() {
    const catContainer = document.querySelector('.cat-container');
    const particles = ['🎉', '🎊', '✨', '💫', '🌟', '⭐', '🎈', '🎁'];
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.textContent = particles[Math.floor(Math.random() * particles.length)];
            particle.style.position = 'absolute';
            particle.style.fontSize = Math.random() * 10 + 15 + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = 'celebrationFloat 3s ease-out forwards';
            
            catContainer.appendChild(particle);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 3000);
        }, i * 50);
    }
}

// Play sound effect (using Web Audio API for a simple beep)
function playSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        // Fallback if audio context is not supported
        console.log('Audio not supported');
    }
}

// Add keyboard controls (still available for power users)
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            // Previous eye style
            changeEyes(-1);
            break;
        case 'ArrowRight':
            // Next eye style
            changeEyes(1);
            break;
        case 'ArrowUp':
            // Previous mouth style
            changeMouth(-1);
            break;
        case 'ArrowDown':
            // Next mouth style
            changeMouth(1);
            break;
        case ' ':
            // Spacebar to reset
            event.preventDefault();
            resetCat();
            break;
        case 'h':
            // H for hat
            changeHat(1);
            break;

        case 'c':
            // C for cheeks
            changeCheek(1);
            break;
        case 'b':
            // B for eyebrow
            changeEyebrow(1);
            break;
        case 'r':
            // R for random
            randomOutfit();
            break;
    }
});

// Add double-click for random outfit
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pusheen').addEventListener('dblclick', randomOutfit);
});

// Add touch support for mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

document.addEventListener('touchend', function(event) {
    if (!touchStartX || !touchStartY) return;
    
    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;
    
    // Minimum swipe distance
    if (Math.abs(diffX) > 50 || Math.abs(diffY) > 50) {
        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Horizontal swipe
            if (diffX > 0) {
                // Swipe left - previous eye
                changeEyes(-1);
            } else {
                // Swipe right - next eye
                changeEyes(1);
            }
        } else {
            // Vertical swipe
            if (diffY > 0) {
                // Swipe up - previous mouth
                changeMouth(-1);
            } else {
                // Swipe down - next mouth
                changeMouth(1);
            }
        }
    }
    
    touchStartX = 0;
    touchStartY = 0;
});

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', initGame);

// Add some fun easter eggs
let clickCount = 0;
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pusheen').addEventListener('click', function() {
        clickCount++;
        if (clickCount === 10) {
            // Secret rainbow mode after 10 clicks
            document.body.style.background = 'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080)';
            document.body.style.backgroundSize = '400% 400%';
            document.body.style.animation = 'rainbow 3s ease infinite';
            
            // Add rainbow animation keyframes
            const style = document.createElement('style');
            style.textContent = `
                @keyframes rainbow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `;
            document.head.appendChild(style);
            
            setTimeout(() => {
                document.body.style.background = 'linear-gradient(135deg, #ffb3d9 0%, #ffe6f2 50%, #f0e6ff 100%)';
                document.body.style.animation = '';
                clickCount = 0;
            }, 5000);
        }
    });
}); 