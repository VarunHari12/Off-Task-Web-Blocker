
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () {
        captureIntent();
    });
});

function captureIntent() {
    const userInput = document.getElementById('userInput').value;
    console.log("User intent:", userInput);
    window.close();
    localStorage.setItem("intent", userInput)
    alert(localStorage.getItem("intent"));

}
