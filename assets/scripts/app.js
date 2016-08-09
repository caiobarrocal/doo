var getTask = function(x) {

	var task = document.getElementById(x).value;
	return task;
}

var main = function() {


    //side-menu interation

    $('.lists-menu').hover(function() {

        $('.add-list').fadeIn(200);
    }, function() {

         $('.add-list').fadeOut(200);
    }
    );

     $('.projects-menu').hover(function() {

        $('.add-project').fadeIn(200);
    }, function() {

         $('.add-project').fadeOut(200);
    }
    );

    $('.add-list').click(function() {

        $('.new-flash').fadeIn(100);
    })



    // task adding and removing

    $('.task-adder').focus(function() {
    	$(this).keyup(function(event) {
    		if (event.which === 13 && this.value !== '') {
    			var newTask = getTask('inputter');
    			$('.list').append('<div class="task newDiv" style="display:none;"><div class="checkbox"></div><p>'+newTask.toString()+'</p></div>');
    			$('.newDiv').show(100);
                this.value='';
    		};

    	});
    	 
    });
    
    $('.list').on( 'click','.task .checkbox', function() {
        $(this).addClass('checked');
        $(this).parent().fadeOut(200, function(){
        $(this).remove();
        });
    });

    

   /* $('.add-object a').click(function() {

        var opened = window.open("", "_self");
        opened.document.write("<html><head><title>My title</title></head><body>test</body></html>");
    })*/
    
};

$(document).ready(main);