;(function($) {
    "use strict";
    
window.addEventListener('load', function () { 

    // title-animation
    function wa_split_text() {

        var wa_st = $(".wa-split-text");
        if (wa_st.length === 0) return;
    
        gsap.registerPlugin(SplitText, ScrollTrigger);
    
        wa_st.each(function (index, wa_el) {
            // Skip RTL elements
        if ($(wa_el).css("direction") === "rtl" || $(wa_el).attr("dir") === "rtl") {
            return;
        }
    
            var wa_els = wa_el;
    
            const wa_split = new SplitText(wa_els, {
                type: "lines, words, chars",
                lineThreshold: 0.5,
                linesClass: "split-line",
            });
    
            var split_type_set = wa_split.chars;
    
            gsap.set(wa_els, { perspective: 400 });
    
            var settings = {
                scrollTrigger: {
                    trigger: wa_els,
                    toggleActions: "play none none none",
                    start: "top 86%",
                    once: true,
                },
                duration: 0.35,
                stagger: 0.02,
                ease: "expo.out",
            };
    
            if ($(wa_el).hasClass("split-in-fade")) {
                settings.opacity = 0;
            }
            if ($(wa_el).hasClass("split-in-right")) {
                settings.opacity = 0;
                settings.x = 50;
            }
            if ($(wa_el).hasClass("split-in-left")) {
                settings.opacity = 0;
                settings.x = -50;
            }
            if ($(wa_el).hasClass("split-in-up")) {
                settings.opacity = 0;
                settings.y = 80;
            }
            if ($(wa_el).hasClass("split-in-down")) {
                settings.opacity = 0;
                settings.y = -80;
            }
            if ($(wa_el).hasClass("split-in-rotate")) {
                settings.opacity = 0;
                settings.rotateX = 50;
            }
            if ($(wa_el).hasClass("split-in-scale")) {
                settings.opacity = 0;
                settings.scale = 0.5;
            }
    
            if ($(wa_el).hasClass("split-up")) {
    
                wa_split.split({ type: "words" });
                split_type_set = wa_split.words;
    
                $(split_type_set).each(function (i, elw) {
                    gsap.from(elw, {
                        opacity: 0,
                        duration: 0.65,
                        y: 40,
                        rotate: 10,
                        transformOrigin: "bottom right",
                        filter: "blur(5px)",
                        delay: 0.25 + i * 0.065,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: wa_el,
                            start: "top 86%",
                            toggleActions: "play none none none",
                        },
                    });
                });
    
            }
            else if ($(wa_el).hasClass("split-words-scale")) {
    			let atDelay = parseFloat(wa_el.getAttribute("data-delay")) || 0;

                wa_split.split({ type: "words" });
                split_type_set = wa_split.words;
    
                gsap.set(split_type_set, {
                    opacity: 0,
                    scale: (i) => (i % 2 === 0 ? 0 : 2),
                    force3D: true,
                });
    
                gsap.to(split_type_set, {
                    scrollTrigger: {
                        trigger: wa_el,
                        toggleActions: "play reverse play reverse",
                        start: "top 86%",
                    },
                    rotateX: 0,
                    scale: 1,
                    opacity: 1,
                    stagger: 0.03,
                    delay: atDelay,
                });
    
            }
            else {
                var wa_anim = gsap.from(split_type_set, settings);
    
                if ($(wa_el).hasClass("hover-split-text")) {
                    $(wa_el).on("mouseenter", function () {
                        wa_anim.restart();
                    });
                }
            }
    
        });
    }
    wa_split_text();

    /* 
			wa-split-clr
		*/	
		if ($(".wa-split-clr").length) {
			var waSplitClr = $(".wa-split-clr");
			if (waSplitClr.length == 0) return;

			gsap.registerPlugin(SplitText);

			waSplitClr.each(function (index, el) {
				el.split = new SplitText(el, {
					type: "lines,words,chars",
					linesClass: "split-line",
				});

				gsap.set(el, { perspective: 400 });

				let delayValue = $(el).attr("data-split-delay") || "0s";
				delayValue = parseFloat(delayValue) || 0; 

				if ($(el).hasClass("wa-split-clr")) {
					gsap.set(el.split.chars, {
						x: "50",
						opacity: 0,
					});
				}

				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 86%",
						toggleActions: 'play none none reverse',
					},
					x: 0,
					opacity: 1,
					duration: 0.4,
					ease: "ease1",
					stagger: 0.02,
					delay: delayValue, 
				});
			});
		}

    

    // button-animation
    if ($(".wa_btn_split_1").length) {
        var wa_btn_split_1 = $(".wa_btn_split_1");
        gsap.registerPlugin(SplitText);

        wa_btn_split_1.each(function (index, el) {
             // Skip RTL elements
        if ($('body').hasClass('rtl') || $(el).css("direction") === "rtl" || $(el).attr("dir") === "rtl") {
            return;
        }
            el.split = new SplitText(el, {
                type: "words,chars",
            });

            $(el).on("mouseenter", function () {
                el.split.chars.forEach((char, i) => {

                    gsap.fromTo(
                        char,
                        { x: 10, opacity: 0, },
                        {
                            x: 0,
                            opacity: 1,
                            duration: 0.4,
                            ease: "power2.out",
                            delay: i * 0.03
                        }
                    );
                });
            });
        });
    }


    // hero-1-animation
    const asHero4 = gsap.timeline(); 
    asHero4.from(".as-hero-1-img img", {
        transformOrigin: "100% 50%",
        rotateX: -10, 
        rotateY: 75,
        delay: 1,
        duration: 1.5,
    });
    asHero4.to(".as-hero-1-bg-img img", {
        scale: 1.2,
        duration: 15,
    },"<");

    const asHeroScroll4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".as-hero-1-area",
            start: "top 0%",
            end: "top -50%",
            scrub: true,
            markers: false,
        }
    }); 
    asHeroScroll4.to(".as-hero-1-img", {
        yPercent: 10, 
    });

    /* 
		add-active-class
	*/
	const waAddClass = gsap.utils.toArray('.wa_add_class');
	waAddClass.forEach(waAddClassItem => {
		gsap.to(waAddClassItem, {
			scrollTrigger: {
				trigger: waAddClassItem,
				start: "top 90%",
				end: "bottom bottom",
				toggleActions: "play none none reverse",
				toggleClass: "active",
				once: true,
				markers: false,
			}
		});
    });
    
    


    
    // hero-2-slider
    if ($('.as_hero2_slider').length) {
        var as_hero2_slider = new Swiper(".as_hero2_slider", {
            loop: true,
            speed: 500,
            spaceBetween: 0,

            effect: "fade",
			fadeEffect: {
				crossFade: true
			},

            autoplay: {
            	delay: 6000,
            },

            on: {
                slideChangeTransitionStart: () => {
                    h2_split_text();
                },
            },

        });


        function h2_split_text() {
            const currentSlide = document.querySelectorAll('.swiper-slide-active .h2_split_text');
        
            const split = new SplitText(currentSlide, { 
                type: 'lines,words',
                linesClass: "split-line"
            });
        
            gsap.set(split.words, { 
                opacity: 0,
                filter: "blur(5px)",
            });
        
            gsap.to(split.words, {
                opacity: 1,
                filter: "blur(0px)",
                stagger: 0.3,  
                delay: 0.5,
                duration: .5,
            });
        }
        
        h2_split_text();
    }

})

