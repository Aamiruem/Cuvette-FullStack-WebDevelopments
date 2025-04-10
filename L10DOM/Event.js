// events.js - Event listeners for Snake Game

// let startBtn, pauseBtn, resumeBtn, restartBtn, menuBtn;
// let upBtn, downBtn, leftBtn, rightBtn;
// let gameContainer, onScreenControllers;

// Game control events
function setupGameControls() {
    // Start button
    startBtn.addEventListener('click', startGame);
    
    // Pause/Resume buttons
    pauseBtn.addEventListener('click', togglePause);
    resumeBtn.addEventListener('click', resumeGame);
    
    // Restart/Menu buttons
    restartBtn.addEventListener('click', startGame);
    menuBtn.addEventListener('click', showStartScreen);
    
    // Keyboard controls
    document.addEventListener('keydown', handleKeyboardInput);
    
    // Mobile controls
    setupMobileControls();
    
    // Touch/swipe controls
    setupTouchControls();
}

// Keyboard input handling
function handleKeyboardInput(e) {
    if (isGameOver) return;
    
    switch (e.key) {
        case 'ArrowUp':
            if (direction !== 'down') nextDirection = 'up';
            if (isPaused) resumeGame();
            break;
        case 'ArrowDown':
            if (direction !== 'up') nextDirection = 'down';
            if (isPaused) resumeGame();
            break;
        case 'ArrowLeft':
            if (direction !== 'right') nextDirection = 'left';
            if (isPaused) resumeGame();
            break;
        case 'ArrowRight':
            if (direction !== 'left') nextDirection = 'right';
            if (isPaused) resumeGame();
            break;
        case ' ':
        case 'Escape':
            togglePause();
            break;
        case 'Enter':
            if (isGameOver) startGame();
            break;
    }
    
    // Prevent default for arrow keys to stop page scrolling
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
    }
}

// Mobile button controls
function setupMobileControls() {
    upBtn.addEventListener('click', () => { 
        if (direction !== 'down') nextDirection = 'up'; 
        if (isPaused) resumeGame();
    });
    
    downBtn.addEventListener('click', () => { 
        if (direction !== 'up') nextDirection = 'down'; 
        if (isPaused) resumeGame();
    });
    
    leftBtn.addEventListener('click', () => { 
        if (direction !== 'right') nextDirection = 'left'; 
        if (isPaused) resumeGame();
    });
    
    rightBtn.addEventListener('click', () => { 
        if (direction !== 'left') nextDirection = 'right'; 
        if (isPaused) resumeGame();
    });
    
    // Add touch feedback
    [upBtn, downBtn, leftBtn, rightBtn].forEach(btn => {
        btn.addEventListener('touchstart', () => {
            btn.style.transform = 'scale(0.95)';
            btn.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        });
        
        btn.addEventListener('touchend', () => {
            btn.style.transform = '';
            btn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
    });
}

// Touch/swipe controls
function setupTouchControls() {
    let touchStartX = 0;
    let touchStartY = 0;
    const touchThreshold = 30; // Minimum swipe distance in pixels
    
    gameContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    gameContainer.addEventListener('touchmove', (e) => {
        if (!touchStartX || !touchStartY) return;
        e.preventDefault();
    }, { passive: false });
    
    gameContainer.addEventListener('touchend', (e) => {
        if (!touchStartX || !touchStartY) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const dx = touchEndX - touchStartX;
        const dy = touchEndY - touchStartY;
        
        // Only register if swipe distance exceeds threshold
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > touchThreshold) {
            // Horizontal swipe
            if (dx > 0 && direction !== 'left') nextDirection = 'right';
            else if (dx < 0 && direction !== 'right') nextDirection = 'left';
        } else if (Math.abs(dy) > touchThreshold) {
            // Vertical swipe
            if (dy > 0 && direction !== 'up') nextDirection = 'down';
            else if (dy < 0 && direction !== 'down') nextDirection = 'up';
        }
        
        // Reset touch coordinates
        touchStartX = 0;
        touchStartY = 0;
        
        // Resume if paused
        if (isPaused) resumeGame();
    }, { passive: true });
}

// Pause/Resume functionality
function togglePause() {
    if (isGameOver) return;
    
    if (isPaused) {
        resumeGame();
    } else {
        pauseGame();
    }
}

// Window resize handler
function handleResize() {
    // Adjust game container size while maintaining aspect ratio
    const size = Math.min(window.innerWidth * 0.8, window.innerHeight * 0.6, 500);
    gameContainer.style.width = `${size}px`;
    gameContainer.style.height = `${size}px`;
    
    // Show/hide mobile controls based on screen size
    if (window.innerWidth <= 768) {
        onScreenControllers.style.display = 'flex';
    } else {
        onScreenControllers.style.display = 'none';
    }
}

// Initialize all event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupGameControls();
    window.addEventListener('resize', handleResize);
    
    // Initial resize to set correct dimensions
    handleResize();
});









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
