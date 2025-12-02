const API_KEY = "75e5b4eb"

// TYPE sera soit ID soit KEYWORDS. ID fera une recherche sur l'ID, et KEYWORDS une recherche via mot clés
async function fetchMovies(API_KEY, TYPE, ARGS) { // Je voulais séparer QUERY et ID mais ARGS suffit, il sera toujours présent et suffit
    const BASE_URL = `http://www.omdbapi.com/?type=movie&apikey=${API_KEY}`
    var URL = BASE_URL

    if (TYPE == "KEYWORDS"){
        URL += `&s="${ARGS}"`
    } else if (TYPE == "ID"){
        URL += `&i="${ARGS}`
    } else {
        throw new Error("TYPE invalide");
    }

    try {
        const res = await fetch(URL);

        if (!res.ok) {
            throw new Error("Erreur HTTP " + res.status);
        }

        const data = await res.json();
        return data;

    } catch (err) {
        console.error("Erreur dans fetchMovies :", err);
        return null;
    }
}

// var movies = await fetchMovies(API_KEY, "KEYWORDS", "Fast+And+Furious")

// console.log(movies)

export {fetchMovies}