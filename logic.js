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
$(document).ready(function(){
    for (let i = 0; i < topics.length; i++) {
        var buttons = $("<button class='moviebutton'>" + topics[i] + "</button>");
        buttons.appendTo("#buttonBox");
    };
    
    
});
$(document).on('click', '.moviebutton', function(){ 
    var text = $(this).text();
    $("button").val(text);
    console.log(text)
});


//     var queryURL= "api.giphy.com/v1/gifs/search?q=" + searchterm + "&api_key=wQJXIAQWtZyJ9vxRJKD1Kly5kx8U1jQF&limit=5";
//     console.log(searchterm);
//     $.ajax({
//         url: queryURL,
//         mathod: "GET"
//     })
//     .then(function(response){
//         var results =response.data;

//     })


// });