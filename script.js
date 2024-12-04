const API_URL = 'https://dolarapi.com/v1/dolares/blue';

// DOM
const compraEl = document.getElementById('compra');
const ventaEl = document.getElementById('venta');
const fechaEl = document.getElementById('fecha');
const refreshButton = document.getElementById('refresh');

// Obtener los datos de la API
async function fetchDolarBlue() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error al obtener los datos de la API');
    }
    const data = await response.json();
    updateUI(data);
  } catch (error) {
    console.error('Error:', error);
    compraEl.textContent = 'Error';
    ventaEl.textContent = 'Error';
    fechaEl.textContent = 'Error';
  }
}

// Actualizar la interfaz
function updateUI(data) {
  compraEl.textContent = data.compra.toLocaleString() + ' ARS';
  ventaEl.textContent = data.venta.toLocaleString() + ' ARS';
  fechaEl.textContent = new Date(data.fechaActualizacion).toLocaleString();
}

// Actualizar los datos
refreshButton.addEventListener('click', fetchDolarBlue);

// Cargar datos al iniciar
fetchDolarBlue();
