$(document).ready(function() {
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
    
      var burger_id = $(this).children("bur").val();
      $.ajax({
        method: "PUT",
        url: "/api/update/" + burger_id
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        location.reload();
      });
    
    });
  });
  
    


// $(function(){
//   $(".devoured").on("click", function(event){
//       var id = $(this).data("id");
//       var status = {devoured:true};

//       $.ajax("/api/burgers/" + id,{
//           type: "PUT",
//           data: status
//       }).then(function(){
//           location.reload();
//       });
//   });



// });
