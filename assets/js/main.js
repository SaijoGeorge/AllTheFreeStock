$(document).ready(function () {
var addheight=200;

 $('#framecontent').attr("height",$(window).height()-58);

$('.nlink').click(function(e){ 
  $('#framecontent').attr("src",$(this).attr('href'));
  e.preventDefault();
	if(detectmob()){
	  $('#tog_side').click();
	}
});
});

function detectmob() { 
  return ( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ) ? true : false;
}