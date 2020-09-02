$(document).ready(function(){
	new WOW().init();
	/*----------------------Меню-----------------*/ 
	$(".anchor").on("click", function(e){
		const anchor = $(this);
		const header = $('.header').outerHeight()
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - header
		}, 777);
		e.preventDefault();
		return false;
	});
	/*---------------------------------------------*/ 
	/*------------------Попапы--------------------*/
	$('.popup-sm').fancybox({
		maxWidth: 465,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	$('.popup-md').fancybox({
		maxWidth: 600,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	$('.popup-lg').fancybox({
		maxWidth: 790,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	$('.popup-xl').fancybox({
		maxWidth: 1160,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	// $('.pharmacy-tab').click(function() {
	// 	let target = $(this)[0].dataset.target
	// 	$('.pharmacy-tab-content').removeClass('pharmacy-tab-content-active')
	// 	$('#' + target).addClass('pharmacy-tab-content-active')
	// })
	/*--------------------------------------------*/
	/*----------------Мобильное меню-------------*/
	$('.mobile-menu-toggler, .mobile-menu .anchor, .overlay').click(function(){
		$('.overlay').toggleClass('overlay-active');
		$(".mobile-menu").toggleClass('mobile-menu-active');
		$(".mobile-menu-toggler").toggleClass('mobile-menu-toggler-open');
	});
	/*------------------------------------------------*/
	/*---------------------Cладйеры--------------------*/
	var reviewsSlider = $('.reviews-slider')
	var clientsSlider = $('.clients-slider')
	var pharmaciesSlider = $('.pharmacies-slider')

	reviewsSlider.owlCarousel({
		// items: 3,
		dots: false,
		loop: true,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			992: {
				items: 3
			}
		}
	});
	clientsSlider.owlCarousel({
		dots: false,
		loop: true,
		nav: false,
		responsive: {
			0: {
				items: 1
			},
			500: {
				items: 3
			},
			992: {
				items: 6
			}
		}
	});
	pharmaciesSlider.owlCarousel({
		dots: false,
		loop: true,
		nav: false,
		items: 1
	})

	$('.reviews-slider-next').click(function() {
    reviewsSlider.trigger('next.owl.carousel');
	})
	$('.reviews-slider-prev').click(function() {
    reviewsSlider.trigger('prev.owl.carousel');
	})
	$('.clients-slider-next').click(function() {
		clientsSlider.trigger('next.owl.carousel');
	})
	$('.clients-slider-prev').click(function() {
		clientsSlider.trigger('prev.owl.carousel');
	})
	$('.pharmacies-slider-next').click(function() {
		pharmaciesSlider.trigger('next.owl.carousel');
	})
	$('.pharmacies-slider-prev').click(function() {
		pharmaciesSlider.trigger('prev.owl.carousel');
	})
	/*-----------------------------------------------*/

	/*--------------------Тоглы----------------------*/
	$('.review-btn').click(function() {
		if($(this).prev('.review-text').hasClass('open-review')) {
			$(this).prev('.review-text').removeClass('open-review')
			$(this).text('показать полностью')
		} else {
			$(this).prev('.review-text').addClass('open-review')
			$(this).text('cвернуть')
		}
	})
	$('.info-btn').click(function() {
		if($(this).prev('.info-text').hasClass('info-text-open')) {
			$(this).prev('.info-text').removeClass('info-text-open')
			$(this).text('показать полностью')
		} else {
			$(this).prev('.info-text').addClass('info-text-open')
			$(this).text('cвернуть')
		}
	})
	/*-----------------------------------------------*/

	/*--------------------Формы----------------------*/
	$('.form-tel').inputmask('+7 (999) 999-99-99')
	$(document).on('submit', '.form-ajax', function(){
			var form = $(this);
			var action = form.attr('action');
			var formData = new FormData(form.get(0));
			$.ajax({
				url: action,
				type: 'post',
				data: formData,
				contentType: false,
				processData: false,
				success: function(data){
					$('.form-alert').removeClass('d-none');
				}
			});
			return false;
		});
	/*------------------------------------------*/ 
	/*-----------------Заказ--------------------*/
	let quantity = 1
	let price = 400
	let sum = 400
	function changeQuantity(quantity) {
		$('#quantity').val(quantity)
	}
	function changePrice(price, quantity) {
		sum = price * quantity
		$('#price').val(sum + " руб.")
	}
	$('.quantity-wrap .minus').click(function() {
		if (quantity <= 1) return false
		quantity--
		changeQuantity(quantity)
		changePrice(price, quantity)
	})
	$('.quantity-wrap .plus').click(function() {
		if (quantity > 100) return false
		quantity++
		changeQuantity(quantity)
		changePrice(price, quantity)
	})
	$('.order-page-form select').change(function () {
		let option = this.selectedIndex
		price = Number($(this).children()[option].dataset.price)
		changePrice(price, quantity)
	})
	$('#basket-open').click(function() {
		const weight = $('.order-page-form select').val()
		const orderObject = {
			'sum': sum,
			'quantity': quantity,
			'weight': weight
		}
		localStorage.setItem('order', JSON.stringify(orderObject))
		$('.popup-order').show()
		const order = JSON.parse(localStorage.getItem('order'))
		$('.popup-order__quantity').text(order.quantity + ' шт.')
		$('.popup-order__weight').text(order.weight)
		$('#order-quantity').val(order.quantity + ' шт.')
		$('#order-weight').val(order.weight)
		// $('#basket-price').val(order.sum + ' руб.')

	})
	$('.popup-order__cancel').on('click', function() {
		let inputs = $(this).parents('.popup-order').find('input')
		$(inputs).val('')
		$(this).parents('.popup-order').hide()
		localStorage.clear()

	})
	/*------------------------------------------*/ 

	/*----------------Paralax-------------------*/ 

	$(window).mousemove(function(eventObject) {

		// let x = (eventObject.clientX / window.innerWidth) * 13,
		// 	y = (eventObject.clientY / window.innerHeight) * 13

		let x = ((window.innerWidth / 2 - eventObject.clientX) / 100) * 1.5 * -1,
			y = ((window.innerHeight / 2 - eventObject.clientY) / 100) * 2 * -1
			// console.log(x, y);
		$('.paralax-img').each((i, el) => {
			el.style.transform = 'translate(' + x + 'px, '+ y + 'px )'
			// setTimeout(function() {
			// 	el.style.transition = 'none'	
			// }, 100);
		})

	})
	/*------------------------------------------*/ 
});
