var navbar = $("#nav");
var navHeight = navbar.height();
var menuOpen = false;

$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - navHeight
      }, 500);
      return false;
    }
  }
});

function navbarSet(opaque) {
  if(opaque) {
    navbar.addClass('navbar-opaque');
    navbar.addClass('navbar-light');
    navbar.removeClass('navbar-trans');
    navbar.removeClass('navbar-dark');
  } else {
    navbar.removeClass('navbar-opaque');
    navbar.removeClass('navbar-light');
    navbar.addClass('navbar-trans');
    navbar.addClass('navbar-dark');
  }
}

function navbarShouldBeOpaque() {
  return Math.round($(window).scrollTop()) > navHeight;
}

window.onload = function () {
  navbarSet(navbarShouldBeOpaque());
}

$(window).on('scroll',function(){
  if(!menuOpen)
    navbarSet(navbarShouldBeOpaque());
});

$('.navbar-collapse').on('show.bs.collapse', function() {
  navbarSet(true);
  menuOpen = true;
});

$('.navbar-collapse').on('hide.bs.collapse', function() {
  if(!navbarShouldBeOpaque())
    navbarSet(false);
  menuOpen = false;
});

$('.nav-link').on('click', function() {
  $('.navbar-collapse').collapse("hide");
});