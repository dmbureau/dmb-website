/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .8, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);
	function raf(time) {
	lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault(); 

		const target = $(this.getAttribute('href')); 

		if (target.length) {
			lenis.scrollTo(target[0], {
				duration: 1.2, 
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
			});
		}
	});


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();

	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});

	jQuery(document).ready(function (o) {
		0 < o(".navSidebar-button").length &&
		o(".navSidebar-button").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
		}),
		0 < o(".close-side-widget").length &&
		o(".close-side-widget").on("click", function (e) {
			e.preventDefault(), o(".info-group").removeClass("isActive");
		}),
		o(".xs-sidebar-widget").on("click", function (e) {
			e.stopPropagation();
		})
	});

	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.ax-scrollup').fadeIn();
		} else {
			$('.ax-scrollup').fadeOut();
		}
	});
	$('.ax-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	}); 

	if($('.ax-split-1').length) {
		var txtSplit = $('.ax-split-1');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines",
				linesClass: "split-line"
			});
		});
	}
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});

	$('.marquee-left').marquee({
		gap: 0,
		speed: 25,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 28,
		speed: 25,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});


	$('.marquee-left2').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right2').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});


	$('.marquee-left3').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
	$('.marquee-right3').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});


	gsap.registerPlugin(ScrollTrigger);
	PIXI.utils.skipHello();
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	if($('.ax-split-2').length) {
		var txtSplit = $('.ax-split-2');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "words",
				wordsClass: "split-word"
			});
		});
	}

	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

			

			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				const AXHERO1 = gsap.timeline();
				AXHERO1
				.from(".ax-hero1-img", { yPercent: 100, duration: 1, transformOrigin: "top",  ease: "power1.out" })
				.from(".ax-hero1-text .hero_text_left .ax_text1", { xPercent: 30, opacity: 0, duration: 1.5, transformOrigin: "top",  ease: "power1.out" },"< = .2")
				.from(".ax-hero1-text .hero_text_left .ax_text2", { xPercent: 30, opacity: 0, duration: 1.2, transformOrigin: "top",  ease: "power1.out" },"< = .2")
				.from(".ax-hero1-text .hero_text_right .ax_text_wrap", { xPercent: -30, opacity: 0, duration: 1.5, transformOrigin: "top",  ease: "power1.out" },"< = .5")
				.from(".ax-hero1-text .hero_text_left p", { yPercent: 30, opacity: 0, duration: 1, transformOrigin: "top",  ease: "power1.out" },"< = .5")
				.from(".ax-hero1-text .hero_text_right .item-desc-btn", { yPercent: 30, opacity: 0, duration: 1, transformOrigin: "top",  ease: "power1.out" },"<")


				if ($('.ax-hero2-slider').length > 0 ) {
					var slider = new Swiper('.ax-hero2-slider', {
						spaceBetween: 0,
						slidesPerView: 1,
						effect: "fade",
						loop: true,
						autoplay: {
							delay: 6000,
						},
						speed: 1000,
						pagination: {
							el: ".ax-hr2-pagi",
							clickable: true,
						},
						navigation: {
							nextEl: ".ax-hr2-next",
							prevEl: ".ax-hr2-prev",
						},
					});
				};

				if ($('.ax-hero3-slider').length > 0 ) {
					var slider = new Swiper('.ax-hero3-slider', {
						spaceBetween: 0,
						slidesPerView: 1,
						effect: "fade",
						loop: true,
						autoplay: {
							delay: 6000,
						},
						speed: 1000,
						navigation: {
							nextEl: ".hr3-arrow",
						},
					});
				};

				if ($('.ax-hero4-slider').length > 0 ) {
					var slider = new Swiper('.ax-hero4-slider', {
						spaceBetween: 0,
						slidesPerView: 1,
						effect: "fade",
						loop: true,
						autoplay: {
							delay: 6000,
						},
						speed: 1000,
					});
				};


				if ($('.ax-hero5-slider').length > 0 ) {
					var slider = new Swiper('.ax-hero5-slider', {
						spaceBetween: 0,
						slidesPerView: 1,
						effect: "fade",
						loop: true,
						autoplay: {
							delay: 6000,
						},
						speed: 1000,
					});
				};


				afterPageLoad();
			}, 700);


		})		
	});
	
	$(document).ready(function() {
		var st = $(".tx-split-text");
		if(st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			gsap.set(el, { perspective: 400 });

			if( $(el).hasClass('split-in-right') ){
				gsap.set(el.split.chars, {
					scale: 0,
					opacity: 0,
					rotation: 90,
					ease: "elastic.in(1,0.3)",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				rotation: 0,
				rotationX: "0",
				color: 'inherit',
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: 0.4, 
				stagger: 0.02,
			});
		});
	});
	if($('.type_text').length) {
		var txtheading = $(".type_text");
		if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			if( $(el).hasClass('type_text_anim') ){
				gsap.set(el.split.chars, {
					opacity: 0,
					x: "50",
					ease: "Back.easeOut",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 92%",
					end: "top 60%",
					markers: false,
					scrub: 1,
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: .7,
				stagger: 0.2,
			});

		});
	}
	if ($('.ax-price2-sec, .ax-price1-sec, .ax-price5-sec').length > 0 ) {
		document.addEventListener("DOMContentLoaded", () => {
			const e = document.getElementById("filt-monthly"),
			d = document.getElementById("filt-hourly"),
			t = document.getElementById("switcher"),
			m = document.getElementById("monthly"),
			y = document.getElementById("hourly");

			if (!e || !d || !t || !m || !y) {
				console.warn("Toggle elements not found in DOM");
				return;
			}

			const activate = (mode) => {
				const isHourly = mode === "hourly";
				t.checked = isHourly;
				e.classList.toggle("toggler--is-active", !isHourly);
				d.classList.toggle("toggler--is-active", isHourly);
				m.classList.toggle("hide", isHourly);
				y.classList.toggle("hide", !isHourly);
			};

			e.addEventListener("click", () => activate("monthly"));
			d.addEventListener("click", () => activate("hourly"));
			t.addEventListener("click", () => activate(t.checked ? "hourly" : "monthly"));
		});

		const priceGroup = document.querySelector('.ax-price1-grp');

		if (priceGroup) {
			priceGroup.querySelectorAll('.toggler, .toggle').forEach(el => {
				el.addEventListener('click', () => {
					priceGroup.classList.toggle('active');
				});
			});
		}


		document.addEventListener("DOMContentLoaded", () => {
			document.querySelectorAll(".price-toggle").forEach((wrap) => {

				const monthlyBtn = wrap.querySelector(".toggler--monthly");
				const hourlyBtn  = wrap.querySelector(".toggler--hourly");
				const switcher   = wrap.querySelector(".switcher");
				const monthlyBox = wrap.querySelector(".monthly");
				const hourlyBox  = wrap.querySelector(".hourly");

				if (!monthlyBtn || !hourlyBtn || !switcher || !monthlyBox || !hourlyBox) {
					console.warn("Toggle elements missing in one pricing block");
					return;
				}

				const activate = (mode) => {
					const isHourly = mode === "hourly";

					switcher.checked = isHourly;

					monthlyBtn.classList.toggle("toggler--is-active", !isHourly);
					hourlyBtn.classList.toggle("toggler--is-active", isHourly);

					monthlyBox.classList.toggle("hide", isHourly);
					hourlyBox.classList.toggle("hide", !isHourly);
				};

				monthlyBtn.addEventListener("click", () => activate("monthly"));
				hourlyBtn.addEventListener("click", () => activate("hourly"));
				switcher.addEventListener("click", () =>
					activate(switcher.checked ? "hourly" : "monthly")
					);
			});
		});
	};
	// Project Slider //
	if ($('.ax-cs-slider').length > 0 ) {
		var slider = new Swiper('.ax-cs-slider', {
			spaceBetween: 28,
			slidesPerView: 3,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 1000,
			pagination: {
				el: ".ax-cs-pagi",
				clickable: true,
			},
			breakpoints: {
				'1200': {
					slidesPerView: 3,
				},
				'840': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'480': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'0': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
			},
		});
	};

