eb.view.accountdetails = {
    setupUserInterface: function () {
        var logoButton = document.getElementById("logo");
                
        // load all account/bike objects
        Account.loadAll();
        Bike.loadAll();

        var account = Account.getCurrentAccount();
        document.getElementById("name").innerHTML = account.fullName;
        document.getElementById("fullName").innerHTML = account.fullName;
        document.getElementById("email").innerHTML = account.email;
        document.getElementById("password").innerHTML = account.password;
        document.getElementById("cardNumber").innerHTML = account.cardNumber;

        // Set an event handler for the logoButton
        logoButton.addEventListener("click", eb.view.accountdetails.handleLogoButtonClickEvent);
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