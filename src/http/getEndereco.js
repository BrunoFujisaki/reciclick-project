export async function getEndereco(cep) {
    if (!cep) {
        alert('Digite um CEP!');
        return;
    }
    try {
        // 🔍 Consulta ViaCEP para transformar o CEP em endereço
        const viaCepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const viaCepData = await viaCepResponse.json();

        if (viaCepData.erro) {
          alert('CEP não encontrado no ViaCEP!');
          return;
        }

        const endereco = `${viaCepData.logradouro}, ${viaCepData.bairro}, ${viaCepData.localidade}, ${viaCepData.uf}, Brasil`;

        // 🌍 Consulta Nominatim para obter as coordenadas
        const geocodeResponse = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(endereco)}`
        );

        const geocodeData = await geocodeResponse.json();

        if (geocodeData.length === 0) {
          alert('Não foi possível encontrar as coordenadas!');
          return;
        }

        return geocodeData;

        
      } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao buscar o CEP.');
      }
}