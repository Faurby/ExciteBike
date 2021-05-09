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

        var email = Account.getEmailToBeRegistered();
        var account = Account.getAccount(email);

        account.setFullName(fullName);
        account.setCardNumber(cardNumber);
        account.setExpiryDate(expiryDate);
        account.setCVC(cvc);

        Account.setCurrentAccountEmail(email);
        window.location.href = 'welcome.html'
    }
};