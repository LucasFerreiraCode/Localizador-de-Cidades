var map = L.map('map').setView([-15.7801, -47.9292], 4); // Posição inicial: Brasília

// Adicionar o tile do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
}).addTo(map);

const citiesCoordinates = {
    "Rio Branco": [-9.97499, -67.8243],
    "Cruzeiro do Sul": [-7.6279, -72.6756],
    "Sena Madureira": [-9.0651, -68.6571],
    "Maceió": [-9.6658, -35.735],
    "Arapiraca": [-9.75219, -36.6618],
    "Palmeira dos Índios": [-9.40568, -36.6327],
    "Macapá": [0.0389, -51.0664],
    "Santana": [0.0454, -51.1729],
    "Oiapoque": [3.84076, -51.8331],
    "Manaus": [-3.11903, -60.0217],
    "Parintins": [-2.6283, -56.7355],
    "Itacoatiara": [-3.1434, -58.4447],
    "Salvador": [-12.9714, -38.5014],
    "Feira de Santana": [-12.2664, -38.9663],
    "Vitória da Conquista": [-14.8661, -40.8394],
    "Fortaleza": [-3.71722, -38.5434],
    "Juazeiro do Norte": [-7.21306, -39.3156],
    "Sobral": [-3.68611, -40.3497],
    "Brasília": [-15.7801, -47.9292],
    "Vitória": [-20.3155, -40.3128],
    "Vila Velha": [-20.3479, -40.2941],
    "Serra": [-20.1286, -40.3072],
    "Goiânia": [-16.6869, -49.2648],
    "Aparecida de Goiânia": [-16.8198, -49.2469],
    "Anápolis": [-16.3281, -48.9534],
    "São Luís": [-2.53874, -44.2825],
    "Imperatriz": [-5.51847, -47.4777],
    "Caxias": [-4.8584, -43.3567],
    "Cuiabá": [-15.601, -56.0974],
    "Várzea Grande": [-15.6462, -56.1322],
    "Rondonópolis": [-16.4673, -54.6372],
    "Campo Grande": [-20.4697, -54.6201],
    "Dourados": [-22.2231, -54.812],
    "Três Lagoas": [-20.7847, -51.7007],
    "Belo Horizonte": [-19.9167, -43.9345],
    "Uberlândia": [-18.9128, -48.2755],
    "Contagem": [-19.9386, -44.0539],
    "Belém": [-1.45502, -48.5024],
    "Ananindeua": [-1.36405, -48.3743],
    "Santarém": [-2.43849, -54.6996],
    "João Pessoa": [-7.11532, -34.861],
    "Campina Grande": [-7.23056, -35.8811],
    "Patos": [-7.01743, -37.2745],
    "Curitiba": [-25.4278, -49.2731],
    "Londrina": [-23.3103, -51.1628],
    "Maringá": [-23.4205, -51.9333],
    "Recife": [-8.04756, -34.877],
    "Jaboatão dos Guararapes": [-8.11205, -35.0149],
    "Olinda": [-7.99323, -34.8424],
    "Teresina": [-5.08921, -42.8016],
    "Parnaíba": [-2.90585, -41.7754],
    "Picos": [-7.07721, -41.4664],
    "Rio de Janeiro": [-22.9068, -43.1729],
    "Niterói": [-22.8832, -43.1034],
    "Duque de Caxias": [-22.7858, -43.3049],
    "Natal": [-5.79448, -35.211],
    "Mossoró": [-5.18784, -37.3443],
    "Parnamirim": [-5.91594, -35.2628],
    "Porto Alegre": [-30.0331, -51.23],
    "Caxias do Sul": [-29.1629, -51.1797],
    "Pelotas": [-31.7641, -52.3371],
    "Porto Velho": [-8.76194, -63.9039],
    "Ji-Paraná": [-10.8777, -61.9329],
    "Ariquemes": [-9.91399, -63.0324],
    "Boa Vista": [2.81972, -60.6714],
    "Rorainópolis": [-0.93999, -60.4284],
    "Caracaraí": [1.82773, -61.1304],
    "Florianópolis": [-27.5954, -48.548],
    "Joinville": [-26.3044, -48.8487],
    "Blumenau": [-26.9185, -49.0661],
    "São Paulo": [-23.5505, -46.6333],
    "Campinas": [-22.9053, -47.0659],
    "Santos": [-23.9608, -46.3339],
    "Aracaju": [-10.9472, -37.0731],
    "Nossa Senhora do Socorro": [-10.8468, -37.123],
    "Itabaiana": [-10.6826, -37.427],
    "Palmas": [-10.184, -48.3336],
    "Araguaína": [-7.19238, -48.2044],
    "Gurupi": [-11.7279, -49.068],
};

// // Inicializar o mapa
// const map = L.map('map').setView([-15.7801, -47.9292], 4); // Posição inicial (Brasília)

// Adicionar a camada do mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Função para mover o mapa para as coordenadas selecionadas
document.getElementById('show-map').addEventListener('click', function () {
    const selectedCity = document.getElementById('cidades').value;

    if (selectedCity && citiesCoordinates[selectedCity]) {
        const [lat, lon] = citiesCoordinates[selectedCity];
        map.setView([lat, lon], 12); // Centraliza o mapa na cidade selecionada
    } else {
        alert('Por favor, selecione uma cidade válida.');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map').setView([-15.7801, -47.9292], 4); // Posição inicial em Brasília

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);
});

document.getElementById('map').addEventListener('click', function() {
    const city = document.getElementById('cidades').value;
    if (city && citiesCoordinates[city]) {
        const [lat, lng] = citiesCoordinates[city];
        map.setView([lat, lng], 10);
    }
});