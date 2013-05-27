function findAllLinks (contentDocument) {
  var aElement = contentDocument.querySelectorAll("a");
  
  for(var i=0; i<aElement.length; i++)
  {
    if (aElement[i].firstChild.nodeName == "IMG")
    {
      aElement[i].firstChild.setAttribute("id", "is_linked");
    }
    else
    {
      aElement[i].setAttribute("id", "is_linked");
    }
  }
  
}

function addStylesheet (url, contentDocument) {

  var headElement = contentDocument.querySelector("head");
  if(!headElement)
  {
      headElement = contentDocument.documentElement;
  }
  var firstChild  = headElement.firstChild;
  var linkElement = contentDocument.createElement("link");

  var validUrl = chrome.extension.getURL(url);
  linkElement.setAttribute("href", validUrl);
  linkElement.setAttribute("type", "text/css");
  linkElement.setAttribute("rel", "stylesheet");

  // If there is a first child
  if(firstChild)
  {
    headElement.insertBefore(linkElement, firstChild);
  }
  else
  {
    headElement.appendChild(linkElement);
  }

};
findAllLinks(document);
addStylesheet("outline.css", document);
