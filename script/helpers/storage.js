import { likeIDName, bookmarkIDName } from "../common.js";

/* GET */
function getLikes() {
    return JSON.parse(localStorage.getItem(likeIDName) || "[]");
}

function getBookmarks() {
    return JSON.parse(localStorage.getItem(bookmarkIDName) || "[]");
}

/* TOGGLE */
function toggleLike(movieId) {
    const likes = getLikes();
    const index = likes.indexOf(movieId);

    if (index === -1) likes.push(movieId);
    else likes.splice(index, 1);

    localStorage.setItem(likeIDName, JSON.stringify(likes));
    return likes.includes(movieId);
}

function toggleBookmark(movieId) {
    const bookmarks = getBookmarks();
    const index = bookmarks.indexOf(movieId);

    if (index === -1) bookmarks.push(movieId);
    else bookmarks.splice(index, 1);

    localStorage.setItem(bookmarkIDName, JSON.stringify(bookmarks));
    return bookmarks.includes(movieId);
}

export { getLikes, getBookmarks, toggleLike, toggleBookmark };
