let currentPage = 1;
let currentSearchTerm = '';

async function getMovies(searchTerm = '') {
    const apiKey = "5446ab24b5c44c62664c314851352fcf";
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currentPage}`;

    if (searchTerm) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
        currentPage = 1; // Resetting currentPage to 1 if there's a searchTerm, we should keep track of the currentPage separately for searches and the general list
    }

    const response = await fetch(url);
    const data = await response.json();

    if (!data.results) {
        console.error('API request failed', data);
        return;
    }

    const movies = data.results;
    const moviesGrid = document.getElementById('movies-grid');

    if(currentPage === 1) {
        moviesGrid.innerHTML = ''; // Clear the grid before adding new movies only if it's the first page
    }

    for (let movie of movies) {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <h2 class="movie-title">${movie.title}</h2>
            <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>
            <p class="movie-votes"> ⭐ ${movie.vote_average}</p>
        `;

        movieCard.addEventListener('click', () => {
            openModal(movie);
        });

        moviesGrid.appendChild(movieCard);
    }

    currentPage++; // Increment the currentPage after the movies have been successfully loaded and added to the grid
    currentSearchTerm = searchTerm; // Update the currentSearchTerm after the movies have been successfully loaded and added to the grid
}

function openModal(movie) {
    document.getElementById('modal-title').innerText = movie.title;
    document.getElementById('modal-poster').src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    document.getElementById('modal-votes').innerText = `⭐ ${movie.vote_average}`;
    document.getElementById('modal-overview').innerText = movie.overview;

    const modal = document.getElementById('movie-modal');
    modal.style.display = 'block';
}

document.getElementById('close-modal-btn').addEventListener('click', () => {
    const modal = document.getElementById('movie-modal');
    modal.style.display = 'none';
});

document.getElementById('close-search-btn').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    currentSearchTerm = '';
    currentPage = 1; // Reset the currentPage to 1 when the search is closed
    getMovies();
});

document.getElementById('search-input').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = event.target.value;
        getMovies(searchTerm);
    }
});

document.getElementById('load-more-movies-btn').addEventListener('click', () => getMovies(currentSearchTerm));

getMovies(); // Initial call to load the first page of movies
