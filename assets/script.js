const flecheDroiteElement = document.querySelector('.arrow_right');
const flecheGaucheElement = document.querySelector('.arrow_left');
const imageBanniereElement = document.querySelector('.banner-img');
const paragrapheBanniereElement = document.querySelector('#banner p');
const dotsElement = document.querySelector('.dots');

let index = 0;

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

slides.forEach((item, i) => {
	const dot = document.createElement('span');
	dot.classList.add('dot');

	if (i === index) {
		dot.classList.add('dot_selected')
	}

	dotsElement.appendChild(dot);

})

const changerCSSdesDots = () => {
	const dots = document.querySelectorAll('.dot')

	dots.forEach((dot, i) => {
		dot.classList.remove('dot_selected')
		if (i === index) {
			dot.classList.add('dot_selected')
		}
	})
}

flecheGaucheElement.addEventListener('click', function() {
	index--;
	if(index < 0) {
		index =  slides.length - 1;
	}
	imageBanniereElement.src = "./assets/images/slideshow/" + slides[index].image;
	paragrapheBanniereElement.innerHTML = slides[index].tagLine;
	changerCSSdesDots()
})


flecheDroiteElement.addEventListener('click', function() {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	imageBanniereElement.src = "./assets/images/slideshow/" + slides[index].image;
	paragrapheBanniereElement.innerHTML = slides[index].tagLine;
	changerCSSdesDots()
})