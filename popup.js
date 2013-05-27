function click(e) {
  if (e.target.id=="outline") {
  chrome.tabs.executeScript(null,
      {file:"content_script1.js"});
  window.close();
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
