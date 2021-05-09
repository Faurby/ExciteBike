bs.view.myaccount = {
    setupUserInterface: function () {
        var account = Account.getCurrentAccount();
        document.getElementById("fullName").innerHTML = account.fullName;
    },
};