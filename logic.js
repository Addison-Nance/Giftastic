var topics = ["Hustlers",
 "A Beautiful Day in the Neighborhood",
"Dolemite Is My Name",
"Knives Out",
"Parasite",
"Little Women",
"Marriage Story",
"Once Upon a Time... in Hollywood",
"The Irishman",
"Pain & Glory",
]
var searchterm="";
$(document).ready(function(){
    for (let i = 0; i < topics.length; i++) {
        var buttons = $("<button class='moviebutton'>" + topics[i] + "</button>");
        buttons.appendTo("#buttonBox");
    };
    
    
});
$(document).on('click', '.moviebutton', function(){ 
    var text = $(this).text();
    $("button").val(text);
    // console.log(text)
    searchterm=text.toLowerCase()
    console.log(searchterm);


    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchterm + "&api_key=wQJXIAQWtZyJ9vxRJKD1Kly5kx8U1jQF&limit=5");
    xhr.done(function(data) { console.log("success got data", data)});
        for (let i = 0; i < array.length; i++) {
            //grap the url from the response
            //write the URL to the DOM within an img src tag
            //dispaly the gif in a "still" state
            // display the gif's rating below the gif

        }
    



});
// on click function
// if state is "still":
//set state to "animated" and animate gif
// else: 
// set state to still
//display still image



//capture search input
//push to topics array
//call function to recreate search buttons with new strings
//