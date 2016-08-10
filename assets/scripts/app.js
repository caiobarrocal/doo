var getTask = function(x) {

	var task = document.getElementById(x).value;
	return task;
}

var createNewListPage = function(color, name) {
    
    var opened = window.open("", "_self");
    opened.document.write(new_list_page_structure);
}

var main = function() {
    
    var chosen_color='black';

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
    
    //control add-screen appearing and disapearing
    $('.add-list').click(function() {

        $('.new-flash').fadeIn(100);
    });
    
    $('.new-flash #cancel-button').click(function() {

        $('.new-flash').fadeOut(100);
        chosen_color='';
    });
    
    $('.colors').on( 'click','.color', function() {
        chosen_color = $(this).css("background-color");
    });
    
    $('.new-flash #create-button').click(function() {
       
        createNewListPage(chosen_color, 'azul');
        
    });
    
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

        
    })*/
    
};

$(document).ready(main);