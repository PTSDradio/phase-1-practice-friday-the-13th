let currentMovie 

fetch(`http://localhost:3000/movies`)
.then(res => res.json())
.then(data => {
    data.forEach((movie) => movieIcon(movie))
    movieInfoPanel(data[0])
    clicks()
    bloodyMan()
})

function movieIcon(movie) {
    const movieNav = document.getElementById(`movie-list`)
    const movieImg = document.createElement(`img`)
    movieImg.src = movie.image
movieImg.addEventListener("click", () =>{
    movieInfoPanel(movie)
})
    movieNav.append(movieImg)
}

function movieInfoPanel(movie) {
    currentMovie = movie
    const movieImage = document.getElementById(`detail-image`)
    const movieTitle = document.getElementById(`title`)
    const movieYear = document.getElementById(`year-released`)
    const movieDesc = document.getElementById(`description`)
    const movieWatched = document.getElementById(`watched`)
    const movieWetness = document.getElementById('amount')

    movieImage.src = movie.image
    movieTitle.textContent = movie.title
    movieYear.textContent = movie.release_year
    movieDesc.textContent = movie.description
    movieWatched.textContent = movie.watched ? "watched" : "unwatched"
    movieWetness.textContent = movie.blood_amount

}

function clicks() {
    const movieWatched = document.getElementById(`watched`)
    
    movieWatched.addEventListener("click", () =>{
        currentMovie.watched = !currentMovie.watched
        movieWatched.textContent = currentMovie.watched ? "watched" : "unwatched"    
    })

}

function bloodyMan() {
    const bloodyForm = document.getElementById(`blood-form`)
    bloodyForm.addEventListener("submit", (e)=> {
        e.preventDefault()
        const addedWetness = document.getElementById('blood-amount').value
        const initWetness = document.getElementById('amount')
        let newWetness = currentMovie.blood_amount += parseInt(addedWetness)
        initWetness.textContent = newWetness
    
    })
}