let currentLang = 'en';
try {
    currentLang = localStorage.getItem('lang') || 'en';
} catch (e) {
    console.warn('localStorage not available for language preference');
}

const LOCALIZATION = {
    en: {
        nav_shop: 'Shop Home',
        nav_status: 'Check Status',
        nav_admin: 'Admin Panel',
        get_free_canva: 'Get Free Canva',
        hero_title: 'SoftSync - Your Creative Partner',
        hero_subtitle: 'Professional Adobe Creative Cloud Plans at Unbeatable Prices',
        badge_licensed: 'Licensed & Official',
        badge_instant: 'Instant Activation',
        badge_expert: 'Expert Support',
        badge_access: 'Full 1 Year Access',
        section_choose_plan: 'Choose Your Plan',
        section_why_choose: 'Why Choose SoftSync?',
        section_claim_canva: 'Claim Canva Pro for Free!',
        section_claim_subtitle: 'We value your opinion. Share your feedback about SoftSync and get instant access to 1 Year of Canva Pro for free! 🎁',
        label_email: 'Email Address *',
        label_phone: 'Phone Number *',
        label_rating: 'Rate Your Experience *',
        label_comments: 'Your Feedback (Optional)',
        placeholder_comments: 'Tell us what you like about SoftSync or how we can improve...',
        btn_submit_feedback: 'Submit & Claim Canva Pro',
        title_thank_you: 'Thank You for Your Feedback!',
        desc_thank_you: 'Your feedback has been submitted successfully. As promised, here is your 1-Year Canva Pro Access!',
        reward_title: 'Canva Pro 1-Year Access',
        reward_activate: 'To activate your license:',
        reward_inst_1: 'Click the button below to join our official Canva Pro team.',
        reward_inst_2: 'Log in with your existing Canva account or create a new one.',
        reward_inst_3: 'Enjoy full Pro features for 1 year!',
        btn_activate_canva: 'Activate Canva Pro Now',
        reward_help: 'Need help? Contact support on WhatsApp',
        wall_title: 'What Our Creators Say',
        contact_title: 'Get in Touch & Buy Today',
        contact_subtitle: 'Choose your preferred communication method. We respond within minutes!',
        whatsapp_desc: 'Quick replies and instant support for all your queries',
        btn_whatsapp: 'Message on WhatsApp',
        instagram_desc: 'Follow for updates, deals, and creative inspiration',
        btn_instagram: 'Follow on Instagram',
        facebook_desc: 'Like & follow our page for exclusive deals',
        btn_facebook: 'Visit Facebook',
        email_desc: 'Send detailed queries to our support team',
        btn_email: 'Send Email',
        footer_rights: '© 2024 SoftSync. All rights reserved.',
        footer_disclaimer: 'SoftSync is an authorized reseller of Adobe Creative Cloud licenses.',
        benefit_desc_1: '100% authentic Adobe licenses with official activation. No trials, no sharing, fully yours for 1 year.',
        benefit_desc_2: 'Get your license activated within minutes. Start using Adobe Creative Cloud immediately after purchase.',
        benefit_desc_3: 'Expert support via WhatsApp, Email & Instagram. We help you with setup, troubleshooting, and more.',
        benefit_desc_4: 'Multiple payment options including UPI, card, and direct transfer. Your transaction is completely safe.',
        benefit_desc_5: 'Access all creative apps, updates, and new features released during your 1-year subscription.',
        benefit_desc_6: 'Join our community of creative professionals. Get exclusive tutorials and resources from experts.',
        flash_title: 'Flash Sale: Pro Plus Discount!',
        flash_subtitle: 'Get Adobe Pro Plus for just ₹2,699. Ends in:',
        mascot_bubble_text: '🔥 MEGA FIRE SALE! Grab Adobe Pro Plus for just ₹2,699! ⏳ Ends in: ',
        mascot_bubble_sub: 'Buy Now Below!',
        limited_offer_badge: 'Limited Time Offer'
    },
    ta: {
        nav_shop: 'Shop முகப்பு',
        nav_status: 'Status சரிபார்க்க',
        nav_admin: 'Admin Panel',
        get_free_canva: 'இலவச Canva பெறுங்கள்',
        hero_title: 'SoftSync - உங்கள் Creative Partner',
        hero_subtitle: 'சிறந்த விலையில் Professional Adobe Creative Cloud திட்டங்கள்',
        badge_licensed: 'Licensed & Official',
        badge_instant: 'Instant Activation',
        badge_expert: 'Expert Support',
        badge_access: 'Full 1 Year Access',
        section_choose_plan: 'உங்கள் Plan-ஐ தேர்ந்தெடுக்கவும்',
        section_why_choose: 'ஏன் SoftSync-ஐ தேர்வு செய்ய வேண்டும்?',
        section_claim_canva: 'Canva Pro-வை இலவசமாகப் பெறுங்கள்!',
        section_claim_subtitle: 'உங்கள் Feedback-ஐ பகிர்ந்து கொண்டு, 1 வருட Canva Pro-வை இலவசமாகப் பெறுங்கள்! 🎁',
        label_email: 'Email முகவரி *',
        label_phone: 'Phone Number *',
        label_rating: 'உங்கள் Rating-ஐ பதிவு செய்யவும் *',
        label_comments: 'உங்கள் Feedback (Optional)',
        placeholder_comments: 'SoftSync பற்றி உங்கள் கருத்துகளை இங்கே பதிவிடவும்...',
        btn_submit_feedback: 'Submit செய்து Canva Pro பெறுங்கள்',
        title_thank_you: 'உங்கள் Feedback-க்கு நன்றி!',
        desc_thank_you: 'உங்கள் Feedback வெற்றிகரமாக Submit செய்யப்பட்டது. இதோ உங்களுக்கான 1-Year Canva Pro Access!',
        reward_title: 'Canva Pro 1-Year Access',
        reward_activate: 'உங்கள் License-ஐ Activate செய்ய:',
        reward_inst_1: 'கீழே உள்ள பட்டனை கிளிக் செய்து எங்கள் Canva Pro Team-ல் இணையவும்.',
        reward_inst_2: 'உங்கள் Canva Account-ல் Login செய்யவும் அல்லது புதிய Account உருவாக்கவும்.',
        reward_inst_3: '1 வருடத்திற்கு முழு Pro Features-ஐ அனுபவிக்கவும்!',
        btn_activate_canva: 'Canva Pro-வை இப்போது Activate செய்',
        reward_help: 'உதவி தேவையா? WhatsApp-ல் தொடர்பு கொள்ளவும்',
        wall_title: 'எங்கள் Creators-இன் கருத்துக்கள்',
        contact_title: 'Contact செய்து இன்றே வாங்குங்கள்',
        contact_subtitle: 'உங்களுக்கு விருப்பமான வழியில் தொடர்பு கொள்ளவும். சில நிமிடங்களில் Reply செய்வோம்!',
        whatsapp_desc: 'உங்கள் கேள்விகளுக்கு உடனடி Support',
        btn_whatsapp: 'WhatsApp-ல் Message செய்',
        instagram_desc: 'Updates மற்றும் Deals-க்கு Follow செய்யவும்',
        btn_instagram: 'Instagram-ல் Follow செய்',
        facebook_desc: 'Exclusive Deals-க்கு எங்கள் பக்கத்தை Follow செய்யவும்',
        btn_facebook: 'Facebook-ஐ பார்வையிடவும்',
        email_desc: 'எங்கள் Support Team-க்கு Email அனுப்பவும்',
        btn_email: 'Email அனுப்பு',
        footer_rights: '© 2024 SoftSync. All rights reserved.',
        footer_disclaimer: 'SoftSync என்பது Adobe Creative Cloud Licenses-இன் Authorized Reseller ஆகும்.',
        benefit_desc_1: 'Official Activation உடன் 100% Authentic Adobe Licenses. Trial இல்லை, Sharing இல்லை, 1 வருடத்திற்கு முழுமையாக உங்களுடையது.',
        benefit_desc_2: 'சில நிமிடங்களில் License Activate செய்யப்படும். வாங்கிய உடனேயே Adobe Creative Cloud பயன்படுத்தலாம்.',
        benefit_desc_3: 'WhatsApp, Email & Instagram மூலம் Expert Support. Installation மற்றும் Troubleshooting-ல் நாங்கள் உதவுகிறோம்.',
        benefit_desc_4: 'UPI, Card, மற்றும் Bank Transfer உட்பட பல Payment Options. 100% Secure Transaction.',
        benefit_desc_5: '1 வருட Subscription-ல் வரும் அனைத்து Creative Apps, Updates மற்றும் புதிய Features-ஐ Access செய்யலாம்.',
        benefit_desc_6: 'எங்கள் Creative Professionals சமூகத்தில் இணையுங்கள். Exclusive Tutorials & Resources கிடைக்கும்.',
        flash_title: 'Flash Sale: Pro Plus Discount!',
        flash_subtitle: 'Adobe Pro Plus வெறும் ₹2,699-க்கு பெறுங்கள். Ends in:',
        mascot_bubble_text: '🔥 MEGA FIRE SALE! Adobe Pro Plus வெறும் ₹2,699! ⏳ Ends in: ',
        mascot_bubble_sub: 'Buy Now Below!',
        limited_offer_badge: 'Limited Time Offer'
    }
};

