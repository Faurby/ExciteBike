bs.view.hasBike = {
    setupUserInterface: function () {
                
        // load all account objects
        Account.loadAll();
        Bike.loadAll();
        
        var account = Account.getCurrentAccount();

        let h2 = document.getElementById("bikeName");
        h2.textContent = account.bike.name;
    }
};