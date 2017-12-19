// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-it").on("click", function(event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var notDevoured = {
            devour: devoured
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: notDevoured
        }).then(
            function() {
                console.log("changed status to", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burgerName: $("#newBurger").val().trim(),
            devour: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created a new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
