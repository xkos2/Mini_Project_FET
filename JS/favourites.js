
document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        axios.get('http://localhost:3000/movies')
            .then(res => {
                const curr = res.data;
                console.log(curr);
                addMovies(curr);
            })
            .catch(e => {
                console.log("Error on Movies Route", e)
            })

        function addMovies(items) {
            var favoriteList = document.getElementById("favourite_list");
            items.forEach(item => {
                var tile = document.createElement("div");
                tile.classList.add("col-3");
                tile.innerHTML = `<img class="img-thumbnail" src=\"${item.Images[0]}\">`;
                let tileButton = createButton(item.Images[0]);
                tile.append(tileButton);
                favoriteList.append(tile);
            });
        }

        function createButton(item) {
            var button = document.createElement("button");
            button.className = "add-to-favorites btn btn-info my-1";
            button.setAttribute("data-item", item);
            button.textContent = "Add to Favorites";

            button.addEventListener("click", function () {
                toggleFavorite(button, item);
            });

            return button;
        }

        function addToFavorites(item) {
            var colDiv = document.createElement("div");
            colDiv.className = "col-12";
            colDiv.textContent = item;

            var favList = document.querySelector(".fav_list");
            favList.appendChild(colDiv);
        }

        function removeFromFavorites(item) {
            var favList = document.querySelector(".fav_list");
            var items = favList.getElementsByClassName("col-12");

            for (var i = 0; i < items.length; i++) {
                if (items[i].textContent === item) {
                    favList.removeChild(items[i]);
                    break;
                }
            }
        }

        function toggleFavorite(button, item) {
            if (button.classList.contains("added")) {
                // Item is already in favorites, remove it
                button.classList.remove("btn-success");
                button.className = "btn btn-info";
                button.classList.remove("added");
                removeFromFavorites(item);
            } else {
                // Add the item to favorites
                addToFavorites(item);
                // Update button appearance
                button.className = "btn btn-success";
                button.classList.add("added");

            }
        }

    });
});
