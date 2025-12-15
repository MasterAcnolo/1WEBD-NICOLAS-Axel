function getColor(score){

    let color = "";

    if (score < 50) {
        color = "red";
    } else if (score < 75) {
        color = "orange";
    } else {
        color = "#2ad457";
    }

    return color
}

export {getColor}