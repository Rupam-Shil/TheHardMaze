const introSection = document.querySelector('.intro-section');
const mainSection = document.querySelector('.main-section');
const levelOneSvg = document.querySelector('.level-one');
const levelTwoSvg = document.querySelector('.level-two');
const nextLevelButton = document.querySelector('.next-level');
const audio = new Audio('./assets/1.mp3');
const finalImage = document.querySelector('.winner-img');
const levelNo = document.querySelector('.level-no');

setTimeout(() => {
	introSection.style.display = 'none';
	mainSection.style.display = 'block';
}, 2000);

let current = levelOneSvg;
document.addEventListener('mousemove', (e) => {
	const val = e.target.getAttribute('class');
	console.log(val);
	checkBorderTouch(val, current);
});

const checkBorderTouch = (val, svg) => {
	if (val === 'border') {
		alert('You touched the border!');
	}
	if (val === 'finish') {
		if (svg == levelOneSvg) {
			nextLevelButton.style.opacity = 1;
			nextLevelButton.style.pointerEvents = 'auto';
			svg.style.pointerEvents = 'none';
		} else {
			audio.play();
			finalImage.style.display = 'block';
		}
	}
};

nextLevelButton.addEventListener('click', () => {
	levelOneSvg.style.display = 'none';
	levelTwoSvg.style.display = 'block';
	nextLevelButton.style.opacity = 0;
	nextLevelButton.style.pointerEvents = 'none';
	current = levelTwoSvg;
	levelNo.innerText = '2';
});