if($('.nm_hero_img_slide').length) {

	let nm_hero_img_slide = new Swiper('.nm_hero_img_slide', {
		loop: true,
		speed: 1000,

		effect: "creative",
		creativeEffect: {
			prev: {
				shadow: false,
				translate: [0, 0, -400],
			},
			next: {
				translate: ["100%", 0, 0],
			},
		},

        autoplay: {
            delay: 4000,
        },



	});
	

}


// about-1-img-animation
let asAbout1img = gsap.timeline({
    scrollTrigger: {
      trigger: ".as-about-1-fold-scene",
      start: "top 70%",
      end: "bottom 80%",
      scrub: 1,
      markers: false,
    }
})
.to(".as-about-1-fold-scene .left", {
    rotateY: 0,
    duration: 1.4,
    ease: "power3.out"
})
.to(".as-about-1-fold-scene .right", {
    rotateY: 0,
    duration: 1.4,
    ease: "power3.out"
}, "<")
.from(".as-about-1-fold-scene-line", {
    scaleX: 0,
    duration: 1.4,
    ease: "power3.out"
}, "<")
.from(".as-about-1-progress", {
    yPercent: 10,
    opacity: 0,
    duration: 1,
},"<50%");


// achieve-1-circle
let asAh1circle = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-achieve-1-award ",
        start: "top 70%",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

asAh1circle.from(".as-achieve-1-award .bg-shape-2 img", { 
    rotate: 90,
    duration: 2,
});

