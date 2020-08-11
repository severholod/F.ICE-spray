$(document).ready(function(){
	/*----------------------Меню-----------------*/ 
	$(".anchor").on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 96
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
	/*--------------------------------------------*/
	/*----------------Мобильное меню-------------*/
	$('.menu-toggle').click(function(){
		$('.overlay').toggleClass('overlay-active');
		$(".mobile-menu").toggleClass('mobile-menu-active');
	});
	$('.mobile-menu__close').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu").removeClass('mobile-menu-active');
	});
	$('.overlay').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu").removeClass('mobile-menu-active');
	});
	$(document).on('click', '.toggle-close', function () {
		$(this).removeClass('toggle-close').addClass('toggle-open');
		$(this).next('.mobile-dropdown').hide(300);
	});
	$(document).on('click', '.toggle-open', function() {
		$(this).removeClass('toggle-open').addClass('toggle-close');
		$(this).next('.mobile-dropdown').show(300);
	});
	/*------------------------------------------------*/
	/*---------------------Отзывы--------------------*/
	var reviewsSlider = $('.reviews-slider')
	var clientsSlider = $('.clients-slider')

	reviewsSlider.owlCarousel({
		items: 3,
		dots: false,
		loop: true,
		nav: true,
	});
	clientsSlider.owlCarousel({
		items: 6,
		dots: false,
		loop: true,
		nav: false,
	});

	$('.review-btn').click(function() {
		if($(this).prev('.review-text').hasClass('open-review')) {
			$(this).prev('.review-text').removeClass('open-review')
			$(this).text('показать полностью')
		} else {
			$(this).prev('.review-text').addClass('open-review')
			$(this).text('cвернуть')
		}
	})

	$('.reviews-slider-next').click(function() {
    reviewsSlider.trigger('next.owl.carousel');
	})
	$('.reviews-slider-prev').click(function() {
    reviewsSlider.trigger('prev.owl.carousel');
	})
	/*-----------------------------------------------*/ 
	/*----------------Формы----------------------*/
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
});