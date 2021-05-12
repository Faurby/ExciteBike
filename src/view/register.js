eb.view.register = {
    setupUserInterface: function () {
        var registerButton = document.getElementById("registerButton");
        // load all account objects
        Account.loadAll();
        // Set an event handler for the save/submit button
        registerButton.addEventListener("click", eb.view.register.handleSaveButtonClickEvent);
    },
    handleSaveButtonClickEvent: function () {
        var formEl = document.forms['RegisterForm'];

        var email = formEl.email.value;
        var password = formEl.password.value
        var passwordAgain = formEl.passwordAgain.value

        if (!isEmpty(email) && !isEmpty(password)) {
            if (password == passwordAgain) {
            
                var slots = { email: formEl.email.value,
                              password: formEl.password.value};
    
                Account.add(slots);
                Account.saveAll();
                window.location.href = 'payment_details.html'
    
            } else {
                alert("Passwords do not match!")
            }
        } else {
            alert("Please complete the registration!")
        }
    }
};

function isEmpty(str) {
    return (!str || str.length === 0 );
}