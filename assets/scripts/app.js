var main = function() {
    
    $('.task img').click(function() {
        $('.task .tick').show();
    },200);
};

$(document).ready(main);