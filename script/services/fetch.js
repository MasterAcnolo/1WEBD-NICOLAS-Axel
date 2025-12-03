const API_KEY = "75e5b4eb"
const DATE = new Date();
const utcYear = DATE.getFullYear() + 1;

// TYPE sera soit ID soit KEYWORDS. ID fera une recherche sur l'ID, et KEYWORDS une recherche via mot clés
async function fetchMovies(TYPE, ARGS, YEAR = 2025, PAGE = 1) { // Je voulais séparer QUERY et ID mais ARGS suffit, il sera toujours présent et suffit
    const BASE_URL = `http://www.omdbapi.com/?type=movie&apikey=${API_KEY}`
    let URL = BASE_URL

    const ENCODED_ARGS = encodeURIComponent(ARGS); // Encoder l'URL convertir les caractères spéciaux en paramtères recevable par l'URL, en gros: sécu

    if (TYPE == "KEYWORDS"){
        URL += `&s=${ENCODED_ARGS}`

    } else if (TYPE == "ID"){
        URL += `&i=${ENCODED_ARGS}`

    } else if (TYPE == "YEAR"){

        if(YEAR > utcYear || PAGE <= 0){
            throw new Error("L'année et/ou la page sont incorrectes")
        } else{
            URL += `&s=movie&y=${YEAR}&page=${PAGE}`
        }
        
    }else {
        throw new Error("Erreur d'arguments");
    }

    try {
        const reponse = await fetch(URL);

        if (!reponse.ok) {
            throw new Error("Erreur HTTP " + reponse.status);
        }

        const data = await reponse.json();
        return data;

    } catch (err) {
        console.error("Erreur dans fetchMovies :", err);
        return null;
    }
}

export {fetchMovies}