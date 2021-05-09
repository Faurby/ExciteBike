function Account( slots) {
    this.fullName = slots.fullName;
    this.email = slots.email;
    this.password = slots.password;
};

Account.instances = {};

Account.loadAll = function () {
    var i=0, key="", keys=[], accountTableString="", accountTable={};
    try {
        if (localStorage["accountTable"]) {
            accountTableString = localStorage["accountTable"];
        }
    } catch (e) {
        alert("Error when reading from Local Storage\n" + e);
    }
    if (accountTableString) {
        accountTable = JSON.parse( accountTableString);
        keys = Object.keys( accountTable);
        console.log( keys.length +" accounts loaded.");
        for (i=0; i < keys.length; i++) {
            key = keys[i];
            Account.instances[key] = Account.convertRow2Obj( accountTable[key]);
        }
    }
};

Account.saveAll = function () {
    var accountTableString="", error=false,
        nmrOfAccounts = Object.keys( Account.instances).length;
    try {
        accountTableString = JSON.stringify( Account.instances);
        localStorage["accountTable"] = accountTableString;
    } catch (e) {
        alert("Error when writing to Local Storage\n" + e);
        error = true;
    }
    if (!error) console.log( nmrOfAccounts + " accounts saved.");
};

Account.add = function (slots) {
    var account = new Account( slots);
    Account.instances[slots.email] = account;
    console.log("Account " + slots.email + " created!");
};

Account.destroy = function (email) {
    if (Account.instances[email]) {
        console.log("Account " + email + " deleted");
        delete Account.instances[email];
    } else {
        console.log("There is no account with email " + email + " in the database!");
    }
};

Account.createTestData = function () {
    Account.instances["john@xcite.com"] = new Account({email:"john@xcite.com", fullName:"John Excite", password:"1234"});
    Account.instances["admin@xcite.com"] = new Account({email:"admin@xcite.com", fullName:"Admin", password:"admin"});
    Account.saveAll();
};

Account.clearData = function () {
    if (confirm("Do you really want to delete all account data?")) {
        localStorage["accountTable"] = "{}";
    }
};

accountTableString = localStorage["accountTable"];
accountTable = JSON.parse( accountTableString);
Account.convertRow2Obj = function (accountRow) {
    var account = new Account( accountRow);
    return account;
};