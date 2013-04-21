(function ($) {
  "use strict";
  var body = $('body'),
    space = $('.space-objects'),
    earth = $('#earth img'),
    mars  = $('#mars img'),
    moon  = $('#moon img');
  $(document).ready(function () {
    body[0].className = 'selected earth rotate-left';
    $('#earth').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e) {
      body.removeClass('rotate-left rotate-right');
    });
    earth.bind('click', function () {
      if (!body.hasClass('earth')) {
        body[0].className = 'selected earth rotate-left';
      }
    });
    mars.bind('click', function () {
      if (!body.hasClass('mars')) {
        body[0].className = 'selected mars rotate-left';
      }
    });
    moon.bind('click', function () {
      if (!body.hasClass('moon')) {
        body[0].className = 'selected moon rotate-left';
      }
    });
  });
})(jQuery);
