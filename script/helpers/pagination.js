function getMaxBySize(sizePx) {
    const pageWidth = window.innerWidth;
    return Math.floor(pageWidth / sizePx);
}

function manageCardLayout(){
    const pageWidth = window.innerWidth;
    let size;

    if(pageWidth < 530){
        size = 100; // mobile
    } else if(pageWidth < 1024){
        size = 225; // tablette
    } else {
        size = 250; // pc
    }

    return size
}


export {getMaxBySize, manageCardLayout}