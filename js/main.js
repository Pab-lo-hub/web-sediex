;(function ($, window, undefined) {

	'use strict'; //jshint :)

	//Search bar trigger Functionallity

	var $searchClose = $('#search-bar');
	
	$('.search-nav').on('click', function (e) {
		e.preventDefault();
        
        var $this = $(this);
        
        if($this.hasClass('animatedNav')) return;
        
        $this.addClass('animatedNav');
        
		$searchClose.animate({
			top: "+=80px"
		}, 300);

	});

	$('#searchClose').on('click', function (e) {
		e.preventDefault();
		
		$('.animatedNav').removeClass('animatedNav');
		
		$searchClose.animate({
			top: "-=80px"
		}, 250);

	});
	
	
	//DropDowns Animation
	
    $('ul.nav li.dropdown').on('mouseenter', function () {
        $(this).find('>.dropdown-menu').stop(true,true).delay(200).slideDown();
    }).on('mouseleave', function () {
        $(this).find('>.dropdown-menu').stop(true,true).delay(200).slideUp();
    });
	
	 // Init tags input
    if( $("#tagsinput").length > 0 ){
        $("#tagsinput").tagsInput();
    };
    
    //Support for placeholders //Ie8
    $("input, textarea").placeholder();
    
	
	 // Make pagination demo work
    $(".pagination a").on('click',function(e) {
        e.preventDefault();
        if (!$(this).parent().hasClass("previous") && !$(this).parent().hasClass("next")) {
            $(this).parent().siblings("li").removeClass("active");
            $(this).parent().addClass("active");
        }
    });
    //collapse / faqs // This Pice handles both of the styles :)
    $('.collapse').on('show', function () {
        var $this = $(this);
        $this
	       .closest('.accordion-group').addClass('active').end()
	       
	  
		  .parent()
              .find('.btn-muted')
                .removeClass()
                    .addClass('btn-success')
                        .children('.icon-minus')
                            .removeClass()
                                .addClass('fui-plus-16');
	});
	$('.collapse').on('hide', function () {
	   var $this = $(this);
        $this
	       .closest('.accordion-group').removeClass('active').end()
	  
		  .parent()
              .find('.btn-success')
                .removeClass()
                    .addClass('btn-muted')
                        .children('.fui-plus-16')
                            .removeClass()
                                .addClass('icon-minus icon-large');
	});
	
	//Flickr JS Plugin
	if( $('.flickr-imgs').length > 0 ){
	   $('.flickr-imgs').jflickrfeed({
            limit: 8,
            qstrings: {
                id: '97861178@N08'
            },
            itemTemplate: 
            '<li>' +
                '<a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a>' +
            '</li>'
        });
	};
	
	//Portfolio effects Isotope // Filters
	
	(function(){

      var $portfolioContainer = $('#portfolio-container'), $filters= $('#filters');
    
      if($portfolioContainer.length && $().isotope){
    
        $portfolioContainer.imagesLoaded( function(){
          $portfolioContainer.isotope({
            // options...
            // resizable: false
            // itemSelector : '.element'
             
          });
        });
    
        $filters.find('a').click(function(){
          var $this = $(this), selector = $this.attr('data-filter');
          //checked if already has a class selected and do nothing
          if($this.hasClass('selected')){
            return false;
          }
          //checked if the one that i'm clickin doesn't have the class then find the one that has the class
          //and removed the class after that
          $this.parents($filters).find('.selected').removeClass('selected');
          //Just add the class selected to the new item
          $this.addClass('selected');
    
          $portfolioContainer.isotope({
            filter: selector
          });
          return false;
        });
      } //end if
      else{
        return;
      }
    
    })();
	
	
	//Checkbox and Radio Styles
	
	(function () {
	   // Custom checkbox and radios
        var setupLabel = function () {
            // Checkbox
            var checkBox = ".checkbox";
            var checkBoxInput = checkBox + " input[type='checkbox']";
            var checkBoxChecked = "checked";
            var checkBoxDisabled = "disabled";
        
            // Radio
            var radio = ".radio";
            var radioInput = radio + " input[type='radio']";
            var radioOn = "checked";
            var radioDisabled = "disabled";
        
            // Checkboxes
            if ($(checkBoxInput).length) {
                $(checkBox).each(function(){
                    $(this).removeClass(checkBoxChecked);
                });
                $(checkBoxInput + ":checked").each(function(){
                    $(this).parent(checkBox).addClass(checkBoxChecked);
                });
                $(checkBoxInput + ":disabled").each(function(){
                    $(this).parent(checkBox).addClass(checkBoxDisabled);
                });
            };
        
            // Radios
            if ($(radioInput).length) {
                $(radio).each(function(){
                    $(this).removeClass(radioOn);
                });
                $(radioInput + ":checked").each(function(){
                    $(this).parent(radio).addClass(radioOn);
                });
                $(radioInput + ":disabled").each(function(){
                    $(this).parent(radio).addClass(radioDisabled);
                });
            };
        };
        
        
        // First let's prepend icons (needed for effects)
        $(".checkbox, .radio").prepend("<span class='icon'></span><span class='icon-to-fade'></span>");
    
        $(".checkbox, .radio").on('click', function(){
            setupLabel();
        });
        setupLabel();
        

	})();
	
	// Init jQuery UI slider
    if( $('#slider').length > 0) {
    
        $("#slider").slider({
            min: 1,
            max: 5,
            value: 2,
            orientation: "horizontal",
            range: "min",
        });
        
        
        
       
    
    };

    if( $('#flex2').length > 0 ){
        //FlexSlider
         $(window).load(function() {
          $('.flexslider').flexslider({
            animation: "slide",
            smoothHeight: true,
            directionNav: false
          });
        });
    } else if( $('#flex1').length > 0  ) {
         $(window).load(function() {
          $('.flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 5500,
            animationSpeed: 1000,
            smoothHeight: true,
            controlNav: false,
            directionNav: true
            
          });
        });

    };
    
    // Init tooltips
//    $("[data-toggle=tooltip]").tooltip();
    
    (function () {
    
        var toggleHandler = function(toggle) {
            var toggle = toggle;
            var radio = $(toggle).find("input");
        
            var checkToggleState = function() {
                if (radio.eq(0).is(":checked")) {
                    $(toggle).removeClass("toggle-off");
                } else {
                    $(toggle).addClass("toggle-off");
                }
            };
        
            checkToggleState();
        
            radio.eq(0).click(function() {
                $(toggle).toggleClass("toggle-off");
            });
        
            radio.eq(1).click(function() {
                $(toggle).toggleClass("toggle-off");
            });
        };
        
            $(".toggle").each(function(index, toggle) {
                toggleHandler(toggle);
            });
    
    })();
    
    if( $('.fullwidthbanner').length > 0 ){
        $.noConflict();
                
        if ($.fn.cssOriginal !== undefined)   // CHECK IF fn.css already extended
        $.fn.css = $.fn.cssOriginal;
           
        $('.fullwidthbanner').revolution(
        {
            delay:9000,
            startwidth:960,
            startheight:500,
    
            onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off
    
            thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
            thumbHeight:50,
            thumbAmount:3,
    
            hideThumbs:0,
            navigationType:"none",				// bullet, thumb, none
            navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none
    
            navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
    
    
            navigationHAlign:"left",				// Vertical Align top,center,bottom
            navigationVAlign:"bottom",					// Horizontal Align left,center,right
            navigationHOffset:30,
            navigationVOffset:30,
    
            soloArrowLeftHalign:"left",
            soloArrowLeftValign:"center",
            soloArrowLeftHOffset:20,
            soloArrowLeftVOffset:0,
    
            soloArrowRightHalign:"right",
            soloArrowRightValign:"center",
            soloArrowRightHOffset:20,
            soloArrowRightVOffset:0,
    
            touchenabled:"on",						// Enable Swipe Function : on/off
    
    
            stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
            stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
    
            hideCaptionAtLimit: 0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
            hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
            hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value
    
    
            fullWidth:"on",
    
            shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
    
        });
    };
    

	

})(window.jQuery, window, undefined);