$( document ).ready(function() {
  var hamburger = $('#hamburger-icon');
  var nav = $('nav');
  hamburger.click(function() {
	 nav.toggle();
	  hamburger.toggleClass('active');
	  return false;
  });
});
