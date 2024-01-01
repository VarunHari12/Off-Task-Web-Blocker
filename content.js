//alert(localStorage.setItem("intent", "hi"));
//localStorage.removeItem("intent");
//alert(localStorage.getItem("intent"));
console.log("test")
chrome.storage.sync.get(["intent"], function(result) {
    alert('Value currently is ' + result.intent);
  });