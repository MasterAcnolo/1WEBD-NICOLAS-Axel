function getMaxBySize() {
    const pageWidth = window.innerWidth;
    if (pageWidth < 747) return 3;
    if (pageWidth < 1000) return 4;

    return 4;
}


export {getMaxBySize}