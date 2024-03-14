
if(document.documentElement.clientWidth <= 768){
    
    const menu = new MmenuLight( document.querySelector( '#menu' ), 'all');
    var navigator = menu.navigation({
        selectedClass: 'Selected',
        slidingSubmenus: true,
        theme: 'light',
        title: 'Menu'
    });
    var drawer = menu.offcanvas({
        position: 'left'
    });
    document.querySelector( 'a[href="#menu"]' )
    .addEventListener( 'click', evnt => {
        evnt.preventDefault();
        drawer.open();
    });
}


Fancybox.bind('[data-fancybox="gallery"]', {});
Fancybox.bind('[data-fancybox="production"]', {});
Fancybox.bind('[fancybox-id="catalog"]', {});