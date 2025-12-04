const botaoMusica = document.getElementById('botao-musica');
const audio = document.getElementById('audio-musica');
const botaoMenu = document.getElementById('botao-menu');
const barraLateral = document.getElementById('barra-lateral');

botaoMusica.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    botaoMusica.textContent = '⏸️ Pausar Música';
  } else {
    audio.pause();
    botaoMusica.textContent = '🎵 Tocar Música';
  }
});

botaoMenu.addEventListener('click', function() {
  barraLateral.classList.toggle('aberta');
});