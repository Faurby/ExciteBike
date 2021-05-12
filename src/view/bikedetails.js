eb.view.bikedetails = {
    setupUserInterface: function () {
                
        // load all account objects
        Account.loadAll();
        Bike.loadAll();

        var account = Account.getCurrentAccount();
        
        updateTime(account);
        const interval = setInterval(function() {
            updateTime(account);
        }, 1000);
    }
};

function updateTime(account) {

    var date = new Date();
    var now = date.getTime();
    var then = account.rentStart;
    var diff = now - then;

    var date = new Date(then);

    var totalPrice = parseInt(diff / 1000 / 60);

    document.getElementById("totalPrice").innerHTML = "Total price: "+totalPrice+" DKK";
    document.getElementById("rentStart").innerHTML = date.toTimeString().substring(0, 5);
    document.getElementById("timeRented").innerHTML = msToTime(diff);
    document.getElementById("bikeName").innerHTML = account.bike.name;
}

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds;
}