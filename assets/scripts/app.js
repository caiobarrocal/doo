var getTask = function(x) {

	var task = document.getElementById(x).value;
	return task;
}

var main = function() {

    $('.task-adder').focus(function() {
    	$(this).keyup(function(event) {
    		if (event.which === 13 ) {
    			var newTask = getTask('inputter');
    			$('.list').append('<div class="task newDiv" style="display:none;"><div class="checkbox"></div><p>'+newTask.toString()+'</p></div>');
    			$('.newDiv').appendTo('.list').show(100);
                
    			var event;
    		};

    	});
    	 
    });
    
    $('.list').on( 'click','.task .checkbox', function() {
        $(this).addClass('checked');
        $(this).parent().fadeOut(200, function(){
            $(this).remove();
        });
    });
};

$(document).ready(main);