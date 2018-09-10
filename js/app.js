$(document).ready(function(){
	$('#main-menu').smartmenus();

	$('.sm').find('li').find('a').click(function(){
		if($(this).css('color') != 'rgb(52, 114, 255)'){
			$(this).css({'color':'rgb(52, 114, 255)'});
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

	$('.locked').click(function(){
		$(this).find('img').toggleClass('lockcard');
	});
});