export async function fetchImoveis() {
  try {
    const response = await fetch('data/db.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao carregar os imóveis:', error);
    return [];
  }
}
