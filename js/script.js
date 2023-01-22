const search = document.querySelector('.food__search')
const items = document.querySelectorAll('.food__item')
const menuSections = document.querySelectorAll('.food__section')
const menuTabs = document.querySelectorAll('.food__btn')
const accordion = document.querySelector('.food__item-info')
const accordionBtns = document.querySelectorAll('.food__item-btn')
const timesIcon = document.querySelector('.food__search-icon-box .fa-times')
const searchIcon = document.querySelector('.food__search-icon-box .fa-search')
const error = document.querySelector('.food__error')

const searchEngine = (e) => {

    const text = e.target.value.toLowerCase();

    accordionBtns.forEach(el => {

        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.parentElement.style.display = 'block'
            el.parentElement.classList.add('item-active')
        } else {
			el.parentElement.style.display = 'none'
            el.parentElement.classList.remove('item-active')
        }
    });

	if (text !== '') {
		timesIcon.style.display = 'block'
		searchIcon.style.display = 'none'
	}

	if (text === '') {
		timesIcon.style.display = 'none'
		searchIcon.style.display = 'block'
	}

	let activeItems = document.querySelectorAll('.item-active')

	if(activeItems.length == 0) {
		error.style.display = 'block'
	} else {
		error.style.display = 'none'
	}
}

const searchReset = () => {
	search.value = ''
	items.forEach(el => el.style.display = 'block')
	timesIcon.style.display = 'none'
	searchIcon.style.display = 'block'
	error.style.display = 'none'
}

const showInfo = id => {
	menuSections.forEach(section => (section.style.display = 'none'))
	menuTabs.forEach(tab => tab.classList.remove('food__btn--active'))

	document.getElementById(id).style.display = 'block'

	const currentActiveButton = document.querySelector(`[data-id=${id}`)
	currentActiveButton.classList.add('food__btn--active')
}

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.classList.remove('active')
	} else {
		closeAccordionItems()
		this.nextElementSibling.classList.toggle('active')
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll('.food__item-info')
	allActiveItems.forEach(item => item.classList.remove('active'))
}

const clickOutsideAccordion = e => {
	if (
		e.target.classList.contains('food__item') || e.target.classList.contains('food__item-btn') || e.target.classList.contains('food__item-info') || e.target.classList.contains('food__item-info-text')
	) {
		return
	} else {
		closeAccordionItems()
	}
}

accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener('click', clickOutsideAccordion)
search.addEventListener('keyup', searchEngine)
timesIcon.addEventListener('click', searchReset)