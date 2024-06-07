const appEl = document.querySelector('#app');
const buttonEl = document.querySelector('#size-setter');
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
  if (event.target.id !== 'app') {
    event.target.style.backgroundColor = getRandomColor();
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
