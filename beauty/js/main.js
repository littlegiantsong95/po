/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$all = $body.add($header);

	// Breakpoints.
		breakpoints({
			xxlarge: [ '1681px',  '1920px' ],
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '1001px',  '1280px' ],
			medium:  [ '737px',   '1000px' ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');
		else {

			breakpoints.on('<=small', function() {
				$body.addClass('is-touch');
			});

			breakpoints.on('>small', function() {
				$body.removeClass('is-touch');
			});

		}

	// Fix: IE flexbox fix.
		if (browser.name == 'ie') {

			var $main = $('.main.fullscreen'),
				IEResizeTimeout;

			$window
				.on('resize.ie-flexbox-fix', function() {

					clearTimeout(IEResizeTimeout);

					IEResizeTimeout = setTimeout(function() {

						var wh = $window.height();

						$main.each(function() {

							var $this = $(this);

							$this.css('height', '');

							if ($this.height() <= wh)
								$this.css('height', (wh - 50) + 'px');

						});

					});

				})
				.triggerHandler('resize.ie-flexbox-fix');

		}

		// design detail
		
		var img=[
			{index:"idea&sketch" , src: "./images/sketch1.jpeg"},
			{index: "idea&sketch" , src:  "./images/sketch2.jpg"},
			{index: "mask&makeup" , src: "./images/maskMakeup.jpg"},
			{index: "mask&makeup" , src: "./images/jokja/j1.jpg"},
			{index: "characters" , src: "./images/jokja/j2.jpg"},
			{index: "characters" , src: "./images/jokja/j3.jpg"},
			{index: "characters" , src: "./images/beautyC.png"},
			{index: "characters" , src: "./images/beautyD.png"}
		];
		// console.log(obj[index[0]]);
		// console.log(img[3].src);
		$('#design button.icons').click(function(){
			var iconName = $(this).text();
			$('.popup').show();
			// console.log(img[0].index);
			if(iconName == "ideaSketch"){
				$('.imgGroup').append('<img src='+img[0].src+'>');
				$('.imgGroup').append('<img src='+img[1].src+'>');
				
				$('.popup .title strong').text(img[0].index);
				
			}else if(iconName == "maskMakeup"){
				$('.imgGroup').append('<img src='+img[2].src+'><br><img src='+img[3].src+'>');
				$('.popup .title strong').text(img[2].index);
			}else if(iconName == "characters"){
				$('.imgGroup').append('<img src='+img[4].src+'><br><img src='+img[5].src+'><br><img src='+img[6].src+'><br><img src='+img[7].src+'>');
				$('.popup .title strong').text(img[4].index);
				
			}
			
			// $.each(img, function(index, item){
				
			// 	console.log(item.index);
			// })
			
		
			$('#design .popup').after('<div class="popup-bg"></div>');

		})

		$('#design .popup button.close').click(function(){
			console.log('닫힘');
			$(this).parents('.popup').hide();
			$('#design .popup-bg').remove();
			$('.imgGroup img').remove();
		})



	// Gallery.
		$window.on('load', function() {

			var $gallery = $('.gallery');

			$gallery.poptrox({
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#1f2328',
				overlayOpacity: 0.65,
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 50,
				usePopupNav: true
			});

			// Hack: Adjust margins when 'small' activates.
				breakpoints.on('>small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 50;
					});
				});

				breakpoints.on('<=small', function() {
					$gallery.each(function() {
						$(this)[0]._poptrox.windowMargin = 5;
					});
				});

		});

		// publication


		$('#publi .icons').off('click').on('click', function(){
			$('#publi .moreBox').toggleClass('blind');
			if($(this).text != 'min' && $(this).hasClass('fa-plus')){
				$(this).removeClass('fa-plus').addClass('fa-undo-alt');
				$(this).text('','min');
				$(this).parent('.content').addClass('big');
			}else{
				$(this).removeClass('fa-undo-alt').addClass('fa-plus');
				$(this).text('', 'more');
				$(this).parent('.content').removeClass('big');
			}
			if($(this).hasClass('fa-undo-alt')){
				$(this).parents('#publi').addClass('noPadding');
			}else{
				$(this).parents('#publi').removeClass('noPadding');
			}
		})
		
	// Section transitions.
		if (browser.canUse('transition')) {

			var on = function() {

				// Galleries.
					$('.gallery')
						.scrollex({
							top:		'30vh',
							bottom:		'30vh',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Generic sections.
					$('.main.style1')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

					$('.main.style2')
						.scrollex({
							mode:		'middle',
							delay:		100,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

				// Contact.
					$('#contact')
						.scrollex({
							top:		'50%',
							delay:		50,
							initialize:	function() { $(this).addClass('inactive'); },
							terminate:	function() { $(this).removeClass('inactive'); },
							enter:		function() { $(this).removeClass('inactive'); },
							leave:		function() { $(this).addClass('inactive'); }
						});

			};

			var off = function() {

				// Galleries.
					$('.gallery')
						.unscrollex();

				// Generic sections.
					$('.main.style1')
						.unscrollex();

					$('.main.style2')
						.unscrollex();

				// Contact.
					$('#contact')
						.unscrollex();

			};

			breakpoints.on('<=small', off);
			breakpoints.on('>small', on);

		}

	// Events.
		var resizeTimeout, resizeScrollTimeout;

		$window
			.on('resize', function() {

				// Disable animations/transitions.
					$body.addClass('is-resizing');

				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function() {

					// Update scrolly links.
						$('a[href^="#"]').scrolly({
							speed: 1500,
							offset: $header.outerHeight() - 1
						});

					// Re-enable animations/transitions.
						setTimeout(function() {
							$body.removeClass('is-resizing');
							$window.trigger('scroll');
						}, 0);

				}, 100);

			})
			.on('load', function() {
				$window.trigger('resize');
			});

})(jQuery);