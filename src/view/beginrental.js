eb.view.beginrental = {
    setupUserInterface: function () {
        var bikeName = localStorage.getItem("currentlySelectedBike");
        document.getElementById("bikeName").innerHTML = bikeName;

        var dist = localStorage.getItem("currentlySelectedBikeDist");
        var distString;
        if(dist > 1){
            distString = (Math.round(dist*10))/10 + " km";
        } else {
            distString = (Math.round(dist*100))*10 + " m";
        }
        document.getElementById("distance").innerHTML = distString + " away";
    }
};