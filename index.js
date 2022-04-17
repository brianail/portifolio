const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);



function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {

        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 100 * i)

    });
}

const titulo = document.querySelector('.principal-titulo');
typeWrite(titulo);


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
    distance: '100%',
    delay: 1000,
    origin: 'bottom',
});

ScrollReveal().reveal('.cards', {
    distance: '100%',
    delay: 1000,
    origin: 'left',
});

ScrollReveal().reveal('.card-skils', {
    distance: '100%',
    delay: 1200,
    origin: 'left',
});