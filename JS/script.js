$(document).ready(function () {
    const ratingContainer = $("#rating-container");
    const selectedRating = $("#rating-value");

    // Number of stars
    const totalStars = 5;

    // Dynamically create stars
    for (let i = 1; i <= totalStars; i++) {
        const star = $("<span>", { class: "star", "data-value": i, html: "&#9733" });
        ratingContainer.append(star);
    }

    // Add click event listener to each star
    ratingContainer.on("click", ".star", function () {
        const value = $(this).data("value");
        updateRating(value);
        sendRatingToServer(value);
        fetchRatings();
    });

    // Function to update the selected rating
    function updateRating(value) {
        selectedRating.text(value);
        // Remove 'active' class from all stars
        $(".star").removeClass("active");
        // Add 'active' class to the selected stars
        $(`.star[data-value="${value}"]`).addClass("active");
    }

    // Function to send the rating to the server
    function sendRatingToServer(value) {
        axios.post('/api/rate', { value })
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.error('Error sending rating to the server', error);
            });
    }

    // Function to fetch all ratings from the server
    function fetchRatings() {
        axios.get('/api/ratings')
            .then(response => {
                const ratings = response.data;
                console.log('All ratings:', ratings);
            })
            .catch(error => {
                console.error('Error fetching ratings from the server', error);
            });
    }

    // Fetch all ratings initially
    fetchRatings();
});

