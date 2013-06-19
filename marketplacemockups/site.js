$().ready(function() {
	$('#menu-button').click(function() {
		$('#page').toggleClass('nav');
	});

	if(localStorage['wireframe'] ==  'true') {
		$('body').addClass('wireframe');
	}

	$('#setMockups').click(function() {
		$('body').removeClass('wireframe');
		localStorage['wireframe'] = '';
	});

	$('#setWireframes').click(function() {
		$('body').addClass('wireframe');
		localStorage['wireframe'] = 'true';
	});

	for (var i=0; i<20; i++) {
		$('#product-list ul').append($('#product-list li:first-child').clone());
	}
});