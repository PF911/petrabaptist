// ===================================
// Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Close mobile menu when clicking on an internal link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return; // skip external links
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// ===================================
// Scroll Animations
// ===================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
const animateOnScroll = document.querySelectorAll(
    '.ministry-card, .event-card, .sermon-card, .about-text, .about-image, .contact-item'
);

animateOnScroll.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        // For now, we'll just show an alert and reset the form
        console.log('Form Data:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In a production environment, you would do something like:
        // fetch('your-server-endpoint', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('Thank you for your message!');
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     alert('Sorry, there was an error sending your message.');
        // });
    });
}

// ===================================
// Parallax Effect for Hero Section
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// ===================================
// Year Update in Footer
// ===================================
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ===================================
// Sermon Play Overlay Interaction
// ===================================
const sermonCards = document.querySelectorAll('.sermon-card');

sermonCards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Get the sermon data
        const sermonTitle = this.querySelector('h3').textContent;
        
        // For now, we'll just log it
        console.log('Sermon card clicked - would open video player');
        
        // Example: You could redirect to a sermon page
        // window.location.href = '/sermon-detail.html';
    });
});

// ===================================
// Service Times Update (Optional)
// ===================================
// You can update this function to pull service times from a database
// or CMS and dynamically update the service times cards
function updateServiceTimes() {
    // Example implementation
    const serviceTimes = {
        sunday: '10:30 AM',
        bibleStudy: 'Wednesday 7:00 PM',
        prayer: 'Thursday 6:30 PM'
    };
    
    // Update the DOM if needed
    // This is just a placeholder for dynamic content
}

// ===================================
// Utility Functions
// ===================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for performance
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Run initial functions
    highlightNavigation();
    handleNavbarScroll();
    
    console.log('Petra Baptist Church website loaded successfully!');
});

// ===================================
// Ministry Modal Handling
// ===================================
// Wrap in DOMContentLoaded to ensure DOM is ready
document.addEventListener('DOMContentLoaded', function() {
const ministryData = {
    'petra-men': {
        icon: 'fa-user-tie',
        title: 'Petra Men',
        description: 'Our Men\'s Ministry is committed to empowering men to live out their God-given purpose with strength, integrity, and courage. Through fellowship and biblical teaching, men are encouraged to grow spiritually and build lasting connections.',
        time: 'Last Saturday of each month at 8:00AM (Bible Breakfast & Fellowship)',
        leader: 'Brian Lee - Associate Pastor'
    },
    'petra-women': {
        icon: 'fa-heart',
        title: 'Petra Women',
        description: 'The Women\'s Ministry exists to encourage, enlighten, equip, and energize women to walk in their God-given purpose through His power. Gatherings focus on spiritual growth, meaningful connection, and uplifting fellowship.',
        time: '3rd Saturday of each month at 9:30AM (Table Talk with Carol Brunch)',
        leader: 'Carol Cooke',
        externalLink: 'https://petrawomen.net/'
    },
    'petra-teens': {
        icon: 'fa-user-friends',
        title: 'Petra Teens',
        description: 'Our Teen Ministry invites students in 6th-12th grade to dive into Scripture, explore real-life applications, and grow in their faith alongside a strong community. Using The Gospel Project curriculum, students journey through the Bible chronologically, discovering how every story points to Jesus.',
        time: 'Wednesday Nights at 6PM',
        leaders: 'Tobias & Andrea Wilson'
    },
    'petra-seniors': {
        icon: 'fa-hands-helping',
        title: 'Petra Senior Saints',
        description: 'Senior Saints is a vibrant ministry dedicated to encouraging, equipping, and engaging senior adults as vital members of the body of Christ. We believe every season of life has purpose, and we strive to help seniors grow spiritually, build meaningful community, and serve with joy.',
        time: '3rd Thursday of each month',
        leader: 'Debby Emerson'
    },
    'petra-kids': {
        icon: 'fa-child',
        title: 'Petra Kids',
        description: 'Our Kids Ministry provides a fun and engaging environment where children from Pre-K through 5th grade can grow in God\'s Word, build friendships, and develop a strong foundation in their faith. Through the AWANA curriculum, kids learn biblical truths, discover Jesus, and practice Christian living through interactive activities and games.',
        time: 'Wednesday Nights at 6PM',
        leader: 'Stephanie Owens'
    },
    'petra-couples': {
        icon: 'fa-ring',
        title: 'Petra Couples',
        description: 'The Couples Ministry is designed to help couples strengthen their relationship with Jesus Christ and one another. Through events and small groups, couples are encouraged to grow in their faith, deepen their connection, and build strong, Christ-centered marriages.',
        time: 'As Scheduled (see Flocknotes or Events)',
        leaders: 'Brian & Cheri Lee'
    },
    'petra-grief': {
        icon: 'fa-dove',
        title: 'Petra Grief Share',
        description: 'GriefShare is a caring and supportive weekly group designed to help individuals navigate the pain of losing a loved one. Through expert-led videos, group discussion, and personal reflection, participants find comfort, understanding, and practical tools for healing and rebuilding their lives.',
        time: 'Sundays from 3-5PM',
        leader: 'Carol Cooke'
    },
    'bible-fellowship': {
        icon: 'fa-book-open',
        title: 'Bible Fellowship Groups',
        description: 'The Bible Fellowship Group is designed to help you dig deeper into God\'s Word and grow in your faith through meaningful study and discussion. Each gathering provides an opportunity to explore Scripture, gain practical insight, and connect with others in fellowship.',
        time: 'Sundays at 8:00AM'
    }
};

const ministryModal = document.getElementById('ministryModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalIcon = document.querySelector('.ministry-modal-icon i');
const modalClose = document.querySelector('.ministry-modal-close');
const modalOverlay = document.querySelector('.ministry-modal-overlay');

// Open modal when clicking ministry card
document.querySelectorAll('.ministry-card-compact').forEach(card => {
    card.addEventListener('click', function() {
        const ministryId = this.getAttribute('data-ministry');
        const ministry = ministryData[ministryId];
        
        if (ministry) {
            openMinistryModal(ministry);
        }
    });
});

function openMinistryModal(ministry) {
    // Update icon
    modalIcon.className = `fas ${ministry.icon}`;
    
    // Update title
    modalTitle.textContent = ministry.title;
    
    // Build content
    let content = '';
    
    if (ministry.externalLink) {
        // Special case for Petra Women with external link
        content = `
            <div class="ministry-modal-section">
                <h3><i class="fas fa-info-circle"></i> About</h3>
                <p>${ministry.description}</p>
            </div>
            <div class="ministry-modal-section">
                <h3><i class="fas fa-clock"></i> When We Meet</h3>
                <p>${ministry.time}</p>
            </div>
            <div class="ministry-modal-section">
                <h3><i class="fas fa-user"></i> ${ministry.leaders ? 'Leaders' : 'Leader'}</h3>
                <p>${ministry.leader || ministry.leaders}</p>
            </div>
            <div class="ministry-modal-section">
                <a href="${ministry.externalLink}" target="_blank" rel="noopener noreferrer" class="ministry-external-link">
                    <i class="fas fa-external-link-alt"></i>
                    Visit PetraWomen.net
                </a>
            </div>
        `;
    } else {
        // Standard ministry content
        const leaderSection = (ministry.leader || ministry.leaders) ? `
            <div class="ministry-modal-section">
                <h3><i class="fas fa-user"></i> ${ministry.leaders ? 'Leaders' : 'Leader'}</h3>
                <p>${ministry.leader || ministry.leaders}</p>
            </div>
        ` : '';
        
        content = `
            <div class="ministry-modal-section">
                <h3><i class="fas fa-info-circle"></i> About</h3>
                <p>${ministry.description}</p>
            </div>
            <div class="ministry-modal-section">
                <h3><i class="fas fa-clock"></i> When We Meet</h3>
                <p>${ministry.time}</p>
            </div>
            ${leaderSection}
        `;
    }
    
    modalContent.innerHTML = content;
    
    // Show modal
    ministryModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeMinistryModal() {
    ministryModal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Close modal on X button click
modalClose.addEventListener('click', closeMinistryModal);

// Close modal on overlay click
modalOverlay.addEventListener('click', closeMinistryModal);

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && ministryModal.classList.contains('active')) {
        closeMinistryModal();
    }
});

}); // End DOMContentLoaded for ministry modals

