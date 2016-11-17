

	$('.button2').on('click', function(){
      $('.button2').text('Thank you! Check your email to confirm.');

      });

$(document).ready(function(){
	$("h1").slideDown(1000)
	.fadeIn(800);
});


var winH = $(window).height();
var mapSection = $(".map");
$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".callout-mexico")
       .animate({
			"opacity":".9"
		},1500
);  
    }
  });

$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".callout-brazil")
       .animate({
			"opacity":".9"
		},1500
);  
    }
  });

$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".callout-colombia")
       .animate({
			"opacity":".9"
		},1500
);  
    }
  });

$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".callout-argentina")
       .animate({
			"opacity":".9"
		},1500
);  
    }
  });

$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".callout-chile")
       .animate({
			"opacity":".9"
		},1500
);  
    }
  });

$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".callout-peru")
       .animate({
			"opacity":".9"
		},1500
);  
    }
  });


$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".box-1")
       .animate({
			"left":"545px",
			"opacity":".9"
		},1150
);  
    }
  });
$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".brazil-circle")
       .animate({
			"left":"60%",
			"opacity":".9"
		},1150
);  
    }
  });
$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".box-2")
       .animate({
			"left":"540px",
			"opacity":".9"
		},1250
);  
    }
  });
$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".mexico-circle")
       .animate({
			"left":"60.5%",
			"opacity":".9"
		},1250
);  
    }
  });$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".box-3")
       .animate({
			"left":"550px",
			"opacity":".9"
		},1350
);  
    }
  });
$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".argentina-circle")
       .animate({
			"left":"60.75%",
			"opacity":".9"
		},1350
);  
    }
  });
$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".box-4")
       .animate({
			"left":"545px",
			"opacity":".9"
		},1450
);  
    }
  });
$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".colombia-circle")
       .animate({
			"left":"61.5%",
			"opacity":".9"
		},1450
);  
    }
  });

$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".box-5")
       .animate({
			"left":"545px",
			"opacity":".9"
		},1500
);  
    }
  });
$(window).on("scroll", function(){
      var rect = mapSection[0].getBoundingClientRect();
      if (rect.top < (winH / 2)) {
       $(".chile-circle")
       .animate({
			"left":"61.7%",
			"opacity":".9"
		},1500
);  
    }
  });

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
$(btn).on("click", function() {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
$(span).on("click", function() {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
$(window).on("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }  
});









