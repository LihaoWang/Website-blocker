const toggle = document.getElementById("toggle");
const updateText = () => {
  chrome.storage.local.get(["toggle"], function (result) {
    if (result.toggle) {
      toggle.innerText = "ON";
    } else {
      toggle.innerText = "OFF";
    }
  });
};
updateText();

chrome.storage.local.onChanged.addListener(updateText);

toggle.onclick = () => {
  chrome.storage.local.get(["toggle"], function (result) {
    chrome.storage.local.set({ toggle: !result.toggle });
  });

  chrome.extension.getBackgroundPage().console.log("clicked");
};