const PLAN_TRANSLATIONS = {
    ta: {
        'Standard Plan': 'Standard Plan',
        'Most Popular': 'Most Popular',
        'Best Value': 'Best Value',
        'Perfect for individual creators': 'Individual Creators-க்கு ஏற்றது',
        'For professional teams': 'Professional Teams-க்கு',
        'Design like a pro': 'Pro போல Design செய்யலாம்',
        '1 Year Full Access': '1 Year Full Access',
        '<del style="opacity: 0.6; margin-right: 4px;">₹3,350</del> 1 Year Full Access': '<del style="opacity: 0.6; margin-right: 4px;">₹3,350</del> 1 Year Full Access',
        'Photoshop & Lightroom 20+ Apps': 'Photoshop & Lightroom 20+ Apps',
        '10000 AI Credits Per Month': 'மாதத்திற்கு 10000 AI Credits',
        'Premiere Pro & After Effects': 'Premiere Pro & After Effects',
        '100GB Cloud Storage': '100GB Cloud Storage',
        'Stock Library Access': 'Stock Library Access',
        'Email Support': 'Email Support',
        'All Standard Features': 'அனைத்து Standard Features',
        'FireFly Video Generations': 'FireFly Video Generations',
        '4000 AI Credits Per Month': 'மாதத்திற்கு 4000 AI Credits',
        '1TB Cloud Storage': '1TB Cloud Storage',
        'Advanced AI Features(Nano Banana)': 'Advanced AI Features',
        'Priority Support 24/7': 'Priority Support 24/7',
        '100+ Million Premium Assets': '100+ Million Premium Assets',
        'Remove Backgrounds Instantly': 'Remove Backgrounds Instantly',
        'Magic Resize & Animation': 'Magic Resize & Animation',
        'All Fonts': 'All Fonts',
        'Premium Templates': 'Premium Templates',
        'Official license': 'Official License',
        'Buy Now': 'Buy Now',
        'WhatsApp': 'WhatsApp'
    }
};

