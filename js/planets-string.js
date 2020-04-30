(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsStringBreak = planetsArray.join("<br>");
    console.log(planetsStringBreak);
    // useful for creating HTML content, displaying the elements in a vertical list

    // Bonus
    function createListItems(arr) {
        var output = "";
        arr.forEach(function (element) {
            output += ("<li>" + element + "</li>");
        });
        return output;
    };

    console.log(createListItems(planetsArray));

    function createUnorderedList(str) {
        var output = "<ul>";
        output += str;
        output += "</ul>"
        return output;
    }

    console.log(createUnorderedList(createListItems(planetsArray)));

})();
