"use strict";

$(document).ready(function() {

    //name input goes through random sorting here
    $('#sort-wizard').click(function(e){
        let house = Math.floor(Math.random() * 4);
        let newWizard = $('#new-wizard');
        let newMember = $('<li></li>').text(newWizard.val());
        switch(house){
            case 0:
                $('#gryffindor').append(newMember);
                break;
            case 1:
                $('#slytherin').append(newMember);
                break;
            case 2:
                $('#ravenclaw').append(newMember);
                break;
            default:
                $('#hufflepuff').append(newMember);
                break;
        }
        newWizard.val('');
    });

    /**********************************************
     * 			Attributes and CSS
     *********************************************/

    // TODO TOGETHER:  Using an event listener and css method, increase the font-size of 'Sorting Hat' when clicked.
    //    How can font size be changed using .html()?
    // h1 with id="main-heading" and text Sorting Hat
    $('#main-heading').click(function(){
        // $(this).css('font-size', '4em');
        $(this).html('<p>My Sorting Hat</p>');
        $(this).text('My Sorting Hat');
    })

    // this replaces the current list on click
    // to add to the list see the .append method above
    // or .prepend method

    // $('ul').click(function(){
    //    $(this).html('<li>Test</li>');
    // });

    // TODO TOGETHER: store the inner text of #main-heading in a variable
    var mainHeading =  $('#main-heading').text();

    // TODO: Using a css method, change the banner background-color to black
    //  Hint: make sure you use the right selector
    $('.banner').css('background-color','#000');

    // TODO TOGETHER: When the 'Houses' button is clicked, add the class 'house' to anything with a class of 'house-name'
    // $('#highlight-houses').click(function(){
    //     // target elements with class house-name & add class house to html
    //     $('.house-name').addClass('house');
    // });

    // TODO: Comment out the code above. Add the class of 'house' to all the 'house-names'
    //  Write the event listener to remove the class instead
    // $('#highlight-houses').click(function(){
    //     // target elements with class house-name & add class house to html
    //     $('.house-name').removeClass('house');
    // });

    // TODO TOGETHER: Refactor your addClass and removeClass methods to toggle the 'house' class instead
    $('#highlight-houses').click(function(){
        // target elements with class house-name & add class house to html
        $('.house-name').toggleClass('house');
    });

    // hasClass method
    // change Lock In button to Unlock, class color to house color
    $('#lock-g').click(function(){
        // target elements with id, check if class is active
        $('#gryffindor-house').toggleClass('gryffindor');
        if($('#gryffindor-house').hasClass('gryffindor')){
            // this refers to element that triggers the event listener
            $(this).text('unlock');
        }else{
            $(this).text('lock in');
        }
    });

    /**********************************************
     * 			       Traversing
     *********************************************/

    // $('gryffindor').children();
    // children returns a collection, anything that's a list/collection, you can get .first() and .last() on

    // console.log($('#josh').next());

    // TODO TOGETHER: console log each list element's text
    // instead of arr.forEach(function(element(){}
    // .each(function(index, element) {}) // similar to forEach loop but order of arguments is different - index, element
    $('li').each(function(){
        console.log($(this).html());
    });

    // // TODO TOGETHER: select all list elements and console log the first match
    console.log($('li').first());

    // TODO TOGETHER: select all list elements and console log the last match
    console.log($('li').last());

    // TODO TOGETHER: When I click on a list element, highlight its parent
    $('li').click(function(){
        $(this).parent().css('background-color', '#FF0');
    });

    // TODO TOGETHER: When I click into a <ul>, console log last child in that group
    $('ul').click(function(){
        console.log($(this).children().last().html());
    });

    // TODO TOGETHER: When I click on any list element, console log the next element
    $('#r-heading').click(function(){
        $(this).next().css('background-color', 'blue');
    });



});
