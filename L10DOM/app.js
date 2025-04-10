let heading = document.querySelector('h1');
let button = document.querySelector('button');
button.addEventListener('click', () => {
    button.innerHTML = 'I am Clicked';
    heading.innerHTML = 'I am also change';
})



// events.js - Event listeners for Snake Game

// DOM Elements
let startBtn, pauseBtn, resumeBtn, restartBtn, menuBtn;
let upBtn, downBtn, leftBtn, rightBtn;
let gameContainer, onScreenControllers;

// Initialize DOM references
function initDOMReferences() {
    startBtn = document.getElementById('startBtn');
    pauseBtn = document.getElementById('pauseBtn');
    resumeBtn = document.getElementById('resumeBtn');
    restartBtn = document.getElementById('restartBtn');
    menuBtn = document.getElementById('menuBtn');
    
    upBtn = document.getElementById('upBtn');
    downBtn = document.getElementById('downBtn');
    leftBtn = document.getElementById('leftBtn');
    rightBtn = document.getElementById('rightBtn');
    
    gameContainer = document.getElementById('gameContainer');
    onScreenControllers = document.getElementById('onScreenControllers');
    
    // Verify all elements exist
    const elements = {
        startBtn, pauseBtn, resumeBtn, restartBtn, menuBtn,
        upBtn, downBtn, leftBtn, rightBtn,
        gameContainer, onScreenControllers
    };
    
    for (const [name, element] of Object.entries(elements)) {
        if (!element) {
            console.error(`Element not found: ${name}`);
        }
    }
}

// Game control events
function setupGameControls() {
    // Initialize DOM references first
    initDOMReferences();
    
    // Start button
    if (startBtn) {
        startBtn.addEventListener('click', startGame);
    }
    
    // Pause/Resume buttons
    if (pauseBtn) pauseBtn.addEventListener('click', togglePause);
    if (resumeBtn) resumeBtn.addEventListener('click', resumeGame);
    
    // Restart/Menu buttons
    if (restartBtn) restartBtn.addEventListener('click', startGame);
    if (menuBtn) menuBtn.addEventListener('click', showStartScreen);
    
    // Keyboard controls
    document.addEventListener('keydown', handleKeyboardInput);
    
    // Mobile controls
    setupMobileControls();
    
    // Touch/swipe controls
    setupTouchControls();
}

// ... rest of your event handling code remains the same ...

// Initialize all event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupGameControls();
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial resize
});
