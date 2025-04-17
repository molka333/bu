const btn = document.getElementById('screamer-btn');
const modal = document.getElementById('screamer-modal');
const closeBtn = document.getElementById('close-btn');
const sound = document.getElementById('screamer-sound');

btn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  sound.play();
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
  sound.pause();
  sound.currentTime = 0;
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) { // клик вне содержимого
    modal.classList.add('hidden');
    sound.pause();
    sound.currentTime = 0;
  }
});