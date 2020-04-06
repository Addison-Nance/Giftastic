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
    
    



});