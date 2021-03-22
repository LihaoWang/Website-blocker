const toggle = document.getElementById("toggle");
const ok = document.getElementById("ok_btn");
const filterList = document.getElementById("filterList");
const updateText = () => {
  chrome.storage.local.get(["toggle"], function (result) {
    if (result.toggle) {
      toggle.innerText = "ON";
    } else {
      toggle.innerText = "OFF";
    }
  });
};
const updateList = () => {
  chrome.storage.local.get(["filter"], function (result) {
    if (result.filter.length == 0) {
      filterList.innerHTML = "no filter";
    } else {
      filterList.innerHTML = result.filter
        .map((item) => `${item}<br/>`)
        .join("");
    }
  });
};
updateList();
updateText();

chrome.storage.local.onChanged.addListener(updateText);
chrome.storage.local.onChanged.addListener(updateList);

toggle.onclick = () => {
  chrome.storage.local.get(["toggle"], function (result) {
    chrome.storage.local.set({ toggle: !result.toggle });
  });

  chrome.extension.getBackgroundPage().console.log("clicked");
};
document.addEventListener("DOMContentLoaded", documentEvents, false);

function myAction(input) {
  chrome.extension.getBackgroundPage().console.log(input.value);
  if (input.value.length == 0) {
    chrome.storage.local.set({ filter: [] });
  } else {
    const arr = makearr(input.value);
    chrome.storage.local.set({ filter: arr });
    chrome.storage.local.set({ toggle: false });
    filterList.innerHTML = arr.map((item) => `${item}<br/>`).join("");
  }
}

const makearr = (input) => {
  const result = input.split(",");
  let trim = result.map((str) => str.trim());
  return trim.map((item) => `*://*.${item}/*`);
};

const showFilter = (item) => item + "123";

function documentEvents() {
  document.getElementById("ok_btn").addEventListener("click", function () {
    myAction(document.getElementById("textbox"));
  });
}
