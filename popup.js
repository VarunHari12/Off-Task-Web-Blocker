

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () {
        captureIntent();
    });
});

function captureIntent() {
    const userInput = document.getElementById('userInput').value;
    console.log("User intent:", userInput);

    localStorage.setItem("intent", userInput)
    alert(localStorage.getItem("intents"));
    // Send the user input to the content script
    //chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        //const activeTab = tabs[0];
        //alert("beta")
        //chrome.tabs.sendMessage(activeTab.id, { userIntent: userInput });
    //});

    window.close(); 
}
