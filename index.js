// Menu Hamburguer
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

function closeMenuOnClickOutside(event) {
    if (nav.classList.contains('active') && !nav.contains(event.target) && event.target !== btnMobile) {
        toggleMenu(event);
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link) => {
    link.addEventListener('click', toggleMenu);
});

document.addEventListener('click', closeMenuOnClickOutside);


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

// Codigo para enviar os forms para o Netify
document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("pizzaOrder");
    let formData = new FormData(myForm);
    fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString(),
        })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
};