$(document).ready(function () {

	// $('.cat-inf').on('click', function () {
	// 	$(this).toggleClass('active');
	// 	$(this).next('.cart-bg').toggleClass('active');
	// });

	// -------------------- header --------------------------

	// $(window).scroll(function () {

	// 	if ($(this).scrollTop() > 1) {
	// 		$('header').addClass('sticky');

	// 	}
	// 	else {
	// 		$('header').removeClass('sticky');

	// 	}
	// });

	// -------------------- svg--------------------------
	function svg() {
		$('img[src$=".svg"]').each(function () {
			var $img = $(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop('attributes');
			if ($img.hasClass('svg')) {
				$.get(imgURL, function (data) {
					var $svg = jQuery(data).find('svg');
					$svg = $svg.removeAttr('xmlns:a');
					$.each(attributes, function () {
						$svg.attr(this.name, this.value);
					});
					$img.removeClass('svg').replaceWith($svg);
				}, 'xml');
			}
		});
	}
	svg();


	// ----------------- carousel ----------------------

	$('.hero-owl').owlCarousel({
		loop: true,
		margin: 20,
		dots: true,
		nav: true,
		navText: ["<span class='icons _icon-prev'></span>", "<span class='icons _icon-next'></span>"],
		items: 1,
	})

	$('.new-postup-owl').owlCarousel({
		loop: true,
		margin: 20,
		dots: false,
		nav: true,
		navText: ["", "<span class='icons _icon-next'></span>"],
		items: 1,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
			},
			1220: {
				items: 3,
			}
		}
	})

	// $('.vid-gallery-owl').owlCarousel({
	// 	loop: true,
	// 	margin: 30,
	// 	dots: false,
	// 	nav: false,
	// 	navText: ["<span class='icons _icon-prev'></span>", "<span class='icons _icon-next'></span>"],
	// 	items: 1,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 2,
	// 		},
	// 	},
	// })

	var owl = $('.vid-gallery-owl');
	owl.owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: false,
		items: 1,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2,
			},
		},
	});
	$('.customNextBtn').click(function () {
		owl.trigger('next.owl.carousel', [300]);
	})
	$('.customPrevBtn').click(function () {
		owl.trigger('prev.owl.carousel', [300]);
	})


	// $('.gt').owlCarousel({
	// 	loop: true,
	// 	nav: false,
	// 	navText: ['', ''],
	// 	dots: true,
	// 	autoplay: false,
	// 	autoplayTimeout: 3000,
	// 	margin: 20,
	// 	items: 1
	// });

	// $('.mng').owlCarousel({
	// 	loop: true,
	// 	nav: true,
	// 	navText: ['', ''],
	// 	dots: false,
	// 	autoplay: false,
	// 	autoplayTimeout: 3000,
	// 	margin: 20,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 2,
	// 		},
	// 		991: {
	// 			items: 2,
	// 		},
	// 		1220: {
	// 			items: 4,
	// 		}
	// 	}
	// });

	// $('.ctg').owlCarousel({
	// 	loop: true,
	// 	nav: true,
	// 	navText: ['', ''],
	// 	dots: false,
	// 	autoplay: false,
	// 	autoplayTimeout: 3000,
	// 	margin: 20,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 2,
	// 		},
	// 		991: {
	// 			items: 2,
	// 		},
	// 		1220: {
	// 			items: 2,
	// 		}
	// 	}
	// });

	// $('.pts').owlCarousel({
	// 	loop: true,
	// 	nav: true,
	// 	navText: ['', ''],
	// 	dots: false,
	// 	autoplay: false,
	// 	autoplayTimeout: 3000,
	// 	margin: 20,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 2,
	// 		},
	// 		991: {
	// 			items: 2,
	// 		},
	// 		1220: {
	// 			items: 4,
	// 		}
	// 	}
	// });


	// $('.crti').owlCarousel({
	// 	loop: true,
	// 	nav: true,
	// 	navText: ['', ''],
	// 	dots: false,
	// 	autoplay: false,
	// 	autoplayTimeout: 3000,
	// 	margin: 20,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		480: {
	// 			items: 2,
	// 		},
	// 		991: {
	// 			items: 2,
	// 		},
	// 		1220: {
	// 			items: 4,
	// 		}
	// 	}
	// });

	//--------------- fancybox -----------
	$('[data-fancybox="data-fancybox-product"]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		arrows: true,
		showNavArrows: true,
		touch: true,
		loop: true,
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				ZOOM: 'Увеличить',
				FULL_SCREEN: 'На весь экран',
				PREV: '',
				NEXT: '',
			}
		},
		buttons: [
			"zoom",
			"fullScreen",
			"close",
		]
	});

	// -------------------- Scroll -------------------------

	$(".srolls").on("click", "a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();

		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),

			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 50;

		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 800);
	});


	// -------------------------modal----------------------

	// $('.to-state').on('click', function (event) {
	// 	event.preventDefault();
	// 	$('div').removeClass('active');
	// 	$('.state').removeClass('active');
	// 	var state = $(this).attr('data-state');
	// 	$('.state[data-state=' + state + ']').addClass('active');
	// });

	// $('.close').on('click', function (event) {
	// 	$(this).parents().removeClass('active');
	// });

	// jQuery(function ($) {
	// 	$(document).mouseup(function (e) { // событие клика по веб-документу
	// 		var div = $(".state-box"); // тут указываем ID элемента
	// 		if (!div.is(e.target) // если клик был не по нашему блоку
	// 			&& div.has(e.target).length === 0) { // и не по его дочерним элементам

	// 			div.parents().removeClass('active'); // скрываем его
	// 			$('body').removeClass('modal-open');
	// 		}
	// 	});
	// });

	// ------------- Show More ---------------------
	// $("article.style-desc").has("p:nth-child(1)").append('<div class="more"><span>Узнать больше</span><img src="img/icons/next.svg" alt=""></div>');
	// $("article.style-desc .more").click(function () {
	// 	var $this = $(this),
	// 		$cards = $(this).closest('.style-desc');
	// 	$cards.toggleClass('open');
	// 	$this.find('span').html($cards.hasClass('open') ? 'Свернуть' : 'Узнать больше')
	// });

	// ------------- Select ---------------------
	// const defaultSelect = () => {
	// 	// Pass single element
	// 	const element = document.querySelector('.select-default');
	// 	const choices = new Choices(element, {
	// 		searchEnabled: false,
	// 	});
	// };
	// defaultSelect();
	const multiDefault = () => {
		const elements = document.querySelectorAll('.select-default');
		elements.forEach(el => {
			const choices = new Choices(el, {
				searchEnabled: false,
				noResultsText: 'Ничего не найдено'
			});
		});

	}

	multiDefault();

	// -------------------- Checkbox ----------------
	$(window).keyup(function (e) {
		var target = $('.checkbox input:focus');
		if (e.keyCode == 9 && $(target).length) {
			$(target).parent().addClass('focused');
		}
	});

	$('.checkbox input').focusout(function () {
		$(this).parent().removeClass('focused');
	});

	//end
});

// $(function () {
// 	$("#slider").slider();
// });