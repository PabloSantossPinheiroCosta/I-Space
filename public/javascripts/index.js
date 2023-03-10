//modal

let modal;

function showModal(event, cardId) {
  event.preventDefault();
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');
  const modalValor = document.getElementById('modal-valor');
  const modalMore = document.getElementById('modal-more')
  
  if (cardId === 1) {
    const h3 = document.getElementById('title-tendencia1');
    const img = document.getElementById('tendencia_imagem1');

    modalImage.src = img.src;
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent =
    'O Apple iPhone 14 é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização. A tela de 6.1 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2532x1170 pixel. As funcionalidades oferecidas pelo Apple iPhone 14 são muitas e top de linha. ';
    // modalValor.textContent  = '299,99R$';
    modalMore.innerHTML = '<a href="#">Saiba mais</a>';
 
  } 
  
  else if (cardId === 2) {
    const h3 = document.getElementById('title-tendencia2');
    const img = document.getElementById('tendencia_imagem2');

    modalImage.src = img.src;
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent = 
    'O Apple iPhone 14 é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização. A tela de 6.1 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2532x1170 pixel. As funcionalidades oferecidas pelo Apple iPhone 14 são muitas e top de linha. ';
    // modalValor.textContent  = '199,99R$'
    modalMore.innerHTML = '<a href="#">Saiba mais</a>';

  } 
  
  else if (cardId === 3) {
    const h3 = document.getElementById('title-tendencia3');
    const img = document.getElementById('tendencia_imagem3');

    modalImage.src = img.src;
    modalTitle.textContent = h3.textContent;
    modalDescription.textContent = 
    'O Apple iPhone 14 é um smartphone iOS com características inovadoras que o tornam uma excelente opção para qualquer tipo de utilização. A tela de 6.1 polegadas coloca esse Apple no topo de sua categoria. A resolução também é alta: 2532x1170 pixel. As funcionalidades oferecidas pelo Apple iPhone 14 são muitas e top de linha. ';
    // modalValor.textContent  = '99,99R$'
    modalMore.innerHTML = '<a href="#l">Saiba mais</a>';

  }

  //tornando o modal visivel
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}

//agora esconder o modal
function hideModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

//evento de janela, se o usuario clicar fora da janela do modal, ele sera fechado
window.addEventListener('click', function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});




 
//  secao de destaque
 // Obtém a lista de todos os card de produtos
 const card_destaque = document.querySelectorAll('.destaque-card');

 // Oculta todos os card, exceto os 5 primeiros
 for (let i = 4; i < card_destaque.length; i++) {
  card_destaque[i].style.display = 'none';
 }

 // Adiciona um evento de clique ao botão de avançar
 document.getElementById('btn-next').addEventListener('click', function() {
   // Oculta os 4 primeiros card
   for (let i = 0; i < 4; i++) {
    card_destaque[i].style.display = 'none';
   }
   // Mostra os próximos 4 card
   for (let i = 4; i < 8; i++) {
    card_destaque[i].style.display = 'inline-block';
 
   }
   
 });

 // Adiciona um evento de clique ao botão de voltar
 document.getElementById('btn-prev').addEventListener('click', function() {
   // Oculta os últimos 4 card
   for (let i = 4; i < 8; i++) {
    card_destaque[i].style.display = 'none';
   }
   // Mostra os 4 card anteriores
   for (let i = 0; i < 4; i++) {
    card_destaque[i].style.display = 'inline-block';
   }
 });

