function areTripsValid(pickUps, drops, trips) {
    let usedPickups = new Set();
    let usedDrops = new Set();

    for (let trip of trips) {
        let [start, via, end] = trip;
        if (pickUps.includes(start)) {
            usedPickups.add(start);
        }

        if (drops.includes(end)) {
            usedDrops.add(end);
        }

        if (via && via !== "W") {
            return false; 
        }
    }

    return usedPickups.size === pickUps.length && usedDrops.size === drops.length;
}

let pickUps = ["A", "B"];
let drops = ["C", "D"];
let tripsValid = [
    ["A", "W", "B"],
    ["B", "W", "C"],
    ["W", null, "C"],
    ["W", null, "D"]
];
let tripsInvalid = [
    ["A", "W1", "B"],
    ["B", "W2", "C"],
    ["W3", null, "C"],
    ["W4", null, "D"]
];

console.log(areTripsValid(pickUps, drops, tripsValid));  
console.log(areTripsValid(pickUps, drops, tripsInvalid));
