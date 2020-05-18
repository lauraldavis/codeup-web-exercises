(function ($) {
    "use strict";

    // jQuery document ready inside an IIFE
    $(document).ready(function () {

        // jQuery Intro Exercise

        // alert( 'The DOM has finished loading!' );
        // // rest of your jQuery code goes here


        // jQuery Selectors Exercise

        // Id Selectors

        // // 3. Use jQuery to select an element by id, alert the contents of the element
        // var contents = $('#cat').html();
        // alert(contents);
        //
        // // 4. Update the jQuery code to select and alert a different id
        // var contents = $('#hat').html();
        // alert(contents);
        //
        // // 5. Use the same id on 2 elements. How does it change the jQuery selection?
        // // Only the first one gets selected

        // Class Selectors

        // // 1. Remove jQuery code from previous exercise (commented out)
        // // 2. Update code so 3 diff elements have class named codeup
        // // 3. Using jQuery create a border around all elements with the class codeup 1px wide and red
        // $('.codeup').css('border', '1px solid red');
        //
        // // 4. Remove the class from one of the elements & test the border is removed
        // // 5. Give another element an id of codeup - does it get a border?
        // // No, a class selector can't target an id (and naming them the same thing is bad form anyway)

        // Element Selectors

        // // 1. Remove jQuery code from previous exercise (commented out)
        // // 2. Using jQuery set the font-size of all li elements to 20px
        // $('li').css('font-size', '20px');
        //
        // // 3. Craft selectors that highlight all the h1, p and li elements
        // $('h1, p, li').css('background-color','yellow');
        //
        // // 4. Create a jQuery statement to alert the contents of your h1 elements
        // var heading = $('h1').html();
        // alert(heading);
        // // if you had more than one h1 you would use a for loop and
        // //   alert(myHeadings[i].innerHTML);
        //
        // // Multiple Selectors
        // // 1. Combine your selectors that highlight all the h1, p and li elements
        // // Did this above, see #3 - Element Selectors


        // jQuery Events - Mouse Events Exercise

        // 1. Remove custom jQuery code from previous exercises (commented out)

        // 2. Add jQuery code to change the background color of an h1 element when clicked
        $('h1').click(function () {
            $(this).css('background-color', '#FF0');
        });

        // 3. Make all paragraphs have a font size of 18px when double clicked
        $('p').dblclick(function () {
            $(this).css('font-size', '18px');
        });

        // 4. Set all li text color to red when mouse hovers, reset to black when its not.
        $('li').hover(
            function() {
                $(this).css('color', '#F00');
            },
            function() {
                $(this).css('color', '#000');
        });

    });
})(jQuery);


