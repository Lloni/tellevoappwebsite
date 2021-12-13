$(function() { 
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var thisItem = $(this.hash);
      thisItem = thisItem.length ? thisItem : $('[name=' + this.hash.slice(1) +']');
      if (thisItem.length) {
      $('html,body').animate({
        scrollTop: thisItem.offset().top
      }, 1000);
        return false;
      }
    }
  }); 
  
});

var b = document.documentElement;
              b.setAttribute('data-useragent',  navigator.userAgent);
              b.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window))?' touch':'');