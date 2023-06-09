// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the search input element
    var searchInput = document.getElementById("searchInput");
    
    // Add event listener for input changes
    searchInput.addEventListener("input", function() {
      var filter = searchInput.value.toLowerCase();
      var movies = document.getElementsByClassName("movie");
      
      // Loop through the movies and hide/show based on the filter
      for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        var title = movie.getElementsByTagName("h2")[0].innerText.toLowerCase();
        
        if (title.includes(filter)) {
          movie.style.display = "block";
        } else {
          movie.style.display = "none";
        }
      }
    });
  });
  