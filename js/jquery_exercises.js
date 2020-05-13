(function ($) {
    "use strict";

    // jQuery document ready inside an IIFE
    $(document).ready(function () {

        // jQuery Intro Exercise

        // alert( 'The DOM has finished loading!' );
        // rest of your jQuery code goes here

        // jQuery Selectors Exercise

        // var contents = $('#cat-hat-quote').html();
        // alert(contents);
        //
        // $('.codeup').css('border', '1px solid red');
        //
        // $('li').css('font-size', '20px');
        //
        // $('h1, p, li').css('background-color','yellow');
        //
        // var heading = $('h1').html();
        // alert(heading);
        // // if you had more than one h1 you would use a for loop and
        // //   alert(myHeadings[i].innerHTML);
        //
        // $('img').css({'height': '100px', 'width': '100px'});

        // jQuery Mouse Events Exercise

        $('h1').click(function () {
            $(this).css('background-color', '#FF0');
        });

        $('p').dblclick(function () {
            $(this).css('font-size', '18px');
        });
        $('li').hover(
            function() {
                $(this).css('color', '#F00');
            },
            function() {
                $(this).css('color', '#000');
        });

    });
})(jQuery);


