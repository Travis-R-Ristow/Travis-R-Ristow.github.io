
$(document).ready(function(){
	$( "#fhb" ).on( "click", () => {
		$("#FHB").css("display", "block").on( "click", () => {
			$("#FHB").css("display", "none")
		});
	});

	$( "#pp" ).on( "click", () => {
		var index = 0;
		function slideShow() {
		  var i;
		  var slides = $("#PP img");
		  for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";  
		  }
		  index++;
		  if (index > slides.length) {index = 1}    
		  slides[index-1].style.display = "inline-block";  
		  setTimeout(slideShow, 5000);
		}
		slideShow();
		$("#PP").css("display", "block").on( "click", () => {
			$("#PP").css("display", "none")
		});
	});

	$( "#wbs" ).on( "click", () => {
		$("#WBS").css("display", "block").on( "click", () => {
			$("#WBS").css("display", "none")
		});
	});

	$( "#crawler" ).on( "click", () => {
		$("#CRAWLER").css("display", "block").on( "click", () => {
			$("#CRAWLER").css("display", "none")
		});
	});

	$( "#pc" ).on( "click", () => {
		var index = 0;
		function slideShow() {
		  var i;
		  var slides = $("#PC img");
		  for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";  
		  }
		  index++;
		  if (index > slides.length) {index = 1}    
		  slides[index-1].style.display = "inline-block";  
		  setTimeout(slideShow, 5000);
		}
		slideShow();
		
		$("#PC").css("display", "block").on( "click", () => {
			$("#PC").css("display", "none");
		});
	});

	$( "#rr" ).on( "click", () => {
		$("#RR").css("display", "block").on( "click", () => {
			$("#RR").css("display", "none")
		});
	});

	$( "#bc" ).on( "click", () => {
		$("#BC").css("display", "block").on( "click", () => {
			$("#BC").css("display", "none")
		});
	});

	$( "#bb" ).on( "click", () => {
		$("#BB").css("display", "block").on( "click", () => {
			$("#BB").css("display", "none")
		});
	});
});
