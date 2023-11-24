chrome.runtime.onStartup.addListener(function() {
    
    chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") }, function(tab) {
        
    });
  });