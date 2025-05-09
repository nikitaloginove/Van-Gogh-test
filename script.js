const cardsContainer = document.querySelector('.main__cards-block');
const cardTemplate = document.querySelector('.main__cards-block-item');

const cards = [
  {
    name: 'Встраиваемый светильник Markt',
    link: './images/markt.png',
    price: '3 490 ₽',
    oldPrice: '5 060 ₽'
  },
  {
    name: 'Линейный светильник ARG',
    link: './images/arg.png',
    price: '6 700 ₽',
    oldPrice: ''
  },
  {
    name: 'Сведодиодный светильник',
    link: './images/lighter.png',
    price: '5 060 ₽',
    oldPrice: '6 060 ₽'
  },
  {
    name: 'Встраиваемый светильник Markt',
    link: './images/markt.png',
    price: '3 490 ₽',
    oldPrice: ''
  },
  {
    name: 'Линейный светильник ARG',
    link: './images/arg.png',
    price: '6 700 ₽',
    oldPrice: '6 060 ₽'
  },
  {
    name: 'Сведодиодный светильник',
    link: './images/lighter.png',
    price: '5 060 ₽',
    oldPrice: ''
  },
  {
    name: 'Встраиваемый светильник Markt',
    link: './images/markt.png',
    price: '3 490 ₽',
    oldPrice: '6 060 ₽'
  },
  {
    name: 'Линейный светильник ARG',
    link: './images/arg.png',
    price: '6 700 ₽',
    oldPrice: ''
  },
];

cardsContainer.innerHTML = '';

function addCard(cardData, index) {
  const cardElement = cardTemplate.cloneNode(true);

  const imageElement = cardElement.querySelector('.main__cards-block-item-img');
  imageElement.src = cardData.link;
  imageElement.alt = cardData.name;

  const titleElement = cardElement.querySelector('.main__cards-block-item-title');
  titleElement.textContent = cardData.name;

  const priceElement = cardElement.querySelector('.price-new');
  priceElement.textContent = cardData.price;

  const oldPriceElement = cardElement.querySelector('.old-price');
  oldPriceElement.textContent = cardData.oldPrice;

  const saleTagElement = cardElement.querySelector('.sale-tag');
 
  if (index % 2 === 0) {
    saleTagElement.style.display = 'inline';
    saleTagElement.textContent = 'Акция';
  } else {
    saleTagElement.style.display = 'none';
  }

  if (cardData.oldPrice === '') {
    priceElement.classList.add('price')
    priceElement.classList.remove('price-new')
  }

  cardsContainer.appendChild(cardElement);
}

cards.forEach((cardData, index) => addCard(cardData, index));