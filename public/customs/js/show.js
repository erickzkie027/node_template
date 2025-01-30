$(document).ready(function() {
    
    $("body").on("click", ".img-thumbnail", function(){
        // $(".delete-cart-form").each(function(){
        //     $(this).submit();
        // });

        $("#modal-image").attr("src", $(this).attr("src"));
    });
});