bs.view.createAccount = {
    setupUserInterface: function () {
        var saveButton = document.getElementById("registerButton");
        // load all account objects
        Account.loadAll();
        // Set an event handler for the save/submit button
        saveButton.addEventListener("click",
            bs.view.createAccount.handleSaveButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            Account.saveAll();
        });
    },
    handleSaveButtonClickEvent: function () {
        var formEl = document.forms['Account'];
        var slots = { email: formEl.email.value,
            fullName: formEl.fullName.value,
            password: formEl.password.value};
        Account.add(slots);
        Account.saveAll();
        formEl.reset();
    }
};