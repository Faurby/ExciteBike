bs.view.createAccount = {
    setupUserInterface: function () {
        var saveButton = document.forms['Account'].commit;
        // load all account objects
        Account.loadAll();
        // Set an event handler for the save/submit button
        saveButton.addEventListener("click",
            bs.view.createAccount.handleSaveButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            account.saveAll();
        });
    },
    handleSaveButtonClickEvent: function () {
        var formEl = document.forms['Account'];
        var slots = { email: formEl.email.value,
            fullName: formEl.fullName.value,
            password: formEl.password.value};
        account.add( slots);
        formEl.reset();
        console.log(formEl.email.value);
        console.log(formEl.fullName.value);
        console.log(formEl.password.value);
    }
};