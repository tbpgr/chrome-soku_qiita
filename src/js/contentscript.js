$(function() {
  const INPUT_DESCRIPTION = '\
user, tag をカンマ区切りで入力してください。\n\
\n\
例1: User tbpgr, Tag ruby\n\
tbpgr,ruby\n\
例2: User tbpgr, Tag なし\n\
tbpgr\n\
例3: User なし, Tag ruby\n\
,ruby\n\n\
  ';
  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (!existSearchForm()) 
      return;
    var inputs = readInputs();
    var user = readUser(inputs);
    var tag = readTag(inputs);
    var userQuery = readUserQuery(user);
    var tagQuery = readTagQuery(tag);
    var queryText = mergeQuery(userQuery, tagQuery);
    $('.searchForm_query')[0].value = queryText;
    $('.searchForm_query')[0].focus();
  });

  function existSearchForm() {
    if ($('.searchForm_query').length > 0) {
      return true;
    } else {
      console.log("no query form");
      return false;
    }
  }

  function readInputs() {
    inputs = window.prompt(INPUT_DESCRIPTION, "");
    if (inputs == null)
      return "";
    return inputs;
  }

  function readUser(inputs) {
    return inputs.split(",")[0];
  }

  function readTag(inputs) {
    queries = inputs.split(",");
    if (queries.length == 2)
      return queries[1];
    return "";
  }

  function readUserQuery(user) {
    if (user != "")
      return "user:" + user;
    return "";
  }

  function readTagQuery(tag) {
    if (tag != "")
      return "tag:" + tag;
    return "";
  }

  function mergeQuery(userQuery, tagQuery) {
    return userQuery + " " + tagQuery;
  }
});
