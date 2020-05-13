
  
    // Initial array of movies
    var charactors = ["Iron Man", "Captain America", "Black Widow", "Thor","Hulk"];
    // displayMovieInfo function re-renders the HTML to display the appropriate content
    function displayCharactorInfo() {
    
     var charactor = $(this).attr("data-search");
     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +charactor+ "&api_key=6Udiqq9v5j02FwXO6oJOOWE4kA2EA6Q2&limit=10";
    
      // Creating an AJAX call for the specific movie button being clicked
      $.ajax({
          url: queryURL,
          method: "GET"
      }).then(function(response) {
    
    // Storing an array of results in the results variable
    var results = response.data;
    
    
    // Creating a div to hold the charactor
    var charactorDiv = $("<div class = 'charactor'>");
    
    // Storing the rating data
    var rating = results.rating;
    
    // Creating an element to have the rating displayed
    var pRating = $("<p>").txet("Rating :  " + rating);
    
    // Creating an image tag
     var imgURL = results.images ;
     var image = $("<img>").attr("src",imgURL);
     
    
    // Appending the paragraph and imgURL we created to the "charactorDiv" div we created
    //To Display images and rating
    charactorDiv.append(image);
    charactorDiv.append(pRating);
    
    // Prepending the charactorDiv to the "#gifs-appear-here" div in the HTML
    $("#gifs-appear-here").prepend(charactorDiv);
    
           
     });
    
    };
    
    // Function for displaing charactor data
    
    function renderButtons(){
    
    // Deleting the charactors prior to adding new charactors
    // (this is necessary otherwise you will have repeat buttons)
    $("#btn-view").empty();
    
    // Looping through the array of charactors
    for (var i = 0; i < charactors.length; i++){
    
    // Then dynamicaly generating buttons for each charactor in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
    //Adding a class of charactor-btn to our button 
            a.addClass("charactor-btn");
    // Adding a data-attribute
            a.attr("data-search", charactors[i]);
    // Providing the initial button text
            a.text(charactors[i]);
    // Adding the button to the btn-view div
            $("#btn-view").append(a);
    
       }
    
    };
    
    // This function handle event where a charactor button is clicked
    $("add-charactor").on("click", function(event){
    event.preventDefault();
    
    // This line grabs the input from the textbox
    var charactor = $("charactor-input").val().trim();
    
    // Adding charactor from textbox to our array
    charactors.push(charactor);
    
    // Calling renderButtons which handles the processing of our charactor array
    renderButtons();
    });
    
    // Adding a click event listener to all elements with a class of "charactor-btn"
    $(document).on("click", ".charactor-btn", displayCharactorInfo);
    
    // Calling the renderButtons function to display the intial buttons
          

    renderButtons();
    
    
    
  