// achieve-1-shape
let asAh1shpe = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-achieve-1-projects ",
        start: "top 70%",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

asAh1shpe.from(".as-achieve-1-projects .img-elm-single-clr", { 
    yPercent: 100,
    duration: 1,
});
asAh1shpe.from(".as-achieve-1-projects .img-elm-single", { 
    yPercent: 100,
    duration: 1,
},"<50%");




// achieve-1-bg-shape
let asAchiBgShape = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-achieve-1-bg-img",
		toggleActions: "play none none reverse",
        scrub: true,
		markers: false,
	},
});
asAchiBgShape.from(".as-achieve-1-bg-img img", { 
    yPercent: -40,
});

// footer-1-shape
let asFooter1shape = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-footer-1-favicon",
		toggleActions: "play none none reverse",
        scrub: true,
		markers: false,
	},
});

asFooter1shape.from(".as-footer-1-favicon img", { 
    yPercent: -100,
});

// footer-1-btn
let asFooter1Btn = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-footer-1-lets-btn-ani",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

asFooter1Btn.from(".as-footer-1-lets-btn-ani", { 
    duration:2.5,
    ease: "elastic.out(1,0.3)",
    scale: 0,
});

// faqs-big-title
let asFaqs1 = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-faqs-1-big-title",
        end: "top 60%", 
		toggleActions: "play none none reverse",
        scrub: true,
		markers: false,
	},
});

asFaqs1.from(".as-faqs-1-big-title", { 
    y: 200,
});





// team-1-slider
if ($('.as_t1_slider').length) {
	var as_t1_slider = new Swiper(".as_t1_slider", {
		loop: true,
		speed: 400,
		spaceBetween: 0,
		slidesPerView: 4,

		// autoplay: {
		// 	delay: 5000,
		// },

		navigation: {
			nextEl: ".as_t1_slider_next",
			prevEl: ".as_t1_slider_prev",
		},


		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 4,
			},

		},

	});

}


// services-1-tabs-btn
document.querySelectorAll('.as-services-1-tabs-btn .nav-link')
.forEach(tab => {

    tab.addEventListener('mouseenter', function () {
        const bsTab = new bootstrap.Tab(this);
        bsTab.show();
    });

});



// projects-1-slider
if ($('.as_p1_slider_preview').length) {

	let as_p1_slider_preview = new Swiper('.as_p1_slider_preview', {
		speed: 1000,
	});
  
	let as_p1_slider_main = new Swiper('.as_p1_slider_main', {
		speed: 1000,

        navigation: {
			nextEl: ".as_p1_slider_main_next",
			prevEl: ".as_p1_slider_main_prev",
		},

		thumbs: {
			swiper: as_p1_slider_preview,
		},
	});
  
}
 




if($(".as-testimonial-1-card-all").length) {
    function initStackCards() {

        const container = document.querySelector('.as-testimonial-1-card-all');
        const cards = container.querySelectorAll('.as-testimonial-1-card-single');
    
        const offset = 44; // gap between cards
        const baseHeight = cards[0].offsetHeight;
        let maxHeight = 0;
    
    
        cards.forEach((card, index) => {
            card.style.bottom = `${index * offset}px`;
    
            // optional: different background shade
            // const darkness = 15 + (index * 8);
            // card.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness + 10})`;
    
            const cardHeight = card.offsetHeight;
            if (cardHeight > maxHeight) {
                maxHeight = cardHeight;
            }
    
            card.style.zIndex =  index;
        });
    
        const totalHeight = baseHeight + (cards.length - 1) * offset;
    
        container.style.height = totalHeight + 'px';
    }
    
    window.addEventListener('load', initStackCards);
    window.addEventListener('resize', initStackCards);
}






/* 
    data-mask-image
*/
$('[data-mask-image]').each(function() {
    $(this).css('mask-image', 'url('+ $(this).attr('data-mask-image') + ')');
});


/* 
    add-class-remove-class
*/
$(document).on('click', '.wa_toggle_active', function () {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active').siblings().removeClass('active');
	}

});


/* 
	faqs-active-class
*/
$(document).on('click', '.wa_accordion_item', function () {

	if ($(this).hasClass('active')) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active').siblings().removeClass('active');
	}

});


