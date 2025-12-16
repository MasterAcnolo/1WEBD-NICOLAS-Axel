function getMaxBySize() {
    return 7;
}

function getGridColumns(container) {

    const computedStyle = getComputedStyle(container); // get all Style on a element

    const gridTemplate = computedStyle.gridTemplateColumns; // ex: 5fr

    const columnsArray = gridTemplate.split(" "); // 20 20 20 20 20

    const columnsCount = columnsArray.length; // ex 5

    if (columnsCount >= 4){
        return columnsCount;
    } else{
        return 4
    }

    
}


export {getMaxBySize, getGridColumns}