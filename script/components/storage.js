function getLikes() {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
}

function toggleLike(movieId) {
    const favorites = getBookmarks();
    const index = favorites.indexOf(movieId);

    if (index === -1) {
        favorites.push(movieId);
    } else {
        favorites.splice(index, 1);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    return favorites.includes(movieId);
}

function getBookmarks() {
    return JSON.parse(localStorage.getItem("bookmarks") || "[]");
}

function toggleBookmark(movieId) {
    const bookmarks = getBookmarks();
    const index = bookmarks.indexOf(movieId);

    if (index === -1) {
        bookmarks.push(movieId);
    } else {
        bookmarks.splice(index, 1);
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    return bookmarks.includes(movieId);
}

export {getBookmarks, toggleLike, getLikes, toggleBookmark}