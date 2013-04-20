(function ($) {
  "use strict";
  $(document).ready(function () {
    var body = $('body'),
      earth = $('#earth img'),
      mars  = $('#mars img'),
      moon  = $('#moon img');
    body[0].className = 'selected earth rotate-left';
    $('#earth').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e){
      body.removeClass('rotate-left rotate-right');
    });
    earth.bind('click', function () {
      body[0].className = 'selected earth rotate-left';
    });
    mars.bind('click', function () {
      body[0].className = 'selected mars rotate-left';
    });
    moon.bind('click', function () {
      body[0].className = 'selected moon rotate-left';
    });
  });
})(jQuery);
