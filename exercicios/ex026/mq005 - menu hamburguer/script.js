function clickMenu() { 
    if (itens.style.display == 'block') { 
        itens.style.display = 'none'
    }
    else { 
        itens.style.display ='block'
    }   
}

/* window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      itens.style.display = 'block'; // força visível no desktop
    } else {
      itens.style.display = 'none'; // esconde em telas menores
    }
  }); 
  
  Função anonima entregue pelo ChatGPT

  */


/* function ajustarMenu() { 
    if(window.innerWidth >= 768){
        itens.style.display = 'block'
    } else { 
        itens.style.display = 'none'
    }
}

window.addEventListener('resize', ajustarMenu) 

função nomeada que o chat me mostrou.

*/

function mudouTamanho(){ 
    if (window.innerWidth >= 768){
        itens.style.display = 'block'
    } else { 
        itens.style.display = 'none'
    }
}

/* Função escrita pelo guanabara no curso, praticamente mesma coisa da do chat porém ele chama a função pelo body em vez de adicionar o window eventlistener  */