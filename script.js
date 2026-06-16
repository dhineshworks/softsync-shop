// SoftSync Contact Configuration
const CONTACT_CONFIG = {
    WHATSAPP_NUMBER: '919363348886',
    INSTAGRAM_URL: 'https://www.instagram.com/softsync.officalr4/',
    FACEBOOK_URL: 'https://www.facebook.com/profile.php?id=61583180897775',
    EMAIL: 'softsynctool@gmail.com'
};

// Replace these with your Supabase project values.
// The anon key is safe to use in browser code when Row Level Security is enabled.
const SUPABASE_CONFIG = {
    URL: 'https://YOUR-PROJECT-ID.supabase.co',
    ANON_KEY: 'YOUR-SUPABASE-ANON-KEY'
};

const FALLBACK_PLANS = [
    {
        name: 'Standard',
        slug: 'standard',
        badge: 'Standard Plan',
        description: 'Perfect for individual creators',
        price: 3000,
        price_subtitle: '1 Year Full Access',
        image_url: 'adobe standard.jpg',
        image_alt: 'Adobe Standard plan',
        features: [
            'Photoshop & Lightroom 20+ Apps',
            '10000 AI Credits Per Month',
            'Premiere Pro & After Effects',
            '100GB Cloud Storage',
            'Stock Library Access',
            'Email Support'
        ],
        accent_color: null,
        featured: false,
        sort_order: 1
    },
    {
        name: 'Pro Plus',
        slug: 'pro-plus',
        badge: 'Most Popular',
        description: 'For professional teams',
        price: 3350,
        price_subtitle: '1 Year Full Access',
        image_url: 'adobe pro plus.jpg',
        image_alt: 'Adobe Pro Plus plan',
        features: [
            'All Standard Features',
            'FireFly Video Generations',
            '4000 AI Credits Per Month',
            '1TB Cloud Storage',
            'Advanced AI Features(Nano Banana)',
            'Priority Support 24/7'
        ],
        accent_color: null,
        featured: true,
        sort_order: 2
    },
    {
        name: 'Canva Pro',
        slug: 'canva-pro',
        badge: 'Best Value',
        description: 'Design like a pro',
        price: 199,
        price_subtitle: '1 Year Full Access',
        image_url: 'pngwing.com.png',
        image_alt: 'Canva Pro',
        features: [
            '100+ Million Premium Assets',
            'Remove Backgrounds Instantly',
            'Magic Resize & Animation',
            'All Fonts',
            'Premium Templates',
            'Official license'
        ],
        accent_color: '#7C3AED',
        featured: false,
        sort_order: 3
    }
];

let supabaseClient = null;
let activePlans = FALLBACK_PLANS;

function isSupabaseConfigured() {
    return SUPABASE_CONFIG.URL.includes('.supabase.co') &&
        !SUPABASE_CONFIG.URL.includes('YOUR-PROJECT-ID') &&
        SUPABASE_CONFIG.ANON_KEY !== 'YOUR-SUPABASE-ANON-KEY';
}

function getSupabaseClient() {
    if (!isSupabaseConfigured() || !window.supabase) return null;
    if (!supabaseClient) {
        supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
    }
    return supabaseClient;
}

function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(Number(price || 0));
}

function findPlan(planType) {
    return activePlans.find((plan) => plan.name === planType || plan.slug === planType);
}

