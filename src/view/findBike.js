eb.view.findbike = {

    setupUserInterface: function () {      
                
        // load all account objects
        Account.loadAll();

        let section = document.getElementById("bikeList");
        let h2_load = document.createElement("h2_load");
        h2_load.textContent = "Loading...";
        h2_load.classList = "h2 padding-top-50 dark-greytext"
        section.appendChild(h2_load)

        
        // load all bike objects
        Bike.loadAll();
        keys = Object.keys( Bike.instances);

        // for each bike, compute dist to user.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(`Longitude: ${position.coords.longitude}`);
                console.log(`Latitude: ${position.coords.latitude}`);
                
                section.removeChild(h2_load);
                
                var bikes = new Array;

                for (i=0; i < keys.length; i++) {
                    key = keys[i];
                    var bike = Bike.instances[key]

                    if(navigator.geolocation){
                        var userLat = position.coords.latitude; 
                        var userLon = position.coords.longitude; 
                        
                        //The following is from https://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript
                        var R = 6371; // km 
                        //has a problem with the .toRad() method below.
                        var x1 = bike.x-userLat;
                        var dLat = x1.toRad();  
                        var x2 = bike.y-userLon;
                        var dLon = x2.toRad();  
                        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                                        Math.cos(userLat.toRad()) * Math.cos(bike.x.toRad()) * 
                                        Math.sin(dLon/2) * Math.sin(dLon/2);  
                        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
                        var d = R * c; 

                        bike.setDistance(d);
                        bikes[i] = bike;
                    }
                }
                
                bikes.sort(function(x, y) {
                    if (x.distToUser < y.distToUser) {
                      return -1;
                    }
                    if (x.distToUser > y.distToUser) {
                      return 1;
                    }
                    return 0;
                });

                bikes.forEach(function(bike, index, bikes){
                    addBike(bike, bike.distToUser)
                });
            });
            
        } else { 
            console.log("Geolocation is not supported by this browser.");

            section.removeChild(h2_load);

            for (i=0; i < keys.length; i++) {
                key = keys[i];
                var bike = Bike.instances[key]
                addBike(bike, bike.distToUser);
            }
        }
    },

    handleSaveButtonClickEvent: function(bike) {
        localStorage.setItem("currentlySelectedBike", bike.name);
        localStorage.setItem("currentlySelectedBikeDist", bike.distToUser)
    }
};

Number.prototype.toRad = function() {
    return this * Math.PI / 180;
}

addBike = function (bike, distTo) {

    let section = document.getElementById("bikeList");

    if(bike.available = true){
        let h2 = document.createElement("h2");
        h2.className = "h2";
        h2.textContent = bike.name;
        
        let p = document.createElement("p");
        p.className = "p";
        p.textContent = "1 DKK/min";

        let div = document.createElement("div");
        div.className = "leftalignText";
        div.appendChild(h2);
        div.appendChild(p); 

        let h2_dist = document.createElement("h2_dist");
        var d = distTo;
        var distString;
        if(d > 1){
            distString = (Math.round(d*10))/10 + " km";
        } else {
            distString = (Math.round(d*100))*10 + " m";
        }
        h2_dist.textContent = distString;

        let a = document.createElement("a");
        a.className = "flexRow infoBoxBike";
        a.appendChild(div)
        a.appendChild(h2_dist);
        a.addEventListener("click", function(){eb.view.findbike.handleSaveButtonClickEvent(bike)});
        a.href="begin_rental.html"
        section.appendChild(a);
    }
}

