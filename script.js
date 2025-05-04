let selfScore, cpuScore;

function renderScore() {
  function renderIndScore(player) {
    const scoreDisplay = document.getElementById(`${player}-points`);
    const currentScore = player === 'self' ? selfScore : cpuScore;

    scoreDisplay.innerHTML = '';

    for (i = 1; i <= 5; i++) {
      const point = document.createElement('div');
      point.classList.add('point');
      point.classList.add(i <= currentScore ? 'scored' : null);

      if (player === 'self') scoreDisplay.appendChild(point);
      if (player === 'cpu') scoreDisplay.prepend(point);
    }
  }

  renderIndScore('self');
  renderIndScore('cpu');
}

function getResult(selfChoice, cpuChoice) {
  if (
    (selfChoice === 'r' && cpuChoice === 's') ||
    (selfChoice === 'p' && cpuChoice === 'r') ||
    (selfChoice === 's' && cpuChoice === 'p')
  ) {
    return 'self';
  } else if (selfChoice === cpuChoice) {
    return 'tie';
  } else {
    return 'cpu';
  }
}

function getCpuChoice() {
  const gameChoices = 'rps';
  return gameChoices[Math.floor(Math.random() * 3)];
}

function playRound() {
  const board = document.getElementById('board');

  board.innerHTML = `
    <div class="display-message" id="display-message">CHOOSE YOUR PLAY:</div>

    <div class="play-icons" id="play-icons">
        <button class="icon r-icon"></button>
        <button class="icon p-icon"></button>
        <button class="icon s-icon"></button>
        <div class="button-descriptor">ROCK</div>
        <div class="button-descriptor">PAPER</div>
        <div class="button-descriptor">SCISSORS</div>
    </div>
  `;

  document.getElementById('play-icons').addEventListener('click', (e) => {
    const target = e.target;

    if (!target.classList.contains('icon')) {
      return;
    }

    let selfChoice;
    const cpuChoice = getCpuChoice();
    let displayMessage;
    let btnText = 'NEXT ROUND';

    if (target.classList.contains('r-icon')) {
      selfChoice = 'r';
    } else if (target.classList.contains('p-icon')) {
      selfChoice = 'p';
    } else if (target.classList.contains('s-icon')) {
      selfChoice = 's';
    }

    const round = getResult(selfChoice, cpuChoice);

    switch (round) {
      case 'self':
        selfScore++;
        displayMessage = 'YOU WIN!';
        break;
      case 'cpu':
        cpuScore++;
        displayMessage = 'YOU LOSE!';
        break;
      case 'tie':
        displayMessage = "IT'S A TIE";
        break;
    }

    let isGameOver = cpuScore === 5 || selfScore === 5;

    if (isGameOver) {
      displayMessage += ' GAME OVER.';
      btnText = 'RESTART GAME';
    }

    board.innerHTML = `
        <div class="display-message" id="display-message" style="visibility:hidden;">YOU WIN</div>
        <button class="next-round" style="visibility:hidden;">NEXT ROUND</button>

        <div class="hands">
          <img src="./assets/play/r-l.png" alt="" class="left-hand fist">
          <img src="./assets/play/r-r.png" alt="" class="right-hand fist">
        </div>
    `;

    document
      .querySelector('.left-hand')
      .addEventListener('animationend', () => {
        board.innerHTML = `
      <div class="display-message" id="display-message">${displayMessage}</div>
        <button class="next-round">${btnText}</button>

        <div class="hands">
            <img src="./assets/play/${selfChoice}-l.png" alt="" class="left-hand">
            <img src="./assets/play/${cpuChoice}-r.png" alt="" class="right-hand">
        </div>
    `;
        renderScore();

        const nextRoundBtn = document.querySelector('button.next-round');

        if (isGameOver) nextRoundBtn.addEventListener('click', init);
        if (!isGameOver) nextRoundBtn.addEventListener('click', playRound);
      });
  });
}

function init() {
  selfScore = 0;
  cpuScore = 0;

  playRound();
  renderScore();
}

init();
