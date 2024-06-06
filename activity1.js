function timeframe(minutes) {
    if (minutes >= 0 && minutes <= 600) {
        return "Early morning";
    } else if (minutes >= 601 && minutes <= 780) {
        return "Morning";
    } else if (minutes >= 781 && minutes <= 960) {
        return "Noon";
    } else if (minutes >= 961 && minutes <= 1140) {
        return "Afternoon";
    } else if (minutes >= 1141 && minutes <= 1320) {
        return "Evening";
    } else if (minutes >= 1321 && minutes <= 1439) {
        return "Night";
    } else {
        return "Invalid value";
    }
}

let input = 700; 
console.log(timeframe(input));