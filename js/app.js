$(document).ready(function(){
	$('#main-menu').smartmenus();

	$('.sm').find('li').find('a').click(function(){
		if($(this).hasClass('hover')){
			$(this).removeClass('hover');
			$(this).removeClass('hoverStart');
			$(this).removeClass('hoverEnd');
		} else{
			$(this).css({'color':'initial'});
			$(this).addClass('hover');
			$(this).addClass('hoverEnd');
		}	
	});

	$('.hover').mouseenter(function(){
		if($(this).hasClass('hover')){
			$(this).toggleClass('hoverStart');
			$(this).toggleClass('hoverEnd');
		}
	});

	$('.hover').mouseleave(function(){
		if($(this).hasClass('hover')){
			$(this).toggleClass('hoverStart');
			$(this).toggleClass('hoverEnd');
		}
	});

	$('.hyperlink').mouseenter(function(){
		if($(this).hasClass('hyperlink')){
			$(this).toggleClass('hyperlinkStart');
			$(this).toggleClass('hyperlinkEnd');
		}
	});

	$('.hyperlink').mouseleave(function(){
		if($(this).hasClass('hyperlink')){
			$(this).toggleClass('hyperlinkStart');
			$(this).toggleClass('hyperlinkEnd');
		}
	});

	$('.hoverIcon').mouseenter(function(){
		$(this).css({'display' : 'none'});
		$(hoverIcon2).css()
	});

	$('#hoverTwitter').mouseenter(function(){
		document.getElementById("hoverTwitter").src="../Media/SocialMedia/twitter_select.png";
	});

	$('#hoverTwitter').mouseleave(function(){
		document.getElementById("hoverTwitter").src="../Media/SocialMedia/twitter.png";
	});

	$('#hoverLinkedIn').mouseenter(function(){
		document.getElementById("hoverLinkedIn").src="../Media/SocialMedia/linkedin_select.png";
	});

	$('#hoverLinkedIn').mouseleave(function(){
		document.getElementById("hoverLinkedIn").src="../Media/SocialMedia/linkedin.png";
	});

	$('#hoverGoodreads').mouseenter(function(){
		document.getElementById("hoverGoodreads").src="../Media/SocialMedia/goodreads_select.png";
	});

	$('#hoverGoodreads').mouseleave(function(){
		document.getElementById("hoverGoodreads").src="../Media/SocialMedia/goodreads.png";
	});

	$('#hoverVsco').mouseenter(function(){
		document.getElementById("hoverMedium").src="../Media/SocialMedia/vsco_select.png";
	});

	$('#hoverVsco').mouseleave(function(){
		document.getElementById("hoverMedium").src="../Media/SocialMedia/vsco.png";
	});

	$('#hoverDribbble').mouseenter(function(){
		document.getElementById("hoverDribbble").src="../Media/SocialMedia/dribbble_select.png";
	});

	$('#hoverDribbble').mouseleave(function(){
		document.getElementById("hoverDribbble").src="../Media/SocialMedia/dribbble.png";
	});

	$('.locked').click(function(){
		$(this).find('img').toggleClass('lockcard');
	});

	// arrowFlash();

	// $(document).on('scroll', function() {
	// 	if($('.animsition').hasClass('index') == true){
	// 		if($(this).scrollTop() + 15 < $('#projectsPage').position().top){
	// 			if($('.navText').hasClass("navBarBlack")){
	// 				$('.navText').removeClass('navBarBlack');
	// 			}
	// 		} else if($(this).scrollTop() + 15 > $('#projectsPage').position().top){
	// 			if($('.navText').hasClass("navBarBlack") == false){
	// 				$('.navText').addClass('navBarBlack');
	// 			}
	// 		}
	// 	}
	// })

	//for mobile
	if($(window).width() < 500){
		document.getElementById('navAlbert').innerHTML = "AD";
	}

	//fading the name in and out 
	$('.tink').mouseenter(function(){
		$(this).find('.imgtext').animate({'opacity':'0'}, 300, function(){
			$(this).find('.imgtxt').css({'display':'none'});
		});
	});
	$('.tink').mouseleave(function(){
		$(this).find('.imgtxt').css({'display':'inline-block'});
		$(this).find('.imgtext').animate({'opacity':'100'}, 300);
	});

	$('img').click(function(){
		if($(this).hasClass('canEnlarge')){
			var modal = document.getElementById('myModal');
		    modal.style.display = "block";
			var modalImg = document.getElementById("modalImg");
	    	modalImg.style.display = "block";
	    	modalImg.src = $(this).attr('src');
	    }
	});

	//modal for tinks
	// $('img').click(function(){
	// 	var modal = document.getElementById('myModal');
	// 	var src = $(this).find('.imgpic').find('.mediasrc');
	// 	var captionText = document.getElementById('caption');

	//     modal.style.display = "block";
	//     if(src.is('img')){
	// 		var modalImg = document.getElementById("modalImg");
	//     	modalImg.style.display = "block";
	//     	modalImg.src = src.attr('src');
	//     }
	//     else if(src.is('video')){
	//     	var modalVideo = document.getElementById("modalVideo");
	//     	modalVideo.style.display = "block";
	//     	modalVideo.src = src.attr('src');
	//     	modalVideo.play();
	//     }
	//     captionText.innerHTML = src.attr('alt');
	// });

	$('#myModal').click(function(){
		 $(this).css({'display':'none'});
		 $(this).find('img').css({'display':'none'});
		 $(this).find('video').css({'display':'none'});
	});

	var subAppeared = false;

	$(document).on('scroll', function() {
		if($('#sidebarSub').css('display') == 'none'){
			if($('#firstDivider').position().top < ($(window).scrollTop() + (window.innerHeight)) && subAppeared == false){
				$('#sidebarSub').css({'opacity':'0'});
				$('#sidebarSub').css({'display':'inherit'});
				$('#sidebarSub').animate({'opacity':'100'}, 250);
				$('#graybackground').css({'display':'inherit'});
				if($('#graybackground').css('opacity') != '0'){ //if it appears, so basically mobile
					$(".hyperlink").removeClass("hyperlinkStart");
				}
				subAppeared = true;
			} else if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight  && subAppeared == false){
				$('#sidebarSub').css({'opacity':'0'});
				$('#sidebarSub').css({'display':'inherit'});
				$('#sidebarSub').animate({'opacity':'1'}, 250);
				$('#graybackground').css({'display':'inherit'});
				if($('#graybackground').css('opacity') != '0'){ //if it appears, so basically mobile
					$(".hyperlink").removeClass("hyperlinkStart");
				}
				subAppeared = true;
			}
		}
	})

	$('#graybackground').click(function(){
		$(this).animate({'opacity':'0'}, 250, function(){
			$(this).css({'display':'none'});
			$(this).css({'opacity':'.7'});
		});
		$('#sidebarSub').animate({'opacity':'0'}, 250, function(){
			$('#sidebarSub').css({'display':'none'});
			$('#sidebarSub').css({'opacity':'1'});
		});
		$(".hyperlink").addClass("hyperlinkStart");
	})

	$('.signup').find('button').click(function(){
		alert("Thanks for subscribing!");
		$(this).parent().find(".email_address_form").val('');
	})
});

