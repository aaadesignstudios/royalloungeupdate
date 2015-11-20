jQuery(window).load(function () {
    "use strict";
   	jQuery("#status").fadeOut();
	jQuery("#preloader").delay(350).fadeOut("slow");
});


 // select
 $(window).on('load', function () {

            $('.selectpicker').selectpicker({
                'selectedText': 'cat'
            });
          // $('.selectpicker').selectpicker('hide');
  });
  
  
  $(document).ready(function(e) {
	"use strict";
  
	$('.rock_logo:after').addClass('animated fadeInDownBig');
	
	//smooth scrolling
	$.smoothScroll();
	
	// single page
	$("#rockon_single").single({
		speed: 1000
	});
	
	// tooltip
	$('[data-toggle="tooltip"]').tooltip();
	
	//
	var bg_w = window.innerWidth;
	var bg_h = window.innerHeight;
	
	$('rock_single_page_slider_bg').css('width', bg_w);
	$('rock_single_page_slider_bg').css('height', bg_h);
	
	 //active menu on scroll single page
	 $(window).scroll(function() {
		var windscroll = $(window).scrollTop();
			if (windscroll >= 100) {
				$('.rockon_section').each(function(i) {
					if ($(this).position().top <= windscroll + 10 ) {
						$('.rock_menu_single ul li').removeClass('active');
						$('.rock_menu_single ul li').eq(i).addClass('active');
					}
				});
			} else {
		
				$('.rock_menu_single ul li').removeClass('active');
				$('.rock_menu_single ul li:first').addClass('active');
			}
		}).scroll();		
			
	
	
	// fixed menu on scroll
	var hig = window.innerHeight - 130;
	$(window).bind('scroll', function() {
             if ($(window).scrollTop() > hig) {
                 $('#rock_header').addClass('rock_header_fixed');
             }
             else {
                 $('#rock_header').removeClass('rock_header_fixed');
             }
        });
	
	$(window).bind('scroll', function() {
             if ($(window).scrollTop() > 0) {
                 $('#rock_header_otherpage').addClass('rock_header_fixed');
             }
             else {
                 $('#rock_header_otherpage').removeClass('rock_header_fixed');
             }
        });
	
	$(window).bind('scroll', function() {
             if ($(window).scrollTop() > hig) {
                 $('#rock_header_single_page').addClass('rock_header_fixed');
             }
             else {
                 $('#rock_header_single_page').removeClass('rock_header_fixed');
             }
        });	
	
		



	
		
	/*********color change script*******/
		$('.colorchange').click(function(){
		
		var color_name=$(this).attr('id');
		var new_style='css/color/'+color_name+'.css';
		$('#theme-color').attr('href',new_style);
		
		//document.cookie="colorname=" + color_name;
//		var allcookies = document.cookie;
//		cookiearray  = allcookies.split(';');
//console.log(cookiearray);
//		   for(var i=0; i<cookiearray.length; i++){
//			  name = cookiearray[i].split('=')[0];
//			 
//			  alert("Key is : " + name);
//		   }
		   
		});
		
		$('.pattern_change').click(function(){
		var name=$(this).attr('id');
		var new_style='css/pattern/'+name+'.css';
		$('#theme-pattern').attr('href',new_style);
		});

	//rotate setting gear 
	$(function() {

		var $rota = $('#style-switcher .bottom a.settings img'),
			degree = 0,
			timer;
	
		function rotate() {    
			$rota.css({ transform: 'rotate(' + degree + 'deg)'});
			// timeout increase degrees:
			timer = setTimeout(function() {
				++degree;
				rotate(); // loop it
			},0);
		}
	
		rotate();    // run it!
	
	});


	$("#style-switcher .bottom a.settings").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			if (div.css("left") === "-161px") {
				$("#style-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-161px"
				});
			}
		});
		
		
