
// Menu Hamburguer
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

const titulo = document.querySelector('.principal-titulo');
typeWrite(titulo);


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
    distance: '20%',
    delay: 1000,
    origin: 'left',
    interval: 400
});

ScrollReveal().reveal('.skils', {
    distance: '20%',
    delay: 800,
    origin: 'bottom',
    interval: 400
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
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};




var position = document.querySelector('.position')
  var quant = document.querySelectorAll('.item-slide .images')
  var atual = 0
  var imagem = document.getElementById('atual')
  var avancar = document.getElementById('avancar')
  var voltar = document.getElementById('voltar')
  var rolar = true

  for (let i = 0; i < quant.length; i++) {
    var div = document.createElement('div')
    div.id = i
    position.appendChild(div)
  }
  document.getElementById('0').classList.add('primeira')

  var pos = document.querySelectorAll('.position div')

  for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
      atual = pos[i].id
      rolar = false
      slide()
    })
  }

  voltar.addEventListener('click', () => {
    atual--
    rolar = false
    slide()
  })

  avancar.addEventListener('click', () => {
    atual++
    rolar = false
    slide()
  })

  function slide() {
    if (atual >= quant.length) {
      atual = 0;
    } else if (atual < 0) {
      atual = quant.length - 1
    }

    document.querySelector('.primeira').classList.remove('primeira')
    imagem.style.marginLeft = -1024 * atual +'px'
    document.getElementById(atual).classList.add('primeira')

  }

  setInterval(()=>{
    if(rolar){
      atual++
      slide()
    }else{
      rolar = true
    }
  },4000)