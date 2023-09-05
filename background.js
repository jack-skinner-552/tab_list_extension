// background.js


console.log("Background script loaded");

// Log when a tab is activated
chrome.tabs.onActivated.addListener(function (activeInfo) {
  console.log("Tab", activeInfo.tabId, "was activated");
})

// Update tab list when a tab is attached to a window
chrome.tabs.onAttached.addListener(function (tabId, attachInfo) {
  console.log("Tab", tabId, "was attached to window", attachInfo.newWindowId);
  updateTabList();
});

// Update tab list when the extension icon is clicked
chrome.action.onClicked.addListener(function () {
  updateTabList();
});

// Update tab list when a tab is created
chrome.tabs.onCreated.addListener(function (tab) {
  console.log("Tab", tab.id, "was created");
  updateTabList();
});

// Update tab list when a tab is detached from a window
chrome.tabs.onDetached.addListener(function (tabId, detachInfo) {
  console.log("Tab", tabId, "was detached from window", detachInfo.oldWindowId);
  updateTabList();
});

// Update tab list when a tab is removed
chrome.tabs.onRemoved.addListener(function (tabId) {
  console.log("Tab", tabId, "was removed");
  updateTabList();
});

// Update tab list when a tab is updated
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  console.log("Tab", tabId, "was updated", changeInfo);
  updateTabList();
});

// Update tab list when extenstion is installed or updated
chrome.runtime.onInstalled.addListener(function () {
  updateTabList();
});

chrome.tabs.onReplaced.addListener(function (removedTabId, newTabId) {
  console.log("Tab", removedTabId, "was replaced by tab", newTabId);
  updateTabList();
});


function updateTabList() {
  chrome.tabs.query({}, function (tabs) {
    const tabList = tabs.map(tab => {
      return {
        windowId: tab.windowId,
        id: tab.id,
        url: tab.url,
        isActiveTab: tab.active
      };
    });

    chrome.storage.local.set({ tabList }, function() {
      console.log("Tab list updated:", tabList);
    });
  });
}
