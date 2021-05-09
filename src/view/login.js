bs.view.login = {
    setupUserInterface: function () {
        var saveButton = document.getElementById("loginButton");
        // load all account objects
        Account.loadAll();
        // Set an event handler for the save/submit button
        saveButton.addEventListener("click", bs.view.login.handleSaveButtonClickEvent);
    },
    handleSaveButtonClickEvent: function () {
        var formEl = document.forms['LoginForm'];
        Account.attemptLogin(formEl.email.value, formEl.password.value)
        formEl.reset();
    }
};