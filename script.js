let current = 0;
let showed = 0;
let shuffled = false;
let flashcardsCopy = [...flashcards];
let viewedQuestions = new Set();
let viewedMap = new Map();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function updateViewedList(q, index) {
  if (!viewedQuestions.has(q)) {
    viewedQuestions.add(q);
    viewedMap.set(q, index);
    const list = document.getElementById('viewedList');
    const li = document.createElement('li');
    li.textContent = q;
    li.style.cursor = 'pointer';
    li.onclick = () => {
      current = viewedMap.get(q);
      showCard(current);
    };
    list.appendChild(li);
  }
}

function showCard(index) {
  if (index >= flashcardsCopy.length) {
    document.querySelector('.card').innerHTML = `
      <h2>All flashcards reviewed!</h2>
      <button onclick='restart()'>Restart</button>
    `;
    return;
  }
  const card = flashcardsCopy[index];
  showed = index + 1;
  document.getElementById('question').textContent = card.q;
  document.getElementById('answer').textContent = card.a;
  document.getElementById('answer').style.display = 'none';
  document.getElementById('count').textContent = showed + '/' + flashcardsCopy.length;
  updateViewedList(card.q, index);
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
  viewedQuestions.clear();
  viewedMap.clear();
  flashcardsCopy = [...flashcards];
  if (shuffled) shuffleArray(flashcardsCopy);
  const list = document.getElementById('viewedList');
  if (list) list.innerHTML = '';
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
  restart();
};
