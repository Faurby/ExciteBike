bs.view.returnbike = {
    setupUserInterface: function () {
        var confirmButton = document.getElementById("confirmButton");
        // load all account objects
        Account.loadAll();
        // Set an event handler for the save/submit button
        deleteButton.addEventListener("click", bs.view.returnbike.handleSaveButtonClickEvent);
    },
    handleSaveButtonClickEvent: function () {
        var account = Account.getCurrentAccount();
        var bike = account.bike;
        bike.setAvailable(true);
        account.setBike(null);
        Account.saveAll();
        alert("Removed bike!")
    }
};