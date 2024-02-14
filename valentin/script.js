function openTab(evt, tabName) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].style.backgroundColor = "#f44336";
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.style.backgroundColor = "#d32f2f";
}
