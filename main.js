// main.js - Central JavaScript for Kamala Kafle Portfolio

// Mobile Navigation Drawer Toggle
function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('drawer-overlay');
    if (!drawer || !overlay) return;

    const isOpen = drawer.classList.contains('translate-x-0');
    if (isOpen) {
        drawer.classList.remove('translate-x-0');
        drawer.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    } else {
        drawer.classList.add('translate-x-0');
        drawer.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    }
}

// Global Operations on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Ensure the drawer closes when clicking the overlay directly
    const overlay = document.getElementById('drawer-overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleDrawer);
    }

    // Close drawer when clicking any navigation link inside it (supports same-page scroll anchors)
    const drawerLinks = document.querySelectorAll('#drawer nav a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            const drawer = document.getElementById('drawer');
            const overlay = document.getElementById('drawer-overlay');
            if (drawer && drawer.classList.contains('translate-x-0')) {
                drawer.classList.remove('translate-x-0');
                drawer.classList.add('-translate-x-full');
                if (overlay) overlay.classList.add('hidden');
            }
        });
    });

    // Scroll progress indicator (supports both 'progress-bar' and 'progressBar' IDs)
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        
        const progressBar1 = document.getElementById('progress-bar');
        const progressBar2 = document.getElementById('progressBar');
        
        if (progressBar1) progressBar1.style.width = scrolled + "%";
        if (progressBar2) progressBar2.style.width = scrolled + "%";
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            
            // Check if we are on the correct page first
            if (window.location.pathname.includes('about.html') || href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                // Redirect to page
                window.location.href = href;
            }
        });
    });

    // Premium mouse spotlight glow effect on cards
    const hoverCards = document.querySelectorAll('.hover-card, article');
    hoverCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Universal button & interactive card scale feedback (micro-interactions)
    const pressElements = document.querySelectorAll('button, .bg-surface-elevated, .hover-card, article');
    pressElements.forEach(el => {
        el.addEventListener('mousedown', () => {
            el.classList.add('scale-[0.98]');
        });
        el.addEventListener('mouseup', () => {
            el.classList.remove('scale-[0.98]');
        });
        el.addEventListener('mouseleave', () => {
            el.classList.remove('scale-[0.98]');
        });
    });

    // Fade-in animation for cards, timeline events, and skills using IntersectionObserver
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                fadeInUpObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Query elements that should have smooth scroll-reveal fade-ins
    const animatedCards = document.querySelectorAll('article, .timeline-item, .tech-card, .hover-card, .timeline-event');
    animatedCards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";
        card.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        fadeInUpObserver.observe(card);
    });

    // Contact Form submission logic (simulated transmission)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (!submitBtn) return;

            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Transmission Sent...';
            submitBtn.disabled = true;
            submitBtn.classList.remove('bg-primary');
            submitBtn.classList.add('bg-green-600');

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.classList.add('bg-primary');
                submitBtn.classList.remove('bg-green-600');
                contactForm.reset();
            }, 3000);
        });
    }
});
