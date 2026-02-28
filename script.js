/**
 * Nimbus BCI Presentation - Navigation & Interaction Logic
 * Handles slide navigation, keyboard shortcuts, and accessibility features
 */

// ============================================
// CONSTANTS & CONFIGURATION
// ============================================

const CONFIG = {
    ANIMATION_DURATION: 500, // milliseconds
    KEYBOARD_ENABLED: true,
    TOUCH_SWIPE_ENABLED: true,
    SWIPE_THRESHOLD: 50 // pixels
};

// ============================================
// DOM ELEMENTS
// ============================================

const elements = {
    slides: null,
    prevBtn: null,
    nextBtn: null,
    slideCounter: null,
    slidesWrapper: null,
    presentation: null
};

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
    currentSlide: 0,
    totalSlides: 0,
    isAnimating: false,
    touchStartX: 0,
    touchEndX: 0
};

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the presentation
 * Sets up DOM references, event listeners, and initial state
 */
function initPresentation() {
    try {
        // Get DOM elements
        elements.slides = document.querySelectorAll('.slide');
        elements.prevBtn = document.getElementById('prev-btn');
        elements.nextBtn = document.getElementById('next-btn');
        elements.slideCounter = document.getElementById('slide-counter');
        elements.slidesWrapper = document.getElementById('slides-wrapper');
        elements.presentation = document.getElementById('presentation-container');

        // Validate required elements
        if (!elements.slides.length) {
            throw new Error('No slides found in the presentation');
        }

        // Calculate total slides dynamically
        state.totalSlides = elements.slides.length;

        // Set up event listeners
        setupEventListeners();

        // Show first slide
        showSlide(0);

        // Announce to screen readers
        announceToScreenReader('Presentation loaded. Use arrow keys to navigate.');

        console.log(`Presentation initialized: ${state.totalSlides} slides`);
    } catch (error) {
        console.error('Failed to initialize presentation:', error);
        showError('Failed to load presentation. Please refresh the page.');
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Set up all event listeners for navigation
 */
function setupEventListeners() {
    // Button navigation
    if (elements.prevBtn) {
        elements.prevBtn.addEventListener('click', prevSlide);
    }
    
    if (elements.nextBtn) {
        elements.nextBtn.addEventListener('click', nextSlide);
    }

    // Keyboard navigation
    if (CONFIG.KEYBOARD_ENABLED) {
        document.addEventListener('keydown', handleKeyPress);
    }

    // Touch swipe navigation
    if (CONFIG.TOUCH_SWIPE_ENABLED && elements.presentation) {
        elements.presentation.addEventListener('touchstart', handleTouchStart, { passive: true });
        elements.presentation.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    // Prevent default behavior for arrow keys (page scrolling)
    document.addEventListener('keydown', (e) => {
        if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
            e.preventDefault();
        }
    });
}

/**
 * Handle keyboard navigation
 * @param {KeyboardEvent} e - Keyboard event
 */
function handleKeyPress(e) {
    switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ': // Spacebar
            if (e.key === ' ' && e.target.tagName !== 'BUTTON') {
                e.preventDefault();
            }
            nextSlide();
            break;
        
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
            prevSlide();
            break;
        
        case 'Home':
            e.preventDefault();
            goToSlide(0);
            break;
        
        case 'End':
            e.preventDefault();
            goToSlide(state.totalSlides - 1);
            break;
    }
}

/**
 * Handle touch start for swipe navigation
 * @param {TouchEvent} e - Touch event
 */
function handleTouchStart(e) {
    state.touchStartX = e.changedTouches[0].screenX;
}

/**
 * Handle touch end for swipe navigation
 * @param {TouchEvent} e - Touch event
 */
function handleTouchEnd(e) {
    state.touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

/**
 * Process swipe gesture
 */
function handleSwipe() {
    const swipeDistance = state.touchStartX - state.touchEndX;
    
    if (Math.abs(swipeDistance) > CONFIG.SWIPE_THRESHOLD) {
        if (swipeDistance > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            prevSlide();
        }
    }
}

// ============================================
// SLIDE NAVIGATION
// ============================================

/**
 * Show a specific slide
 * @param {number} index - Slide index to show
 */
function showSlide(index) {
    // Prevent navigation during animation
    if (state.isAnimating) {
        return;
    }

    // Validate index
    if (index < 0 || index >= state.totalSlides) {
        console.warn(`Invalid slide index: ${index}`);
        return;
    }

    // Set animating flag
    state.isAnimating = true;

    // Hide all slides
    elements.slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.setAttribute('aria-hidden', 'true');
    });

    // Show target slide
    const slideToShow = elements.slides[index];
    if (slideToShow) {
        slideToShow.classList.add('active');
        slideToShow.setAttribute('aria-hidden', 'false');
    }

    // Update current slide
    state.currentSlide = index;

    // Handle padding for full-background slides
    const isFullImageSlide = slideToShow && slideToShow.classList.contains('slide-image-full');
    if (index === 0 || isFullImageSlide) {
        // First slide and full-image slides have no padding
        elements.slidesWrapper.classList.remove('p-8', 'md:p-12', 'lg:p-16');
    } else {
        elements.slidesWrapper.classList.add('p-8', 'md:p-12', 'lg:p-16');
    }
    // For slide-image-full, force display:flex so the column layout works
    if (isFullImageSlide) {
        slideToShow.style.display = 'flex';
    }

    // Update UI
    updateSlideCounter();
    updateButtonStates();

    // Announce slide change to screen readers
    announceToScreenReader(`Slide ${index + 1} of ${state.totalSlides}`);

    // Reset animating flag after animation completes
    setTimeout(() => {
        state.isAnimating = false;
    }, CONFIG.ANIMATION_DURATION);
}

