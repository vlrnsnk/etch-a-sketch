const appEl = document.querySelector('#app');
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
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 16).toString(16);
  }

  return color;
};

let size = 10;

drawCells(size);
console.log(getRandomColor());
console.log(Array(6).fill())
