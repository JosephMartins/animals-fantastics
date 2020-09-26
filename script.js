const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index)=> {
    itemMenu.addEventListener('click', ()=> {
      activeTab(index);
    })
  })
}


function initAccordion(){
  const askAccordion = document.querySelectorAll('.js-accordion dt');
  const contentAccordion = document.querySelectorAll('.js-accordion dd');
  const activeClass = 'ativo';

  if(askAccordion.length && contentAccordion.length){
    contentAccordion[0].classList.toggle(activeClass);
    askAccordion[0].classList.toggle(activeClass);

    function activeAccordion(index){
      contentAccordion[index].classList.toggle(activeClass)
    }
    askAccordion.forEach((accordion, index) => {
      accordion.addEventListener('click', () => {
        activeAccordion(index);
        accordion.classList.toggle(activeClass);

      })
    })
  }
}

initAccordion();

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // Funciona do mesmo jeito
    /*
    const topo = section.offsetTop; 
    window.scrollTo({
      top: topo,
      behavior: 'smooth'
    });  
    */
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
initScrollSuave();
