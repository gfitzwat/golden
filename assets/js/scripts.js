   $(document).on("scroll", function()
        {
          if($(document).scrollTop() > 10)
              {
              $("header, #logo").addClass("shrink");
              }
		  else
              {
                $("header").removeClass("shrink");
              }
	});
    
    
    $(function() {
            
           $('body').on('click', '#nav-trigger', function() { 
                $(".side-nav").remove();   
                $("nav").clone().prependTo( "body" ).addClass("side-nav slide-left");
                $("nav.slide-left").append('<div id="nav-close"> <span>X</span></div>'); 
            });
            
            
           $('body').on('click', '#nav-close', function() {
               $("nav.slide-left").animate({right: '-230px'}).fadeOut("fast");
   
           });
            
 
    });