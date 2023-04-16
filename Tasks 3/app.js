
fetch('data.json')
  .then(response => response.json())
  .then(movies => {
    const form = document.querySelector('form');
    const recommendations = document.getElementById('recommendations');

    form.addEventListener('submit', e => {
      e.preventDefault(); 

      const genre = document.getElementById('genre').value;
      const rating = parseFloat(document.getElementById('rating').value);
      const year = parseInt(document.getElementById('year').value);

      const filteredMovies = movies.filter(movie => {
        return movie.genres.includes(genre) &&
               movie.vote_average >= rating &&
               new Date(movie.release_date).getFullYear() >= year;
      });

recommendations.innerHTML = '';

if (filteredMovies.length > 0) {
  const fragment = document.createDocumentFragment();
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');


  const headerRow = document.createElement('tr');
  const rankHeader = document.createElement('th');
  rankHeader.textContent = 'Rank';
  headerRow.appendChild(rankHeader);

  const movieHeader = document.createElement('th');
  movieHeader.textContent = 'Movie';
  headerRow.appendChild(movieHeader);

  const yearHeader = document.createElement('th');
  yearHeader.textContent = 'Year';
  headerRow.appendChild(yearHeader);

  const imageHeader = document.createElement('th');
  imageHeader.textContent = 'Image';
  headerRow.appendChild(imageHeader);

  const genreHeader = document.createElement('th');
  genreHeader.textContent = 'Genre';
  headerRow.appendChild(genreHeader);

  const timeLengthHeader = document.createElement('th');
  timeLengthHeader.textContent = 'Total Time Length';
  headerRow.appendChild(timeLengthHeader);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  filteredMovies.forEach((movie, index) => {
    const row = document.createElement('tr');
    const rankCell = document.createElement('td');
    rankCell.textContent = index + 1;
    row.appendChild(rankCell);

    const movieCell = document.createElement('td');
    movieCell.textContent = movie.title;
    row.appendChild(movieCell);

    const yearCell = document.createElement('td');
    yearCell.textContent = movie.release_date;
    row.appendChild(yearCell);

    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = movie.image;
    image.alt = `${movie.poster_path} `;
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    const genreCell = document.createElement('td');
    genreCell.textContent = movie.genres;
    row.appendChild(genreCell);

    const timeLengthCell = document.createElement('td');
    timeLengthCell.textContent = `${movie.runtime} minutes`;
    row.appendChild(timeLengthCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  fragment.appendChild(table);
  recommendations.appendChild(fragment);

      } else {
        recommendations.textContent = 'No movies found matching your preferences.';
      }
    });
  })
  .catch(error => {
    console.error('Error loading movie data:', error);
  });
