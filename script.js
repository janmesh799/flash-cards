
let current = 0;
let showed = 0;
let total = 0;
let shuffled = false;
let flashcardsCopy = [...flashcards];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function showCard(index) {
  if (index >= flashcardsCopy.length) {
    document.querySelector('.card').innerHTML = `
      <h2>All flashcards reviewed!</h2>
      <button onclick="restart()">Restart</button>
    `;
    return;
  }
  showed = index + 1;
  document.getElementById('question').textContent = flashcardsCopy[index].q;
  document.getElementById('answer').textContent = flashcardsCopy[index].a;
  document.getElementById('answer').style.display = 'none';
  document.getElementById('count').textContent = showed + '/' + total;
}

function toggleAnswer() {
  const answerDiv = document.getElementById('answer');
  answerDiv.style.display = answerDiv.style.display === 'none' ? 'block' : 'none';
}

function nextCard() {
  current++;
  showCard(current);
}

function toggleShuffle() {
  shuffled = !shuffled;
  document.getElementById('shuffleBtn').textContent = shuffled ? 'Shuffle: ON' : 'Shuffle: OFF';
  restart();
}

function restart() {
  current = 0;
  showed = 0;
  flashcardsCopy = [...flashcards];
  if (shuffled) {
    shuffleArray(flashcardsCopy);
  }
  total = flashcardsCopy.length;
  document.querySelector('.card').innerHTML = `
    <h3 id="count"></h3>
    <div class="question" id="question"></div>
    <div class="answer" id="answer"></div>
    <button onclick="toggleAnswer()">Show Answer</button>
    <button onclick="nextCard()" style="margin-left: 10px;">Next</button>
  `;
  showCard(current);
}

window.onload = () => {
  const shuffleBtn = document.createElement('button');
  shuffleBtn.id = 'shuffleBtn';
  shuffleBtn.textContent = 'Shuffle: OFF';
  shuffleBtn.onclick = toggleShuffle;
  shuffleBtn.style.marginBottom = '20px';
  document.body.insertBefore(shuffleBtn, document.body.firstChild);
  restart();
};
