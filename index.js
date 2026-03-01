// Adiciona classe 'scrolled' ao header ao rolar a página
window.addEventListener('scroll', () => {
    // Busca a tag genérica header em vez de id para combinar com o CSS
    const header = document.querySelector('header'); 
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Controle do Menu Mobile
const btnMobile = document.getElementById('btn-mobile');
const menu = document.querySelector('nav ul'); // O CSS usa 'nav ul' para o menu
const navLinks = document.querySelectorAll('nav a'); // O CSS usa 'nav a' para os links

if (btnMobile && menu) {
    btnMobile.addEventListener('click', () => {
        menu.classList.toggle('active');
        btnMobile.classList.toggle('active'); // Adiciona rotação ao ícone baseada no CSS
        
        // Removemos o cálculo de getHeaderHeight() porque o 'top: 100%' no CSS já resolve isso
        
        const icon = btnMobile.querySelector('i');
        if (icon) {
            if (menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Fecha menu ao clicar em um link
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

    // Fecha menu ao clicar fora
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

// Controle do FAQ (Acordeão)
document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const wasActive = item.classList.contains('active');

        // Fecha todos
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
            const icon = faq.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });

        // Abre somente se não estava aberto
        if (!wasActive) {
            item.classList.add('active');
            const icon = btn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        }
    });
});

// Inicialização do ScrollReveal (se a biblioteca estiver incluída no HTML)
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({ origin: 'bottom', distance: '50px', duration: 1000, reset: false });
    sr.reveal('.section-title');
    sr.reveal('.about-text', { origin: 'left', distance: '30px' });
    sr.reveal('.about-img-container', { origin: 'right', distance: '30px' });
    sr.reveal('.service-card', { interval: 100 });
    sr.reveal('.project-card', { interval: 100 });
    sr.reveal('.client-card', { interval: 100 });
    sr.reveal('.timeline-item', { interval: 150 });
    sr.reveal('.skill-card', { interval: 50 });
    sr.reveal('.faq-item', { interval: 100 });
}

// Efeito Typewriter (Máquina de Escrever)
window.addEventListener('load', () => {
    const typewriter = document.getElementById('typewriter');
    if (!typewriter) return;
    
    const text = typewriter.innerHTML;
    typewriter.innerHTML = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i++);
            setTimeout(type, 35);
        }
    }
    type();
});