//controls the flashing aniamtion of the arrow
// function arrowFlash(){
//   $('#arrowDiv').find('a').find('img').finish().show()
//     .animate({'opacity':'0'}, 2000, function(){
//     $(this).animate({'opacity':'1'}, 2000);
//   });
// }

  // var t = setInterval(function(){
  //   if(scrolled === true){
  //      $('#arrowDiv').find('a').find('img').finish().show()
  //       .animate({'opacity':'0'}, 2000, function(){
  //       $(this).animate({'opacity':'1'}, 2000);
  //      });
  //   }
  // }, 3500);

// $(document).on('scroll', function() {
// 	if($('.toBlack')){
// 		if($(this).scrollTop() + 15 < $('.projectContent').position().top){
// 			if($('.navText').hasClass("navBarBlack")){
// 				$('.navText').removeClass('navBarBlack');
// 			}
// 		} else if($(this).scrollTop() + 15 > $('.projectContent').position().top){
// 			if($('.navText').hasClass("navBarBlack") == false){
// 				$('.navText').addClass('navBarBlack');
// 			}
// 		}
// 	}
// })


// //looks to see if the user has scrolled
// var scrolled = true;
// window.onscroll= function(e){ 
//   scrolled = false;
//   if($(window).scrollTop() == 0){
//     scrolled = true;
//   }
// }

// //controls the flashing aniamtion of the arrow
// function arrowFlash(){
//   $('#arrowDiv').find('a').find('img').finish().show()
//     .animate({'opacity':'0'}, 2000, function(){
//     $(this).animate({'opacity':'1'}, 2000);
//   });
//   var t = setInterval(function(){
//     if(scrolled === true){
//        $('#arrowDiv').find('a').find('img').finish().show()
//         .animate({'opacity':'0'}, 2000, function(){
//         $(this).animate({'opacity':'1'}, 2000);
//        });
//     }
//   }, 3500);
// }

//controls the flashing aniamtion of the arrow
// function arrowFlash(){
//   $('#arrowDiv').find('a').find('img').finish().show()
//     .animate({'opacity':'0'}, 2000, function(){
//     $(this).animate({'opacity':'1'}, 2000);
//   });
  // var t = setInterval(function(){
  //   if(scrolled === true){
  //      $('#arrowDiv').find('a').find('img').finish().show()
  //       .animate({'opacity':'0'}, 2000, function(){
  //       $(this).animate({'opacity':'1'}, 2000);
  //      });
  //   }
  // }, 3500);
// }

	// $('.sm').find('li').find('a').click(function(){
	// 	if($(this).css('color') != 'rgb(52, 114, 255)'){
	// 		$(this).css({'color':'rgb(52, 114, 255)'});
	// 		$(this).removeClass('hover');
	// 		$(this).removeClass('hoverStart');
	// 		$(this).removeClass('hoverEnd');
	// 	} else{
	// 		$(this).css({'color':'initial'});
	// 		$(this).addClass('hover');
	// 		$(this).addClass('hoverEnd');
	// 	}	
	// });