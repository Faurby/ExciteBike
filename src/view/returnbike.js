eb.view.returnbike = {
    setupUserInterface: function () {
        var confirmButton = document.getElementById("confirmButton");
        var logoButton = document.getElementById("logo");

        // load all account/bike objects
        Account.loadAll();
        Bike.loadAll();

        // Set an event handler for the confirmButton
        confirmButton.addEventListener("click", eb.view.returnbike.handleConfirmButtonClickEvent);

        // Set an event handler for the logoButton
        logoButton.addEventListener("click", eb.view.returnbike.handleLogoButtonClickEvent);
    },
    handleConfirmButtonClickEvent: function () {
        var account = Account.getCurrentAccount();
        account.setBike(null);
        Account.saveAll();
        Bike.saveAll();
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