/******color change script end******/
	
	
	
	/* mail function */
	$('#em_sub').click(function(){
		var un=$('#uname').val();
		var em=$('#uemail').val();
		var wsite=$('#web_site').val();
		var meesg=$('#message').val();
		
		$.ajax({
				type: "POST",
				url: "ajaxmail.php",
				data: {
					'username':un,
					'useremail':em,
					'website':wsite,
					'mesg':meesg,
					},
				success: function(msg) {
			var full_msg=msg.split("#");
					if(full_msg[0]=='1')
					{
						$('#uname').val("");
						$('#uemail').val("");
						$('#web_site').val("");
						$('#message').val("");
						$('#err').html( full_msg[1] );
					}
					else
					{
						$('#uname').val(un);
						$('#uemail').val(em);
						$('#web_site').val(wsite);
						$('#message').val(meesg);
						$('#err').html( full_msg[1] );
					}
				}
			});
		});
		
		
		
		/* booking function */
		$('#booking_sub').click(function(){
			var book_tn=$('#booking_table_no').val();
			var book_date=$('.booking_date').val();
			var book_fname=$('#booking_fname').val();
			var book_lname=$('#booking_lname').val();
			var book_guest=$('#booking_guest').val();
			var book_female=$('#booking_female').val();
			var book_male=$('#booking_male').val();
			var book_mail=$('#booking_mail').val();
			var book_phone=$('#booking_phone').val();
			var book_instruction=$('#booking_instruction').val();
			
			$.ajax({
					type: "POST",
					url: "book-table.php",
					data: {
						'booking_table_no':book_tn,
						'booking_date':book_date,
						'booking_fname':book_fname,
						'booking_lname':book_lname,
						'booking_guest':book_guest,
						'booking_female':book_female,
						'booking_male':book_male,
						'booking_mail':book_mail,
						'booking_phone':book_phone,
						'booking_instruction':book_instruction,
						},
					success: function(msg) {
				var full_msg=msg.split("#");
						if(full_msg[0]=='1')
						{
							$('#booking_table_no').val("");
							$('.booking_date').val("");
							$('#booking_fname').val("");
							$('#booking_lname').val("");
							$('#booking_guest').val("");
							$('#booking_female').val("");
							$('#booking_male').val("");
							$('#booking_mail').val("");
							$('#booking_phone').val("");
							$('#booking_instruction').val("");
							$('#booking_err').html( full_msg[1] );
						}
						else
						{
							$('#booking_table_no').val(book_tn);
							$('.booking_date').val(book_date);
							$('#booking_fname').val(book_fname);
							$('#booking_lname').val(book_lname);
							$('#booking_guest').val(book_guest);
							$('#booking_female').val(book_female);
							$('#booking_male').val(book_male);
							$('#booking_mail').val(book_mail);
							$('#booking_phone').val(book_phone);
							$('#booking_instruction').val(book_instruction);
							$('#booking_err').html( full_msg[1] );
						}
					}
				});
			});
	
	
	
	
	
    //accordion
	jQuery(function ($) {
		var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
		$active.find('a').prepend('<i class="glyphicon glyphicon-minus"></i>');
		$('#accordion .panel-heading').not($active).find('a').prepend('<i class="glyphicon glyphicon-plus"></i>');
		$('#accordion').on('show.bs.collapse', function (e) {
			$('#accordion .panel-heading.active').removeClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
			$(e.target).prev().addClass('active').find('.glyphicon').toggleClass('glyphicon-plus glyphicon-minus');
		})
	});
	
	
	// drop down menu
	$('.rock_menu ul li').children('ul').addClass('animated fadeInDown');
	$('.rock_menu ul li ul li').children('ul').addClass('animated fadeInLeft');
	
	
	// event tab
	$('.rock_event_tab > ul').each(function(){
			// For each set of tabs, we want to keep track of
			// which tab is active and it's associated content
			var $active, $content, $links = $(this).find('a');
		
			// If the location.hash matches one of the links, use that as the active tab.
			// If no match is found, use the first link as the initial active tab.
			$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
			$active.addClass('active');
		
			$content = $($active[0].hash);
		
			// Hide the remaining content
			$links.not($active).each(function () {
			  $(this.hash).hide();
			});
		
			// Bind the click event handler
			$(this).on('click', 'a', function(e){
			  // Make the old tab inactive.
			  $active.removeClass('active');
			  $content.hide();
		
			  // Update the variables with the new link and content
			  $active = $(this);
			  $content = $(this.hash);
		
			  // Make the tab active.
			  $active.addClass('active');
			  $content.fadeIn().addClass('animated fadeIn');
		
			  // Prevent the anchor's default click action
			  e.preventDefault();
			});
		  });
	
		
		
	 // date time picker	
	     var logic = function( currentDateTime ){
			if( currentDateTime ){
				if( currentDateTime.getDay()==6 ){
					this.setOptions({
						minTime:'11:00'
					});
				}else
					this.setOptions({
						minTime:'8:00'
					});
			}
		};
		$('#datetimepicker').datetimepicker({
			onChangeDateTime:logic,
			onShow:logic
		});
		
		
	
	// slider autoplay
	$(function(){
      $('.carousel').carousel({
      interval: 4000,
	  pause: "false"
		});
	});
	// slider background
	$(function() {
			
				$( '#ri-grid' ).gridrotator( {
					rows : 4,
					columns : 8,
					maxStep : 2,
					interval : 2000,
					w1024 : {
						rows : 5,
						columns : 6
					},
					w768 : {
						rows : 5,
						columns : 5
					},
					w480 : {
						rows : 6,
						columns : 4
					},
					w320 : {
						rows : 7,
						columns : 4
					},
					w240 : {
						rows : 7,
						columns : 3
					},
				} );
			
			});
			
		
		
		
		
		// footer copyright background
		$(function() {
			
				$( '#ri-grid2' ).gridrotator( {
					rows : 1,
					columns : 8,
					maxStep : 2,
					interval : 2000,
					w1024 : {
						rows : 1,
						columns : 6
					},
					w768 : {
						rows : 1,
						columns : 5
					},
					w480 : {
						rows : 2,
						columns : 4
					},
					w320 : {
						rows : 2,
						columns : 4
					},
					w240 : {
						rows : 3,
						columns : 3
					},
				} );
			
			});
			
		
		
		// page title background
		$(function() {
			
				$( '#rock_page_title_bg' ).gridrotator( {
					rows : 1,
					columns : 8,
					maxStep : 2,
					interval : 2000,
					w1024 : {
						rows : 1,
						columns : 6
					},
					w768 : {
						rows : 1,
						columns : 5
					},
					w480 : {
						rows : 2,
						columns : 4
					},
					w320 : {
						rows : 2,
						columns : 4
					},
					w240 : {
						rows : 3,
						columns : 3
					},
				} );
			
			});	
		
			
	
	
		// club photo hover overlay
		$('.rock_club_photo_item').hover(function(){
			$(this).children('.rock_club_photo_overlay').fadeToggle();
			});


	
		// footer and rock-track
		var track_height = $(".rock_club_track").innerHeight() - 100;
		var half_of_track_height = track_height / 2 ;
		$('.rock_footer').css('margin-top', half_of_track_height);
		$('.rock_footer').css('padding-top', half_of_track_height + 30);
	
		
		
		//player
		$(function(){
		  $('.rock_player').mediaelementplayer({
			alwaysShowControls: true,
			features: ['playpause','progress','volume'],
			audioVolume: 'horizontal',
			audioWidth: 450,
			audioHeight: 70,
			iPadUseNativeControls: true,
			iPhoneUseNativeControls: true,
			AndroidUseNativeControls: true
		  });
		});
		
	
	$('.bxslider').bxSlider({
	  mode: 'vertical',
	  slideMargin: 5,
	  minSlides: 2,
	  auto: true,
	  default: 500,
	  controls: false,
	  pager: false,
	  autoHover: true
    });
	
	
	// club photo image popup
	$(".fancybox").fancybox({
          openEffect	: 'elastic',
		  closeEffect	: 'elastic',
		  helpers : 
			{
				overlay: 
				{ 
					locked: false 
				} 
			}
      });
	
	//player poster hover
	$('.rock_audio_player').hover(function(){
		$('.rock_audio_player_track_image_overlay').toggle().addClass('animated fadeInUp');
	});
	
	//play list slider 
	$('.rock_track_playlist_slider').bxSlider({
	  mode: 'vertical',
	  slideMargin: 0,
	  minSlides: 2,
	  auto: true,
	  default: 500,
	  controls: true,
	  pager: false,
	  autoHover: true,
	  nextSelector: '#rock_track_playlist_slider_next',
      prevSelector: '#rock_track_playlist_slider_prev',
	  nextText: '<i class="fa fa-angle-up"></i>',
      prevText: '<i class="fa fa-angle-down"></i>'
    });	
	
	//Rockon Club Track share button hover
	 $('.rock_share_track').hover(function(){
		var id=$(this).attr('id');
		 $('.'+id).show();
		 $('.'+id+' li').addClass('animated fadeInLeft');
	  });
	 $('.rock_track_playlist ul li .rock_track_detail').mouseleave(function(){
		$('.rock_track_playlist ul li .rock_track_detail .rock_social').hide();
	  });
	  
	  
	 // sidebar categories dropdown
	 $('.rock_categories ul li').click(function(){
		 $(this).children('ul').slideToggle();
		 });
	 
	  // book table
	  $('.rock_table_1').click(function(){
	    var existno = $('#booking_table_no').val();
		var id = $(this).attr('id');
		
		if(existno == '')
			$('#booking_table_no').val(id);
		else
			$('#booking_table_no').val(existno+','+id);
		
		  $(this).addClass('active');
		  $(this).children('.table_overlay').children('p').html('<p>Reserve</p>');
		  $(this).children('.table_overlay').children('p').css('margin-left','-27px');
		  $(this).children('.table_overlay').css('cursor','not-allowed');
		  $('#cls_'+id).css('display','block');
		  });
	 
		
	 
	 
	 
	 $('.main_gallery_tab > ul').each(function(){
			// For each set of tabs, we want to keep track of
			// which tab is active and it's associated content
			var $active, $content, $links = $(this).find('a');
		
			// If the location.hash matches one of the links, use that as the active tab.
			// If no match is found, use the first link as the initial active tab.
			$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
			$active.addClass('active');
		
			$content = $($active[0].hash);
		
			// Hide the remaining content
			$links.not($active).each(function () {
			  $(this.hash).hide();
			});
		
			// Bind the click event handler
			$(this).on('click', 'a', function(e){
			  // Make the old tab inactive.
			  $active.removeClass('active');
			  $content.hide();
		
			  // Update the variables with the new link and content
			  $active = $(this);
			  $content = $(this.hash);
		
			  // Make the tab active.
			  $active.addClass('active');
			  $content.fadeIn();
		
			  // Prevent the anchor's default click action
			  e.preventDefault();
			});
		  });
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 // gallery item click
	 $('.main_gallery_item_link').click(function(){
		 $('.main_gallery_item_popup').each(function(){
			 $(this).hide();
			 });
		 var shaid=$(this).attr('id');
		 
		 $('.'+shaid).slideDown();
		 
	});
	 
	 $('.main_gallery_item_popup_close').click(function(){
		 $('.main_gallery_item_popup').slideUp();
	 });	 
  
		
});


