eb.view.paymentdetails = {
    setupUserInterface: function () {
        var saveButton = document.getElementById("confirmButton");
        // load all account objects
        Account.loadAll();
        // Set an event handler for the save/submit button
        saveButton.addEventListener("click", eb.view.paymentdetails.handleSaveButtonClickEvent);
    },
    handleSaveButtonClickEvent: function () {
        var formEl = document.forms['PaymentDetailsForm'];
        var email = localStorage.getItem("emailToBeRegistered");

        var slots = { email: email, 
                      fullName: formEl.fullName.value, 
                      cardNumber: formEl.cardNumber.value, 
                      expiryDate: formEl.expiryDate.value,
                      cvc: formEl.cvc.value};

        Account.update(slots);
        Account.saveAll();
        
        localStorage.setItem("currentAccountEmail", email);
        window.location.href = 'welcome.html'
    }
};