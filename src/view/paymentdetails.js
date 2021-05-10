bs.view.paymentdetails = {
    setupUserInterface: function () {
        var saveButton = document.getElementById("confirmButton");
        // load all account objects
        Account.loadAll();
        // Set an event handler for the save/submit button
        saveButton.addEventListener("click", bs.view.paymentdetails.handleSaveButtonClickEvent);

        window.addEventListener("beforeunload", function () {
            Account.saveAll();
        });
    },
    handleSaveButtonClickEvent: function () {
        var formEl = document.forms['PaymentDetailsForm'];

        var fullName = formEl.fullName.value
        var cardNumber = formEl.cardNumber.value
        var expiryDate = formEl.expiryDate.value
        var cvc = formEl.cvc.value

        var email = localStorage.getItem("emailToBeRegistered");

        var slots = { email: email, 
                      fullName: fullName, 
                      cardNumber: cardNumber, 
                      expiryDate: expiryDate,
                      cvc: cvc};

        Account.update(slots);
        //TODO After updating the account it can't be retrieved anymore :(
        //Dont know whats wrong

        localStorage.setItem("currentAccountEmail", email);
        window.location.href = 'welcome.html'
    }
};