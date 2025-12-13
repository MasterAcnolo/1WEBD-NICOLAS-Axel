function getColor(score){

    let color = "";

    if (score < 50) {
        color = "red";
    } else if (score < 75) {
        color = "orange";
    } else {
        color = "green";
    }

    return color
}

export {getColor}