function createPlanCard(plan) {
    const card = document.createElement('div');
    card.className = `plan-card animate-on-scroll tilt${plan.featured ? ' featured' : ''}`;

    const accentStyle = plan.accent_color ? ` style="color: ${plan.accent_color};"` : '';
    const gradientStyle = plan.accent_color
        ? ` style="background: linear-gradient(135deg, #8B5CF6 0%, ${plan.accent_color} 100%);"`
        : '';
    const primaryButtonClass = plan.featured ? 'btn btn-secondary' : 'btn btn-primary';
    const whatsappButtonClass = plan.featured ? 'btn btn-primary' : 'btn btn-secondary';

    card.innerHTML = `
        <div class="plan-badge"${gradientStyle}>${plan.badge}</div>
        <div class="plan-image">
            <img src="${plan.image_url}" alt="${plan.image_alt || plan.name}">
        </div>
        <div class="plan-header">
            <div class="plan-name"${accentStyle}>${plan.name}</div>
            <p class="plan-description">${plan.description}</p>
            <div class="plan-price"${accentStyle}>${formatPrice(plan.price)}</div>
            <p class="plan-price-subtitle">${plan.price_subtitle}</p>
        </div>
        <div class="plan-content">
            <div class="plan-features">
                ${plan.features.map((feature) => `
                    <div class="feature">
                        <span class="feature-check"><i class="fa-solid fa-check" aria-hidden="true"></i></span>
                        <span>${feature}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="plan-footer">
            <button class="${primaryButtonClass}" data-buy-plan="${plan.name}"${gradientStyle}>Buy Now</button>
            <button class="${whatsappButtonClass}" data-whatsapp-plan="${plan.name}">WhatsApp</button>
        </div>
    `;

    return card;
}

function renderPlans(plans) {
    const grid = document.getElementById('plans-grid');
    if (!grid) return;

    activePlans = plans.length ? plans : FALLBACK_PLANS;
    grid.innerHTML = '';
    activePlans
        .slice()
        .sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0))
        .forEach((plan) => grid.appendChild(createPlanCard(plan)));

    addScrollAnimations();
    addButtonRipples();
    renderMascotMenu();
}

async function loadPlans() {
    const grid = document.getElementById('plans-grid');
    if (grid) {
        grid.innerHTML = '<p class="plans-status">Loading plans...</p>';
    }

    const client = getSupabaseClient();
    if (!client) {
        renderPlans(FALLBACK_PLANS);
        return;
    }

    const { data, error } = await client
        .from('plans')
        .select('name, slug, badge, description, price, price_subtitle, image_url, image_alt, features, accent_color, featured, sort_order, is_active')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });

    if (error) {
        console.warn('Supabase plan load failed. Showing fallback plans.', error);
        renderPlans(FALLBACK_PLANS);
        return;
    }

    renderPlans(data || FALLBACK_PLANS);
}

async function saveOrderIntent(plan, source) {
    const client = getSupabaseClient();
    if (!client || !plan) return;

    const { error } = await client.from('orders').insert({
        plan_slug: plan.slug,
        plan_name: plan.name,
        price: plan.price,
        source,
        status: 'new'
    });

    if (error) {
        console.warn('Supabase order intent save failed.', error);
    }
}

// WhatsApp integration
async function contactViaWhatsApp(planType) {
    const plan = findPlan(planType);
    const priceText = plan ? formatPrice(plan.price) : '';
    const message = `Hi SoftSync! I'm interested in the ${planType} plan (${priceText}). Can you provide more details and process my order?`;

    await saveOrderIntent(plan, 'whatsapp');
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
async function buyNow(planType) {
    const plan = findPlan(planType);
    const priceText = plan ? formatPrice(plan.price) : '';
    const message = `Hi SoftSync! I want to buy the ${planType} plan (${priceText}). How can I proceed with the payment?`;

    await saveOrderIntent(plan, 'buy_now');
    openWhatsApp(message);
}

function setupContactButtons() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.onclick = (e) => {
            e.preventDefault();
            openWhatsApp();
        };
    }

    const instagramBtn = document.getElementById('instagram-btn');
    if (instagramBtn) {
        instagramBtn.onclick = (e) => {
            e.preventDefault();
            openInstagram();
        };
    }

    const facebookBtn = document.getElementById('facebook-btn');
    if (facebookBtn) {
        facebookBtn.onclick = (e) => {
            e.preventDefault();
            openFacebook();
        };
    }
}

function renderMascotMenu() {
    const menu = document.getElementById('mascot-menu');
    if (!menu) return;

    let html = activePlans.map((plan) => (
        `<button class="mascot-option" data-plan="${plan.name}">Buy ${plan.name}</button>`
    )).join('');

    // Add Canva Gift option at the end of the menu
    html += `<button class="mascot-option" data-action="canva-gift" style="background: linear-gradient(135deg, #FFF1F2 0%, #F5F3FF 100%); border-color: rgba(244, 63, 94, 0.2); color: #7C3AED;">🎁 Free Canva</button>`;

    menu.innerHTML = html;
    setupMascotOptions();
}

