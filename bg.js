function getClickHandler() {
  return function(info, tab) {

    // The srcUrl property is only available for image elements.
    var url = 'info.html#' + info.srcUrl;

    // Create a new window to the info page.
    chrome.windows.create({ url: url, width: 520, height: 660 });
  };
};

chrome.contextMenus.create({
	  "title" : "Add link info",
	  "type" : "normal",
	  "contexts" : ["link"],
	  "onclick" : getClickHandler()
});
