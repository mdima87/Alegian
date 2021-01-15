//Устанавливаем стартовый индекс слайда по умолчанию
let slideIndex = 1;
//Вызываем функцию, которая реализована ниже
showSlides(slideIndex);

//Увеличиваем индекс на 1 и показываем следующий слайд
function nextSlide () {
	showSlides(slideIndex += 1);
}
//Уменьшаем индекс на 1 и показываем предыдущий слайд
function previousSlide () {
	showSlides(slideIndex -= 1);
}
//Устанавливаем текущий слайд
function currentSlide (n) {
	showSlide(slideIndex = n);
}
//Функция перелистывания
function showSlides(n) {
//Обращаемся к элементам с классом slide
	let slides = document.getElementsByClassName("slide");
//Проверяем количество слайдов
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
//Проходим по каждому слайду в цикле for
	for (let slide of slides) {
		slide.style.display = "none";
	}
	//Делаем слайд flex-элементом
	slides[slideIndex -1].style.display = "flex";
}
