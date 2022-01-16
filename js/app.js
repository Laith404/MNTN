document.addEventListener('DOMContentLoaded', () => {

	let mountain = document.getElementById('mountin'),
			road = document.getElementById('road'),
			text = document.getElementById('text');
	
	window.addEventListener('scroll', () => {
			let value = window.scrollY;

			mountain.style.bottom = -20 + value * 0.020 + 'rem';
			road.style.transform = `scale(${1 + value / 1200 })`;
			text.style.top = 23 + value * 0.025 + 'rem';
	})

	const scblock = document.querySelectorAll('.scroll-block'),
      animationTime = 2000,
      framesCount = 120;
	scblock.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
			
    let scroller = setInterval(function() {

      let scrollBy = coordY / framesCount;

      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
					window.scrollTo({
						top:  coordY,
						behavior: "smooth"
					});
       	 clearInterval(scroller);

      }
    }, animationTime / framesCount);
		})
	})
		



	window.addEventListener("scroll", () => {
		acSection();
	});

	function acSection() {
		let fromTop = window.scrollY;
		scblock.forEach(block => {
			let section = document.querySelector(block.hash);
			block.classList.remove('active');
			if (
				section.offsetTop <= fromTop &&
				section.offsetTop + section.offsetHeight > fromTop
			) {
				block.classList.add("active");
			} else {
				block.classList.remove("active");
			}
		});
	}
	acSection();


	// active menu
	let body = document.querySelector('body'),
			hamburger = document.querySelector('.hamburger'),
			header = document.querySelector('#header');
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('is-active');
		if(hamburger.classList.contains('is-active')) {
			body.classList.add('hidden');
			header.classList.add('active');
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			})
		} else {
			body.classList.remove('hidden');
			header.classList.remove('active');
		}
	})
})
