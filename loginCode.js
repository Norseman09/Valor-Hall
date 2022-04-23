
    // This fucntion is our check for user input data
    function checkCreds() {
        // this variable is for the input of the first name value
        var firstName = document.getElementById("firstName").value;
        // this variable is for the input of the last name value
        var lastName = document.getElementById("lastName").value;
        // this variable is for the inpit fo the badge number value
        var badgeNumber = document.getElementById("numPart").value;
        // this variable is the concatenation for the first two variables
        var eventInfo = firstName + " " + lastName;
        // this if statement determines the parameters for the user input
        if (eventInfo.length >20 || eventInfo.length <4) {

            document.getElementById("loginStatus").innerHTML = "Access Denied. Name has invalid number of characters"
        }
        // this else if statement determines parameters for the badge number variable
        else if (badgeNumber >999 || badgeNumber <100) {
            document.getElementById("loginStatus").innerHTML = "Badge number has invalid number"
        }
        // this statement grants access if the parameters are met
        else {
            alert("Access Granted, Welcome " + eventInfo + "!");
            location.replace("BlastOffMKV.html");
        }
    }
