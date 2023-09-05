// popup.js

function faviconURL(u) {
  const url = new URL(chrome.runtime.getURL('/_favicon/'));
  url.searchParams.set('pageUrl', u); // this encodes the URL as well
  url.searchParams.set('size', '16');
  return url.toString();
}

console.log("Popup script loaded");

document.addEventListener("DOMContentLoaded", function () {
  const tabListElement = document.getElementById('tabList');

  chrome.storage.local.get('tabList', function(result) {
    const tabList = result.tabList || [];
    const tabsByWindow = {};

    tabList.forEach(tab => {
      if (!tabsByWindow[tab.windowId]) {
        tabsByWindow[tab.windowId] = [];
      }
      tabsByWindow[tab.windowId].push(tab);
    });

    for (const windowId in tabsByWindow) {
      const windowTabs = tabsByWindow[windowId];
      const windowElement = document.createElement('div');
      const windowHeader = document.createElement('h3');
      windowHeader.textContent = `Window ID: ${windowId}`;
      windowElement.appendChild(windowHeader);

      windowTabs.forEach(tab => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = faviconURL(tab.url);
        li.appendChild(img);
        li.appendChild(document.createTextNode(`Tab ID: ${tab.id}, URL: ${tab.url}`));

        if (tab.isActiveTab) { // check if the tab is active
          li.style.backgroundColor = "yellow"; // set background color to highlight the active tab
        }

        windowElement.appendChild(li);
      });

      tabListElement.appendChild(windowElement);
    }
  });
});
