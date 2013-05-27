function onClickHandler() {
  return function() {
  var a = document.getElementById('a');
	a.onclick = alert(a.getAttribute('href'));
}
};


chrome.contextMenus.create({
	  "title" : "Add link info",
	  "type" : "normal",
	  "contexts" : ["link"],
	  "id" : "parent"
});

chrome.contextMenus.create({"title": "Radio 1", "type": "radio", "parentId": "parent", "contexts" : ["link"], "id": "radio1",
	"onclick": onClickHandler()});
chrome.contextMenus.create({"title": "Radio 2", "type": "radio", "parentId": "parent", "contexts" : ["link"], "id": "radio2",
	"onclick": onClickHandler()});
chrome.contextMenus.create({"title": "Radio 3", "type": "radio", "parentId": "parent", "contexts" : ["link"], "id": "radio3",
	"onclick": onClickHandler()});
