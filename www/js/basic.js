


$(document).ready(function() {
 
    var InfiniteRotator =
    {
        init: function()
        {

            //interval between items (in milliseconds)
            var itemInterval = 100;
 
            //count number of items
            var numberOfItems = 10;
 
            //set current item
            var currentItem = 1;
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                if(currentItem == numberOfItems -1){currentItem = 1;}else{currentItem++;}
				$('#fire_image').attr('src','img/IMG_0135.0000' + currentItem + '.jpg').trigger('create');
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();


 
});


$(function () {
    $('#leftNav').children('a').button();
});


$(function () {
    var element = $("#ticker");
    (function(){
        element
            .animate({ marginLeft: -455, easing: 'linear' }, 8000, 'linear')
			.animate({ marginLeft: -7, easing: 'linear' }, 1, arguments.callee)

    }());
});



	










