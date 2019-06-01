$(function(){
  $(".devoured").on("click", function(event){
      var id = $(this).data("id");
      var status = {devoured:true};

      $.ajax("/api/burgers/" + id,{
          type: "PUT",
          data: status
      }).then(function(){
          location.reload();
      });
  });


$(".create-form").on("submit", function(event) {
  event.preventDefault();
  console.log("submit form");
  console.log($("#bur").val().trim());
  var newBurger = {
      name: $("#bur").val().trim()
  };
  $.ajax("/api/burgers",{
      type: "POST",
      data: newBurger
  }).then(function(){
      location.reload();
      console.log(newBurger);
  });
});
});
