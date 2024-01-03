document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () { // adds submit button to intent page
        getIntent();
    });
});

// grabs the user intent and stores it
function getIntent() {
    const userInput = document.getElementById('userInput').value;
    chrome.storage.sync.set({"intent": userInput});
    window.close();
}
