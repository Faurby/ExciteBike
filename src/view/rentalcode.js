eb.view.rentalcode = {
    setupUserInterface: function () {
        var confirmButton = document.getElementById("confirmButton");

        // load all account/bike objects
        Account.loadAll();
        Bike.loadAll();

        // Set an event handler for the save/submit button
        confirmButton.addEventListener("click", eb.view.rentalcode.handleSaveButtonClickEvent);

        var date = new Date();
        var now = date.getTime();

        const interval = setInterval(function() {
            updateTime(now);
        }, 250);
    },
    handleSaveButtonClickEvent: function () {
        var bikeName = localStorage.getItem("currentlySelectedBike");

        var bike = Bike.getBike(bikeName);
        var account = Account.getCurrentAccount();

        bike.setAvailable(false);
        account.setBike(bike);

        var date = new Date();
        account.setRentStart(date.getTime());

        Bike.saveAll();
        Account.saveAll();
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