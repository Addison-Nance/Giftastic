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


    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchterm + "&api_key=wQJXIAQWtZyJ9vxRJKD1Kly5kx8U1jQF&limit=10"
    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
        for (let i = 0; i< response.data.length; i++) {
            console.log(response.data[i].url);
            var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
            img.attr('src', response.data[i].url);
            img.appendTo('#gifbox');
        };
    //    var urlarray = [];
    //    console.log(urlarray)
    });

    



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