function changeBackgroundColor(color){
	document.body.style.backgroundColor = color;
}
function toggle() {
  if (document.body.style.backgroundColor == 'brown' ) {
  	changeBackgroundColor("darkgray");
  	console.log('hi!');
  }
  else {
  	changeBackgroundColor("brown");
  }
}
