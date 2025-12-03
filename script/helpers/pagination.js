export default function getMaxBySize(sizePx) {
    const pageWidth = window.innerWidth;
    return Math.floor(pageWidth / sizePx);
}
