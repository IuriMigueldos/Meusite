const botaoMenu = document.getElementById('botao-menu');
const barraLateral = document.getElementById('barra-lateral');
const home = document.getElementById('home');
const tela = document.getElementById('conteudo');

botaoMenu.addEventListener('click', function() {
  barraLateral.classList.toggle('aberta');
});

document.querySelectorAll('.botao')[1].addEventListener('click', () => {
  tela.innerHTML = `
    <div style="text-align: center;">
    <h2 style="color:white;">Home</h2>
    <p><span style="color: pink;">cute</span></p>
    <img src="imagens/1.jpeg?v=2" alt="lucky loco">
    <p>O Lucky nasceu em 2016</p>
    </div>
  `;
});

document.querySelectorAll('.botao')[2].addEventListener('click', () => {
  tela.innerHTML = `
    <div style="text-align: center;">
    <h2 style="color:white;">Sobre</h2>
    <p style="color:white;">Este site foi criado por Iuri para mostrar o Lucky e treinar programação.</p>
    </div>
  `;
});

document.querySelectorAll('.botao')[3].addEventListener('click', () => {
  tela.innerHTML = `
    <div style="text-align: center;">
    <h2 style="color:white;">Galeria</h2>
    <p style="color:white;">Em breve, uma galeria de fotos do Lucky estará disponível aqui!</p>
    </div>
  `;
});

document.querySelectorAll('.botao')[4].addEventListener('click', () => {
  tela.innerHTML = `
    <div style="text-align: center;">
    <h2 style="color:white;">Créditos</h2>
    <p style="color:white;">Imagens do Lucky tiradas por Iuri. Música de fundo: "Cute" por Bensound.</p>
    </div>
  `;
});

// lista de músicas (coloque os nomes certinhos)
const musicas = [
  "music/Musica1.mp3",
  "music/Musica2.mp3",
  "music/Musica3.mp3"
];

let index = 0;

// seleciona os elementos
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const voltarBtn = document.getElementById("voltar");
const avancarBtn = document.getElementById("avancar");
const musicaAtual = document.getElementById("musica-atual");

// carrega a música atual
function carregarMusica() {
  audio.src = musicas[index];
  musicaAtual.textContent = "Tocando: " + musicas[index];
  audio.play();
  playBtn.textContent = "⏸️";
}

// botão play/pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
});

// próxima música
avancarBtn.addEventListener("click", () => {
  index++;
  if (index >= musicas.length) index = 0;
  carregarMusica();
});

// música anterior
voltarBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = musicas.length - 1;
  carregarMusica();
});

// inicializa
carregarMusica();
