document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () { // checks if submit button is clicked
        getIntent();
    });
    document.getElementById('nothingButton').addEventListener('click', function () { // checks if nothing button is clicked
        chrome.storage.sync.set({"intent": "none"})
        window.close();
    });
    document.getElementById('allowedButton').addEventListener('click', function () { // checks if nothing button is clicked
        chrome.tabs.create({ url: chrome.runtime.getURL("allowedSites.html") });
  });
        //window.close();
    });

// grabs the user intent and stores it
function getIntent() {
    const userInput = document.getElementById('userInput').value;
    chrome.storage.sync.set({"intent": userInput});
    window.close();
}
