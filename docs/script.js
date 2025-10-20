/**
 * Single Page Slider Website
 * AI Training & Consulting Business
 * Features: Keyboard navigation, WCAG accessibility, smooth transitions
 */

// =============================================
// State Management
// =============================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.slide-indicators .indicator');
const navButtons = document.querySelectorAll('.nav-btn');
const totalSlides = slides.length;

// =============================================
// Initialize Application
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    initializeNavigation();
    initializeKeyboardControls();
    initializeCalendly();
    initializeAccessibility();
    
    // Announce page load for screen readers
    announceForScreenReader('Page loaded. Use arrow keys or navigation buttons to move between slides.');
});

// =============================================
// Slider Functions
// =============================================
function initializeSlider() {
    // Set initial active slide
    showSlide(0);
    
    // Next slide buttons
    const nextButtons = document.querySelectorAll('.next-slide');
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            navigateToSlide(currentSlide + 1);
        });
    });
    
    // Previous slide buttons
    const prevButtons = document.querySelectorAll('.prev-slide');
    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            navigateToSlide(currentSlide - 1);
        });
    });
    
    // Slide indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            navigateToSlide(index);
        });
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const sliderContainer = document.querySelector('.slider-container');
    
    sliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    sliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left - next slide
                navigateToSlide(currentSlide + 1);
            } else {
                // Swiped right - previous slide
                navigateToSlide(currentSlide - 1);
            }
        }
    }
}

function showSlide(index) {
    // Validate index
    if (index < 0 || index >= totalSlides) {
        return;
    }
    
    // Update current slide
    currentSlide = index;
    
    // Update slides
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            slide.setAttribute('aria-hidden', 'false');
            // Focus on the slide heading for screen readers
            const heading = slide.querySelector('h1, h2');
            if (heading) {
                setTimeout(() => {
                    heading.focus();
                }, 300);
            }
        } else {
            slide.classList.remove('active');
            slide.setAttribute('aria-hidden', 'true');
        }
    });
    
    // Update indicators
    indicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
            indicator.setAttribute('aria-selected', 'true');
        } else {
            indicator.classList.remove('active');
            indicator.setAttribute('aria-selected', 'false');
        }
    });
    
    // Update navigation buttons
    navButtons.forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('active');
            btn.setAttribute('aria-current', 'true');
        } else {
            btn.classList.remove('active');
            btn.setAttribute('aria-current', 'false');
        }
    });
    
    // Announce slide change for screen readers
    const slideTitle = slides[index].querySelector('h1, h2')?.textContent || `Slide ${index + 1}`;
    announceForScreenReader(`Navigated to ${slideTitle}. Slide ${index + 1} of ${totalSlides}`);
    
    // Update URL hash without scrolling
    history.replaceState(null, null, `#slide-${index}`);
}

function navigateToSlide(index) {
    if (index >= 0 && index < totalSlides) {
        showSlide(index);
    }
}

// =============================================
// Navigation Functions
// =============================================
function initializeNavigation() {
    // Navigation button clicks
    navButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            navigateToSlide(index);
        });
    });
    
    // Control buttons
    const prevBtn = document.querySelector('.prev-slide');
    const nextBtn = document.querySelector('.next-slide');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            navigateToSlide(currentSlide - 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            navigateToSlide(currentSlide + 1);
        });
    }
    
    // Handle URL hash on load
    const hash = window.location.hash;
    if (hash) {
        const slideMatch = hash.match(/slide-(\d+)/);
        if (slideMatch) {
            const slideIndex = parseInt(slideMatch[1]);
            if (slideIndex >= 0 && slideIndex < totalSlides) {
                showSlide(slideIndex);
            }
        }
    }
}

// =============================================
// Keyboard Controls
// =============================================
function initializeKeyboardControls() {
    document.addEventListener('keydown', (e) => {
        // Don't interfere with form inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                e.preventDefault();
                navigateToSlide(currentSlide + 1);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                navigateToSlide(currentSlide - 1);
                break;
            case 'Home':
                e.preventDefault();
                navigateToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                navigateToSlide(totalSlides - 1);
                break;
            case 'Escape':
                // Close any modals or return to first slide
                navigateToSlide(0);
                break;
        }
    });
    
    // Number key shortcuts (1-6 for slides)
    document.addEventListener('keydown', (e) => {
        const key = parseInt(e.key);
        if (key >= 1 && key <= totalSlides && !e.ctrlKey && !e.altKey && !e.metaKey) {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                navigateToSlide(key - 1);
            }
        }
    });
}

