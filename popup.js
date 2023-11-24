document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () {
        captureIntent();
    });
});

function captureIntent() {
    const userInput = document.getElementById('userInput').value;
    console.log("User intent:", userInput);

    // Send the user input to the content script
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const activeTab = tabs[0];
        alert("beta")
        console.log("123")
        chrome.tabs.sendMessage(activeTab.id, { userIntent: userInput });
    });

    window.close(); 
}
