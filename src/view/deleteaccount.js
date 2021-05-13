eb.view.deleteaccount = {
    setupUserInterface: function () {
        var deleteButton = document.getElementById("deleteButton");
        var logoButton = document.getElementById("logo");

        // load all account/bike objects
        Account.loadAll();
        Bike.loadAll();

        // Set an event handler for the deleteButton
        deleteButton.addEventListener("click", eb.view.deleteaccount.handleDeleteButtonClickEvent);
        
        // Set an event handler for the logoButton
        logoButton.addEventListener("click", eb.view.deleteaccount.handleLogoButtonClickEvent);

        var account = Account.getCurrentAccount();
        document.getElementById("email").innerHTML = account.email;
    },
    handleDeleteButtonClickEvent: function () {
        var email = Account.getCurrentAccount().email;
        Account.destroy(email);
        Account.saveAll();
        window.location.href = 'index.html'
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