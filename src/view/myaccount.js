eb.view.myaccount = {
    setupUserInterface: function () {
        var logoButton = document.getElementById("logo");

        // load all account/bike objects
        Account.loadAll();
        Bike.loadAll();

        var account = Account.getCurrentAccount();
        document.getElementById("fullName").innerHTML = account.fullName;

        // Set an event handler for the logoButton
        logoButton.addEventListener("click", eb.view.myaccount.handleLogoButtonClickEvent);
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