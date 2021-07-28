let offset = 0;
const slider = document.querySelector('.slider-line');

let change = setInterval(right, 3000)

function right() {
	console.log(this);
	offset = offset + 400;
	if(offset > 800 )
	{offset = 0}
	slider.style.left = -offset + 'px';
}

function left() {
	offset = offset - 400;
	if(offset < 0 )
	{offset = 800}
	slider.style.left = -offset + 'px';
}
function stop() {
	clearInterval(change);
}