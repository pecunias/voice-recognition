window.addEventListener('nextSlide', function (e) { 
    Reveal.next() 
}, false);

window.addEventListener('slide', function(e) {
    window.Reveal.slide(e.detail);
})