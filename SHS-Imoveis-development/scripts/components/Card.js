import { formatarPreco } from "../utils/helpers.js";

export function criarCard(imovel) {
    // Container principal
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    cardContainer.addEventListener('click', () => {
    window.location.href = `detalhes.html?id=${imovel.id}`;
    });
    const cardImage = document.createElement('img');
    cardImage.src = imovel.imagemPrincipal;
    cardImage.classList.add(`card-image`)

    // Tipo de card (ex: Venda)
    const cardType = document.createElement('div');
    cardType.classList.add('card-type');
    cardType.classList.add(`card-type-${imovel.finalidade}`);

    const pTipo = document.createElement('p');
    pTipo.textContent = imovel.finalidade;
    cardType.appendChild(pTipo);

    // Conteúdo do card
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    // Título
    const cardTitle = document.createElement('p');
    cardTitle.classList.add('card-tittle');
    cardTitle.append(`${imovel.id} - ${imovel.titulo}`);

    // Recursos (quartos, vagas, área)
    const cardFeatures = document.createElement('div');
    cardFeatures.classList.add('card-features');

    // Quartos
    const featureBeds = document.createElement('div');
    featureBeds.classList.add('card-features-beds');
    const border = document.createElement('div');
    border.classList.add('border');
    const iconBed = document.createElement('i');
    iconBed.setAttribute('data-lucide', 'bed-single');
    const pBeds = document.createElement('p');
    pBeds.textContent = imovel.quartos.toString();
    featureBeds.append(iconBed, pBeds, border);
    cardFeatures.append(featureBeds);


    // Vagas
    const featureCars = document.createElement('div');
    featureCars.classList.add('card-features-cars');
    const borderCar = document.createElement('div');
    borderCar.classList.add('border');
    const iconCar = document.createElement('i');
    iconCar.setAttribute('data-lucide', 'car-front');
    const pCar = document.createElement('p');
    pCar.textContent = imovel.quartos.toString();
    featureCars.append(iconCar, pCar, borderCar);
    cardFeatures.append(featureCars);
  

    // Área
    const featureArea = document.createElement('div');
    featureArea.classList.add('card-features-area');
    const iconArea = document.createElement('i');
    iconArea.setAttribute('data-lucide', 'ruler');;
    const areaText = document.createTextNode(imovel.area + 'm²');
    featureArea.append(iconArea, areaText);
    cardFeatures.append(featureArea);


    // Localização
    const cardLocalization = document.createElement('div');
    cardLocalization.classList.add('card-localization');
    const iconLocation = document.createElement('i');
    iconLocation.setAttribute('data-lucide', 'map-pin-house');
    const pLocal = document.createElement('p');
    pLocal.textContent = imovel.endereco.bairro;
    cardLocalization.append(iconLocation, pLocal);


    // Valor
    const cardValue = document.createElement('div');
    cardValue.classList.add('card-value');
    const iconValue = document.createElement('div');
    iconValue.classList.add('icon-value');
    const pValor = document.createElement('p');
    pValor.textContent = `${formatarPreco(imovel.preco)}`;
    cardValue.append(iconValue, pValor);

    // Montando o card
    cardContent.append(cardTitle, cardFeatures, cardLocalization, cardValue);
    cardContainer.append(cardImage, cardType, cardContent);
    
    return cardContainer;
}

export function createCardOutstanding(imovel) {
  const slide = document.createElement('div')
  slide.classList.add("swiper-slide")
  slide.classList.add("swiper-card-outsanting")
  slide.appendChild(criarCard(imovel))

  return slide
}