//define functions
function submitQuery() {
    //confirm("Hey there!  You searched for something!");
    //window.location.href = "http://fullheartemptyhands.com";
}

//define event handlers
window.onload = function () {
    //Get submit button
    var inputField = document.getElementById("tfq");
    var submitBtn = document.getElementById("goBtn");
    //Add listener to submit button
    if (inputField.addEventListener) {
        inputField.addEventListener("click", function () {
            if (inputField.value === 'Where would you like to start?') {
                inputField.value = '';
            }
        });
    }
    if (submitBtn.addEventListener) {
        submitBtn.addEventListener("click", submitQuery);
    }
    
}