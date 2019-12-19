if ($( window ).width() > 1200) {
	$('.side-navbar').removeClass('shrinked');
} else {
	$('.side-navbar').addClass('shrinked');
}
$('.order a').click(function(){
	$('.order a').removeClass('active');
	$(this).toggleClass('active');

	if($('.a_view_module').hasClass('active')){
		$('.card-module').fadeIn();
	} else {
		$('.card-module').fadeOut();
	}

	if($('.a_view_comfy').hasClass('active')){
		$('.card-comfy').fadeIn();
	} else {
		$('.card-comfy').fadeOut();
	}

	if($('.a_reorder').hasClass('active')){
		$('.card-reorder').fadeIn();
	} else {
		$('.card-reorder').fadeOut();
	}
});

if ($( window ).width() < 992) {
	$('body').addClass('fixed-nav');
} else {
	$('body').removeClass('fixed-nav');
}

$(document).ready( function() {
	$('.ticket_wrap .ticket').on( 'click', function() {
		$('.ticket').removeClass('active');
		$(this).addClass('active');
	});
	$('.toggle_ticket').on( 'click', function() {
		$(this).toggleClass('close');
		$('.chat_wrap').toggleClass('ticket_active');
		$('.ticket_wrap').toggle();
	});
	$('select').on('change', function(){ 

        if ($(this).val() === ""){ 
            $(this).addClass('change'); 
        } else {
            $(this).removeClass('change');
        }

    });
});
$(window).resize(function() {
	if ($( window ).width() > 768) {
		$('.ticket_wrap').show();
		$('.chat_wrap').removeClass('ticket_active');
	} else if ($( window ).width() < 768 && $('.chat_wrap').hasClass('ticket_active')) {
		$('.ticket_wrap').show();
	} else {
		$('.ticket_wrap').hide();
		$('.toggle_ticket').removeClass('close');
	}
	if ($( window ).width() > 1200) {
	$('.side-navbar').removeClass('shrinked');
	} else {
		$('.side-navbar').addClass('shrinked');
	}
	if ($( window ).width() < 992) {
		$('body').addClass('fixed-nav');
	} else {
		$('body').removeClass('fixed-nav');
	}
});