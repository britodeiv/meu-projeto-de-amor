function openLetter(letterId) {
    const letterText = {
        letter1: "Minha garota queria que soubesse  que te amo , amo teus olhos amo teus cabelos você me encanta em cada detalhe com sua beleza. Cada um dos nossos momentos me  fazem ter cada vez mais certeza de que eu te quero e te quero muito e me dão vontade de te ter para sempre em meus dias em meus caminhos e em minha vida , te amo .",
        letter2: "Onde quer que esteja, espero que saiba que apesar de tudo eu te amo e peço para que nunca duvide disso, pois essa é minha única verdade, é minha única razão.",
        letter3: "Eu gosto de você, e gosto de ficar com você, meu riso é tão feliz contigo, a minha melhor amiga é o meu amor.",
        letter4: "Cada momento ao seu lado é como um sonho. Te amo mais do que posso expressar...",

        // Adicione mais cartas conforme necessário
    };
    document.getElementById('letterText').innerText = letterText[letterId];
    document.getElementById('letterPopup').style.display = 'block';
}
function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function closeLetter() {
    document.getElementById('letterPopup').style.display = 'none';
}


const musicList = [
    'assets/musica1.mp3',
    'assets/musica2.mp3',
    'assets/musica3.mp3',
    'assets/musica4.mp3',
    'assets/musica5.mp3'

];

let currentMusicIndex = 0;
const audio = new Audio(musicList[currentMusicIndex]);

function toggleMusic() {
    const musicButton = document.querySelector('#bg-music-control button');
    if (audio.paused) {
        audio.play();
        musicButton.innerText = "Pausar Música";
    } else {
        audio.pause();
        musicButton.innerText = "Tocar Música";
    }
}

function nextMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
    audio.src = musicList[currentMusicIndex];
    audio.play();
    document.querySelector('#bg-music-control button').innerText = "Pausar Música";
}


audio.addEventListener('ended', nextMusic);


function toggleMode() {
    document.body.classList.toggle('dark-mode');
}

function startCountdown() {
    // Atualizando a data para 28 de dezembro de 2025
    const countdownDate = new Date("2025-12-28T00:00:00").getTime();
    const countdownElement = document.getElementById("countdown-timer");

    setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "É hoje!";
        }
    }, 1000);
}

function startTogetherTime() {
    const startDate = new Date("2023-12-28T00:00:00").getTime();
    const togetherElement = document.getElementById("time-together");



    setInterval(() => {
        const now = new Date().getTime();
        const distance = now - startDate;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        togetherElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    startTogetherTime();
});
