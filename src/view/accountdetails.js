eb.view.accountdetails = {
    setupUserInterface: function () {
                
        // load all account objects
        Account.loadAll();

        var account = Account.getCurrentAccount();
        document.getElementById("fullName").innerHTML = account.fullName;
        document.getElementById("email").innerHTML = account.email;
        document.getElementById("password").innerHTML = account.password;
        document.getElementById("cardNumber").innerHTML = account.cardNumber;
    },
};