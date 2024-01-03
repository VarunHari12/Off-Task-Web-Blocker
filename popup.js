
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () {
        getIntent();
    });
});

function getIntent() {
    const userInput = document.getElementById('userInput').value;
    //console.log("User intent:", userInput);  
    chrome.storage.sync.set({"intent": userInput}, function() {
        //console.log('User intent set to ' + userInput);
      });
    
      //chrome.storage.sync.get(["intent"], function(result) {
        //alert('Value currently is ' + result.intent);
      //});
    
    window.close();
}
