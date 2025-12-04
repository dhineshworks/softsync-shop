// SoftSync Contact Configuration
const CONTACT_CONFIG = {
    WHATSAPP_NUMBER: '919363348886',
    INSTAGRAM_URL: 'https://www.instagram.com/softsynctool/',
    FACEBOOK_URL: 'https://www.facebook.com/profile.php?id=61583180897775',
    EMAIL: 'softsynctool@gmail.com'
};

// WhatsApp integration
function contactViaWhatsApp(planType) {
    const price = planType === 'Standard' ? '3,000' : '3,350';
    const message = `Hi SoftSync! I'm interested in the ${planType} Adobe Creative Cloud plan (₹${price}). Can you provide more details and process my order?`;
    openWhatsApp(message);
}

function openWhatsApp(message = '') {
    const defaultMsg = "Hi! I'm interested in Adobe Creative Cloud plans from SoftSync. Can you help me?";
    const msg = message || defaultMsg;
    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${CONTACT_CONFIG.WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank');
}

// Instagram integration
function openInstagram() {
    window.open(CONTACT_CONFIG.INSTAGRAM_URL, '_blank');
}

// Facebook integration
function openFacebook() {
    window.open(CONTACT_CONFIG.FACEBOOK_URL, '_blank');
}

// Email integration
function openEmail() {
    const subject = encodeURIComponent('Adobe Creative Cloud Plan Inquiry');
    const body = encodeURIComponent('Hi SoftSync Team,\n\nI am interested in your Adobe Creative Cloud plans. Please send me more information.\n\nThank you!');
    window.open(`mailto:${CONTACT_CONFIG.EMAIL}?subject=${subject}&body=${body}`, '_blank');
}

// Buy Now function
function buyNow(planType) {
    const price = planType === 'Standard' ? '3,000' : '3,350';
    const message = `Hi SoftSync! I want to buy the ${planType} plan (₹${price}). How can I proceed with the payment?`;
    contactViaWhatsApp(message);
}

// Setup social media buttons in header
document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp button
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.onclick = (e) => {
            e.preventDefault();
            openWhatsApp();
        };
    }

    // Instagram button
    const instagramBtn = document.getElementById('instagram-btn');
    if (instagramBtn) {
        instagramBtn.onclick = (e) => {
            e.preventDefault();
            openInstagram();
        };
    }

    // Facebook button
    const facebookBtn = document.getElementById('facebook-btn');
    if (facebookBtn) {
        facebookBtn.onclick = (e) => {
            e.preventDefault();
            openFacebook();
        };
    }

    // Add smooth scroll animation
    addScrollAnimations();
});

// Mascot interactions
document.addEventListener('DOMContentLoaded', function () {
    const mascot = document.getElementById('mascot');
    const bubble = document.getElementById('mascot-bubble');
    const menu = document.getElementById('mascot-menu');

    if (!mascot) return;

    // show bubble on hover/focus
    mascot.addEventListener('mouseenter', () => {
        if (bubble) bubble.classList.remove('hidden');
    });
    mascot.addEventListener('mouseleave', () => {
        if (bubble) bubble.classList.add('hidden');
    });

    mascot.addEventListener('click', (e) => {
        e.stopPropagation();
        if (menu) {
            const shown = !menu.classList.contains('hidden');
            if (shown) {
                menu.classList.add('hidden');
                menu.setAttribute('aria-hidden', 'true');
            } else {
                menu.classList.remove('hidden');
                menu.setAttribute('aria-hidden', 'false');
            }
        }
    });

    // close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mascot.contains(e.target) && menu && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
            menu.setAttribute('aria-hidden', 'true');
        }
    });

    // menu plan buttons
    const options = document.querySelectorAll('.mascot-option');
    options.forEach(btn => {
        btn.addEventListener('click', (ev) => {
            const plan = btn.getAttribute('data-plan');
            // find matching plan card by plan name
            const cards = Array.from(document.querySelectorAll('.plan-card'));
            const target = cards.find(c => c.innerText.includes(plan));
            if (target) {
                // scroll to card and highlight
                target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                target.classList.add('plan-highlight');
                setTimeout(() => { target.classList.remove('plan-highlight'); }, 1600);
            }
            // small delay then call buyNow
            setTimeout(() => { buyNow(plan); }, 900);
            // hide menu
            if (menu) { menu.classList.add('hidden'); menu.setAttribute('aria-hidden', 'true'); }
        });
    });
});

// Add scroll animations to elements with .animate-on-scroll
function addScrollAnimations() {
    const animated = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.12
    });

    animated.forEach((el) => {
        // ensure initial state
        el.classList.remove('in-view');
        observer.observe(el);
    });

    // add header scroll shadow
    const header = document.querySelector('header');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 20) header.classList.add('scrolled'); else header.classList.remove('scrolled');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // add ripple effect to buttons
    addButtonRipples();
}

// Ripple effect for clickable buttons
function addButtonRipples() {
    const buttons = document.querySelectorAll('.btn, .contact-link');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const size = Math.max(rect.width, rect.height) * 1.2;
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            this.appendChild(ripple);
            setTimeout(() => { ripple.remove(); }, 650);
        });
    });
}

// Add animation CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Prevent accidental form submissions
document.addEventListener('submit', function(e) {
    e.preventDefault();
    return false;
}, true);
