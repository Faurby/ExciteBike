bs.view.myaccount = {
    setupUserInterface: function () {

        // load all account objects
        Account.loadAll();

        var account = Account.getCurrentAccount();
        document.getElementById("fullName").innerHTML = account.fullName;
    },
};