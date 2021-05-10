eb.view.deleteaccount = {
    setupUserInterface: function () {
        var deleteButton = document.getElementById("deleteButton");
        // load all account objects
        Account.loadAll();
        // Set an event handler for the save/submit button
        deleteButton.addEventListener("click", eb.view.deleteaccount.handleSaveButtonClickEvent);

        var account = Account.getCurrentAccount();
        document.getElementById("email").innerHTML = account.email;
    },
    handleSaveButtonClickEvent: function () {
        var email = Account.getCurrentAccount().email;
        Account.destroy(email);
        Account.saveAll();
        window.location.href = 'index.html'
    }
};