function setupMascotOptions() {
    const options = document.querySelectorAll('.mascot-option');
    options.forEach((btn) => {
        btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            const action = btn.getAttribute('data-action');
            const menu = document.getElementById('mascot-menu');

            if (action === 'canva-gift') {
                const target = document.getElementById('free-canva-section');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    const formCard = document.getElementById('feedback-form-card');
                    if (formCard) {
                        formCard.classList.add('plan-highlight');
                        setTimeout(() => { formCard.classList.remove('plan-highlight'); }, 1600);
                    }
                }
            } else {
                const plan = btn.getAttribute('data-plan');
                const cards = Array.from(document.querySelectorAll('.plan-card'));
                const target = cards.find((card) => card.innerText.includes(plan));

                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    target.classList.add('plan-highlight');
                    setTimeout(() => { target.classList.remove('plan-highlight'); }, 1600);
                }

                setTimeout(() => { buyNow(plan); }, 900);
            }

            if (menu) {
                menu.classList.add('hidden');
                menu.setAttribute('aria-hidden', 'true');
            }
        });
    });
}

function setupPlanActions() {
    document.addEventListener('click', (event) => {
        const buyButton = event.target.closest('[data-buy-plan]');
        const whatsappButton = event.target.closest('[data-whatsapp-plan]');

        if (buyButton) {
            buyNow(buyButton.getAttribute('data-buy-plan'));
        }

        if (whatsappButton) {
            contactViaWhatsApp(whatsappButton.getAttribute('data-whatsapp-plan'));
        }
    });
}

function setupMascot() {
    const mascot = document.getElementById('mascot');
    const bubble = document.getElementById('mascot-bubble');
    const menu = document.getElementById('mascot-menu');

    if (!mascot) return;

    mascot.addEventListener('mouseenter', () => {
        if (bubble) bubble.classList.remove('hidden');
    });

    mascot.addEventListener('mouseleave', () => {
        if (bubble) bubble.classList.add('hidden');
    });

    mascot.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!menu) return;

        const shown = !menu.classList.contains('hidden');
        menu.classList.toggle('hidden', shown);
        menu.setAttribute('aria-hidden', shown ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
        if (!mascot.contains(e.target) && menu && !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
            menu.setAttribute('aria-hidden', 'true');
        }
    });
}

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
        el.classList.remove('in-view');
        observer.observe(el);
    });

    const header = document.querySelector('header');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 20) header.classList.add('scrolled'); else header.classList.remove('scrolled');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
}

// Ripple effect for clickable buttons
function addButtonRipples() {
    const buttons = document.querySelectorAll('.btn, .contact-link');
    buttons.forEach((btn) => {
        if (btn.dataset.rippleReady === 'true') return;
        btn.dataset.rippleReady = 'true';

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

function setupThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark' && themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            const theme = document.documentElement.getAttribute('data-theme');

            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (themeIcon) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                }
            }
        });
    }
}

function setupGeneratedStyles() {
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
}

// Canva Reward Link and Feedback Code
const CANVA_REWARD_LINK = 'https://www.canva.com/brand/join?token=softsync-pro-1year-free-reward'; // Replace with your actual Canva team invite link

