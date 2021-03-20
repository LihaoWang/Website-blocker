var toggle = document.getElementById("toggle");
function updateText() {
  chrome.storage.local.get(["toggle"], function (result) {
    if (result.toggle) {
      toggle.innerText = "ON";
    } else {
      toggle.innerText = "OFF";
    }
  });
}
updateText();
chrome.storage.local.onChanged.addListener(updateText);
// chrome.storage.local.get(["toggle"], function (result) {
//   toggle.innerText = result.toggle;
// });

toggle.onclick = function () {
  chrome.storage.local.get(["toggle"], function (result) {
    chrome.storage.local.set({ toggle: !result.toggle });
  });

  chrome.extension.getBackgroundPage().console.log("clicked");
};

// toggle.addEventListener("click", function (e) {
//   e.preventDefault();
//   chrome.storage.local.set({ toggle: false });
//   chrome.extension.getBackgroundPage().console.log("done");
// });
