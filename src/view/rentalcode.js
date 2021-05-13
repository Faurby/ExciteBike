eb.view.rentalcode = {
    setupUserInterface: function () {
        var confirmButton = document.getElementById("confirmButton");
        var logoButton = document.getElementById("logo");

        // load all account/bike objects
        Account.loadAll();
        Bike.loadAll();

        // Set an event handler for the confirmButton
        confirmButton.addEventListener("click", eb.view.rentalcode.handleConfirmButtonClickEvent);

        // Set an event handler for the logoButton
        logoButton.addEventListener("click", eb.view.rentalcode.handleLogoButtonClickEvent);

        var date = new Date();
        var now = date.getTime();

        const interval = setInterval(function() {
            updateTime(now);
        }, 250);
    },
    handleConfirmButtonClickEvent: function () {
        var bikeName = localStorage.getItem("currentlySelectedBike");

        var bike = Bike.getBike(bikeName);
        var account = Account.getCurrentAccount();

        account.setBike(bike);

        var date = new Date();
        account.setRentStart(date.getTime());

        Bike.saveAll();
        Account.saveAll();
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

function updateTime(then) {

    var date = new Date();
    var now = date.getTime();

    var diff = now - then;
    var limit = 1000 * 60 * 15; //15 minutes
    var left = limit - diff;

    document.getElementById("remainingTime").innerHTML = msToTime(left);
}

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return minutes + ":" + seconds;
}