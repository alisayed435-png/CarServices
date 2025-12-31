/**
 * Grid Auto - Minimal JavaScript
 * Only essential functionality for smooth UX
 */

// Smooth scroll for anchor links (polyfill for older browsers)
document.addEventListener('DOMContentLoaded', function() {
    // Check if smooth scrolling is natively supported
    if (!('scrollBehavior' in document.documentElement.style)) {
        // Polyfill for smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    }
});

// Update WhatsApp link with dynamic pre-filled message based on time
(function() {
    var hour = new Date().getHours();
    var greeting = hour < 12 ? 'morning' : (hour < 18 ? 'afternoon' : 'evening');
    var message = 'Hi Grid Auto, good ' + greeting + '. I need help with...';
    var encodedMessage = encodeURIComponent(message);
    
    // Update all WhatsApp links
    document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
        var href = link.getAttribute('href');
        var baseUrl = href.split('?')[0];
        link.setAttribute('href', baseUrl + '?text=' + encodedMessage);
    });
})();
