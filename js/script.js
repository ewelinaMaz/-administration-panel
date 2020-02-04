var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    datasets: [{
      label: 'Signups',
      data: [354, 204, 235, 358, 402, 213, 421, 326, 369, 198],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth: 0.2
    }, {
      label: 'FTD',
      data: [419, 189, 286, 312, 380, 203, 390, 387, 420, 256],
      backgroundColor: [
        'rgba(128, 106, 106, 0.2)',
        'rgba(128, 106, 106, 0.2)',
        'rgba(128, 106, 106, 0.2)',
        'rgba(128, 106, 106, 0.2)',
        'rgba(128, 106, 106, 0.2)',
        'rgba(128, 106, 106, 0.2)',
        'rgba(128, 106, 106, 0.2)',
        'rgba(128, 106, 106, 0.2)',
        'rgba(128, 106, 106, 0.2)',
        'rgba(128, 106, 106, 0.2)',
      ],
      borderColor: [
        'rgba(128, 106, 106, 1)',
        'rgba(128, 106, 106, 1)',
        'rgba(128, 106, 106, 1)',
        'rgba(128, 106, 106, 1)',
        'rgba(128, 106, 106, 1)',
        'rgba(128, 106, 106, 1)',
        'rgba(128, 106, 106, 1)',
        'rgba(128, 106, 106, 1)',
        'rgba(128, 106, 106, 1)',
        'rgba(128, 106, 106, 1)',
      ],
      borderWidth: 0.2
    }]
  },
  options: {
    legend: {
      display: true,
      labels: {
        usePointStyle: 'true',
        fontFamily: '$brand-font',
      }
    },
    layout: {
      padding: {
        left: 60,
        right: 60,
        top: 20,
        bottom: 20
      }
    },
    title: {
      display: true,
      text: 'Earnings chart',
      fontStyle: 'bold',
      fontSize: 24,
      fontFamily: '$brand-font',
      fontColor: '$font-color',
    },
    animation: {
      easing: 'easeInOutBack',
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
