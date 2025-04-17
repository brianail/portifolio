window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 100) {
      header.classList.add("fixed-header");
    } else {
      header.classList.remove("fixed-header");
    }
  });

document.getElementById('btn-mobile').addEventListener('click', function () {
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');
    this.classList.toggle('active');
});
document.addEventListener('click', function (e) {
    const btn = document.getElementById('btn-mobile');
    const nav = document.getElementById('menu');

    // Fecha o menu ao clicar fora dele
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
        nav.classList.remove('active');
        btn.classList.remove('active');
    }

    // Fecha o menu ao clicar em um link
    if (e.target.tagName === 'A' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        btn.classList.remove('active');
    }
});

document.getElementById('abrir-curriculo').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('modal-curriculo').style.display = 'block';
});

document.querySelector('.fechar-modal').addEventListener('click', function () {
    document.getElementById('modal-curriculo').style.display = 'none';
});

// Efeito máquina de escrever
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''; // Limpa o conteúdo inicial
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra; // Adiciona cada letra com um atraso
        }, 100 * i);
    });
}

document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const faqItem = button.closest(".faq-item");
        const answer = faqItem.querySelector(".faq-answer");
        const icon = button.querySelector(".toggle-icon");
        const isOpen = faqItem.classList.contains("open");

        // Fecha todos
        document.querySelectorAll(".faq-item").forEach(item => {
            item.classList.remove("open", "active");
            item.querySelector(".faq-answer").style.maxHeight = null;
            item.querySelector(".toggle-icon").style.transform = "rotate(0deg)";
        });

        // Abre somente se não estava aberto
        if (!isOpen) {
            faqItem.classList.add("open", "active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.style.transform = "rotate(45deg)";
        }
    });
});

// Chama a função após o carregamento da página
window.onload = function () {
    const titulo = document.getElementById('principal-titulo');
    typeWrite(titulo);
};

document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        reset: true
    });

    sr.reveal('.titulo', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200
    });

    sr.reveal('.conteudo-texto, .info-me, .about-img', {
        origin: 'bottom',
        distance: '40px',
        duration: 800,
        interval: 200
    });

    sr.reveal('.header-logo', {
        origin: 'top',
        distance: '40px',
        duration: 800,
        delay: 300
    });

    sr.reveal('.card', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        interval: 150
    });

    sr.reveal('.card-skils > div', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        interval: 150
    });

    sr.reveal('.timeline-entry.left', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        interval: 200
    });

    sr.reveal('.timeline-entry.right', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        interval: 200
    });

    sr.reveal('.faq-item', {
        origin: 'bottom',
        distance: '30px',
        duration: 700,
        interval: 150
    });

    sr.reveal('.footer-container > div', {
        origin: 'bottom',
        distance: '40px',
        duration: 700,
        interval: 200
    });

    sr.reveal('.footer-copy', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        delay: 400
    });
    
    // Lista de funcionalidades (ul li)
    sr.reveal('#galvao-app .funcionalidades ul li', {
        origin: 'left',
        distance: '30px',
        duration: 700,
        interval: 100
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sr = ScrollReveal({
        reset: true
    });

    sr.reveal('.titulo', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200
    });

    sr.reveal('.conteudo-texto, .info-me, .about-img', {
        origin: 'bottom',
        distance: '40px',
        duration: 800,
        interval: 200
    });

    sr.reveal('.header-logo', {
        origin: 'top',
        distance: '40px',
        duration: 800,
        delay: 300
    });

    sr.reveal('.card', {
        origin: 'bottom',
        distance: '50px',
        duration: 800,
        interval: 150
    });

    sr.reveal('.card-skils > div', {
        origin: 'bottom',
        distance: '30px',
        duration: 800,
        interval: 150
    });

    sr.reveal('.timeline-entry.left', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        interval: 200
    });

    sr.reveal('.timeline-entry.right', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        interval: 200
    });

    sr.reveal('.faq-item', {
        origin: 'bottom',
        distance: '30px',
        duration: 700,
        interval: 150
    });

    sr.reveal('.footer-container > div', {
        origin: 'bottom',
        distance: '40px',
        duration: 700,
        interval: 200
    });

    sr.reveal('.footer-copy', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        delay: 400
    });
    
    // Projetos (cards da seção #projects)
    sr.reveal('.cards-projetos .card', {
        origin: 'bottom',
        distance: '40px',
        duration: 800,
        interval: 150
    });

    // Imagem da seção "Sobre Mim"
    sr.reveal('.about-img', {
        origin: 'right',
        distance: '50px',
        duration: 800,
        delay: 300
    });

    // Descrição e imagens do XLSX Extractor
    sr.reveal('#galvao-app .descricao, #galvao-app .funcionalidades, #galvao-app .imagens-app img, #galvao-app .conclusao', {
        origin: 'bottom',
        distance: '40px',
        duration: 800,
        interval: 150
    });

    // Depoimento da gestora
    sr.reveal('.depoimento-gestora', {
        origin: 'left',
        distance: '50px',
        duration: 800,
        delay: 400
    });

    // Logos das empresas
    sr.reveal('#clientes .titulo', {
        origin: 'top',
        distance: '50px',
        duration: 800,
        delay: 200
    });

    sr.reveal('.logo-empresa', {
        origin: 'bottom',
        distance: '40px',
        duration: 700,
        interval: 150
    });
});