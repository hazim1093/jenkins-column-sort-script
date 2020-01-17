  
document.addEventListener('DOMContentLoaded', function(event) {
  var activeTab = document.getElementsByClassName('active')[0];
  if (activeTab != null) {
    if (activeTab.innerText == "Recent") {
      setTimeout(clickSort,1000)
    }
  }
})

function clickSort() {
  var lastStatusSortArrow = document.evaluate ('//*[@id="projectstatus"]/tbody/tr[1]/th[5]/a/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  
  while (lastStatusSortArrow.singleNodeValue.innerText.indexOf('↑') == -1 ) {
    lastStatusSortArrow.singleNodeValue.click();
  }
}
