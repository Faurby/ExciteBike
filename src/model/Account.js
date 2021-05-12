function Account(slots) {
    this.email = slots.email;
    this.password = slots.password;
    this.fullName = slots.fullName;
    this.cardNumber = slots.cardNumber;
    this.expiryDate = slots.expiryDate;
    this.cvc = slots.cvc;
    this.bike = slots.bike;
    this.rentStart = slots.rentStart;
    
    this.setFullName = function(fullName) {
        this.fullName = fullName;
    };
    this.setCardNumber = function(cardNumber) {
        this.cardNumber = cardNumber;
    };
    this.setExpiryDate = function(expiryDate) {
        this.expiryDate = expiryDate;
    };
    this.setCVC = function(cvc) {
        this.cvc = cvc;
    };
    this.setBike = function(bike) {
        this.bike = bike;
    };
    this.setRentStart = function(rentStart) {
        this.rentStart = rentStart;
    };
};

Account.getAccount = function(email) {
    var account = Account.instances[email];

    if (account) {
        return account;
    }
    return null;
}

Account.getCurrentAccount = function() {
    var email = localStorage.getItem("currentAccountEmail");
    return this.getAccount(email);
}

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
    var account = new Account(slots);
    Account.instances[slots.email] = account;
    
    localStorage.setItem("emailToBeRegistered", slots.email);
    console.log("Account " + slots.email + " created!");
};

Account.update = function (slots) {
    var account = Account.instances[slots.email];

    account.setFullName(slots.fullName);
    account.setCardNumber(slots.cardNumber);
    account.setExpiryDate(slots.expiryDate);
    account.setCVC(slots.cvc);

    Account.instances[slots.email] = account;
}

Account.destroy = function (email) {
    if (Account.instances[email]) {
        console.log("Account " + email + " deleted");
        delete Account.instances[email];
    } else {
        console.log("There is no account with email " + email + " in the database!");
    }
};

Account.createTestData = function () {
    localStorage["accountTable"] = "{}"
    Account.instances["john@xcite.com"] = new Account({email:"john@xcite.com", fullName:"John Excite", password:"1234"});
    Account.instances["admin@xcite.com"] = new Account({email:"admin@xcite.com", fullName:"Admin", password:"admin"});
    Account.saveAll();
};

Account.attemptLogin = function (email, password) {
    
    if (!isEmpty(email) && !isEmpty(password)) {

        var account = Account.instances[email]
        if (account) {
            if (account.password == password) {
                localStorage.setItem("currentAccountEmail", account.email);
                window.location.href = 'find_bike.html'
                return;
            }
        }
    }
    alert("Failed to login!");
}

if (localStorage.getItem("accountTable") === null) {
    Account.createTestData();
}

accountTableString = localStorage["accountTable"];
accountTable = JSON.parse( accountTableString);
Account.convertRow2Obj = function (accountRow) {
    var account = new Account( accountRow);
    return account;
};

function isEmpty(str) {
    return (!str || str.length === 0 );
}