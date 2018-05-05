/*-------------------------------------
| Your Script Solution Goes here.
-------------------------------------*/

console.log('This is only seen by us.');

//wait for page to load before we try and see the orbs

window.onload = function() {

    //grabbing bubbles and assigning to a handle (variable)

var bubble = document.querySelectorAll('.bubble');

console.log(bubble);
console.log(bubble[0]);


bubble[0].addEventListener('mouseover', function(){
	console.log('Ouch you mouseovered me.');
	bubble[0].classList.add('on');
});
bubble[0].addEventListener('mouseout', function(){
	console.log('Ouch you mouseouted me.');
	bubble[0].classList.remove('on');

});

bubble[1].addEventListener('mouseover', function(){
	console.log('Ouch you mouseovered me.');
	bubble[1].classList.add('on');
});
bubble[1].addEventListener('mouseout', function(){
	console.log('Ouch you mouseouted me.');
	bubble[1].classList.remove('on');

});

bubble[2].addEventListener('mouseover', function(){
	console.log('Ouch you mouseovered me.');
	bubble[2].classList.add('on');
});
bubble[2].addEventListener('mouseout', function(){
	console.log('Ouch you mouseouted me.');
	bubble[2].classList.remove('on');

});
};
