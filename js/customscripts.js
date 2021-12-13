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

// var b = document.documentElement;
// b.setAttribute('data-useragent', navigator.platform);
// b.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window)) ? ' touch' : '');
// console.log(b, "es el user agent");

// var OSName = "SO desconocido";
// if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
// if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
// if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
// if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
// if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";
// console.log('Your OS: ' + OSName);

function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
};
console.log(detectMob());
if (detectMob()) {
  document.getElementById("boton").classList.remove("hide")
} else {
  document.getElementById("qr").classList.remove("hide")
}
