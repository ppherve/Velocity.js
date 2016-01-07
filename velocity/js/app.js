$(function(){
	$('.rouge').velocity({
	translateX: [500,0]
	
},{
	duration:2000,
});


	$('.vert').velocity({
    translateX: "500px",
    rotateZ: "360deg",

},{ duration:2000});

	 $('.bleu').velocity({
	 	translateX:"500px",
	 	width:"200px",
	 },{
	 	duration:2000,
	 });

	 $('.jaune').velocity({
	 	translateX:'500px',
	 	opacity:1,
	 },{
	 	duration:2000,
	 });
});