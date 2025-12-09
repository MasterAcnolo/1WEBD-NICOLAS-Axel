import { likeIDName, bookmarkIDName } from "../common";

/* GET */
function getLikes() {
    return JSON.parse(localStorage.getItem(likeIDName) || "[]");
}

function getBookmarks() {
    return JSON.parse(localStorage.getItem(bookmarkIDName) || "[]");
}


/* TOGGLE */
function toggleLike(movieId) {
    const favorites = getBookmarks();
    const index = favorites.indexOf(movieId);

    if (index === -1) {
        favorites.push(movieId);
    } else {
        favorites.splice(index, 1);
    }

    localStorage.setItem(likeIDName, JSON.stringify(favorites));
    return favorites.includes(movieId);
}

function toggleBookmark(movieId) {
    const bookmarks = getBookmarks();
    const index = bookmarks.indexOf(movieId);

    if (index === -1) {
        bookmarks.push(movieId);
    } else {
        bookmarks.splice(index, 1);
    }

    localStorage.setItem(bookmarkIDName, JSON.stringify(bookmarks));
    return bookmarks.includes(movieId);
}

export {getBookmarks, toggleLike, getLikes, toggleBookmark}