window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
});

const btnMobile = document.getElementById('btn-mobile');
const menu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav a');

if (btnMobile && menu) {
    btnMobile.addEventListener('click', () => {
        menu.classList.toggle('active');
        btnMobile.classList.toggle('active');
        const icon = btnMobile.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars', !menu.classList.contains('active'));
            icon.classList.toggle('fa-times', menu.classList.contains('active'));
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            btnMobile.classList.remove('active');
            const icon = btnMobile.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !btnMobile.contains(e.target) && menu.classList.contains('active')) {
            menu.classList.remove('active');
            btnMobile.classList.remove('active');
            const icon = btnMobile.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({ origin: 'bottom', distance: '40px', duration: 900, reset: false, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });
    sr.reveal('.section-title', { delay: 100 });
    sr.reveal('.label-tag', { delay: 50 });
    sr.reveal('.about-text', { origin: 'left', distance: '40px', delay: 100 });
    sr.reveal('.about-img-container', { origin: 'right', distance: '40px', delay: 200 });
    sr.reveal('.service-card', { interval: 100 });
    sr.reveal('.project-card', { interval: 120 });
    sr.reveal('.testimonial-card', { interval: 100 });
    sr.reveal('.process-step', { interval: 100 });
    sr.reveal('.hero-metrics', { delay: 600 });
    sr.reveal('.contact-content h2', { delay: 100 });
    sr.reveal('.contact-ctas', { delay: 200 });
    sr.reveal('.contact-extras', { delay: 300 });
    sr.reveal('.clients-strip', { delay: 200 });
}

function animateCounter(el, target, suffix = '') {
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target + suffix;
            clearInterval(timer);
        } else {
            el.textContent = current + suffix;
        }
    }, 25);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metrics = entry.target.querySelectorAll('.metric strong');
            const values  = [20, 6, 100];
            const suffixes = ['+', '+', '%'];
            metrics.forEach((el, i) => {
                // strip inner <span> text, animate only the number part
                const span = el.querySelector('span');
                const suffix = span ? span.outerHTML : suffixes[i];
                let current = 0;
                const target = values[i];
                const step = Math.ceil(target / 50);
                const timer = setInterval(() => {
                    current = Math.min(current + step, target);
                    el.innerHTML = current + suffix;
                    if (current >= target) clearInterval(timer);
                }, 20);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroMetrics = document.querySelector('.hero-metrics');
if (heroMetrics) statsObserver.observe(heroMetrics);

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
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

(function () {
    const CODE_TOKENS = [
        ['function ', 'kw'], ['apresentar', 'fn'], ['() {', 'pun'],
        ['\n', ''],
        ['  const ', 'kw'], ['dev', 'var'], [' = {', 'pun'],
        ['\n', ''],
        ['    nome         ', 'prop'], [': ', 'pun'], ['"Brian Ail"', 'str'], [',', 'pun'],
        ['\n', ''],
        ['    missão       ', 'prop'], [': ', 'pun'], ['"Ideias que viram resultados"', 'str'], [',', 'pun'],
        ['\n', ''],
        ['    especialidade', 'prop'], [': ', 'pun'], ['"Web · Auto · Dados"', 'str'], [',', 'pun'],
        ['\n', ''],
        ['  };', 'pun'],
        ['\n', ''],
        ['\n', ''],
        ['  ', ''], ['return ', 'kw'], ['dev', 'var'], ['.missão', 'prop'], [';', 'pun'],
        ['\n', ''],
        ['}', 'pun'],
        ['\n', ''],
        ['\n', ''],
        ['// ✓ Pronto para transformar sua ideia em código', 'cmt'],
    ];

    function charDelay(char) {
        if (char === '\n') return 80;
        if (char === ' ' || char === ',' || char === ';') return 30;
        return 35 + Math.random() * 30;
    }

    const CHARS = [];
    for (const [text, cls] of CODE_TOKENS) {
        for (const ch of text) {
            CHARS.push({ ch, cls });
        }
    }

    function buildHTML(chars) {
        let html = '';
        let i = 0;
        while (i < chars.length) {
            const cls = chars[i].cls;
            let txt = '';
            while (i < chars.length && chars[i].cls === cls) {
                txt += chars[i].ch;
                i++;
            }
            const escaped = txt
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/ {2,}/g, m => '&nbsp;'.repeat(m.length));
            if (cls) {
                html += `<span class="${cls}">${escaped}</span>`;
            } else {
                html += escaped;
            }
        }
        return html;
    }

    function startTyping() {
        const area = document.getElementById('code-area');
        if (!area) return;

        area.innerHTML = '<span class="type-cursor"></span>';

        let typed = [];
        let idx = 0;

        function typeNext() {
            if (idx >= CHARS.length) {
                area.innerHTML = buildHTML(typed) + '<span class="type-cursor"></span>';
                return;
            }

            typed.push(CHARS[idx]);
            area.innerHTML = buildHTML(typed) + '<span class="type-cursor"></span>';
            idx++;

            setTimeout(typeNext, charDelay(CHARS[idx - 1].ch));
        }

        typeNext();
    }

    window.addEventListener('load', () => {
        setTimeout(startTyping, 700);
    });

    // --- FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fecha todas as outras respostas
                faqItems.forEach(i => i.classList.remove('active'));
                
                // Abre apenas a que foi clicada (se estava fechada)
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // --- LGPD Cookie Banner Logic ---
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    if (cookieBanner && acceptCookiesBtn) {
        if (!localStorage.getItem('lgpd_cookies_accepted')) {
            setTimeout(() => {
                cookieBanner.classList.remove('hidden');
                setTimeout(() => cookieBanner.classList.add('show'), 50);
            }, 1500);
        }

        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem('lgpd_cookies_accepted', 'true');
            cookieBanner.classList.remove('show');
            setTimeout(() => cookieBanner.classList.add('hidden'), 500);
        });
    }
})();