chrome.runtime.onMessage.addListener(
    
    function(request, sender, sendResponse) {
        console.log('aaa');
        console.log("sender" + sender);
        console.log("Sender response" + sendResponse);
        console.log("request" + request);
        if (request.userIntent) {

            alert("123")
            console.log(request.userIntent)
        }
    }
);
//alert("test");


