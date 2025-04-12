document.getElementById('btn-mobile').addEventListener('click', function () {
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');
    this.classList.toggle('active');
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
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector(".faq-answer");

        // Fecha todas as respostas abertas antes de abrir a nova
        document.querySelectorAll(".faq-item").forEach(item => {
            const itemAnswer = item.querySelector(".faq-answer");
            if (item !== faqItem) {
                item.classList.remove("open");
                itemAnswer.style.maxHeight = null;
            }
        });

        // Alterna a resposta atual com animação de altura
        faqItem.classList.toggle("open");
        if (faqItem.classList.contains("open")) {
            answer.style.maxHeight = answer.scrollHeight + "px"; // Define a altura para abrir
        } else {
            answer.style.maxHeight = null; // Reseta para fechar
        }
    });
});

// Chama a função após o carregamento da página
window.onload = function() {
    const titulo = document.getElementById('principal-titulo');
    typeWrite(titulo);
};

// Scrollreveal
ScrollReveal().reveal('.imagem-header', {
    delay: 100,
    origin: 'right',
    reset: false
});

ScrollReveal().reveal('.header-logo', {
    distance: '100%',
    delay: 600,
    origin: 'top',
});

ScrollReveal().reveal('.conteudo-texto', {
    distance: '100%',
    delay: 850,
    origin: 'left',
});

ScrollReveal().reveal('section', {
    distance: '100%',
    delay: 500,
    origin: 'left',
});

ScrollReveal().reveal('.paragrafo-about-me', {
    distance: '100%',
    delay: 800,
    origin: 'left',
});

ScrollReveal().reveal('.download', {
    distance: '100%',
    delay: 1000,
    origin: 'left',
});

ScrollReveal().reveal('.img-perfil', {
    distance: '100%',
    delay: 600,
    origin: 'left',
});

ScrollReveal().reveal('.titulo', {
    distance: '100%',
    delay: 750,
    origin: 'top',
});

ScrollReveal().reveal('.buttons-social', {
    distance: '100%',
    delay: 900,
    origin: 'left',
});

ScrollReveal().reveal('.card', {
    distance: '20%',
    delay: 1000,
    origin: 'top',
    interval: 400
});

ScrollReveal().reveal('.cards', {
    distance: '30%',
    delay: 1000,
    origin: 'bottom',
    interval: 400
});

ScrollReveal().reveal('.skils', {
    distance: '20%',
    delay: 800,
    origin: 'bottom',
    interval: 400
});

ScrollReveal().reveal('.card-mobile', {
    distance: '20%',
    delay: 200,
    origin: 'left',
    interval: 400
});

ScrollReveal().reveal('.carrosel', {
    distance: '100%',
    delay: 200,
    origin: 'left',
    interval: 200
});

ScrollReveal().reveal('.app-conteudo', {
    distance: '20%',
    delay: 700,
    origin: 'left',
});

ScrollReveal().reveal('.see-github', {
    distance: '20%',
    delay: 800,
    origin: 'bottom',
});

ScrollReveal().reveal('#galvao-app .titulo', {
    distance: '50px',
    delay: 300,
    origin: 'top',
    opacity: 0,
    duration: 800
});

ScrollReveal().reveal('#galvao-app .descricao', {
    distance: '30px',
    delay: 400,
    origin: 'bottom',
    opacity: 0,
    duration: 800
});

ScrollReveal().reveal('#galvao-app .funcionalidades h2', {
    distance: '40px',
    delay: 500,
    origin: 'left',
    opacity: 0,
    duration: 800
});

ScrollReveal().reveal('#galvao-app .funcionalidades ul li', {
    distance: '20px',
    delay: 600,
    origin: 'left',
    opacity: 0,
    duration: 700,
    interval: 100 // Intervalo para aparecerem em sequência
});

ScrollReveal().reveal('#galvao-app .imagens-app img', {
    distance: '40px',
    delay: 700,
    origin: 'right',
    opacity: 0,
    duration: 900
});

ScrollReveal().reveal('#galvao-app .conclusao', {
    distance: '30px',
    delay: 800,
    origin: 'bottom',
    opacity: 0,
    duration: 800
});

ScrollReveal().reveal('.faq-item', {
    distance: '30px',
    delay: 300,
    origin: 'bottom',
    opacity: 0,
    duration: 700,
    interval: 200 // Define o intervalo entre cada item para um efeito em cascata
});

ScrollReveal().reveal('.footer-container', {
    distance: '40px',
    delay: 500,
    origin: 'bottom',
    opacity: 0,
    duration: 800
});

ScrollReveal().reveal('.footer-contact h2, .footer-contact p', {
    distance: '30px',
    delay: 600,
    origin: 'top',
    opacity: 0,
    duration: 700,
    interval: 200
});

ScrollReveal().reveal('.footer-button', {
    distance: '20px',
    delay: 700,
    origin: 'bottom',
    opacity: 0,
    duration: 600
});

ScrollReveal().reveal('.footer-social a', {
    distance: '20px',
    delay: 750,
    origin: 'bottom',
    opacity: 0,
    duration: 600,
    interval: 150
});

ScrollReveal().reveal('.footer-copy', {
    distance: '20px',
    delay: 800,
    origin: 'bottom',
    opacity: 0,
    duration: 600
});