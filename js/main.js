// NAVIGATION
jQuery(document).ready(function ($) {
	 
	"use strict";
	 
 	var siteMenuClone = function () {

		// Clone main navigation
 		$('.clone-main-nav').each(function () {
 			var $this = $(this);
 			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
 		});

 		setTimeout(function () {
 			var counter = 0;
 			$('.site-mobile-menu .menu-item-has-children').each(function () {
 				var $this = $(this);

 				$this.prepend('<span class="arrow-collapse collapsed">');

 				$this.find('.arrow-collapse').attr({
 					'data-toggle': 'collapse',
 					'data-target': '#collapseItem' + counter,
 				});

 				$this.find('> ul').attr({
 					'class': 'collapse',
 					'id': 'collapseItem' + counter,
 				});

 				counter++;
 			});
 		}, 1000);

 		$('body').on('click', '.arrow-collapse', function (e) {
 			var $this = $(this);
 			if ($this.closest('li').find('.collapse').hasClass('show')) {
 				$this.removeClass('active');
 			} else {
 				$this.addClass('active');
 			}
 			e.preventDefault();

		});
		 
		console.log('%c thatAfro', 'font-size: 20px; color: #0066ff;');
		console.log('%c #000000 {lives: matter}', 'font-size: 16px; color: #ffffff;');

		// Switch to mobile Menu at -768 screen size
 		$(window).resize(function () {
 			var $this = $(this),
 				w = $this.width();

 			if (w > 768) {
 				if ($('body').hasClass('offcanvas-menu')) {
 					$('body').removeClass('offcanvas-menu');
 				}
 			}
 		})

		// Open & Close side menu
 		$('body').on('click', '.js-menu-toggle', function (e) {
 			var $this = $(this);
 			e.preventDefault();

 			if ($('body').hasClass('offcanvas-menu')) {
 				$('body').removeClass('offcanvas-menu');
 				$this.removeClass('active');
 			} else {
 				$('body').addClass('offcanvas-menu');
 				$this.addClass('active');
 			}
 		})

 		// Close side menu when clicked outisde offcanvas
 		$(document).mouseup(function (e) {
 			var container = $(".site-mobile-menu");
 			if (!container.is(e.target) && container.has(e.target).length === 0) {
 				if ($('body').hasClass('offcanvas-menu')) {
 					$('body').removeClass('offcanvas-menu');
 				}
 			}
 		});
 	};
 	siteMenuClone();
});