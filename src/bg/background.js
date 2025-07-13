// Background service worker for IGV Helper Chrome Extension
// This file is required for Manifest V3


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'calculateIGV') {
    // Handle IGV calculation if needed
    sendResponse({ success: true });
  }
});
  
   