if ($(".as-testimonial-1-card-single").length) {
    const cards = document.querySelectorAll('.as-testimonial-1-card-single');
    const upBtn = document.querySelector('.up-button');
    const downBtn = document.querySelector('.down-button');
    let currentIndex = cards.length - 1;
    upBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            cards[currentIndex].style.transform = 'translateY(-150%)';
            currentIndex--;
        }
    });
    downBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            cards[currentIndex].style.transform = 'translateY(0%)';
        }
    });
}


// price-1-class
if($(".wa_hover_class_toggle").length) {
    const wa_hover_class = document.querySelectorAll(".wa_hover_class_toggle");
    const defaultActive = document.querySelector(".wa_hover_class_toggle.active");
    wa_hover_class.forEach(card => {
        card.addEventListener("mouseenter", function () {
            wa_hover_class.forEach(c => c.classList.remove("active"));
            this.classList.add("active");
        });
        card.addEventListener("mouseleave", function () {
            wa_hover_class.forEach(c => c.classList.remove("active"));
            if (defaultActive) {
                defaultActive.classList.add("active");
            }

        });
    });
};

// choose-1-class
if($(".as-choose-1-features-single").length) {
    const ch1_hover_class = document.querySelectorAll(".as-choose-1-features-single");
    const ch1_defaultActive = document.querySelector(".as-choose-1-features-single.active2");
    ch1_hover_class.forEach(card2 => {
        card2.addEventListener("mouseenter", function () {
            ch1_hover_class.forEach(c => c.classList.remove("active2"));
            this.classList.add("active2");
        });
        card2.addEventListener("mouseleave", function () {
            ch1_hover_class.forEach(c => c.classList.remove("active2"));
            if (ch1_defaultActive) {
                ch1_defaultActive.classList.add("active2");
            }

        });
    });
};


/* 
    marquee-left-nopause
*/

$('.wa_marquee_left_nopause').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'left',
	duplicated: true,
	pauseOnHover: false,
})

$('.wa_marquee_right_nopause').marquee({
	speed: 20,
	gap: 0,
	delayBeforeStart: 0,
	startVisible:true,
	direction: 'right',
	duplicated: true,
	pauseOnHover: false,
})



// achieve-2-scroll-animation
if (window.matchMedia("(min-width: 1400px)").matches) {  
	let asAh2 = gsap.timeline({
		scrollTrigger: {
			trigger: ".as-achieve-2-area",
			start: "top 100%", 
            end: "top 0%",
			toggleActions: "play none none reverse",
			scrub: true,
			markers: false,
		},
	});
	
	asAh2.from(".as-achieve-2-client", {y: -780});
	asAh2.from(".as-achieve-2-card.card-1", { xPercent: -80, autoAlpha: 0});
	asAh2.from(".as-achieve-2-card.card-2", { xPercent: -100, autoAlpha: 0});
}