function getTranslatedPlanText(text, lang) {
    if (lang === 'ta' && PLAN_TRANSLATIONS.ta[text]) {
        return PLAN_TRANSLATIONS.ta[text];
    }
    return text;
}

const CONTACT_CONFIG = {
    WHATSAPP_NUMBER: '919363348886',
    INSTAGRAM_URL: 'https://www.instagram.com/softsync.official?igsh=MXZtODY0YnNwa2dlNw==',
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
        image_url: 'assets/images/adobe standard.png',
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
        price: 2699,
        price_subtitle: '<del style="opacity: 0.6; margin-right: 4px;">₹3,350</del> 1 Year Full Access',
        image_url: 'assets/images/adobe pro plus.png',
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
        image_url: 'assets/images/pngwing.com.png',
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
    },
    {
        name: 'Wondershare Filmora 15',
        slug: 'filmora-15',
        badge: 'Video Editing',
        description: 'All-in-one Video Editor + AI Credits',
        price: 0,
        price_subtitle: 'Multiple Plans Available',
        image_url: 'assets/images/flimora.png',
        image_alt: 'Wondershare Filmora 15',
        features: [
            'Filmora 15 Licence Only',
            'Filmora 15 + Creative Assist',
            'AI Credits Top-up (Add on)',
            'Creative Assist/Filmstock Dink Diamond',
            'Filmora 15 For Android & iPhone'
        ],
        accent_color: '#00C2A8',
        featured: false,
        sort_order: 4
    },
    {
        name: 'Netflix Premium',
        slug: 'netflix-premium',
        badge: 'Trending',
        description: '4K Ultra HD & Multiple Devices',
        price: 0,
        price_subtitle: 'DM for Available Plans',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
        image_alt: 'Netflix',
        features: [
            '4K Ultra HD Quality',
            'Multiple Device Login',
            'Ad-Free Experience',
            'Private Profile',
            'Instant Activation'
        ],
        accent_color: '#E50914',
        featured: false,
        sort_order: 5
    },
    {
        name: 'Edius Pro 9',
        slug: 'edius-9',
        description: 'Professional Video Editing Software',
        price: 0,
        price_subtitle: 'Lifetime Access',
        image_url: 'assets/images/edius 9.jpeg',
        image_alt: 'Edius Pro 9',
        features: [
            'Fastest Editing Software',
            '4K & HDR Support',
            'No Subscription Required',
            'Professional Color Correction'
        ],
        accent_color: null,
        featured: false,
        sort_order: 6
    },
    {
        name: 'Edius X (10)',
        slug: 'edius-10',
        badge: 'Latest Version',
        description: 'The Next Generation of Video Editing',
        price: 0,
        price_subtitle: 'Lifetime Access',
        image_url: 'assets/images/edius 10.png',
        image_alt: 'Edius X',
        features: [
            'Background Rendering',
            'Motion Tracking',
            '8K Support',
            'Advanced Audio Sync'
        ],
        accent_color: null,
        featured: false,
        sort_order: 7
    },
    {
        name: 'Gemini AI Pro + 5TB Storage',
        slug: 'gemini-pro',
        badge: '1.5 Year 🔥',
        description: 'Original licence | Official Purchased',
        price: 650,
        price_subtitle: '1.5 Year Validity',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
        image_alt: 'Gemini AI Pro',
        features: [
            'Activation on Personal New Mail ID',
            'Gemini 2.5 Pro – Smartest AI',
            '1000 AI Credits Monthly',
            'Veo 3 – AI Video Generator (50/Month)',
            'Flow – Cinematic AI Filmmaker',
            'NotebookLM – Research Assistant',
            '5TB Google Storage'
        ],
        accent_color: '#1A73E8',
        featured: false,
        sort_order: 8
    },
    {
        name: 'Higgsfield Plus & Ultra',
        slug: 'higgsfield',
        badge: 'In Stock ✅',
        description: 'AI Video Generation Credits',
        price: 0,
        price_subtitle: 'Limited Stock Available',
        image_url: 'assets/images/image.webp',
        image_alt: 'Higgsfield',
        features: [
            'Higgsfield Plus – 1,000 Credits',
            'Higgsfield Plus – 3,000 Credits',
            'Higgsfield Ultra – 9,000 Credits',
            '3 Days Replacement Warranty',
            'Direct Activation',
            'Fast & Secure Delivery'
        ],
        accent_color: '#8B5CF6',
        featured: false,
        sort_order: 9
    },
    {
        name: 'Claude Pro & Enterprise',
        slug: 'claude-pro',
        badge: 'Popular 🔥',
        description: 'Affordable Pricing for Claude AI',
        price: 1700,
        price_subtitle: 'Claude Pro - 20 Days',
        image_url: 'assets/images/claude.png',
        image_alt: 'Claude AI',
        features: [
            'Claude Pro 20 Days: ₹1700',
            'Team Plan: Official Price ($25/mo)',
            'Enterprise Plans Available',
            'Private access on your own email',
            'No shared access',
            'Smooth and secure access'
        ],
        accent_color: '#D97757',
        featured: true,
        sort_order: 10
    },
    {
        name: 'Envato Elements',
        slug: 'envato-elements',
        badge: 'Creative Assets',
        description: 'Unlimited Downloads of Premium Digital Assets',
        price: 0,
        price_subtitle: 'Multiple Plans Available',
        image_url: 'assets/images/Envato-Elements-logo-emblem-transparent-png.png',
        image_alt: 'Envato Elements',
        features: [
            '1 Month Access: ₹200',
            '3 Months Access: ₹500',
            '6 Months Access: ₹800',
            '1 Year Access: ₹1250',
            'Unlimited Downloads',
            'Private & secure access'
        ],
        accent_color: '#81B441',
        featured: false,
        sort_order: 11
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
    if (price === 0 || !price) return 'DM for Price';
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

    const badgeText = getTranslatedPlanText(plan.badge, currentLang);
    const descText = getTranslatedPlanText(plan.description, currentLang);
    const subtitleText = getTranslatedPlanText(plan.price_subtitle, currentLang);
    const buyBtnText = getTranslatedPlanText('Buy Now', currentLang);
    const waBtnText = getTranslatedPlanText('WhatsApp', currentLang);

    card.innerHTML = `
        <div class="plan-badge"${gradientStyle}>${badgeText}</div>
        <div class="plan-image">
            <img src="${plan.image_url}" alt="${plan.image_alt || plan.name}">
        </div>
        <div class="plan-header">
            <div class="plan-name"${accentStyle}>${plan.name}</div>
            <p class="plan-description">${descText}</p>
            <div class="plan-price"${accentStyle}>${formatPrice(plan.price)}</div>
            <p class="plan-price-subtitle">${subtitleText}</p>
        </div>
        <div class="plan-content">
            <div class="plan-features">
                ${plan.features.map((feature) => `
                    <div class="feature">
                        <span class="feature-check"><i class="fa-solid fa-check" aria-hidden="true"></i></span>
                        <span>${getTranslatedPlanText(feature, currentLang)}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="plan-footer">
            <button class="${primaryButtonClass}" data-buy-plan="${plan.name}"${gradientStyle}>${buyBtnText}</button>
            <button class="${whatsappButtonClass}" data-whatsapp-plan="${plan.name}">${waBtnText}</button>
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

    try {
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
    } catch (err) {
        console.warn('Exception during plan load.', err);
        renderPlans(FALLBACK_PLANS);
    }
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

// Global variable to hold pending plan
let pendingDiscountPlan = null;

function closeInstaModal() {
    const modal = document.getElementById('insta-modal');
    if (modal) modal.classList.remove('show');
    pendingDiscountPlan = null;
}

const UPI_ID = 'dhineshtn0-2@okaxis';

function claimInstaDiscount() {
    openInstagram();
    const modal = document.getElementById('insta-modal');
    if (modal) modal.classList.remove('show');
    
    if (pendingDiscountPlan) {
        setTimeout(async () => {
            const plan = findPlan(pendingDiscountPlan);
            
            if (typeof setMascotState === 'function') {
                setMascotState('happy', `Discount applied! Setting up your ${pendingDiscountPlan} order...`);
            }
            await saveOrderIntent(plan, 'buy_now_discount');
            
            if (plan) {
                window.location.href = `checkout.html?plan=${encodeURIComponent(plan.slug || plan.name)}`;
            }
            pendingDiscountPlan = null;
        }, 1500);
    }
}

// Buy Now function
async function buyNow(planType) {
    if (planType.includes('Pro Plus')) {
        pendingDiscountPlan = planType;
        const modal = document.getElementById('insta-modal');
        if (modal) modal.classList.add('show');
        return; // Wait for modal action
    }

    const plan = findPlan(planType);
    if (!plan) return;

    if (typeof setMascotState === 'function') {
        setMascotState('happy', `Great choice! Setting up your ${planType} order...`);
    }

    await saveOrderIntent(plan, 'buy_now');
    
    setTimeout(() => { 
        window.location.href = `checkout.html?plan=${encodeURIComponent(plan.slug || plan.name)}`;
    }, 800);
}

function initializeCheckoutPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const planParam = urlParams.get('plan');
    if (!planParam) return;

    const plan = findPlan(planParam);
    
    if (!plan) {
        // Retry once after a short delay in case async loadPlans hasn't finished
        setTimeout(() => {
            const retryPlan = findPlan(planParam);
            if (retryPlan) renderCheckout(retryPlan);
            else {
                const nameEl = document.getElementById('checkout-plan-name');
                if (nameEl) nameEl.textContent = "Plan not found.";
            }
        }, 500);
        return;
    }

    renderCheckout(plan);
}

