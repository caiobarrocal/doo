var main = function() {
    
    $('.checkbox').click(function() {
        $(this).addClass('checked');
    });
};

$(document).ready(main);