// club photo slider
$(document).ready(function() {
 
  var owl = $("#rock_club_photo_slider");
 
  owl.owlCarousel({
      items : 3,
      itemsDesktop : [1000,3], 
      itemsDesktopSmall : [900,2], 
      itemsTablet: [600,2], 
      itemsMobile : false 
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })

 
});


// club photo slider
$(document).ready(function() {
 
  var owl = $("#rock_disc_jockcy_slider");
 
  owl.owlCarousel({
      items : 4, 
      itemsDesktop : [1000,4], 
      itemsDesktopSmall : [900,3], 
      itemsTablet: [600,2], 
      itemsMobile : false ,
	  autoPlay : true
  });
 
  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })

 
});


	
	
		
	function rock_table_close(clsid)
{
	$('#'+clsid).removeClass('active');
	$('#cls_'+clsid).css('display','none');
	$('#'+clsid).children('.table_overlay').children('p').children('p').html(clsid);
    $('#'+clsid).children('.table_overlay').children('p').children('p').css('margin-left','5px');
    $(this).children('.table_overlay').css('cursor','not-allowed');

	var curval = $('#booking_table_no').val();
	var newclsid = ','+clsid;
	var newtextval = curval.replace(newclsid, '');	
	//console.log(newtextval);
	var clsid1 = clsid+',';
	var newtextval1 = newtextval.replace(clsid1, '');
	
	var newtextval2 = newtextval.replace(clsid, '');
	//console.log(newtextval1);
	
	var newtextval12 = newtextval2.replace(/^,/,'');	
	$('#booking_table_no').val(newtextval12);
} 


$(function(){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
       
       if (st > lastScrollTop){
           // downscroll code
           $(".rock_header_fixed").slideUp();
       } else {
          // upscroll code
          $(".rock_header_fixed").slideDown();
       }
       lastScrollTop = st;
    });
}); 