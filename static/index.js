const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2dccc510af7de0826fb680ee74492d95&page=1";

const IMGPATH = "https://image.tmdb.org/t/p/w500/";

const SEARCHAPI =
"https://api.themoviedb.org/3/search/movie?&api_key=2dccc510af7de0826fb680ee74492d95&query=";

document.addEventListener('DOMContentLoaded', function() {
    const movieForm = document.querySelector('form');
    const genreInput = document.getElementById('genreInput');
    const languageInput = document.getElementById('languageInput');
    const ratingInput = document.getElementById('ratingInput');
    +

    movieForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const genre = genreInput.value;
        const language = languageInput.value;
        const rating = ratingInput.value;
        console.log(genre, language, rating)

        
        callMovieApi(genre, language, rating);
    });

    function callMovieApi(genre, language, rating) {
       
        const apiUrl = `${APIURL}&with_genres=${genre}&with_original_language=${language}&vote_average.gte=${rating}`;

        
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Handle the API response data
                console.log(data);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
});
