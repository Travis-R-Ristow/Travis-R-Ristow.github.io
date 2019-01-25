
$(document).ready(function(){
	// var colorArray = ["Black","Navy","DarkBlue","MediumBlue","Blue","DarkGreen","Green","Teal","DarkCyan","DeepSkyBlue","DarkTurquoise","MediumSpringGreen","Lime","SpringGreen","Aqua","Cyan","MidnightBlue","DodgerBlue","LightSeaGreen","ForestGreen","SeaGreen","DarkSlateGray","DarkSlateGrey","LimeGreen","MediumSeaGreen","Turquoise","RoyalBlue","SteelBlue","DarkSlateBlue","MediumTurquoise","Indigo","DarkOliveGreen","CadetBlue","CornflowerBlue","RebeccaPurple","MediumAquaMarine","DimGray","DimGrey","SlateBlue","OliveDrab","SlateGray","SlateGrey","LightSlateGray","LightSlateGrey","MediumSlateBlue","LawnGreen","Chartreuse","Aquamarine","Maroon","Purple","Olive","Gray","Grey","SkyBlue","LightSkyBlue","BlueViolet","DarkRed","DarkMagenta","SaddleBrown","DarkSeaGreen","LightGreen","MediumPurple","DarkViolet","PaleGreen","DarkOrchid","YellowGreen","Sienna","Brown","DarkGray","DarkGrey","LightBlue","GreenYellow","PaleTurquoise","LightSteelBlue","PowderBlue","FireBrick","DarkGoldenRod","MediumOrchid","RosyBrown","DarkKhaki","Silver","MediumVioletRed","IndianRed","Peru","Chocolate","Tan","LightGray","LightGrey","Thistle","Orchid","GoldenRod","PaleVioletRed","Crimson","Gainsboro","Plum","BurlyWood","LightCyan","Lavender","DarkSalmon","Violet","PaleGoldenRod","LightCoral","Khaki","AliceBlue","HoneyDew","Azure","SandyBrown","Wheat","Beige","WhiteSmoke","MintCream","GhostWhite","Salmon","AntiqueWhite","Linen","LightGoldenRodYellow","OldLace","Red","Fuchsia","Magenta","DeepPink","OrangeRed","Tomato","HotPink","Coral","DarkOrange","LightSalmon","Orange","LightPink","Pink","Gold","PeachPuff","NavajoWhite","Moccasin","Bisque","MistyRose","BlanchedAlmond","PapayaWhip","LavenderBlush","SeaShell","Cornsilk","LemonChiffon","FloralWhite","Snow","Yellow","LightYellow","Ivory","White"];
	var hue = 0;
	var h1;
	var h2;
	var form;
	var button;

	$("#navBar h1").mouseenter(() => {
		hue = 0;
		h1 = setInterval(function() {
			$("#navBar h1:hover").css( "color", "hsl("+hue+", 100%, 50%)");
			$("#navBar h1:hover").css( "border-top", "solid 0.5vw hsl("+hue+", 100%, 50%)");
			$("#navBar h1:hover").css( "border-bottom", "solid 0.5vw hsl("+hue+", 100%, 50%)");
			hue++;
			if(hue > 350){hue = 0;}
		},25);
	}).mouseleave(() => {
		clearInterval(h1);
		$("#navBar h1").css( "color", "white" );
		$("#navBar h1").css( "border-top", "solid 0.5vw silver");
		$("#navBar h1").css( "border-bottom", "solid 0.5vw silver");
	});


	$(".box h2").mouseenter(() => {
		hue = 0;
		h2 = setInterval(function() {
			$(".box h2:hover").css( "color", "hsl("+hue+", 100%, 50%)");
			hue++;
			if(hue > 350){hue = 0;}
		},25);
	}).mouseleave(() => {
		clearInterval(h2);
		$(".box h2").css( "color", "white" );
	});

	$(".box form input").focusin(() => {
		console.log("in");
		form = setInterval(function() {
			$(".box form input:focus").css( "border", "solid 0.2vw hsl("+hue+", 100%, 50%)");
			hue++;
			if(hue > 350){hue = 0;}
		},25);
	});

	$(".box form input").focusout(() => {
		console.log("out");
		clearInterval(form);
		$(".box form input").css( "border", "solid 0.2vw black");

	});
	$(".box form textarea").focusin(() => {
		console.log("in");
		form = setInterval(function() {
			$(".box form textarea:focus").css( "border", "solid 0.2vw hsl("+hue+", 100%, 50%)");
			hue++;
			if(hue > 350){hue = 0;}
		},25);
	});

	$(".box form textarea").focusout(() => {
		console.log("out");
		clearInterval(form);
		$(".box form textarea").css( "border", "solid 0.2vw black");
	});

	$(".box button").mouseenter(() => {
		hue = 0;
		button = setInterval(function() {
			$(".box button:hover").css( "box-shadow", "0 0 1vw hsl("+hue+", 100%, 50%)");
			hue++;
			if(hue > 350){hue = 0;}
		},25);
	}).mouseleave(() => {
		clearInterval(button);
		$(".box button").css( "box-shadow", "0 0 1vw black");
	});

	$("a").mouseenter(() => {
		hue = 0;
		a = setInterval(function() {
			$("a:hover").css( "color", "hsl("+hue+", 100%, 50%)");
			hue++;
			if(hue > 350){hue = 0;}
		},25);
	}).mouseleave(() => {
		clearInterval(a);
		$("a").css( "color", "black");
	});
});