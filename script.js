document.getElementById('startBtn').addEventListener('click', () => {
  window.location.hash = '#contato';
  document.querySelector('#leadForm input[name=name]').focus();
});

document.getElementById('demoBtn').addEventListener('click', () => {
  alert('Demo rápida: veja um painel com métricas, calendário e propostas de marcas.');
});

document.getElementById('leadForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada! Obrigado pelo contato com a Feedmaster.');
  e.target.reset();
});

