var index = 0;

function changeColors() {
  var arr = ["orange", "white", "green", "red", "purple"];
  document.getElementsByTagName("body")[0].style.background = arr[index++];

  if (index > arr.length - 1) {
    index = 0;
  }
}
