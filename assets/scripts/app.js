//lists structure
var listsStructure = {'inbox':['grey', 'example task 1', 'example task 2']};
var current_color = 'grey';
var current_list = '';

var getValue = function(x) {

	var task = document.getElementById(x).value;
	return task;
}

var loadMenu = function() {
    
    for (list in listsStructure) {
        
        var list_values = listsStructure[list];
        var list_color = list_values[0];
        $('.lists-menu ul').append('<li><div class ="list-mark" style="background-color:' + list_color + '"></div><a href="#">' + list + '</a></li>');
    };
};

var reLoadMenu = function () {
    
    $('.side-menu li').remove();
    loadMenu();
};

var loadTasks = function(color) {
    
    var tasks_array = listsStructure[current_list];
    
    for( i=1; i < tasks_array.length; i++) {
        
        $('.list').append("<div class='task newDiv' style='border-color: " + color + "'><div class='checkbox'></div><p class='task-text'>" + tasks_array[i] + "</p></div>");
    };
};

var newListPage = function(name, color) {
    
    var strVar="";
    strVar += "<div class='list-board'>";
    strVar += "                <h1 style='color: " + color.toString() + "'>" + name +  "&nbsp<span>list<\/span><\/h1>";
    strVar += "";
    strVar += "                <input type=\"text\" placeholder=\"add a task...\" class=\"task-adder\" id=\"inputter\">";
    strVar += "";
    strVar += "                <div class=\"list\">";
    strVar += "";
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    
    $('.list-board').remove();
    $('.tasks').append(strVar);
};

var createNewList = function (name, color) {
    
    listsStructure[name] = [color];
    
    reLoadMenu();
    
    newListPage(name, color);
    $('.new-flash').fadeOut(100);
    current_list = name;
};

var loadExistingList = function(name) {
    
    var content_array = listsStructure[name];
    var color = content_array[0];
    
    current_list = name;
    newListPage(name, color);
    loadTasks(color);
};

var addTask = function(name, task) {
    
    var array_of_tasks = listsStructure[name];
    array_of_tasks.push(task);
    
    listsStructure[name] = array_of_tasks;
};

var removeTask = function(name, task) {
    
    var array_of_tasks = listsStructure[name];
    var index = array_of_tasks.indexOf(task);
    console.log(index);
    
    if (index > -1) {
        array_of_tasks.splice(index, 1);
    }
    
};

var getColor = function(list) {
    
    var content_array = listsStructure[list];
    
    return content_array[0];
};

var addToFavs = function(name, task) {
    
    //fill later
}

var main = function() {
    
    current_list = 'inbox';
    
    //setting menus and tasks
    
    loadMenu();
    loadTasks(current_color);

    //side-menu interation

    $('.lists-menu').hover(function() {

        $('.add-list').fadeIn(200);
    }, function() {

         $('.add-list').fadeOut(200);
    }
    );
    
    $('.lists-menu').on( 'click','li', function() {
        
        var listToLoad = this.textContent || this.innerText;
        loadExistingList(listToLoad);
    });

    
    //control add-screen appearing and disapearing
    $('.add-list').click(function() {

        $('.new-flash').fadeIn(100);
        $('#list-name-inputter').focus();
    });
    
    $('.new-flash #cancel-button').click(function() {

        $('.new-flash').fadeOut(100);
        
        // erasing input name field
        var add_field = this.parentNode;
        var new_input = add_field.getElementsByClassName('name-adder')[0];
        new_input.value='';
        
        new_list_name = '';
        chosen_color = '';
    });
    
    $('.colors').on( 'click','.color', function() {
        chosen_color = $(this).css("background-color");
        $(this).addClass('marked-color');
    });
    
    $('.new-flash #create-button').click(function() {
       
        new_list_name = getValue('list-name-inputter');
        createNewList(new_list_name, chosen_color);
        
        // erasing input name field
        var add_field = this.parentNode;
        var new_input = add_field.getElementsByClassName('name-adder')[0];
        new_input.value='';
        
        new_list_name = '';
        chosen_color = '';
    });
    
    // task adding and removing

    $('.tasks').on('focus', '.task-adder', function() {
    	$(this).keyup(function(event) {
    		if (event.which === 13 && this.value !== '') {
    			var newTask = getValue('inputter');
    			$('.list').append('<div class="task newDiv" style="display:none; border-color:' + getColor(current_list) + '"><div class="checkbox"></div><p class="task-text">'+newTask.toString()+'</p></div>');
    			$('.newDiv').show(100);
                this.value='';
                addTask(current_list, newTask.toString());
    		};

    	});
    	 
    });
    
    $('.tasks').on( 'click','.list .task .checkbox', function() {
        $(this).addClass('checked');
        var task_field = this.parentNode;
        var task_p = task_field.getElementsByClassName("task-text")[0].innerHTML;
        console.log(task_p);
        removeTask(current_list, task_p);
        $(this).parent().fadeOut(200, function(){
            
            $(this).remove();
        });
    });
    
    // favBar
    
    
    
  
};

$(document).ready(main);