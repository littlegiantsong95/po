/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

				//skills
				$('#skills .col').slice(0,8).show();
				$('#skills button.btn-add').click(function(){
					if($(this).text()=='Fold'){
						$(this).text('More');
						$('#skills .col').slice(4,8).slideUp();
					}else {
						$(this).text('Fold');
						$('#skills .col:hidden').slice(0,4).slideDown();
					}
				})

				

				// about card
				$('#about .card button').on({
					mouseenter:function(){
					   $('#about .card').toggleClass('rotate');
					   $(this).addClass('trans');
					},
					mouseleave:function(){
					   $('#about .card').toggleClass('rotate');
					   $(this).removeClass('trans');
					}
				 })
				//  standford 슬라이드 사진 & 영상
				//Initialize Swiper 기본생성
				// var swiper = new Swiper('.swiper-container');
				//옵션이 있는 swiper 생성
				var swiper = new Swiper('.swiper1', {
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper1>.swiper-pagination',
						clickable: true,
						// renderBullet: function (index, className) {
						// 	var alphabet=['1','2','3','4','5','6','7','8'];
						// 	return '<span class="' + className + '">' + alphabet[index] + '</span>';
						// },
					},
					loop: true,
					
				});

			
})(jQuery);