bs.view.register = {
    setupUserInterface: function () {
        var saveButton = document.getElementById("registerButton");
        // load all account objects
        Account.loadAll();
        // Set an event handler for the save/submit button
        saveButton.addEventListener("click", bs.view.register.handleSaveButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            Account.saveAll();
        });
    },
    handleSaveButtonClickEvent: function () {
        var formEl = document.forms['RegisterForm'];

        var password = formEl.password.value
        var passwordAgain = formEl.passwordAgain.value

        if (password == passwordAgain) {
            
            var slots = { email: formEl.email.value,
                          password: formEl.password.value};

            Account.add(slots);
            Account.saveAll();
            window.location.href = 'paymentdetails.html'

        } else {
            alert("Passwords do not match!")
        }
    }
};