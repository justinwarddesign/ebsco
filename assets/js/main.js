$(document).ready(function(){
	
    // $(document).ready(function() {
                //var language = "test";
               // $("html").attr("lang", language); //language //var = from DB
    //  }); 

    $('.bookmark').click(function(){
		 $(this).closest('.result-bookmark').toggleClass('clicked');
	});

	$(".keywords").click(function(){
		$('.modal').fadeIn('fast');
		$(this).closest('.result-keywords').fadeIn();
	});
 


});