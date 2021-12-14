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


// Inicializa carrusel 

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  $(function () {
    $('[data-toggle="popover"]').popover()
  })