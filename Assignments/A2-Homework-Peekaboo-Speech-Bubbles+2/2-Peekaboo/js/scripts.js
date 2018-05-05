/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/
console.log('This is a test.');

//wait for page to load before we try and see the orbs
window.onload = function( ) {

    var  theToggles = document.querySelectorAll( ' .toggles' );

    console.log(items[0]);
    console.log(items[1]);
    console.log(items[2]);

    var descs = document.querySelectorAll(' .desc' );

    console.log(descs[0]);
    //console.log(descs[1]);
    //console.log(tdescs[2]);


    //animal 1
    items[0].addEventListener( 'mouseover', function( ) {
        console.log ('you rolled over me.');
        items[0].classList.add( 'on' );
        descs[0].classList.add( 'on' );

    });
    items[0].addEventListener( 'mouseout', function( ) {
        //console.log ('you rolled over me.');
        items[0].classList.remove( 'on' );
        descs[0].classList.remove( 'on' );
    });
