bs.view.hasBike = {
    setupUserInterface: function () {
        var account = Account.getCurrentAccount();
        var bike = account.bike.name;
        console.log("From hasBike.js: " + bike)
    }
};