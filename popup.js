
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () {
        captureIntent();
    });
});

function captureIntent() {
    const userInput = document.getElementById('userInput').value;
    console.log("User intent:", userInput);
    
    chrome.storage.sync.set({"intent": userInput}, function() {
        console.log('Value is set to ' + userInput);
      });
    
      chrome.storage.sync.get(["intent"], function(result) {
        alert('Value currently is ' + result.intent);
      });
    
    //window.close();
}