function renderCheckout(plan) {
    const nameEl = document.getElementById('checkout-plan-name');
    if (!nameEl) return; // Not on checkout page

    nameEl.textContent = plan.name;
    document.getElementById('checkout-plan-desc').textContent = plan.description;
    document.getElementById('checkout-plan-price').innerHTML = plan.price_subtitle && plan.price_subtitle.includes('<del') ? `${formatPrice(plan.price)} <span style="font-size:16px; opacity:0.6; font-weight:normal;">${plan.price_subtitle}</span>` : formatPrice(plan.price);
    
    const imgEl = document.getElementById('checkout-plan-image');
    if (imgEl) {
        imgEl.src = plan.image_url;
        imgEl.alt = plan.image_alt || plan.name;
    }

    const featuresList = document.getElementById('checkout-features-list');
    if (featuresList && plan.features) {
        featuresList.innerHTML = plan.features.map(f => `
            <div class="feature">
                <i class="fa-solid fa-circle-check" style="color: #10B981;"></i>
                <span>${getTranslatedPlanText(f, currentLang)}</span>
            </div>
        `).join('');
    }

    // Bind Payment Action Buttons
    const priceText = formatPrice(plan.price);
    
    const qrWrapper = document.querySelector('.qr-wrapper');
    const upiIdText = document.querySelector('.upi-id-text');
    const btnPayNow = document.getElementById('btn-pay-now');
    
    if (plan.price === 0 || !plan.price) {
        if (qrWrapper) qrWrapper.style.display = 'none';
        if (upiIdText) upiIdText.style.display = 'none';
        if (btnPayNow) {
            btnPayNow.innerHTML = `<i class="fa-brands fa-whatsapp"></i> DM on WhatsApp for Price`;
            btnPayNow.onclick = () => {
                const msg = `Hi SoftSync! I am interested in the ${plan.name} plan. Could you please share the pricing and details?`;
                openWhatsApp(msg);
            };
        }
    } else {
        if (qrWrapper) qrWrapper.style.display = 'inline-block';
        if (upiIdText) upiIdText.style.display = 'block';
        if (btnPayNow) {
            btnPayNow.innerHTML = `<i class="fa-brands fa-whatsapp"></i> I've Paid - Send Screenshot`;
            btnPayNow.onclick = () => {
                const msg = `Hi SoftSync! I just paid ${priceText} for the ${plan.name} plan via UPI. Here is my screenshot:`;
                openWhatsApp(msg);
            };
        }
    }

    const btnActivateFirst = document.getElementById('btn-activate-first');
    if (btnActivateFirst) {
        btnActivateFirst.onclick = () => {
            const msg = plan.price === 0 || !plan.price
                ? `Hi SoftSync! I am interested in the ${plan.name} plan. Could you let me know the price and activation process?`
                : `Hi SoftSync! I want to buy the ${plan.name} plan (${priceText}). Please activate it for me first, and I will pay within 5-10 minutes of activation.`;
            openWhatsApp(msg);
        };
    }

    const btnEmailActivation = document.getElementById('btn-email-activation');
    if (btnEmailActivation) {
        btnEmailActivation.onclick = () => {
            const subject = encodeURIComponent(`Inquiry: ${plan.name} Plan`);
            const body = plan.price === 0 || !plan.price
                ? encodeURIComponent(`Hi SoftSync Team,\n\nI am interested in the ${plan.name} plan. Could you please let me know the pricing and how to proceed with activation?\n\nThank you!`)
                : encodeURIComponent(`Hi SoftSync Team,\n\nI want to buy the ${plan.name} plan (${priceText}). Please activate my license first. I will make the payment within 5-10 minutes after activation is complete.\n\nThank you!`);
            window.open(`mailto:${CONTACT_CONFIG.EMAIL}?subject=${subject}&body=${body}`, '_blank');
        };
    }
}