if ($(".wa_magnetic_1_trigger").length) {
    var waMagnets2v2 = document.querySelectorAll('.wa_magnetic_1_trigger');
    var waStrength2v2 = 30;

    waMagnets2v2.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet2);
        magnet.addEventListener('mouseout', function(event) {
            const innerElements = event.currentTarget.querySelectorAll('.wa_magnetic_1_elm');
            innerElements.forEach((elm) => {
                gsap.to(elm, {
                    x: 0,
                    y: 0,
                    duration: 3,
                    ease: "ease1"
                });
            });
        });
    });

    function moveMagnet2(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();
        const innerElements = magnetButton.querySelectorAll('.wa_magnetic_1_elm');

        const xMove = (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength2v2;
        const yMove = (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength2v2;

        innerElements.forEach((elm) => {
            gsap.to(elm, {
                x: - xMove,
                y: - yMove,
                duration: 3,
                ease: "ease1"
            });
        });
    }
}


if ($(".wa_magnetic_2_trigger").length) {

    var waMagnets3v3 = document.querySelectorAll('.wa_magnetic_2_trigger');
    var waStrength3v3 = 30;

    waMagnets3v3.forEach((magnet) => {

        magnet.addEventListener('mousemove', waMoveMagnet3v3);

        magnet.addEventListener('mouseout', function(event) {

            const innerElements = event.currentTarget.querySelectorAll('.wa_magnetic_2_elm');

            innerElements.forEach((elm) => {
                gsap.to(elm, {
                    x: 0,
                    y: 0,
                    duration: 3,
                    ease: "power2.out"
                });
            });

        });

    });

    function waMoveMagnet3v3(event) {

        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();

        const innerElements = magnetButton.querySelectorAll('.wa_magnetic_2_elm');

        const xMove = (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength3v3;
        const yMove = (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength3v3;

        innerElements.forEach((elm) => {
            gsap.to(elm, {
                x: xMove,
                y: yMove,
                duration: 3,
                ease: "power2.out"
            });
        });

    }

}

if (window.matchMedia("(min-width: 1400px)").matches) {

    let asProject2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".as-projects-2-height",
            start: "top top", 
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            scrub: true,
            markers: false,
        },
    });
    
    asProject2.from(".as-projects-2-item-content:nth-of-type(1)", {height: "496px"});
    asProject2.to(".as-projects-2-item-content:nth-of-type(2)", {height: "496px"},"<");
    asProject2.fromTo(".as-projects-2-item-content:nth-of-type(1) .title", {color: "#fff", opacity: 1,},{color: "white", opacity: .8},"<");
    asProject2.fromTo(".as-projects-2-item-content:nth-of-type(2) .title", {color: "white"},{color: "#fff", opacity: 1},"<");
    asProject2.to(".as-projects-2-item-content:nth-of-type(1) .bg-favicon", {opacity: 0},"<");
    asProject2.from(".as-projects-2-item-content:nth-of-type(2) .bg-favicon", {opacity: 0},"<");
    asProject2.to(".as-projects-2-item-content:nth-of-type(3)", {height: "496px"});
    asProject2.to(".as-projects-2-item-content:nth-of-type(2)", {height: "109px"},"<");
    asProject2.fromTo(".as-projects-2-item-content:nth-of-type(3) .title", {color: "white"},{color: "#fff", opacity: 1},"<");
    asProject2.to(".as-projects-2-item-content:nth-of-type(2) .title", {color: "white", opacity: .8},"<");
    asProject2.to(".as-projects-2-item-content:nth-of-type(2) .bg-favicon", {opacity: 0},"<");
    asProject2.from(".as-projects-2-item-content:nth-of-type(3) .bg-favicon", {opacity: 0},"<");
    asProject2.to(".as-projects-2-item-content:nth-of-type(4)", {height: "496px"});
    asProject2.fromTo(".as-projects-2-item-content:nth-of-type(4) .title", {color: "white"},{color: "#fff", opacity: 1},"<");
    asProject2.to(".as-projects-2-item-content:nth-of-type(3) .title", {color: "white", opacity: .8},"<");
    asProject2.to(".as-projects-2-item-content:nth-of-type(3)", {height: "109px"},"<");
    asProject2.to(".as-projects-2-item-content:nth-of-type(3) .bg-favicon", {opacity: 0},"<");
    asProject2.from(".as-projects-2-item-content:nth-of-type(4) .bg-favicon", {opacity: 0},"<");
    
    
    let asProject22 = gsap.timeline({
        scrollTrigger: {
            trigger: ".as-projects-2-height",
            start: "top top", 
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            scrub: true,
            markers: false,
        },
    });
    
    asProject22.to(".as-projects-2-item-img-single:nth-of-type(4)", {width: 0});
    asProject22.to(".as-projects-2-item-img-single:nth-of-type(4) .tags-list", {xPercent: -30, opacity: 0},"<");
    asProject22.to(".as-projects-2-item-img-single:nth-of-type(3)", {width: 0});
    asProject22.to(".as-projects-2-item-img-single:nth-of-type(3) .tags-list", {xPercent: -30, opacity: 0},"<");
    asProject22.to(".as-projects-2-item-img-single:nth-of-type(2)", {width: 0});
    asProject22.to(".as-projects-2-item-img-single:nth-of-type(2) .tags-list", {xPercent: -30, opacity: 0},"<");
}

if (window.matchMedia("(min-width: 1400px)").matches) {

    let asChoose2card = gsap.timeline({
        scrollTrigger: {
            trigger: ".as-choose-2-wrap-right",
            start: "top 70%", 
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            scrub: false,
            markers: false,
        },
    });
    
    asChoose2card.from(".as-choose-2-card", {xPercent: 100, duration: .5});
    asChoose2card.from(".as-choose-2-card-single.card-4", { x: 0, y: 0, rotate: 0, duration: .5});
    asChoose2card.from(".as-choose-2-card-single.card-3", { x: 0, y: 0, rotate: 0, duration: .5},"<50%");
    asChoose2card.from(".as-choose-2-card-single.card-2", { x: 0, y: 0, rotate: 0, duration: .5},"<50%");

}

