bs.view.hasBike = {
    setupUserInterface: function () {
                
        // load all account objects
        Account.loadAll();

        var account = Account.getCurrentAccount();
        var bike = account.bike.name;
        console.log("From hasBike.js: " + bike)
    }
};