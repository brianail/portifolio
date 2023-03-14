// Preloader
window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    setTimeout(function () {
        preloader.style.display = "none";
        const content = document.getElementById("content");
        content.classList.add("show");
        content.classList.remove("hide");
    }, 3000); // Atraso de 3 segundos
});


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


// Efeito maquina de escrever
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 100 * i)
    });
}

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