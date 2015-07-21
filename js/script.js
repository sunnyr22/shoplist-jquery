$(document).ready(function() {
    $(".list-items").on("click", "li", function() {
    $(this).find(".item").toggleClass('stroked');
    });
    $(window).keydown(function(event){
	  if(event.keyCode == 13) {
	  event.preventDefault();
	  return false;
    }
  });

// Adding new items
	$(".itemInput").keydown(function(e) {
		if (e.which === 13) {
			addItem();
			e.preventDefault();
			return false;
         }
         
     })
	$(".list-items").on("click", ".remove",function(){
			$(this).closest("li").remove();
		})
     $(".addToList").on("click", function() {
     	 addItem();
     });

});

function addItem(){
	$(".list-items").append("<li><span class='item'>"+$(".itemInput").val()+"</span><img class='remove' src='images/x-mark.png'></li>");
			$(".itemInput").val("");
}