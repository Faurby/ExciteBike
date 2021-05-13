eb.view.login = {
    setupUserInterface: function () {
        var loginButton = document.getElementById("loginButton");
        // load all account objects
        Account.loadAll();
        // Set an event handler for the loginButton
        loginButton.addEventListener("click", eb.view.login.handleLoginButtonClickEvent);
    },
    handleLoginButtonClickEvent: function () {
        var formEl = document.forms['LoginForm'];
        Account.attemptLogin(formEl.email.value, formEl.password.value)
        formEl.reset();
    }
};