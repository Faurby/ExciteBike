eb.view.beginrental = {
    setupUserInterface: function () {
        var bikeName = localStorage.getItem("currentlySelectedBike");
        document.getElementById("bikeName").innerHTML = bikeName;
    }
};