// Flash Timer Logic
function startFlashTimer() {
    let endTime = localStorage.getItem('softsync_flash_end');
    if (!endTime || Date.now() > parseInt(endTime)) {
        endTime = Date.now() + (2 * 60 * 60 * 1000) + (45 * 60 * 1000) + (30 * 1000); // 2h 45m 30s
        localStorage.setItem('softsync_flash_end', endTime);
    }

    const hEl = document.getElementById('timer-hours');
    const mEl = document.getElementById('timer-minutes');
    const sEl = document.getElementById('timer-seconds');
    if (!hEl || !mEl || !sEl) return;

    setInterval(() => {
        let diff = parseInt(localStorage.getItem('softsync_flash_end')) - Date.now();
        if (diff <= 0) {
            const newEndTime = Date.now() + (2 * 60 * 60 * 1000) + (45 * 60 * 1000) + (30 * 1000);
            localStorage.setItem('softsync_flash_end', newEndTime);
            diff = newEndTime - Date.now();
        }

        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        const hStr = h.toString().padStart(2, '0');
        const mStr = m.toString().padStart(2, '0');
        const sStr = s.toString().padStart(2, '0');

        hEl.textContent = hStr;
        mEl.textContent = mStr;
        sEl.textContent = sStr;

        // Also update the peeking mascot speech bubble timer if it exists
        const mascotTimerEl = document.getElementById('banner-mascot-timer');
        if (mascotTimerEl) {
            mascotTimerEl.textContent = `${hStr}:${mStr}:${sStr}`;
        }
    }, 1000);
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

let mascotResetTimeout;

function setMascotState(state, message) {
    const mascotImg = document.getElementById('mascot-img');
    const bubble = document.getElementById('mascot-bubble');
    if (!mascotImg || !bubble) return;

    // Remove existing states
    mascotImg.classList.remove('mascot-happy', 'mascot-error', 'mascot-thinking');
    bubble.classList.remove('state-happy', 'state-error', 'state-thinking');

    if (state === 'happy') {
        mascotImg.src = 'assets/images/mascot_happy.png';
        mascotImg.classList.add('mascot-happy');
        bubble.classList.add('state-happy');
    } else if (state === 'error') {
        mascotImg.src = 'assets/images/mascot_error.png';
        mascotImg.classList.add('mascot-error');
        bubble.classList.add('state-error');
    } else if (state === 'thinking') {
        mascotImg.src = 'assets/images/mascot_thinking.png';
        mascotImg.classList.add('mascot-thinking');
        bubble.classList.add('state-thinking');
    } else {
        mascotImg.src = 'assets/images/mascot_neutral.png';
    }

    if (message) {
        bubble.textContent = message;
        bubble.classList.remove('hidden');
    }

    // Reset after some time if not neutral
    clearTimeout(mascotResetTimeout);
    if (state !== 'neutral') {
        const timeoutMs = state === 'thinking' ? 5000 : 3500;
        mascotResetTimeout = setTimeout(() => {
            setMascotState('neutral');
            bubble.classList.add('hidden');
            bubble.textContent = 'Need help? Tap to buy a plan';
        }, timeoutMs);
    }
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

    // Hover effects for mascot
    document.querySelectorAll('.plan-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const planName = card.querySelector('.plan-name').textContent;
            setMascotState('thinking', `Hmm... ${planName} looks like a solid choice!`);
        });
        card.addEventListener('mouseleave', () => {
            setMascotState('neutral');
            document.getElementById('mascot-bubble')?.classList.add('hidden');
        });
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

    if (!window.IntersectionObserver) {
        animated.forEach(el => el.classList.add('in-view'));
    } else {
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
    }
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
    let currentTheme = 'dark';
    try {
        if (localStorage.getItem('theme')) {
            currentTheme = localStorage.getItem('theme');
        }
    } catch (e) {
        console.warn('localStorage not available (likely file:/// protocol)');
    }
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark' && themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            const theme = document.documentElement.getAttribute('data-theme');

            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                try { localStorage.setItem('theme', 'light'); } catch(e) {}
                if (themeIcon) {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                try { localStorage.setItem('theme', 'dark'); } catch(e) {}
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
            if (typeof setMascotState === 'function') {
                setMascotState('error', 'Oops! Please check the highlighted fields.');
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
            console.log('Supabase not connected. Trying local fallback.');
            try {
                const submissions = JSON.parse(localStorage.getItem('softsync_feedback') || '[]');
                submissions.push({ ...feedbackData, created_at: new Date().toISOString() });
                localStorage.setItem('softsync_feedback', JSON.stringify(submissions));
            } catch (e) {
                console.warn('localStorage not available for fallback');
            }
            success = true;
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
                    if (typeof setMascotState === 'function') {
                        setMascotState('happy', 'Woohoo! Enjoy your Canva Pro!');
                    }
                    
                    // Send WhatsApp message with feedback details
                    const waMessage = `*New Canva Pro Feedback!* 🎁\n\n*Email:* ${feedbackData.email}\n*Phone:* ${feedbackData.phone}\n*Rating:* ${feedbackData.rating} Stars ${'⭐'.repeat(feedbackData.rating)}\n*Message:* ${feedbackData.comments || 'No comments'}`;
                    openWhatsApp(waMessage);
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

function translatePage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (LOCALIZATION[lang] && LOCALIZATION[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = LOCALIZATION[lang][key];
            } else {
                el.innerHTML = LOCALIZATION[lang][key];
            }
        }
    });

    // Handle comments textarea placeholder explicitly
    const commentsEl = document.getElementById('feedback-comments');
    if (commentsEl) {
        commentsEl.placeholder = lang === 'ta'
            ? LOCALIZATION.ta.placeholder_comments
            : LOCALIZATION.en.placeholder_comments;
    }

    // Translate the peeking mascot bubble text if active
    const bubblePara = document.querySelector('#banner-mascot-bubble p');
    if (bubblePara) {
        const timeVal = document.getElementById('banner-mascot-timer')?.outerHTML || '02:45:30';
        if (lang === 'ta') {
            bubblePara.innerHTML = `🔥 <strong>மெகா தீ விற்பனை!</strong> அடோப் புரோ பிளஸ் வெறும் <strong>₹2,699</strong>! ⏳ முடிவடைய இன்னும்: ${timeVal}`;
        } else {
            bubblePara.innerHTML = `🔥 <strong>MEGA FIRE SALE!</strong> Grab Adobe Pro Plus for just <strong>₹2,699</strong>! ⏳ Ends in: ${timeVal}`;
        }
    }

    // Translate modal title/desc if showing
    const modalTitle = document.querySelector('.modal-card h3');
    const modalDesc = document.querySelector('.modal-card p');
    const modalBtn = document.querySelector('.modal-card button.btn-primary');
    if (modalTitle && modalDesc && modalBtn) {
        if (lang === 'ta') {
            modalTitle.textContent = 'தள்ளுபடியை அன்லாக் செய்க';
            modalDesc.innerHTML = 'அடோப் புரோ பிளஸ் திட்டத்திற்கான சிறப்பு தள்ளுபடி விலையான <strong>₹2,699</strong>-ஐப் பெற, முதலில் எங்களது அதிகாரப்பூர்வ இன்ஸ்டாகிராம் பக்கத்தை நீங்கள் பின்தொடர வேண்டும்!';
            modalBtn.innerHTML = '<i class="fa-brands fa-instagram" style="margin-right: 8px;"></i> பின்தொடர்ந்து தள்ளுபடி பெறுக';
        } else {
            modalTitle.textContent = 'Unlock Discount';
            modalDesc.innerHTML = 'To claim the special <strong>₹2,699</strong> price for the Adobe Pro Plus plan, you must follow our official Instagram page first!';
            modalBtn.innerHTML = '<i class="fa-brands fa-instagram" style="margin-right: 8px;"></i> Follow & Claim Discount';
        }
    }

    // Toggle button text
    const langBtnText = document.getElementById('lang-toggle-text');
    if (langBtnText) {
        langBtnText.textContent = lang === 'en' ? 'தமிழ்' : 'English';
    }

    // Refresh dynamically loaded plan cards
    renderPlans(activePlans);
}

