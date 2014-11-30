$(document).ready(function () {
var addheight=200;
 $(".navcontent").css("max-height",$(window).height()-102-addheight);
 $("#navigation").css("max-height",$(window).height()-60);
 $('#framecontent').attr("height",$(window).height()-63);
 $(".navcontent").mCustomScrollbar({axis:"y", theme:"minimal",callbacks:{
  onScroll: function(){$('#arw').show()},
     onTotalScroll: function(){$('#arw').hide()}
 }});
 $('.nav_static div').hide();
 if(($(".navcontent").height()+30)+'px'==$(".navcontent").css('max-height'))
 $('.nav_static div').show();
 $('#lmenu_hide').click(function(){
  $( "#navigation" ).hide( 'slow' );
  $( "#hdr-overlay" ).hide();
  $(this).hide();
  $( "#content" ).css("margin-left","0em");
  $( "#smenus" ).show('slow');
  
 });
 $( window ).resize(function() {
  $('#framecontent').attr("height",$(window).height()-60);
  $(".navcontent").css("max-height",$(window).height()-102-addheight).css("height",$(window).height()-102-addheight);
  $("#navigation").css("max-height",$(window).height()-60);

 });
	$('#smenus').click(function(){
		$('#lmenu_hide').show('slow');
		$( "#hdr-overlay" ).show();
		$( "#navigation" ).show( 'slow' );
		$( "#content" ).css("margin-left","15em");
		$( "#smenus").hide('slow');			
	});
	$('.nlinks a').click(function(e){	
		$( "#hdr-overlay" ).hide();
		$('#framecontent').attr("src",$(this).attr('href'));
		e.preventDefault();
	});
	if(detectmob()){
	  $('#navigation').css('width','20em');
	  $('#content').css('margin-left','20em');
	  $('.nlinks,.ntitle').css({'font-size':'17px','margin-bottom':'2px'});
	  
 }
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