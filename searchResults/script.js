//define functions
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function submitQuery() {
}

//define event handlers
window.onload = function () {
    //return results
    var first = getUrlVars()["q"]; 
    var second = first.replace(/[+]/g," ");
    document.getElementById("queryText").innerHTML = "User query: \"" + second + "\"";
    document.getElementById("inputInterpretation").innerHTML = "Input interpretation: <em>\{\How we interpreted the input here\}\</em>";
    document.getElementById("queryResults").innerHTML = "Results: <em>\{\All the results here\}\<em>";
    document.getElementById("relatedQueries").innerHTML = "Related queries: <em>\{\Suggestions for similar queries here\}\<em>";
    
    //deal with search bar
    var inputField = document.getElementById("tfq");
    var submitBtn = document.getElementById("goBtn");
    if (inputField.addEventListener) {
        inputField.addEventListener("click", function () {
            if (inputField.value === 'How shall we continue?') {
                inputField.value = '';
            }
        });
    }
    if (submitBtn.addEventListener) {
        submitBtn.addEventListener("click", submitQuery());
    }
    
    //deal with sidebar actions
    var newQueryBtn = document.getElementById("newQuery");
    var favoritesBtn = document.getElementById("favorites");
    var historyBtn = document.getElementById("history");
    var relatedBtn = document.getElementById("related");
    if (newQueryBtn.addEventListener) {
        newQueryBtn.addEventListener("click", function() {
        });
    }
    if (favoritesBtn.addEventListener) {
        favoritesBtn.addEventListener("click", function() {
        });
    }
    if (historyBtn.addEventListener) {
        historyBtn.addEventListener("click", function() {
        });
    }
    if (relatedBtn.addEventListener) {
        relatedBtn.addEventListener("click", function() {
        });
    }
}