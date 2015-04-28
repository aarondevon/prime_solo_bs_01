/**
 * Created by aaronsawyer on 4/28/15.
 */

var apikey = '63ca07321b9d1e89888017956dfe1c1afd182df7'; // Put your API key here
var i = 0;

// Use this function to do stuff with your results.
// It is called after 'search' is executed.
function searchCallback(results) {
    $('.resultsBlock').empty();
    for(i = 0; i<=8; i++) {

        $("#searchBlock").append("<div id='searchObject" +i+ "' class='searchResults col-md-4 well'><div class='hidden-xs hidden-sm'><img src='" + results[i].image.thumb_url + "'/></div></div>");
        $("#searchObject"+i ).append("<p class='title'>" + results[i].name + "</p>");
        $("#searchObject"+i).append("<div><div>" + results[i].deck + "</div></div>");
        $("#searchObject"+i).append("<button class='btn-sm btn-success removeMe '>Remove me</button>")
        console.log(results[i]);
    }
    $("#searchBlock").hide().fadeIn(600);
}

$(document).ready(function() {

    // Start the search here!

    $("#searchBlock").on("click",".removeMe", function(){
        $(this).parent().fadeOut(700)
        console.log("made it here");
    });
});

// HELPER FUNCTION
// Executes a search using 'query' and runs searchCallback on the results of a success.
search("batman");
function search(query){

    $.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'http://www.giantbomb.com/api/search/?format=jsonp&resources=game&api_key=' + apikey +'&query=' + encodeURI(query),
        complete: function() {
            console.log('ajax complete');
        },
        success: function(data) {
            searchCallback(data.results);
        }
    });

}