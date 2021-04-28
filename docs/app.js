$(function(){
	
/* 	fixed header*/
	let header=$("#header");
	let intro=$("#intro"); 
	let introH=intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	checkScroll(introH, scrollPos);
	
	

	

	$(window).on("scroll resize", function(){
		introH=intro.innerHeight();
		scrollPos=$(this).scrollTop();
		checkScroll(introH, scrollPos);
	});

	function checkScroll(introH, scrollPos){
		if(scrollPos+50>introH){
			header.addClass("fixed");
		}else{
			header.removeClass("fixed");
		}
	}
	
        /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();  //отмена стандартного поведения кнопки
		
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;


        $("html, body").animate({
            scrollTop: elementOffset - 80
        }, 700);
        if($(window).width()<=991){$("#nav").slideToggle(300, );}
    });
	
	
/*
	вывод меню
*/
		if($(window).width()<=991){
		$("#nav").slideUp(0, );
		$("#initial_slideToggle").css({"display":"flex"});
	}
	let widthW = $(window).width();
	$(window).on("resize", function(){
		if($(window).width()<=991 && widthW >= 991){
			$("#nav").slideUp(0, );
			$("#initial_slideToggle").css({"display":"flex"});
			let widthW = $(window).width();
		}else if($(window).width()>991){
			$("#nav").css({"display":"flex"})
			let widthW = $(window).width();
		}
	});
	
	$("#navToggle").on("click", function(event){
		event.preventDefault();
		$("#nav").slideToggle(300, );
	});
    
    

        
        //SLIDER
        
        let slider=$("#testimonials__slider");
        slider.slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  
		});
        
	//появление описания работ при нажатии

	const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i"); 
	
    $(".works__item").on("click", function(){
		if (devices.test(navigator.userAgent)){
	    	if(!($(this).hasClass("clicked"))){
			    $(this).children(".works__content").css({"opacity":"0"});
		    }
		    if($(this).children(".works__content").css("opacity")==="1"){
			    $(this).children(".works__content").css({"opacity":"0"});
			    $(this).addClass("clicked");
		    }else{
			    $(this).children(".works__content").css({"opacity":"1"});
			    $(this).addClass("clicked");
		    }
		}
		    
    });

        
});