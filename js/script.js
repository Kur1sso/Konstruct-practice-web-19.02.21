let scrollBtn = document.getElementById('scroll');


scrollBtn.onclick = function scroll() {
	let header = document.getElementById('header');
	header.scrollIntoView({
		behavior:'smooth',
		block:'start'
	})
}
let pageName= document.body.getAttribute('pageName');

let menu = document.querySelectorAll('.menu__list-item')
let currentPage = document.getElementById(pageName);
currentPage.classList.add('current');
menu.forEach(link =>{
	link.addEventListener('mouseover', (e)=>{
			currentPage.classList.remove('current');
	})
	link.addEventListener('mouseout', (e)=>{
		currentPage.classList.add('current');
	})
})

let burger = document.querySelector('.menu__burger')
let nav = document.querySelector('.menu__list')
burger.addEventListener('click',(e)=>{
	nav.classList.toggle('opened');
})