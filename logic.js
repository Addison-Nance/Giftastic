var searchterm="";
$("#searchbutton").on("click", function{
    searchterm= $("#searchinput").val();
    var queryURL= "api.giphy.com/v1/gifs/search?q=" + searchterm + "&api_key=wQJXIAQWtZyJ9vxRJKD1Kly5kx8U1jQF&limit=5";
    



});