if (window.matchMedia("(min-width: 1400px)").matches) {  

    let asTestimonial2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".as-testimonial-2-height",
            start: "top top", 
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            scrub: true,
            markers: false,
        },
    });
    
    asTestimonial2.from(".as-testimonial-2-card-single", { rotateX: -30, rotateY: 10, rotateZ: -2, y: 400, duration: 1, filter: "blur(10px)", autoAlpha: "auto", stagger: 1});

}



// counter-2-animation
let asCounter2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-counter-2-item",
        top: "top 80%",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

asCounter2.from(".as-counter-2-item .dot-line", { 
    width: 0,
    duration: 2,
    stagger: 0.1
});

asCounter2.from(".as-counter-2-item .number-x-disc", { 
    yPercent: -130,
    duration: 1,
    stagger: 0.1
},"<40%");



// industry-2-cursor-follow
if($(".as-industry-2-item").length) {
	const featureItems = document.querySelectorAll(".as-industry-2-item");

	featureItems.forEach((featureItem) => {
		const flair = featureItem.querySelector(".cursor-follow");
	
		gsap.set(flair, { scale: 0, opacity: 0, xPercent: -50, yPercent: -10 });
	
		featureItem.addEventListener("mouseenter", () => {
			gsap.to(flair, { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" });
		});


		featureItem.addEventListener("mousemove", (e) => {
			const rect = featureItem.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			gsap.to(flair, { x, y, duration: 0.1 });
		});
	
		featureItem.addEventListener("mouseleave", () => {
			gsap.to(flair, { scale: 0, opacity: 0, duration: 0.4, ease: "power3.in" });
		});
	});
	
}


// award-2-img-animation
let asAward2imgAnimation = gsap.timeline({
	scrollTrigger: {
		trigger: ".as-award-2-bg-img",
        start: "top 50%",
        end: "top 0%",
		toggleActions: "play none none reverse",
		markers: false,
	},
});

asAward2imgAnimation.to(".as-award-2-bg-img img:nth-of-type(1)", { 
    opacity: 0,
    duration: .5,
});

asAward2imgAnimation.to(".as-award-2-bg-img img:nth-of-type(2)", { 
    opacity: 1,
    duration: .5,
},"<50%");


// process-2-card-animation
if (window.matchMedia("(min-width: 1400px)").matches) {  
    let asProcess2card = gsap.timeline({
        scrollTrigger: {
            trigger: ".as-process-2-height",
            start: "top top",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            scrub: true,
            markers: false,
        },
    });
    
    asProcess2card.from(".as-process-2-card", { 
        yPercent: 60,
        autoAlpha: 0,
        stagger: .5,
    });
    
    asProcess2card.to(".as-process-2-card .hand-img", { 
        opacity: 0,
    });
    
    asProcess2card.to(".as-process-2-hand", { 
        opacity: 1,
    },"<");
    
    asProcess2card.to(".as-process-2-card", { 
        background: "transparent",
    },"<");
    
    asProcess2card.to(".as-process-2-hand .left-hand", { 
        x: 40,
    },"<");
    
    asProcess2card.to(".as-process-2-hand .right-hand", { 
        x: -40,
    },"<");
}


// team-2-card-animation
if (window.matchMedia("(min-width: 1400px)").matches) {  
    let asTeam2card = gsap.timeline({
        scrollTrigger: {
            trigger: ".as-team-2-wrap",
            start: "top 70%",
            end: "bottom bottom",
            toggleActions: "play none none reverse",
            markers: false,
        },
    });
    
    asTeam2card.from(".as-team-2-member.has-1", { 
        xPercent: 100,
        autoAlpha: 0,
        duration: .5,
    });
    
    asTeam2card.from(".as-team-2-member.has-4", { 
        xPercent: -100,
        autoAlpha: 0,
        duration: .5,
    },"<");
    

}


// wa-bg-parallax
gsap.utils.toArray(".wa_parallax_bg").forEach(element => {
	gsap.fromTo(
		element,
		{ backgroundPosition: "50% 0%" }, 
		{ 
			backgroundPosition: "50% 100%", 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: 1,    
				markers: false,  
			},
		}
	);
});

// wa-parallax-img
gsap.utils.toArray(".wa_parallax_img").forEach(element => {
	gsap.fromTo(
		element,
		{ objectPosition: "50% 110%" }, 
		{ 
			objectPosition: "50% 0%", 
			ease: "none",
			scrollTrigger: {
				trigger: element,
				scrub: true,    
				markers: false,     
			},
		}
	);
});

})(jQuery);