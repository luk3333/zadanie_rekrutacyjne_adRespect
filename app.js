   //masonry

    window.addEventListener('load', function() {
    var elem = document.querySelector('.grid-pc');
    
    var msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        gutter:10
    });
});

window.addEventListener('load', function() {
    var elem = document.querySelector('.grid-mobile');
    
    var msnry = new Masonry(elem, {
        itemSelector: '.grid-item',
        gutter:25,
        columnWidth:150
    });
});