// =============================================
// Calendly Integration
// =============================================
function initializeCalendly() {
    // Check if we're on the CTA slide with Calendly
    const calendlyWidget = document.querySelector('.calendly-inline-widget');
    
    if (calendlyWidget) {
        // Initialize Calendly when the user navigates to the CTA slide
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.target.classList.contains('active')) {
                    loadCalendlyWidget();
                }
            });
        });
        
        const ctaSlide = document.querySelector('[data-slide="5"]');
        if (ctaSlide) {
            observer.observe(ctaSlide, { attributes: true, attributeFilter: ['class'] });
        }
    }
}

function loadCalendlyWidget() {
    const calendlyWidget = document.querySelector('.calendly-inline-widget');
    if (calendlyWidget && typeof Calendly !== 'undefined') {
        const url = calendlyWidget.getAttribute('data-url');
        if (url) {
            Calendly.initInlineWidget({
                url: url,
                parentElement: calendlyWidget,
                prefill: {},
                utm: {}
            });
        }
    }
}

// =============================================
// Accessibility Functions
// =============================================
function initializeAccessibility() {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.style.position = 'absolute';
    liveRegion.style.left = '-10000px';
    liveRegion.style.width = '1px';
    liveRegion.style.height = '1px';
    liveRegion.style.overflow = 'hidden';
    document.body.appendChild(liveRegion);
    
    // Store reference for announcements
    window.liveRegion = liveRegion;
    
    // Make all headings focusable for screen reader navigation
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
        if (!heading.hasAttribute('tabindex')) {
            heading.setAttribute('tabindex', '-1');
        }
    });
    
    // Add focus visible class for better keyboard navigation visibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
    
    // Ensure proper focus management for modal-like elements
    trapFocusInActiveSlide();
}

function announceForScreenReader(message) {
    if (window.liveRegion) {
        window.liveRegion.textContent = '';
        setTimeout(() => {
            window.liveRegion.textContent = message;
        }, 100);
    }
}

function trapFocusInActiveSlide() {
    // This ensures keyboard users stay within the visible slide
    document.addEventListener('focusin', (e) => {
        const activeSlide = document.querySelector('.slide.active');
        if (activeSlide && !activeSlide.contains(e.target)) {
            // If focus moves outside active slide, check if it's a navigation element
            const isNavElement = e.target.closest('.main-nav, .slider-controls, .site-footer');
            if (!isNavElement) {
                // Return focus to active slide
                const firstFocusable = activeSlide.querySelector('button, a, [tabindex]:not([tabindex="-1"])');
                if (firstFocusable) {
                    firstFocusable.focus();
                }
            }
        }
    });
}

// =============================================
// Smooth Scroll for Skip Link
// =============================================
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(skipLink.getAttribute('href'));
        if (target) {
            target.focus();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// =============================================
// Reduced Motion Support
// =============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0.01ms');
    document.documentElement.style.setProperty('--transition-normal', '0.01ms');
    document.documentElement.style.setProperty('--transition-slow', '0.01ms');
}

// =============================================
// Responsive Navigation
// =============================================
function handleResponsiveNav() {
    const nav = document.querySelector('.main-nav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Hide nav on scroll down, show on scroll up
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });
}

// Initialize responsive navigation
handleResponsiveNav();

// =============================================
// Performance Optimization
// =============================================
// Lazy load images if needed
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// =============================================
// Analytics & Tracking (Optional)
// =============================================
function trackSlideView(slideIndex) {
    // Add your analytics tracking here
    // Example: gtag('event', 'slide_view', { slide_number: slideIndex });
    console.log(`Slide ${slideIndex} viewed`);
}

// Track initial slide view
trackSlideView(currentSlide);

// =============================================
// Error Handling
// =============================================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // Optionally send error reports to your analytics service
});

// =============================================
// Export functions for testing (optional)
// =============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        navigateToSlide,
        showSlide,
        announceForScreenReader
    };
}

// =============================================
// Console Welcome Message
// =============================================
console.log('%c🧙‍♂️ AI Sage Consulting', 'font-size: 20px; font-weight: bold; color: #3498db;');
console.log('%cWelcome to our website!', 'font-size: 14px; color: #2c3e50;');
console.log('%cKeyboard shortcuts: Arrow keys or numbers 1-6 to navigate slides', 'font-size: 12px; color: #7f8c8d;');
