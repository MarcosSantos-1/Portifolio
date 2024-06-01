const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*Typing Animation */
let typed = new Typed('#auto_text', {
    strings: ['> Desenvolvedor iOS', '> Desenvolvedor Fullstack','> Desenvolvedor React', '> Desenvolvedor Node JS'],
    typeSpeed: 65,
    backSpeed: 50,
    backDelay : 4500,
    loop: true
  });

/* MODAL */ 
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalClose = document.querySelectorAll('.services_modal-close')
let modal = function(modalCLick){
    modalViews[modalCLick].classList.add('active-modal')
}
modalBtns.forEach((mb, i)=>{
    mb.addEventListener('click', () => {
        modal(i)
    })
})
modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })
    })
})

/* MIXITUP FILTER */ 

let mixerPortifolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}
linkWork.forEach(l=> l.addEventListener('click', activeWork))


/* SWIPER TESTEMUNHOS*/ 

let swiperTestemunhos = new Swiper(".testemunhos_container", {
    spaceBetween: 24,
    loop: true, /* adcional. Serve como o nome já diz para ser infinito os slides*/
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

  //==== COPIAR O E-MAIL =====





  function copyEmail(){
    navigator.clipboard.writeText("marcosv.dev@outlook.com");

      Toastify({  
      avatar:"./Assets/tks.png",
      text: "E-mail copiado!",
      duration: 3000,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to top, #1A1A1D, #131315)",
      },
  }).showToast();

      }


  


  /*SCROLL e NAV */
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav_link');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active-link'));
        navLinks[index].classList.add('active-link');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});

/*=============== TEMA LIGHT / DARK ===============*/ 

const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Selecao da escolha do usuario
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Funções para obter o tema e ícone atual
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-sun' : 'bx bx-moon';

// Detectar preferência de tema do navegador
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (selectedTheme) {
  // Aplicar o tema selecionado pelo usuário
  document.body.classList[selectedTheme === 'dark' ? 'remove' : 'add'](lightTheme);
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
} else if (prefersDarkScheme.matches) {
  // Aplicar o tema escuro se essa for a preferência do navegador
  document.body.classList.remove(lightTheme);
  themeButton.classList.add(iconTheme);
} else {
  // Aplicar o tema claro se essa for a preferência do navegador
  document.body.classList.add(lightTheme);
  themeButton.classList.remove(iconTheme);
}

// Ativa / Desativa o tema manualmente pelo botão
themeButton.addEventListener('click', () => {
  // Adicionar e remover o light theme / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // Salvar o tema e ícone localmente pela escolha do usuário
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
/*=============== SCROLL REVEAL ===============*/ 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`.home_data`)
sr.reveal(`.home_handle`,{delay: 500})
sr.reveal(`.home_social , .home_scroll`,{delay: 900, origin: 'bottom'})