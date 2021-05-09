bs.view.accountdetails = {
    setupUserInterface: function () {
        var account = Account.getCurrentAccount();
        document.getElementById("fullName").innerHTML = account.fullName;
        document.getElementById("email").innerHTML = account.email;
        document.getElementById("password").innerHTML = account.password;
        document.getElementById("cardNumber").innerHTML = account.fullName;
    },
};