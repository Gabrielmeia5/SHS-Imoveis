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
    const spanId = document.createElement('span');
    spanId.classList.add('card-id');
    spanId.textContent = imovel.id;
    cardTitle.appendChild(spanId);
    cardTitle.append(` - ${imovel.titulo}`);

    // Recursos (quartos, vagas, área)
    const cardFeatures = document.createElement('div');
    cardFeatures.classList.add('card-features');

    // Quartos
    const featureBeds = document.createElement('div');
    featureBeds.classList.add('feature-beds');
    const iconBed = document.createElement('i');
    iconBed.classList.add('fa-solid', 'fa-bed');
    const pBeds = document.createElement('p');
    pBeds.textContent = imovel.quartos.toString();
    featureBeds.append(iconBed, pBeds);

    // Vagas
    const featureCars = document.createElement('div');
    featureCars.classList.add('features-cars');
    const iconCar = document.createElement('i');
    iconCar.classList.add('fa-solid', 'fa-car');
    const pCars = document.createElement('p');
    pCars.textContent = imovel.vagasGaragem.toString();
    featureCars.append(iconCar, pCars);

    // Área
    const featureArea = document.createElement('div');
    featureArea.classList.add('features-area');

    const iconArea = document.createElement('i');
    iconArea.classList.add('fa-solid', 'fa-ruler-vertical');

    const pArea = document.createElement('p');
    const areaText = document.createTextNode(imovel.area + ' ');
    const spanM2 = document.createElement('span');
    spanM2.textContent = 'm²';

    pArea.append(areaText, spanM2);
    featureArea.append(iconArea, pArea);

    // Localização
    const cardLocalization = document.createElement('div');
    cardLocalization.classList.add('card-localization');
    const iconLocation = document.createElement('i');
    iconLocation.classList.add('fa-solid', 'fa-location-dot');
    const pLocal = document.createElement('p');
    pLocal.textContent = imovel.endereco.bairro;
    cardLocalization.append(iconLocation, pLocal);

    // Valor
    const cardValue = document.createElement('div');
    cardValue.classList.add('card-value');
    const iconValue = document.createElement('div');
    iconValue.classList.add('icon-value');
    const pValor = document.createElement('p');
    pValor.textContent = `R$ ${formatarPreco(imovel.preco)}`;
    cardValue.append(iconValue, pValor);

    // Montando o card
    cardContent.append(cardTitle, cardFeatures, cardLocalization, cardValue);
    cardContainer.append(cardImage, cardType, cardContent);



    console.log(cardContainer)
    return cardContainer;
}

export function createCardOutstanding(imovel) {
  const slide = document.createElement('div')
  slide.classList.add("swiper-slide")
  slide.classList.add("swiper-card-outsanting")
  slide.appendChild(criarCard(imovel))

  return slide
}