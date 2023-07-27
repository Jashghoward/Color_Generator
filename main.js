window.onload = function () {
  addColor();
};

for (let i = 1; i <= 9; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  document.querySelector('.container').appendChild(box);
  box.style.cursor = 'pointer';
  box.addEventListener('click', () => {
    console.log(box.innerHTML);
    navigator.clipboard.writeText(box.innerHTML);
  });
}

const btn = document.querySelector('.btn');
const randomColorBlock = document.querySelectorAll('.box');

function RandomHexColorCode () {
  var chars = '0123456789abcdef';
  var colorLength = 6;
  var color = '';

  for (var i = 0; i < colorLength; i++) {
    var randomColor = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomColor, randomColor + 1);
  }
  return '#' + color;
}

function addColor () {
  randomColorBlock.forEach(e => {
    var newColor = RandomHexColorCode();
    e.style.backgroundColor = newColor;
    e.innerHTML = newColor;
  });
}

function showNotification(box) {
  const notification = document.querySelector('.notification');
  notification.style.top = `${box.offsetTop + box.offsetHeight / 2}px`;
  notification.style.left = `${box.offsetLeft + box.offsetWidth / 2}px`;
  notification.style.opacity = 1;
  setTimeout(() => {
    notification.style.opacity = 0;
  }, 1000); // Adjust the duration (in milliseconds) as needed
}

// Function to toggle automatic coloring
let isPlaying = false;
let intervalId;

function toggleAutoPlay() {
  const btn = document.querySelector('.btn');
  if (isPlaying) {
    clearInterval(intervalId);
    isPlaying = false;
    btn.textContent = 'Play';
  } else {
    intervalId = setInterval(addColor, 900); // Adjust the interval (in milliseconds) as desired
    isPlaying = true;
    btn.textContent = 'Pause';
  }
}

// Add event listener to the "Play" button
document.querySelector('.btn').addEventListener('click', toggleAutoPlay);



  // Add the 'flash' class to the clicked box to trigger the animation
  function flashColorBox(box) {
    box.classList.add('flash');
    // Remove the 'flash' class after a short delay to stop the animation
    setTimeout(() => {
      box.classList.remove('flash');
    }, 1000); // Adjust the duration (in milliseconds) to match the animation duration
  }

  randomColorBlock.forEach(box => {
    box.addEventListener('click', () => {
      console.log(box.innerHTML);
      navigator.clipboard.writeText(box.innerHTML);
      showNotification(box); // Pass the clicked box element to the showNotification function

      flashColorBox(box); // Trigger the flashing effect
    });
  });