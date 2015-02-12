$(document).ready(function(){

	$(".heresCat").click(function(){
		setTimeout('changeBg()');
		setTimeout('rainbowHeader()');
	})


		
});

function changeBg(){

	setTimeout(function() {
		$(".navBar, .footer").css("backgroundColor", "purple");
	}, 100);

	setTimeout(function(){
		$(".navBar, .footer").css("backgroundColor", "blue");

	},200);

	setTimeout(function() {
		$(".navBar, .footer").css("backgroundColor", "green");
	}, 300);

	setTimeout(function(){
		$(".navBar, .footer").css("backgroundColor", "yellow");

	},400);

	setTimeout(function() {
		$(".navBar, .footer").css("backgroundColor", "orange");
	}, 500);

	setTimeout(function(){
		$(".navBar, .footer").css("backgroundColor", "red");

	},600);

	setTimeout(function(){
		return changeBg();
	},700);

	
};

function rainbowHeader(){

	setTimeout(function(){
		$(".r").css("color", "purple");
		$(".l").css("color", "black");
	},100);

	setTimeout(function(){
		$(".a").css("color", "blue");
		$(".r").css("color", "black");

	},200);

	setTimeout(function(){
		$(".i").css("color", "aqua");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},300);

	setTimeout(function(){
		$(".n").css("color", "green");
		$(".i").css("color", "black");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},400);

	setTimeout(function(){
		$(".b").css("color", "yellow");
		$(".n").css("color", "black");
		$(".i").css("color", "black");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},500);

	setTimeout(function(){
		$(".o").css("color", "orange");
		$(".b").css("color", "black");
		$(".n").css("color", "black");
		$(".i").css("color", "black");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},600);

	setTimeout(function(){
		$(".w").css("color", "red");
		$(".o").css("color", "black");
		$(".b").css("color", "black");
		$(".n").css("color", "black");
		$(".i").css("color", "black");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},700);

	setTimeout(function(){
		$(".s").css("color", "purple")
		$(".w").css("color", "black");
		$(".o").css("color", "black");
		$(".b").css("color", "black");
		$(".n").css("color", "black");
		$(".i").css("color", "black");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},800);

	setTimeout(function(){
		$(".o2").css("color", "blue");
		$(".s").css("color", "black");
		$(".w").css("color", "black");
		$(".o").css("color", "black");
		$(".b").css("color", "black");
		$(".n").css("color", "black");
		$(".i").css("color", "black");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},900);

	setTimeout(function(){
		$(".c").css("color", "green");
		$(".o2").css("color", "black");
		$(".s").css("color", "black");
		$(".w").css("color", "black");
		$(".o").css("color", "black");
		$(".b").css("color", "black");
		$(".n").css("color", "black");
		$(".i").css("color", "black");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},1000);

	setTimeout(function(){
		$(".i2").css("color", "yellow");
		$(".c").css("color", "black");
		$(".o2").css("color", "black");
		$(".s").css("color", "black");
		$(".w").css("color", "black");
		$(".o").css("color", "black");
		$(".b").css("color", "black");
		$(".n").css("color", "black");
		$(".i").css("color", "black");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},1100);

	setTimeout(function(){
		$(".a2").css("color", "orange");
		$(".i2").css("color", "black");
		$(".c").css("color", "black");
		$(".o2").css("color", "black");
		$(".s").css("color", "black");
		$(".w").css("color", "black");
		$(".o").css("color", "black");
		$(".b").css("color", "black");
		$(".n").css("color", "black");
		$(".i").css("color", "black");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},1200);

		setTimeout(function(){
		$(".l").css("color", "red");
		$(".a2").css("color", "black");
		$(".i").css("color", "black");
		$(".c").css("color", "black");
		$(".o2").css("color", "black");
		$(".s").css("color", "black");
		$(".w").css("color", "black");
		$(".o").css("color", "black");
		$(".b").css("color", "black");
		$(".n").css("color", "black");
		$(".i").css("color", "black");
		$(".a").css("color", "black");
		$(".r").css("color", "black");

	},1300);


	setTimeout(function(){
		return rainbowHeader();
	}, 1300);




};



