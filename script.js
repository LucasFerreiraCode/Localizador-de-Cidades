const cidadesPorEstado = {
    SP: [
        { nome: 'São Paulo', lat: -23.5505, lng: -46.6333 },
        { nome: 'Campinas', lat: -22.9099, lng: -47.0626 }
    ],
    RJ: [
        { nome: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
        { nome: 'Niterói', lat: -22.8832, lng: -43.1034 }
    ]
};

const estadoSelect = document.getElementById('estado');
const cidadeSelect = document.getElementById('cidade');
const mapDiv = document.getElementById('map');
let map, marker;

// Inicialize o mapa (coordenadas iniciais podem ser do Brasil)
map = L.map('map').setView([-14.235, -51.9253], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Atualizar as cidades com base no estado selecionado
estadoSelect.addEventListener('change', function () {
    cidadeSelect.innerHTML = '<option value="">Selecione a Cidade</option>';
    const cidades = cidadesPorEstado[this.value] || [];
    cidades.forEach(cidade => {
        const option = document.createElement('option');
        option.value = JSON.stringify(cidade);
        option.textContent = cidade.nome;
        cidadeSelect.appendChild(option);
    });
});

// Mostrar o local no mapa ao clicar no botão
document.getElementById('show-map').addEventListener('click', function () {
    const cidade = JSON.parse(cidadeSelect.value);
    if (cidade) {
        if (marker) {
            marker.remove();
        }
        map.setView([cidade.lat, cidade.lng], 12);
        marker = L.marker([cidade.lat, cidade.lng]).addTo(map)
            .bindPopup(`${cidade.nome}`).openPopup();
    } else {
        alert('Por favor, selecione uma cidade.');
    }
});