function setupStarRating() {
    const stars = document.querySelectorAll('.star-rating .star-btn');
    const ratingInput = document.getElementById('feedback-rating');
    const ratingGroup = document.querySelector('.star-rating');

    if (!ratingGroup || !stars.length) return;

    stars.forEach(star => {
        // Hover highlight
        star.addEventListener('mouseenter', () => {
            if (ratingGroup.classList.contains('rated')) return;
            const val = parseInt(star.getAttribute('data-rating'));
            highlightStars(val);
        });

        star.addEventListener('mouseleave', () => {
            if (ratingGroup.classList.contains('rated')) return;
            resetStars();
        });

        // Click selection
        star.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const val = parseInt(star.getAttribute('data-rating'));
            ratingInput.value = val;
            ratingGroup.classList.add('rated');
            ratingGroup.dataset.selectedRating = val;
            highlightStars(val);

            // Remove validation error on click
            const group = ratingGroup.closest('.form-group');
            if (group) group.classList.remove('invalid');
        });
    });

    function highlightStars(count) {
        stars.forEach(star => {
            const val = parseInt(star.getAttribute('data-rating'));
            if (val <= count) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    function resetStars() {
        const selected = parseInt(ratingInput.value || 0);
        highlightStars(selected);
    }
}

function setupFeedbackForm() {
    const form = document.getElementById('canva-feedback-form');
    if (!form) return;

    // Remove validation errors when typing
    form.querySelectorAll('.form-input').forEach(input => {
        input.addEventListener('input', () => {
            const group = input.closest('.form-group');
            if (group) group.classList.remove('invalid');
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const emailInput = document.getElementById('feedback-email');
        const phoneInput = document.getElementById('feedback-phone');
        const ratingInput = document.getElementById('feedback-rating');
        const commentsInput = document.getElementById('feedback-comments');

        let isValid = true;

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.closest('.form-group').classList.add('invalid');
            isValid = false;
        } else {
            emailInput.closest('.form-group').classList.remove('invalid');
        }

        // Phone validation (exactly 10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        const cleanedPhone = phoneInput.value.replace(/[\s-]/g, '').trim();
        if (!phoneRegex.test(cleanedPhone)) {
            phoneInput.closest('.form-group').classList.add('invalid');
            isValid = false;
        } else {
            phoneInput.closest('.form-group').classList.remove('invalid');
        }

        // Rating validation
        if (!ratingInput.value) {
            ratingInput.closest('.form-group').classList.add('invalid');
            isValid = false;
        } else {
            ratingInput.closest('.form-group').classList.remove('invalid');
        }

        if (!isValid) {
            const firstError = form.querySelector('.form-group.invalid');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        // Disable submit button during action
        const submitBtn = form.querySelector('.btn-submit-feedback');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting...`;

        const feedbackData = {
            email: emailInput.value.trim(),
            phone: cleanedPhone,
            rating: parseInt(ratingInput.value),
            comments: commentsInput.value.trim()
        };

        let success = false;
        const client = getSupabaseClient();

        if (client) {
            try {
                const { error } = await client.from('feedback').insert(feedbackData);
                if (error) {
                    console.error('Error inserting feedback to Supabase:', error);
                } else {
                    success = true;
                }
            } catch (err) {
                console.error('Supabase feedback submit failed exception:', err);
            }
        }

        // Local Fallback / Test Success (always display success so user can claim Canva and test UI)
        if (!success) {
            console.log('Supabase not connected. Saving feedback response locally in localStorage.');
            try {
                const submissions = JSON.parse(localStorage.getItem('softsync_feedback') || '[]');
                submissions.push({ ...feedbackData, created_at: new Date().toISOString() });
                localStorage.setItem('softsync_feedback', JSON.stringify(submissions));
                success = true;
            } catch (e) {
                console.error(e);
            }
        }

        if (success) {
            // Setup reward link
            const claimBtn = document.getElementById('claim-canva-btn');
            if (claimBtn) {
                claimBtn.href = CANVA_REWARD_LINK;
            }

            // Hide form, show success card with animation
            const formCard = document.getElementById('feedback-form-card');
            const successCard = document.getElementById('feedback-success-card');

            if (formCard && successCard) {
                formCard.style.opacity = '0';
                formCard.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    formCard.classList.add('hidden');
                    successCard.classList.remove('hidden');
                    successCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 400);
            }
        } else {
            // Restore button if complete failure
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
            alert('Failed to submit feedback. Please try again.');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setupContactButtons();
    setupPlanActions();
    setupMascot();
    setupThemeToggle();
    setupGeneratedStyles();
    addScrollAnimations();
    addButtonRipples();
    loadPlans();

    // Initialize rating and feedback
    setupStarRating();
    setupFeedbackForm();

    document.addEventListener('submit', function (e) {
        if (e.target && e.target.id === 'canva-feedback-form') return;
        e.preventDefault();
        return false;
    }, true);
});
