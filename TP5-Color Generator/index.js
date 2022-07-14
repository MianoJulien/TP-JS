function getColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  const color = `rgb(${r},${g}, ${b})`;

  document.body.style.background = color;
  document.body.innerHTML = `<span> ${color}</span>`;
}

setInterval(getColor, 1000);
