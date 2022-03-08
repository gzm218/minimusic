function remSize() {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
  if (deviceWidth >= 750) {
    deviceWidth = 750;
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320;
  }
  document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
  // 设置一半的宽度，那么就是375px
  // 1rem = 100px
}

remSize();

window.onresize = function () {
  remSize();
};
