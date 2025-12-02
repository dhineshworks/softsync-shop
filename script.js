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

// Add scroll animations to cards
function addScrollAnimations() {
    const cards = document.querySelectorAll('.plan-card, .benefit-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'slideUp 0.6s ease forwards';
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach((card) => {
        card.style.opacity = '0';
        observer.observe(card);
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
