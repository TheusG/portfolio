const menu      = document.querySelector('.nav-links');
const burguer   = document.querySelector('.burguer');
const linha1    = document.querySelector('#linha1');
const linha2    = document.querySelector('#linha2');
const linha3    = document.querySelector('#linha3');
const home =document.querySelector('#home')
const sobre =document.querySelector('#sobre')
const skills =document.querySelector('#skills')
const projetos =document.querySelector('#projetos')

burguer.addEventListener('click',()=>{
    menu.classList.toggle('nav-active');
    linha1.classList.toggle('linha1-active')
    linha2.classList.toggle('linha2-active')
    linha3.classList.toggle('linha3-active')
});
home.addEventListener('click' ,()=>{
    menu.classList.toggle('nav-active');
    linha1.classList.toggle('linha1-active')
    linha2.classList.toggle('linha2-active')
    linha3.classList.toggle('linha3-active')
    const targetId = home.getAttribute('href'); // Obtém o ID do alvo

  // Obtém o elemento alvo
  const targetElement = document.querySelector(targetId);
});
sobre.addEventListener('click' ,()=>{
    menu.classList.toggle('nav-active');
    linha1.classList.toggle('linha1-active')
    linha2.classList.toggle('linha2-active')
    linha3.classList.toggle('linha3-active')
    const targetId = home.getAttribute('href'); // Obtém o ID do alvo

  // Obtém o elemento alvo
  const targetElement = document.querySelector(targetId);
});
skills.addEventListener('click' ,()=>{
    menu.classList.toggle('nav-active');
    linha1.classList.toggle('linha1-active')
    linha2.classList.toggle('linha2-active')
    linha3.classList.toggle('linha3-active')
    const targetId = home.getAttribute('href'); // Obtém o ID do alvo

  // Obtém o elemento alvo
  const targetElement = document.querySelector(targetId);
});
projetos.addEventListener('click' ,()=>{
    menu.classList.toggle('nav-active');
    linha1.classList.toggle('linha1-active')
    linha2.classList.toggle('linha2-active')
    linha3.classList.toggle('linha3-active')
    const targetId = home.getAttribute('href'); // Obtém o ID do alvo

  // Obtém o elemento alvo
  const targetElement = document.querySelector(targetId);
});


window.onscroll = function(){
    scrollFunciton();
    scrollFunciton1();
    scrollFunciton2();
};

function scrollFunciton(){
    if(document.documentElement.scrollTop >1200){
        document.getElementById("idFormacao").classList.add("conteinerFormacaoOn");
    }else{

    }
}
function scrollFunciton1(){
    if(document.documentElement.scrollTop >2000){
        document.getElementById("idProfissional").classList.add("conteinerProfissionalOn");
    }else{

    }
}
function scrollFunciton2(){
    if(document.documentElement.scrollTop >2200){
        document.getElementById("idProjetos").classList.add("conteinerProjetosOn");
    }else{

    }
}


