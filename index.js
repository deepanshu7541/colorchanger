var index = 0;

function changeColors() {
  var arr = ["Orangered","Blue","Yellow","Green","Orange", "Cyan","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];
  document.getElementsByTagName("body")[0].style.background = arr[index++];

  if (index > arr.length - 1) {
    index = 0;
  }
}
