bs.view.hasBike = {
    setupUserInterface: function () {
                
        // load all account objects
        Account.loadAll();
        Bike.loadAll();

        var account = Account.getCurrentAccount();
        var fullName = account.fullName;
        console.log("Full name: " + fullName);
        var bike = account.bike;
        console.log("Bike: " + bike);
        var name = bike.name;
        console.log("From hasBike.js: " + name)
        let h2 = document.getElementById("bikeName");
        h2.textContent = name;
    }
};