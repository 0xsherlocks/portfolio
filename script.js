// ===== CUSTOM CURSOR =====
const cursor = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .glass-panel');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.borderColor = 'var(--accent-purple)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = 'var(--accent-cyan)';
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== COUNTER ANIMATION =====
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Animate counters when hero section is visible
            if (entry.target.classList.contains('hero-section')) {
                const counters = entry.target.querySelectorAll('.stat-value');
                counters.forEach(counter => {
                    if (counter.textContent === '0') {
                        animateCounter(counter);
                    }
                });
            }
            
            // Animate skill bars when expertise section is visible
            if (entry.target.classList.contains('expertise-grid')) {
                const skillBars = entry.target.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    bar.style.animation = 'skill-fill 2s ease-out forwards';
                });
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
const elementsToObserve = document.querySelectorAll('.section-container, .hero-section, .expertise-grid');
elementsToObserve.forEach(element => observer.observe(element));

// ===== NAVIGATION SCROLL EFFECT =====
let lastScroll = 0;
const nav = document.querySelector('.nav-hud');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.transform = 'translateY(0)';
    } else if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ===== ACTIVE NAVIGATION LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== PARTICLES GENERATION =====
const createParticles = () => {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--accent-cyan);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particle-float ${5 + Math.random() * 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 10px var(--glow-cyan);
        `;
        particlesContainer.appendChild(particle);
    }
};

// Add particle float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes particle-float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Create particles on load
window.addEventListener('load', createParticles);

// ===== TYPING EFFECT FOR TERMINAL =====
const terminalLines = document.querySelectorAll('.terminal-line');
let delay = 0;

terminalLines.forEach((line, index) => {
    if (index < terminalLines.length - 1) {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.animation = 'fadeInUp 0.5s ease-out';
        }, delay);
        delay += 300;
    }
});

// ===== GLITCH EFFECT ON SCROLL =====
const glitchElements = document.querySelectorAll('.glitch');

window.addEventListener('scroll', () => {
    glitchElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            // Randomly trigger glitch effect
            if (Math.random() > 0.98) {
                element.style.animation = 'none';
                setTimeout(() => {
                    element.style.animation = 'glitch-anim 0.3s';
                }, 10);
            }
        }
    });
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-3d-bg');
    
    parallaxElements.forEach(element => {
        element.style.transform = `translateY(${scrolled * 0.5}px)`;
    });
});

// ===== PROJECT CARDS TILT EFFECT =====
const projectCards = document.querySelectorAll('.project-card, .expertise-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== INITIALIZE EVERYTHING ON LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in to initial hero content
    setTimeout(() => {
        document.querySelector('.hero-content').style.animation = 'fadeInUp 1s ease-out';
    }, 100);
    
    // Console message
    console.log('%c FORNEXT CYBER-INTELLIGENCE DASHBOARD ', 'background: #00f0ff; color: #0a0a0f; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c System Status: ONLINE ', 'background: #00ff88; color: #0a0a0f; font-size: 14px; font-weight: bold; padding: 5px;');
    console.log('%c Developed by: Gulshan Kumar ', 'color: #00f0ff; font-size: 12px;');
});

// ===== EASTER EGG: KONAMI CODE =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
let konamiStyleAdded = false;

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        // Activate special effect
        document.body.style.animation = 'glitch-anim 2s';
        console.log('%c 🎮 KONAMI CODE ACTIVATED! SYSTEM OVERLOAD! ', 'background: #a855f7; color: #fff; font-size: 16px; font-weight: bold; padding: 10px;');
        
        // Add fall animation style only once
        if (!konamiStyleAdded) {
            const fallStyle = document.createElement('style');
            fallStyle.id = 'konami-style';
            fallStyle.textContent = `
                @keyframes fall {
                    to { transform: translateY(100vh); opacity: 0; }
                }
            `;
            document.head.appendChild(fallStyle);
            konamiStyleAdded = true;
        }
        
        // Create matrix effect
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.textContent = Math.random() > 0.5 ? '1' : '0';
                const animDuration = 3 + Math.random() * 3;
                particle.style.cssText = `
                    position: fixed;
                    left: ${Math.random() * 100}%;
                    top: -20px;
                    color: var(--accent-green);
                    font-family: var(--font-mono);
                    font-size: 20px;
                    z-index: 9999;
                    animation: fall ${animDuration}s linear;
                    pointer-events: none;
                `;
                document.body.appendChild(particle);
                
                // Remove particle when animation completes
                setTimeout(() => particle.remove(), animDuration * 1000);
            }, i * 100);
        }
    }
});