function setupLanguageToggle() {
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ta' : 'en';
            try {
                localStorage.setItem('lang', currentLang);
            } catch (e) {}
            translatePage(currentLang);
        });
    }

    // Translate initially
    translatePage(currentLang);
}

function setupBannerMascot() {
    const wrapper = document.getElementById('banner-mascot-promoter');
    const character = document.getElementById('banner-mascot-character');
    const bubble = document.getElementById('banner-mascot-bubble');
    const closeBtn = document.getElementById('banner-mascot-close');

    if (!wrapper || !character) return;

    // Check if dismissed previously in this session
    try {
        if (sessionStorage.getItem('hide_banner_mascot_bubble') === 'true') {
            if (bubble) bubble.style.display = 'none';
        }
    } catch (e) {
        console.warn('sessionStorage not available');
    }

    // Close button click
    if (closeBtn && bubble) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            bubble.style.opacity = '0';
            bubble.style.transform = 'translateY(10px) scale(0.95)';
            setTimeout(() => {
                bubble.style.display = 'none';
            }, 300);
            try {
                sessionStorage.setItem('hide_banner_mascot_bubble', 'true');
            } catch (err) {}
        });
    }

    // Clicking character or bubble content scrolls to offer and highlights it
    const triggerOfferAction = (e) => {
        if (e.target.closest('#banner-mascot-close')) return;

        const planCards = document.querySelectorAll('.plan-card');
        let proPlusCard = null;
        for (let card of planCards) {
            const planNameEl = card.querySelector('.plan-name');
            if (planNameEl && planNameEl.textContent.includes('Pro Plus')) {
                proPlusCard = card;
                break;
            }
            if (card.innerText.includes('Pro Plus')) {
                proPlusCard = card;
            }
        }

        if (proPlusCard) {
            proPlusCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Apply gold pulsing highlight glow
            proPlusCard.classList.add('plan-highlight');
            setTimeout(() => {
                proPlusCard.classList.remove('plan-highlight');
            }, 1800);

            // Pop up the instagram buy flow
            setTimeout(() => {
                buyNow('Pro Plus');
            }, 900);
        }
    };

    character.addEventListener('click', triggerOfferAction);
    if (bubble) {
        bubble.addEventListener('click', triggerOfferAction);
    }

    // Show bubble on hover if hidden
    character.addEventListener('mouseenter', () => {
        if (bubble && bubble.style.display === 'none') {
            bubble.style.display = 'block';
            bubble.style.opacity = '0';
            bubble.style.transform = 'translateY(10px) scale(0.95)';
            // force reflow
            bubble.offsetHeight;
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0) scale(1)';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setupContactButtons();
    setupPlanActions();
    setupMascot();
    setupBannerMascot();
    setupLanguageToggle();
    setupThemeToggle();
    setupGeneratedStyles();
    addScrollAnimations();
    addButtonRipples();
    loadPlans();
    startFlashTimer();

    // Initialize rating and feedback
    setupStarRating();
    setupFeedbackForm();

    document.addEventListener('submit', function (e) {
        if (e.target && e.target.id === 'canva-feedback-form') return;
        e.preventDefault();
        return false;
    }, true);
});
