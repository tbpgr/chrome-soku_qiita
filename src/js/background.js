$(function() {
  var invalidTwitterIds = ['i', 'settings', 'about', 'jobs', 'privacy', 'tos'];
  function clicked(tab) {
    focusUserSearch(tab);
  }

  function focusUserSearch(tab) {
    chrome.tabs.sendRequest(tab.id, {}, function(response) {});
  }

  chrome.browserAction.onClicked.addListener(clicked);
});
