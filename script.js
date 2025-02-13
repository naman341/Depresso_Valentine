const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const response = document.getElementById('response');
const bearGif = document.getElementById('bearGif');
const svgContainer = document.getElementById('svgContainer');

let yesButtonSize = 1; // Initial scale of the "Yes" button

yesButton.addEventListener('click', () => {
  response.textContent = "Yay! You've made me the happiest person alive! ❤️";
  bearGif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
  yesButton.style.display = "none";
  noButton.style.display = "none";
  svgContainer.style.display = "block"; // Show the SVG animation

  // Scroll to the bottom of the page
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' // Smooth scrolling
  });
});

noButton.addEventListener('click', () => {
  if (noButton.textContent === "No") {
    noButton.textContent = "No";
    response.textContent = "Are you sure you want to press yes? 🥺";
  }

  // Move the "No" button to a random position
  noButton.style.position = 'absolute';
  noButton.style.left = `${Math.random() * 80 + 10}%`;
  noButton.style.top = `${Math.random() * 80 + 10}%`;

  // Make the "Yes" button bigger
  yesButtonSize += 0.2; // Increase the scale by 0.2 each time
  yesButton.style.transform = `scale(${yesButtonSize})`;
  yesButton.style.transition = "transform 0.3s ease"; // Smooth scaling animation
});
