$(document).ready(function() {
  
    $("#create-form").on("submit", function(event) {
      event.preventDefault();
    
      var burger_id = $(this).children("#burger_id").val();
      $.ajax({
        method: "PUT",
        url: "/api/update/" + burger_id
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
    
    });
  });
  
    