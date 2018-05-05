/*-------------------------------------
| Grab some assets
-------------------------------------*/
var tabLinks = document.querySelectorAll('.tabbed .tabs a');
var theSections = document.querySelectorAll(' .tabbed section');

//console.log(tabLinks);
//console.log(theSections);

/*-------------------------------------
| one function to rule all
-------------------------------------*/
// function declaration
function switchSection(whichSection)  {

    whichSection = whichSection - 1;

    console.log(whichSection);

    // hide call

    for(var i = 0; i < theSections.length; i++) {
        theSections[i].style.display = 'none';
    }
/*
    theSections[0].style.display = 'none';
    theSections[1].style.display = 'none';
    theSections[2].style.display = 'none';
    theSections[3].style.display = 'none';
*/

    // show the chosen one

    theSections[whichSection].style.display = 'block';

    /*-------------------------------------
    | Links
    -------------------------------------*/
    tabLinks.forEach(function(theLink)  {
        theLink.classList.remove('chosen');
    });

    tabLinks[whichSection].classList.add('chosen');
}

// dunction call

switchSection(2);



/*-------------------------------------
| Manage Event Listerners on tabLinks
-------------------------------------*/
tabLinks.forEach(function(currentLink) {
    currentLink.addEventListener('click', function( ) {
        console.log(event);
        
        // stop jumping
        event.preventDefault( );

        //instead we will do this
        var whatSection = this.dataset.section;
        switchSection(whatSection);
    });
});
