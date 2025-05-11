// utils/filter.js
export function filtrarImoveis(imoveis, criterio) {
  // Exemplo de filtro futuro
  return imoveis.filter(imovel => imovel.bairro === criterio);
}
