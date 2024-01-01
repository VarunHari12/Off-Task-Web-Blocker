chrome.runtime.onStartup.addListener(function() {
    
    chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") }, function(tab) {
        
    });
  });

  //chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    //if (request.action === "setLocalStorage") {
        //localStorage.setItem("intent", request.data);
        //console.log(localStorage.getItem("intent"));
    //}
//});