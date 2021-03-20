var defaultFilters = ["*://*.youtube.com/*"];
function blockRequest(details) {
  return { cancel: true };
}
chrome.storage.local.set({ toggle: false });

chrome.storage.local.onChanged.addListener(update);

function update() {
  chrome.storage.local.get(["toggle"], function (result) {
    if (!result.toggle) {
      chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
      chrome.extension.getBackgroundPage().console.log("false");
    } else {
      chrome.webRequest.onBeforeRequest.addListener(
        blockRequest,
        { urls: defaultFilters },
        ["blocking"]
      );
      chrome.extension.getBackgroundPage().console.log("true");
    }
  });
}
update();
