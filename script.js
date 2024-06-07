const appEl = document.querySelector('#app');
const buttonEl = document.querySelector('#size-setter');
const fadeEl = document.querySelector('#fade');
const sketchPadWidth = 960;
appEl.style.width = `${sketchPadWidth}px`;

const drawCells = (size) => {
  appEl.innerHTML = '';
  const cellSize = (sketchPadWidth - size + 1) / size;

  for (let i = 0; i < size ** 2; i++) {
    const div = document.createElement('div');
    div.className = 'cell';
    div.style.flex = `0 0 ${cellSize}px`;
    div.style.height = `${cellSize}px`;
    appEl.appendChild(div);
  }
}

const getRandomColor = () => {
  return Array(6)
    .fill('')
    .reduce(
      acc => acc + Math.floor(Math.random() * 16).toString(16),
      '#'
    );
};

const changeCellColor = (event) => {
  const targetCell = event.target;

  if (targetCell.id === 'app') {
    return;
  }

  const isFadeMode = fadeEl.checked;

  if (isFadeMode) {
    if (!targetCell.style.backgroundColor) {
      targetCell.style.backgroundColor = getRandomColor();
    } else {
      const currentOpacity = targetCell.style.opacity;

      if (currentOpacity === '') {
        targetCell.style.opacity = '0.9';
      } else if (currentOpacity > 0) {
        targetCell.style.opacity = `${targetCell.style.opacity - 0.1}`;
      }
    }
  } else {
    targetCell.style.backgroundColor = getRandomColor();
  }
};

const setSize = () => {
  let sketchPadSize = Number(prompt('Set new sketch pad size (max - 100):', '4'));

  while (!(Number.isInteger(sketchPadSize)) || sketchPadSize > 100 || sketchPadSize < 1) {
    sketchPadSize = Number(prompt('Incorrect input! Set new sketch pad size (max - 100):', '4'));
  }

  drawCells(sketchPadSize);
};

let size = 10;
drawCells(size);

appEl.addEventListener('mouseover', changeCellColor);
buttonEl.addEventListener('click', setSize);
