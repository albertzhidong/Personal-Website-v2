$(document).ready(function(){
	window.onscroll = function() {scrollTracker()};

	if($(window).width() > 500){

		$(document).on('scroll', function() {
		    if($(this).scrollTop() - 5 >=$('.projectBody').position().top){
		    	if($('.sidebarDiv').css('display') == 'none'){
			   		$('.sidebarDiv').css({'display' : 'block'});
					$('.sidebarDiv').animate({'opacity':'1'}, 300);
				}
		    }
		    if($(this).scrollTop() + 5 < $('.projectBody').position().top){
		    	if($('.sidebarDiv').css('display') == 'block'){
					$('.sidebarDiv').animate({'opacity':'0'}, 300);
					$('.sidebarDiv').css({'display' : 'none'});
				}
		    }
		})

		$(window).scroll(function() {
		    var position = $(this).scrollTop();

		    $('.contentSection h4').each(function() {
		        var target = $(this).offset().top;
		        var id = $(this).attr('id');

		        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
		        	$('.sidebarDiv > a > p').removeClass('activeNav');
		            $('.sidebarDiv > a').last().find('p').addClass('activeNav');
		        }else if (position + 10 >= target) {
		        	$('.sidebarDiv > a > p').removeClass('activeNav');
		            $('.sidebarDiv > a[href="#' + id + '"]' + ' > p').addClass('activeNav');
		        }
		    });
		});
	}

});

function scrollTracker() { //use 2 min left rather than a ever changin percentage 
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = Math.round((winScroll / height) * 100);

  // document.getElementById("scrollIndicator").innerHTML="<h4 class='black heavyWeight'>" + scrolled + "%</h4>";
}

	// $(document).on('scroll', function() {
	// 	if($('#projectsPage')){
	// 		if($(this).scrollTop() + 15 < $('#projectsPage').position().top){
	// 			if($('.navBar').hasClass("navBarBlack")){
	// 				$('.navBar').removeClass('navBarBlack');
	// 			}
	// 		} else if($(this).scrollTop() + 15 > $('#projectsPage').position().top){
	// 			if($('.navBar').hasClass("navBarBlack") == false){
	// 				$('.navBar').addClass('navBarBlack');
	// 			}
	// 		}
	// 	}
	// })

	// if($(this).scrollTop() === 0){
 //    	if($('.navBarContent').hasClass('hidden') == true){
	//    		$('.navBarContent').removeClass('hidden');
	// 		$('.navBarContent').animate({'opacity':'1'}, 300);
	// 	}
	// }

	// $(window).scroll(function() { 
	//     var windscroll = $(window).scrollTop();
	//     $('.contentSection h4').each(function(i) { //should i keep it working as if?
	//         if ($(this).position().top <= windscroll) {
	//             $('.sidebarDiv a p.activeNav').removeClass('activeNav');
	//             $('.sidebarDiv a p').eq(i).addClass('activeNav');
	//         }
	//     });
	// }).scroll();

	// $(document).on('scroll', function() {
	// 	if($(this).scrollTop() === 0){
	// 		if($('.navBarContent').hasClass('hidden') == true){
	// 	   		$('.navBarContent').removeClass('hidden');
	// 			$('.navBarContent').animate({'opacity':'1'}, 1);
	// 		}
	// 	} else if($(this).scrollTop() > 10 && $(this).scrollTop() + 15 < $('.projectBody').position().top){
	// 		if($('.navBarContent').hasClass('hidden') == false){
	// 			$('.navBarContent').animate({'opacity':'0'}, 300);
	// 	   		$('.navBarContent').addClass('hidden');
	// 		}
	// 	} else if($(this).scrollTop() - 15 >= $('.projectBody').position().top){
	//     	if($('.navBarContent').hasClass('hidden') == true){
	// 	   		$('.navBarContent').removeClass('hidden');
	// 			$('.navBarContent').animate({'opacity':'1'}, 300);
	// 		}
	//     }
	// })