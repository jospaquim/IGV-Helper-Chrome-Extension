// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });
  // Respond to the click on extension Icon
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
      file: 'js/jquery.min.js'
  });
});
  
   
