eb.view.beginrental = {
    setupUserInterface: function () {
        var confirmButton = document.getElementById("confirmButton");
        
        var bikeName = localStorage.getItem("currentlySelectedBike");
        document.getElementById("bikeName").innerHTML = bikeName;

        // load all account objects
        Account.loadAll();
        Bike.loadAll();
        // Set an event handler for the save/submit button
        confirmButton.addEventListener("click", eb.view.beginrental.handleSaveButtonClickEvent);
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