/**
 * Navigate to next slide
 */
function nextSlide() {
    if (state.currentSlide < state.totalSlides - 1) {
        showSlide(state.currentSlide + 1);
    }
}

/**
 * Navigate to previous slide
 */
function prevSlide() {
    if (state.currentSlide > 0) {
        showSlide(state.currentSlide - 1);
    }
}

/**
 * Go to a specific slide (used for Home/End keys)
 * @param {number} index - Target slide index
 */
function goToSlide(index) {
    showSlide(index);
}

// ============================================
// UI UPDATES
// ============================================

/**
 * Update the slide counter display
 */
function updateSlideCounter() {
    if (elements.slideCounter) {
        elements.slideCounter.textContent = `${state.currentSlide + 1} / ${state.totalSlides}`;
    }
}

/**
 * Update navigation button states
 */
function updateButtonStates() {
    if (elements.prevBtn) {
        elements.prevBtn.disabled = state.currentSlide === 0;
        elements.prevBtn.setAttribute('aria-disabled', state.currentSlide === 0);
    }
    
    if (elements.nextBtn) {
        elements.nextBtn.disabled = state.currentSlide === state.totalSlides - 1;
        elements.nextBtn.setAttribute('aria-disabled', state.currentSlide === state.totalSlides - 1);
    }
}

// ============================================
// ACCESSIBILITY
// ============================================

/**
 * Announce message to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
    const announcement = document.getElementById('sr-announcement');
    if (announcement) {
        announcement.textContent = message;
    }
}

// ============================================
// ERROR HANDLING
// ============================================

/**
 * Display error message to user
 * @param {string} message - Error message
 */
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// ============================================
// INITIALIZATION ON DOM READY
// ============================================

// Initialize when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPresentation);
} else {
    initPresentation();
}

// Export functions for external use (e.g., browser console)
window.presentationAPI = {
    goToSlide,
    nextSlide,
    prevSlide,
    getCurrentSlide: () => state.currentSlide,
    getTotalSlides: () => state.totalSlides
};