// ===================================
// Live Stream Countdown Clock
// ===================================
(function () {
    // ── Service schedule (Eastern Time) ──────────────────────────
    // day: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    const SERVICES = [
        { day: 0, hour: 9,  min: 0,  label: 'Sunday Worship · 9:00 AM' },
        { day: 0, hour: 10, min: 30, label: 'Sunday Worship · 10:30 AM' },
        { day: 3, hour: 18, min: 0,  label: 'Wednesday Bible Study · 6:00 PM' }
    ];

    const DOW_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    function getNextService() {
        const now = new Date();

        // Parse current Eastern time using Intl
        const parts = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/New_York',
            weekday: 'short',
            hour:    '2-digit',
            minute:  '2-digit',
            second:  '2-digit',
            hour12:  false
        }).formatToParts(now);

        const get = type => parts.find(p => p.type === type)?.value || '0';
        const etDow  = DOW_NAMES.indexOf(get('weekday'));
        const etHour = parseInt(get('hour')) % 24;   // handle '24' edge case
        const etMin  = parseInt(get('minute'));
        const etSec  = parseInt(get('second'));

        // Minutes since start of week (Sunday 00:00)
        const nowWeekMins = etDow * 1440 + etHour * 60 + etMin;

        let bestDiffMins = Infinity;
        let bestService  = null;

        SERVICES.forEach(svc => {
            const svcWeekMins = svc.day * 1440 + svc.hour * 60 + svc.min;
            let diff = svcWeekMins - nowWeekMins;
            if (diff <= 0) diff += 7 * 1440; // wrap to next week
            if (diff < bestDiffMins) {
                bestDiffMins = diff;
                bestService  = svc;
            }
        });

        // Total seconds remaining (subtract current seconds into the minute)
        const totalSecs = bestDiffMins * 60 - etSec;
        const target    = new Date(now.getTime() + totalSecs * 1000);

        return { target, label: bestService.label };
    }

    function pad(n) {
        return String(Math.max(0, n)).padStart(2, '0');
    }

    function tick() {
        const { target, label } = getNextService();
        const diff = Math.max(0, Math.floor((target - Date.now()) / 1000));

        const days    = Math.floor(diff / 86400);
        const hours   = Math.floor((diff % 86400) / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;

        const dEl = document.getElementById('cdDays');
        const hEl = document.getElementById('cdHours');
        const mEl = document.getElementById('cdMinutes');
        const sEl = document.getElementById('cdSeconds');
        const nEl = document.getElementById('cdServiceName');

        if (dEl) dEl.textContent = pad(days);
        if (hEl) hEl.textContent = pad(hours);
        if (mEl) mEl.textContent = pad(minutes);
        if (sEl) sEl.textContent = pad(seconds);
        if (nEl) nEl.textContent = label;
    }

    // Run immediately, then every second
    tick();
    setInterval(tick, 1000);
})();
