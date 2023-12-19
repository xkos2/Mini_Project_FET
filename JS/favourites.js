document.addEventListener("DOMContentLoaded", function () {
    // Function to create a button with a specified data-item value
    function createButton(item) {
        var button = document.createElement("button");
        button.className = "add-to-favorites";
        button.setAttribute("data-item", item);
        button.textContent = "Add to Favorites";

        // Add an event listener to handle button clicks
        button.addEventListener("click", function () {
            toggleFavorite(button, item);
        });

        return button;
    }

    // Function to add an item to the favorite list
    function addToFavorites(item) {
        var colDiv = document.createElement("div");
        colDiv.className = "col-3";
        colDiv.textContent = item;

        var favoriteList = document.getElementById("favourite_list");
        favoriteList.appendChild(colDiv);
    }

    // Function to remove an item from the favorite list
    function removeFromFavorites(item) {
        var favoriteList = document.getElementById("favourite_list");
        var items = favoriteList.getElementsByClassName("col-3");

        for (var i = 0; i < items.length; i++) {
            if (items[i].textContent === item) {
                favoriteList.removeChild(items[i]);
                break;
            }
        }
    }

    // Function to toggle the favorite state and update button appearance
    function toggleFavorite(button, item) {
        if (button.classList.contains("added")) {
            // Item is already in favorites, remove it
            button.classList.remove("added");
            removeFromFavorites(item);
        } else {
            // Add the item to favorites
            addToFavorites(item);
            // Update button appearance
            button.classList.add("added");
        }
    }

    // Create buttons automatically with different data-item values
    var items = ["Item 1", "Item 2", "Item 3"];

    for (var i = 0; i < items.length; i++) {
        var button = createButton(items[i]);
        document.getElementById("favourite_list").appendChild(button);
    }
});