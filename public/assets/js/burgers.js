$("#addburger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger: $("#addburger [name= burger_name]").val().trim()
    };

    // Send the POST request.
    $.ajax("/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        location.reload();
      }
    );
  });


  //$("#updateStatus").on("submit", function(event) {
            // Make sure to preventDefault on a submit event.
  //  event.preventDefault();

   // var id = $("[name=id]").val().trim();

   // var updatedMovie = {
   //   movie: $("#updatemovie [name=movie]").val().trim()
   // };

   // // Send the PUT request.
   // $.ajax("/burgers/" + id, {
   //   type: "PUT",
   //   data: updatedMovie
   // }).then(
   //   function() {
    //    console.log("updated id ", id);
        // Reload the page to get the updated list
    //    location.reload();
    //  }
    //);
  //});