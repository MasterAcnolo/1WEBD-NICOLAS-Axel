function getMaxBySize() {
    return 7;
}

// function getGridColumns(container) {
//     const style = getComputedStyle(container) // getComputedStyle return all style in a specific container
//         .gridTemplateColumns // get gridTemplateValues
//         .split(" ") // 200px 200px 200px 200px 200px 
//         .length; // "5" in this example
// }

function getGridColumns(container) {

    const computedStyle = getComputedStyle(container);

    const gridTemplate = computedStyle.gridTemplateColumns;

    const columnsArray = gridTemplate.split(" ");

    const columnsCount = columnsArray.length;

    if (columnsCount >= 4){
        return columnsCount;
    } else{
        return 4
    }

    
}


export {getMaxBySize, getGridColumns}