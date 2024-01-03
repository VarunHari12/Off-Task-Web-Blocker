// opens popup when the web browser starts
chrome.runtime.onStartup.addListener(function() {   
    chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });
  });