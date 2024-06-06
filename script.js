const appEl = document.querySelector('#app');

for (let i = 0; i < 16; i++) {
  const div = document.createElement('div');
  div.className = 'grid-item';
  appEl.appendChild(div);
}
