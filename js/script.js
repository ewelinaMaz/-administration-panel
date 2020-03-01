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
    }]
  },
  options: {
    responsive: 'true',
    maintainAspectRatio: 'false',
    legend: {
      display: true,
      labels: {
        usePointStyle: 'true',
        fontFamily: '$brand-font',
      }
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

function toggleMenu(visible) {
  document.querySelector('.menu').classList.toggle('hide', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu();
});

function openForm(visible) {
  document.querySelector('.form-wrapper').classList.toggle('active', visible);
}

document.querySelector('.popup').addEventListener('click', function(e) {
  e.preventDefault();
  openForm();
  toggleMenu();
});

document.querySelector('.js-close-form', '.submit').addEventListener('click', function(e) {
  e.preventDefault();
  openForm();
  toggleMenu();
});


function openModal() {
  document.querySelector('.overlay').classList.add('show');
  document.querySelector('.modal').classList.add('show');
}
document.querySelector('.modal_1').addEventListener('click', function(e) {
  e.preventDefault();
  openModal();
});

function closeModal() {
  document.querySelector('.overlay').classList.remove('show');
  document.querySelector('.modal').classList.remove('show');
}

document.querySelectorAll('.js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector('.overlay').addEventListener('click', function(e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener('keyup', function(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});
