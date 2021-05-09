bs.view.findBike = {

    setupUserInterface: function () {
        // load all bike objects
        Bike.loadAll();
        keys = Object.keys( Bike.instances);
        // for each bike, compute dist to user.

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(`Longitude: ${position.coords.longitude}`);
                console.log(`Latitude: ${position.coords.latitude}`);
                
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
                        
                        var distString;
                        if(d > 1){
                            distString = (Math.round(d*10))/10 + " km"
                        } else {
                            distString = (Math.round(d*100))*10 + " m"
                        }

                        bike.setDistance(distString)
                        console.log(i + ": " + bike.name + ", dist: " + distString);
                    }
                }
            });
            
        } else { 
            console.log("Geolocation is not supported by this browser.");
        }
    
    }

};

Number.prototype.toRad = function() {
    return this * Math.PI / 180;
}
 
