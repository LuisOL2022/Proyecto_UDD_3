import getEconomicIndicators from './indicadores-api.js';

const dolarPerDay = ( await getEconomicIndicators() ).serie

const indicatorsCanvasNode = document.getElementById( 'indicators' )

const labels = dolarPerDay.map( dolar => new Date( dolar.fecha ).toLocaleDateString() ).reverse()
const data = {
  labels: labels,
  datasets: [ {
    label: 'dolar por día',
    data: dolarPerDay.map( dolar => dolar.valor ).reverse(),
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  } ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
}

const graph = new Chart( indicatorsCanvasNode, config )

var footer = document.getElementById('footer-container');

footer.addEventListener('mouseover', function() {
  footer.classList.add('footer-background');
});

footer.addEventListener('mouseout', function() {
  footer.classList.remove('footer-background');
});
