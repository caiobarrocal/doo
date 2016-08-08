var getTask = function(x) {

	var task = document.getElementById(x).value;
	return task;
}

var removeTask = function(x) {

	$(x).remove();
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

    $('.checkbox').click(function() {
        $(this).addClass('checked');
        $(this).parent().hide(400);
    });
};

$(document).ready(main);