// Testimonial Slider //

	if ($('.ax-testi1-slider').length > 0 ) {
		var slider = new Swiper('.ax-testi1-slider', {
			slidesPerView: 1,
			loop: true,
			effect: "fade",
			spaceBetween: 10,
			speed: 1000,
			navigation: {
				nextEl: ".ax-testi1-next",
				prevEl: ".ax-testi1-prev",
			},
		});
	};

	
	if ($('.ax-blg2-slider').length > 0 ) {
		var slider = new Swiper('.ax-blg2-slider', {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 12,
			speed: 1000,
			navigation: {
				nextEl: ".ax-blg2-next",
				prevEl: ".ax-blg2-prev",
			},
			breakpoints: {
				'1600': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'1100': {
					slidesPerView: 1,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'480': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	};


	if ($('.ax-project3-slider').length > 0 ) {
		var slider = new Swiper('.ax-project3-slider', {
			spaceBetween: 24,
			slidesPerView: 4,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 1000,
			pagination: {
				el: ".ax-pro3-pagi",
				clickable: true,
			},
			navigation: {
				nextEl: ".ax-pro3-next",
				prevEl: ".ax-pro3-prev",
			},
			breakpoints: {
				'991': {
					slidesPerView: 4,
				},
				'840': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'480': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'0': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
			},
		});
	};

	if ($('.ax-testi3-slider').length > 0 ) {
		var slider = new Swiper('.ax-testi3-slider', {
			spaceBetween: 0,
			slidesPerView: 4,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 6000
			},
			speed: 1000,
			pagination: {
				el: ".ax-testi3-pagi",
				clickable: true,
			},
			navigation: {
				prevEl: ".ax-testi3-prev",
				nextEl: ".ax-testi3-next",
			},
			breakpoints: {
				'1200': {
					slidesPerView: 4,
				},
				'991': {
					slidesPerView: 3,
				},
				'840': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'480': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'0': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
			},
		});
	};

	if ($('.ax-blg3-slider').length > 0 ) {
		var slider = new Swiper('.ax-blg3-slider', {
			spaceBetween: 24,
			slidesPerView: 3,
			loop: true,
			// autoplay: {
			// 	enabled: true,
			// 	delay: 6000
			// },
			speed: 1000,
			pagination: {
				el: ".ax-blg3-pagi",
				clickable: true,
			},
			navigation: {
				nextEl: ".ax-blg3-next",
				prevEl: ".ax-blg3-prev",
			},
			breakpoints: {
				'1200': {
					slidesPerView: 3,
				},
				'840': {
					slidesPerView: 2,
					spaceBetween: 24,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'480': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
				'0': {
					slidesPerView: 1,
					spaceBetween: 24,
				},
			},
		});
	};

	function afterPageLoad() {
		CustomEase.create("ease1", "0, 0, 0.2, 1");


		if (!/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {


			if ($("#ax_liquid_img").length) {

				const TmWrapper = document.getElementById("ax_liquid_img");
				const TmImg = TmWrapper.querySelector("img");
				const TmImageURL = TmImg.getAttribute("src");
				// Keep the image until the theme liquid canvas is ready.

				const { width: TmWidth, height: TmHeight } = TmWrapper.getBoundingClientRect();

				const TmApp = new PIXI.Application({
					width: TmWidth,
					height: TmHeight,
					transparent: true,
					autoDensity: true,
					resolution: window.devicePixelRatio,
				});
				TmApp.view.style.pointerEvents = "none";

				TmWrapper.appendChild(TmApp.view);

				const TmDisplacementURL = themeData.themeUrl + "/assets/img/3d.jpg";

				TmApp.loader
				.add("TmHero", TmImageURL)
				.add("TmDisplacement", TmDisplacementURL)
				.load((TmLoader, TmResources) => {
					const TmContainer = new PIXI.Container();
					TmApp.stage.addChild(TmContainer);

					if (!TmResources.TmHero || !TmResources.TmHero.texture) { TmApp.destroy(true); return; }
                    TmImg.style.visibility = "hidden";
                    const TmHero = new PIXI.Sprite(TmResources.TmHero.texture);
					TmContainer.addChild(TmHero);

					const TmTextureRatio = TmHero.texture.width / TmHero.texture.height;
					const TmContainerRatio = TmWidth / TmHeight;

					if (TmContainerRatio > TmTextureRatio) {
						TmHero.width = TmWidth;
						TmHero.height = TmWidth / TmTextureRatio;
					} else {
						TmHero.height = TmHeight;
						TmHero.width = TmHeight * TmTextureRatio;
					}

					TmHero.x = (TmWidth - TmHero.width) / 2;
					TmHero.y = (TmHeight - TmHero.height) / 2;

					const TmDispSprite = new PIXI.Sprite(TmResources.TmDisplacement.texture);
					TmDispSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
					const TmDispFilter = new PIXI.filters.DisplacementFilter(TmDispSprite);
					TmDispSprite.scale.set(2);
					TmApp.stage.addChild(TmDispSprite);
					TmContainer.filters = [TmDispFilter];

					function TmPlayDistortionIn() {
						gsap.fromTo(TmDispFilter.scale,
							{ x: -400, y: -400 },
							{ x: 0, y: 0, duration: 3, delay: .3, ease: "expo.out" }
							);
					}
					TmPlayDistortionIn();

					TmApp.ticker.add(() => {
						TmDispSprite.x += 1;
						TmDispSprite.y += 1;
					});
				});
			}

		}

	}


	const buttons = document.querySelectorAll(".ax-btn1 a, .ax-btn2 a span, .ax-btn5 a span");
	buttons.forEach(btn => {
		const split = new SplitText(btn, { type: "chars" });
		gsap.set(split.chars, { y: 0, opacity: 1 });
		btn.addEventListener("mouseenter", () => {
			gsap.fromTo(
				split.chars,
				{ x: 20, rotate: 180, opacity: 0 },
				{
					x: 0,
					opacity: 1,
					duration: 0.4,
					rotate: 0,
					stagger: 0.04,
					ease: "power3.out"
				}
				);
		});
	});

	const items = document.querySelectorAll(".ax-whyc3-item");

	items.forEach(item => {
		const heading = item.querySelector(".item-numb h3");
		if (!heading) return;

		const split = new SplitText(heading, { type: "chars" });

		gsap.set(split.chars, { y: 0, opacity: 1 });

		item.addEventListener("mouseenter", () => {
			gsap.fromTo(
				split.chars,
				{ y: 20, rotateX: 5, opacity: 0 },
				{
					y: 0,
					rotateX: 0,
					opacity: 1,
					duration: .5,
					stagger: .2,
					ease: "power3.out"
				}
				);
		});
	});

	if ($('.scene').length > 0 ) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 10.0,
		}); 
	}


	$('.odometer').appear(function () {
		var $this = $(this); 
		var countNumber = $this.attr("data-count");
		$this.html(countNumber);
	});


	var AXFT = gsap.timeline({
		scrollTrigger: {
			trigger: ".ax-ft1-content",
			start: "top 70%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXFT
	.from(".ax-ft1-item", {
		yPercent: 100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	})




	gsap.utils.toArray(' .top_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, y: "300"})
	});

	gsap.utils.toArray(' .top_view8').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 20%",
				end: "top 0%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, y: "300"})
	});

	gsap.utils.toArray(' .top_view5').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 95%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: .5, yPercent: 100})
	});





	gsap.utils.toArray(' .top_view2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 30%",
				end: "top 0%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, rotate: 360, y: "-300"})
	});


	gsap.utils.toArray(' .top_view2_2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 90%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, opacity: 0,  y: "300"})
	});





	gsap.utils.toArray(' .top_view3').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 80%",
				end: "top 50%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, opacity: 0, y: "30"})
	});

	gsap.utils.toArray(' .left_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, x: "-300"})
	});

	gsap.utils.toArray(' .right_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, x: "300"})
	});

	gsap.utils.toArray(' .right_view2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 100%",
				end: "top 30%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, {  scale: 1, x: "-100"})
	});

	gsap.utils.toArray(' .top_view4').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 4,
				start: "top 130%",
				end: "top 120%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: .5, y: "300"})
	});

	gsap.utils.toArray(".img-parallax").forEach(function(container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false,
			},
		}); 
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		}); 
	});

	$('.ax_item_active').on('mouseover', function () {
		var $group = $(this).closest('[data-nx-group]');
		$group.find('.ax_item_active').removeClass('active');
		$(this).addClass('active');
	});


	if (window.matchMedia("(min-width: 1200px)").matches) { 
		document.querySelectorAll(".ax-project2-wrapper").forEach((item) => {
			ScrollTrigger.create({
				trigger: item,
				pin: true,
				pinSpacing: true,
				start: "top 8%",
				end: "+=100%", 
				markers: false 
			});
		});


		gsap.utils.toArray('.ax-project2-content1').forEach((el, index) => { 
			let Vertex = gsap.timeline({
				scrollTrigger: {
					trigger: ".ax-project2-content1",
					scrub: 6,
					start: "top 10%",
					end: "bottom 20%",
					toggleActions: "play none none reverse", 
					markers: false
				}
			})

			Vertex
			.set(el, {transformOrigin: 'top bottom'})
			.fromTo(el, { x: 0  }, { x: -600 , duration: 30, immediateRender: false})
		});


		gsap.utils.toArray('.ax-project2-content2').forEach((el, index) => { 
			let Vertex = gsap.timeline({
				scrollTrigger: {
					trigger: ".ax-project2-content2",
					scrub: 6,
					start: "top 50%",
					end: "bottom 20%",
					toggleActions: "play none none reverse", 
					markers: false
				}
			})

			Vertex
			.set(el, {transformOrigin: 'top bottom'})
			.fromTo(el, { x: 0  }, { x: 400 , duration: 30, immediateRender: false})
		});
	}
	if($(".ax-project2-wrapper").length) {
		const circle = document.querySelector(".progress-circle");
		const radius = circle.r.baseVal.value;
		const circumference = 2 * Math.PI * radius;
		gsap.set(circle, {
			strokeDasharray: circumference,
			strokeDashoffset: circumference
		});

		gsap.to(circle, {
			strokeDashoffset: 0,
			scrollTrigger: {
				trigger: ".ax-btn-cir",
				start: "top 40%",
				end: "top -80%",
				scrub: true,
				markers: false
			}
		});

	}
	if($(".ax-testi2-slider").length) {
		var swiper3 = new Swiper(".ax-tst-thumb-slider", {
			speed: 500,
			loop: true,
			autoplay: {
				delay: 6000,
			},
			slideToClickedSlide: false,
			centeredSlides: true,
			allowTouchMove: false,
			breakpoints: {
				0: {
					slidesPerView: 5,
				},
				576: {
					slidesPerView: 5,
				},
				767: {
					slidesPerView: 5,
				},
				768: {
					slidesPerView: 5,
				},
				992: {
					slidesPerView: 5,
				},
			},

		});
		var swiper2 = new Swiper(".ax-testi2-slider", {
			speed: 500,
			loop: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: 6000,
			},
			thumbs: {
				swiper: swiper3,
			},

		});
	}


	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var WHYchoose = gsap.timeline({
			scrollTrigger: {
				trigger: '.ax-why-c2-content',
				start: "top 70%",
				end: "top 20%",
				scrub: 1,
				markers: false,
			}

		});
		WHYchoose
		.from( ".ax-wc2-item2 .item-item .hand-img1" , {   x: -300,   duration: 2, ease: "power2.out"})
		.from( ".ax-wc2-item2 .item-item .hand-img2" , {   x: 300,   duration: 2, ease: "power2.out"},"< .5")
		.from( ".ax-wc2-item2 .item-img-wrap li:nth-child(2)" , { opacity: 0,  x: 100, rotate: 15,   duration: 2, ease: "power2.out"},"< .5")
		.from( ".ax-wc2-item2 .item-img-wrap li:nth-child(4)" , { opacity: 0,  x: 100, rotate: 15,   duration: 2, ease: "power2.out"},"< .5")
		.from( ".ax-wc2-item2 .item-img-wrap li:nth-child(3)" , { opacity: 0,  x: -100, rotate: -15,   duration: 2, ease: "power2.out"},"< .5")
		.from( ".ax-wc2-item2 .item-img-wrap li:nth-child(5)" , { opacity: 0,  x: -100, rotate: -15,   duration: 2, ease: "power2.out"},"< .5")

	};


	var AXC = gsap.timeline({
		scrollTrigger: {
			trigger: ".ax-ab2-content",
			start: "top 30%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXC
	.from(".ax-ab2-img-wrap .ax-ab2-client .top-wrap li", {
		xPercent: 100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	})

	var AXC2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".ax-wc2-item3 .item-img ul",
			start: "top 90%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXC2
	.from(".ax-wc2-item3 .item-img ul li", {
		xPercent: 100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	})

	var AXC3 = gsap.timeline({
		scrollTrigger: {
			trigger: ".ax-ab3-card1",
			start: "top 90%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXC3
	.from(".ax-ab3-card1 .item-client li", {
		xPercent: 100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	})

	var AXC4 = gsap.timeline({
		scrollTrigger: {
			trigger: ".ax-workp3-bottom",
			start: "top 90%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXC4
	.from(".ax-workp3-bottom .client-text li", {
		xPercent: 100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	}) 


	var AXC5 = gsap.timeline({
		scrollTrigger: {
			trigger: ".ax-ab5-img-wrap",
			start: "top 40%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXC5
	.from(".ax-ab5-client li", {
		xPercent: 100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	}) 



	if ($(".progress-bar").length) {
		$(".progress-bar").appear(function () {
			var current_item = $(this);

			if (current_item.hasClass("appeared")) return;

			var percent = parseInt(current_item.data("percent"), 10);
			current_item.addClass("appeared").css("width", percent + "%");

			var $counter = $("<span>0%</span>");
			current_item.parent().append($counter);

			var count = 0;
			var speed = 20; 

			var interval = setInterval(function () {
				count++;
				$counter.text(count + "%");

				if (count >= percent) {
					clearInterval(interval);
					$counter.text(percent + "%");
				}
			}, speed);
		});
	}




	const accordionItems = document.querySelectorAll('.ax-trust-accordion .accordion-item, .ax-faq4-accordion .accordion-item, .ax-faq5-wrapper .accordion-item');
	accordionItems.forEach(item => {
		const btn = item.querySelector('.ax-trust-accordion .accordion-button, .ax-faq4-accordion .accordion-button, .ax-faq5-wrapper .accordion-button');
		btn.addEventListener('click', () => {
			accordionItems.forEach(i => i.classList.remove('active'));
			setTimeout(() => {
				if (!btn.classList.contains('collapsed')) {
					item.classList.add('active');
				}
			}, 200);
		});
	});


	function AXSER3() {
		$('.ax-ser3-item__head').on('click', function (e) {
			e.preventDefault();

			let $parent = $(this).parent();
			let $body = $parent.find('.ax-ser3-item__body');
			let $icon = $parent.find('.item-icon');
			let currentIndex = $parent.attr('data-item');

			$('.ax-ser3-img').removeClass('active');
			$(`.ax-ser3-img[data-item=${currentIndex}]`).addClass('active');

			if ($parent.hasClass('active')) {
				$body.stop().slideUp('fast');
				$icon.stop().slideUp('fast');
				$parent.removeClass('active');
			} else {
				$('.ax-ser3-item__body').stop().slideUp('fast');
				$('.item-icon').stop().slideUp('fast');
				$('.ax-ser3-item').removeClass('active');

				$body.stop().slideDown('fast');
				$icon.stop().slideDown('fast');
				$parent.addClass('active');
			}
		});
	}
	AXSER3();

	if (window.matchMedia("(min-width: 1400px)").matches) { 
		$(document).on("mousemove", function (e) {
			$(".cursor-outline, .cursor-dot").css({
				top: e.clientY,
				left: e.clientX
			});
		});

		var headlineElements = $(".ax-text-scr3");

		headlineElements.on("mouseenter", function () {
			$(".ax-shadow").addClass("highlight-cursor-head");
		});

		headlineElements.on("mouseleave", function () {
			$(".ax-shadow").removeClass("highlight-cursor-head");
		});


	}

	if (window.matchMedia("(min-width: 1200px)").matches) { 
		document.querySelectorAll('.ax-trigger-section').forEach((section) => {
			let SecTitle = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top -5%",
					end: "top -100%",
					scrub: 1,
					pin: false,
					pinSpacing: false,
					markers: false,
				}
			});

			SecTitle.from(section.querySelector('.ax-team4-item._1'), { y: -1180, x: -50, filter: "blur(6px)", scale: .2, duration: 1, ease: "power2.out"});
			SecTitle.from(section.querySelector('.ax-team4-item._5'), { y: -1180,  x: 50, filter: "blur(6px)", scale: .2, duration: 1, ease: "power2.out"},"< ");
			SecTitle.from(section.querySelector('.ax-team4-item._2'), { y: -720,  x: -350, filter: "blur(6px)", scale: .2, duration: 1, ease: "power2.out"},"< ");
			SecTitle.from(section.querySelector('.ax-team4-item._4'), { y: -720,  x: 360, filter: "blur(6px)", scale: .2, duration: 1, ease: "power2.out"},"< ");
			SecTitle.from(section.querySelector('.ax-team4-item._3'), { y: -950,   filter: "blur(6px)", scale: .2, duration: 1, ease: "power2.out"},"< ");
		});
	}

	document.querySelectorAll(".ax-team3-content").forEach((item) => {
		ScrollTrigger.create({
			trigger: item,
			start: "top 45%",  
			toggleClass: { targets: item, className: "active" },
			once: false,
			markers: false,
		});
	});

	document.querySelectorAll(".ax-increase-pro-wrap").forEach((item) => {
		ScrollTrigger.create({
			trigger: item,
			start: "top 60%",  
			toggleClass: { targets: item, className: "active" },
			once: false,
			markers: false,
		});
	});

	var EdProg5 = gsap.timeline({
		scrollTrigger: {
			trigger: ".ax-workp3-content",
			start: "top 70%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	EdProg5
	.from(".ax-workp3-item", {
		xPercent: -100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	})






	if ($('.ax-ab4-icon-wrapper').length > 0 ) {
		document.addEventListener("DOMContentLoaded", () => {
			const wrapper = document.querySelector(".ax-ab4-icon-wrapper ul");
			const items = wrapper.querySelectorAll("li");
			const radius = 200;
			const centerX = wrapper.clientWidth / 2;
			const centerY = wrapper.clientHeight / 2;
			const total = items.length;
			const angleStep = (2 * Math.PI) / total;

			items.forEach((item, index) => {
				const angle = index * angleStep;

				const x =
				centerX + radius * Math.cos(angle) - item.offsetWidth / 2;
				const y =
				centerY + radius * Math.sin(angle) - item.offsetHeight / 2;

				item.style.left = `${x}px`;
				item.style.top = `${y}px`;
			});
		});

	}

	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var ATWORKPROCESS = gsap.timeline({
			scrollTrigger: {
				trigger: '.ax-workp4-area',
				start: "top 22%",
				end: "top -100%",
				scrub: 1,
				pin: true,
				pinSpacing: true,
				markers: false,
			}

		});
		ATWORKPROCESS
		.from( ".ax-workp4-item._1" , {  scale: 0.5, rotateY: -130,  yPercent: 150,   duration: 1, ease: "power2.out"})
		.from( ".ax-workp4-item._2" , {  scale: 0.5, rotateY: -130,  yPercent: 150,   duration: 1, ease: "power2.out"})
		.from( ".ax-workp4-item._3" , {  scale: 0.5, yPercent: 150, rotateY: -130,   duration: 1, ease: "power2.out"})
	};


	if (window.matchMedia("(min-width: 1200px)").matches) {
		const ServiceCardWrappers = gsap.utils.toArray(".ax-pro4-item-wrap");

		ServiceCardWrappers.forEach((wrapper, index) => {
			const cardItem = wrapper.querySelector(".ax-pro4-item");
			const nextWrapper = ServiceCardWrappers[index + 1];
			if (index < ServiceCardWrappers.length - 1) {
				gsap.to(cardItem, {
					opacity: 0,
					ease: "none",
					scrollTrigger: {
						trigger: wrapper,
						start: `top ${120 + 0 * index}`, 
						endTrigger: ".ax-pro4-content",
						end: "bottom 69%",
						pin: true,
						pinSpacing: false,
						scrub: true,
						onUpdate: (self) => {
							if (nextWrapper) {
								const nextRect = nextWrapper.getBoundingClientRect();
								const currentRect = wrapper.getBoundingClientRect();
								const distance = nextRect.top - currentRect.top;
								const cardHeight = currentRect.height;
								let progress = gsap.utils.normalize(cardHeight, cardHeight * 0.4, distance);
								progress = gsap.utils.clamp(0, 1, progress);
								gsap.set(cardItem, { opacity: 1 - progress });
							}
						}
					},
				});
			} else {
				ScrollTrigger.create({
					trigger: wrapper,
					start: `top ${120 + 0 * index}`,
					endTrigger: ".ax-pro4-content",
					end: "bottom 70%",
					pin: true,
					pinSpacing: false
				});
			}
		});

		var ATWORKPROCESS = gsap.timeline({
			scrollTrigger: {
				trigger: '.mx-wc2-scrolbar',
				start: "top 14%",
				end: "bottom 100%",
				endTrigger: ".ax-pro4-wrap",
				scrub: 1,
				pin: true,
				pinSpacing: false,
				markers: false,
			}
		});

		ATWORKPROCESS.fromTo(".wc2-scrbar",
			{ height: "60px" },
			{ height: "100%", ease: "none" },
			0 
			);
	}

	if (window.matchMedia("(min-width: 992px)").matches) { 
		var Testi_pin = document.querySelectorAll(".ax-solution5-text")
		Testi_pin.forEach((item) => {
			gsap.to(item, {
				scrollTrigger: {
					trigger: item,
					markers: false,
					pin: true,
					pinSpacing: false,
					start: "top 20%",
					end: "bottom 70%",
				},
			});
		});
	}


	if (window.matchMedia("(min-width: 992px)").matches) {
		const ServiceCardItem = gsap.utils.toArray(".ax-sol5-item");
		const animateCard = (card, wrapper, index) => {
			gsap.to(card, {
				transformOrigin: "top center",
				duration: 2,
				scrub: 1.5,
				ease: "power1.out",
				scrollTrigger: {
					trigger: wrapper,
					start: `top ${120 + 40 * index}`, 
					end: "bottom 85%",
					endTrigger: ".ax-solution5-sec",
					pin: wrapper,
					pinSpacing: false,
					markers: false,
				},
			});
		};
		ServiceCardItem.forEach((wrapper, index) => animateCard([index], wrapper, index));
	} 


	if ($('.ax-part5-slider').length > 0 ) {
		var slider = new Swiper('.ax-part5-slider', {
			spaceBetween: 50,
			slidesPerView: 7,
			loop: true,
			autoplay: {
				enabled: true,
				delay: 1000
			},
			speed: 1000,
			breakpoints: {
				'1600': {
					slidesPerView: 7,
				},
				'1200': {
					slidesPerView: 5,
				},
				'992': {
					slidesPerView: 4,
				},
				'768': {
					slidesPerView: 4,
				},
				'576': {
					slidesPerView: 3,
				},
				'480': {
					slidesPerView: 2,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	}; 

	document.querySelectorAll('.ax-cs5-slider-wrap').forEach((sliderEl) => {

		const section = sliderEl.closest('.ax-cs5-tab-desc');

		const swiper = new Swiper(sliderEl, {
			slidesPerView: 3,
			centeredSlides: true,
			loop: true,
			speed: 1000,
			spaceBetween: 0,

			navigation: {
				nextEl: section.querySelector('.ax-cs5-next'),
				prevEl: section.querySelector('.ax-cs5-prev'),
			},

			breakpoints: {
				1200: { slidesPerView: 3 },
				991: { slidesPerView: 1, spaceBetween: 24 },
				576: { slidesPerView: 1, spaceBetween: 24 },
				0:   { slidesPerView: 1, spaceBetween: 24 },
			}
		});

	});


	if ($('.ax-testi5-slider').length > 0 ) {
		var slider = new Swiper('.ax-testi5-slider', {
			spaceBetween: 50,
			slidesPerView: 1,
			effect: "fade",
			loop: true,
			navigation: {
				nextEl: ".ax-tst5-next",
				prevEl: ".ax-tst5-prev",
			},
			autoplay: {
				enabled: true,
				delay: 4000
			},
			speed: 1000,
		});
	}; 


	var AXFT = gsap.timeline({
		scrollTrigger: {
			trigger: ".ax-why-c5-item5",
			start: "top 70%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
	})
	AXFT
	.from(".ax-why-c5-item5 .item-chat .item-img", {
		yPercent: -100,
		opacity: 0,
		ease: "back.out(1.5)",
		duration: 1, 
		stagger: -.2,
	})


	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var TVABT = gsap.timeline({
			scrollTrigger: {
				trigger: '.ax-testi5-img-wrapper',
				start: "top 65%",
				toggleActions: 'play none none reverse',
				markers: false,
			}

		});
		TVABT
		.from(".ax-testi5-img-wrapper", { opacity: 0,   scale: .8, duration: 1,   ease: "power1.out" })

	};


	if($(".bottom-text").length) {
		var aniTitle1 = $(".bottom-text");
		if(aniTitle1.length == 0) return; gsap.registerPlugin(SplitText); aniTitle1.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});

			gsap.set(el, { perspective: 400 });

			if( $(el).hasClass('bottom-text') ){
				gsap.set(el.split.chars, {
					yPercent: 100,
					opacity: 0,

				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play reverse play reverse",
					markers: false,

				},

				yPercent: 0,
				xPercent: 0,
				opacity: 1,
				duration: 2,
				stagger: .1,
				ease: "bounce.out",
			});

		});
	}





})(jQuery);