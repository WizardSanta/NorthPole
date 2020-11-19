const fetchPage = (file) => {
	fetch(file)
  		.then(function(response) {
    		return response.text();
  		})
  		.then(function(body) {
    		document.querySelector('#content').innerHTML = body;
  		});
}

const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li')

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
		burger.classList.toggle('openBurger');

		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = "";
			}
			else {
				link.style.animation = `navLinksFade 0.5s ease forwards ${(index / 5) + 0.3}s`;
			}
		})
	});	

	navLinks.forEach((link, index) => {
		link.addEventListener('click', () => {
			var file = link.textContent.replaceAll(" ", "").toLowerCase() + ".html";
			fetchPage(file);
		})
	})
}

(function () {
    navSlide();
    fetchPage("home.html");
})();