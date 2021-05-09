function Bike(slots) {
    this.name = slots.name;
    this.available = slots.available;
    this.x = slots.x;
    this.y = slots.y;
    this.distToUser = "500 m"
    this.setDistance = function(dist) {
        this.distToUser = dist;
    }
};

Bike.instances = {};

Bike.loadAll = function () {
    var i=0, key="", keys=[], bikeTableString="", bikeTable={};
    try {
        if (localStorage["bikeTable"]) {
            bikeTableString = localStorage["bikeTable"];
        }
    } catch (e) {
        alert("Error when reading from Local Storage\n" + e);
    }
    if (bikeTableString) {
        bikeTable = JSON.parse( bikeTableString);
        keys = Object.keys( bikeTable);
        console.log( keys.length +" bikes loaded.");
        for (i=0; i < keys.length; i++) {
            key = keys[i];
            Bike.instances[key] = Bike.convertRow2Obj( bikeTable[key]);
        }
    }
};

Bike.saveAll = function () {
    var bikeTableString="", error=false,
        nmrOfBikes = Object.keys( Bike.instances).length;
    try {
        bikeTableString = JSON.stringify( Bike.instances);
        localStorage["bikeTable"] = bikeTableString;
    } catch (e) {
        alert("Error when writing to Local Storage\n" + e);
        error = true;
    }
    if (!error) console.log( nmrOfBikes + " bikes saved.");
};

Bike.createTestData = function () {
    Bike.instances["Bolt"] = new Bike({name:"Bolt", available:true, x:55.61, y:12.61});
    Bike.instances["Gazelle"] = new Bike({name:"Gazelle", available:true, x:55.64, y:12.62});
    Bike.instances["Thunder"] = new Bike({name:"Thunder", available:true, x:55.6, y:12.60});
    Bike.instances["Winther"] = new Bike({name:"Winther", available:true, x:55.7, y:12.595});
    Bike.instances["Brunch"] = new Bike({name:"Brunch", available:true, x:55.65, y:12.60});
    Bike.instances["Tech"] = new Bike({name:"Tech", available:true, x:55.6605, y:12.59});
    Bike.saveAll();
};

if (localStorage.getItem("bikeTable") === null) {
    Bike.createTestData();
}

bikeTableString = localStorage["bikeTable"];
bikeTable = JSON.parse( bikeTableString);
Bike.convertRow2Obj = function (bikeRow) {
    var bike = new Bike( bikeRow);
    return bike;
};

Bike.createTestData();