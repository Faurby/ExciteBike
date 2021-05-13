eb.view.beginrental = {
    setupUserInterface: function () {
        var logoButton = document.getElementById("logo");
        
        // load all account/bike objects
        Account.loadAll();
        Bike.loadAll();

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

        // Set an event handler for the logoButton
        logoButton.addEventListener("click", eb.view.beginrental.handleLogoButtonClickEvent);
    },
    handleLogoButtonClickEvent: function () {
        var account = Account.getCurrentAccount();

        if (account.bike != null) {
            window.location.href = 'bike_details.html'
        } else {
            window.location.href = 'find_bike.html'
        }
    }
};