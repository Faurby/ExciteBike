bs.view.myaccount = {
    setupUserInterface: function () {
        var username = document.getElementById("username");
        username.innerHTML = Account.getCurrentAccount();
    },
};