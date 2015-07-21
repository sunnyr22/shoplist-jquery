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
			if ($('.itemInput').val() !== '') {
			addItem();
			}
			e.preventDefault();
			return false;
         }
         
     })
    $(".addToList").on("click", function() {
       if ($('.itemInput').val() !== '') {
          addItem();
        }
     });

// Removing items
	$(".list-items").on("click", ".remove",function(){
			$(this).closest("li").remove();
		})
});

function addItem(){
	$(".list-items").append("<li><span class='item'>"+$(".itemInput").val()+"</span><img class='remove' src='images/x-mark.png'></li>");
	$(".itemInput").val("");
}