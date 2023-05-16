const greenButton = document.querySelector('.green');
const blueButton = document.querySelector('.blue');
const yellowButton = document.querySelector('.yellow');
const blackCard = document.querySelector('.lightsaber');

blueButton.addEventListener('click', () => {
    blackCard.classList.add('lightsaber');
    blackCard.classList.remove('lightsabergreen', 'lightsaberYellow');
  });   

greenButton.addEventListener('click', () => {
    blackCard.classList.add('lightsabergreen');
    blackCard.classList.remove('lightsaberred', 'lightsaberYellow');
  });

  yellowButton.addEventListener('click', () => {
    blackCard.classList.add('lightsaberYellow');
    blackCard.classList.remove('lightsaber', 'lightsabergreen');
  });