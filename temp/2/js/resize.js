(function () {
  // 初始化时，首先将html font-size置为37.5px
  document.querySelector('html').style.fontSize = '37.5px';
  resize()
  window.addEventListener('resize', resize)
  var flag = false
  function resize () {
    if (flag) return
    flag = true
    var timer = setTimeout(function () {
      var fontSize = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) / 10
      fontSize = fontSize > 75 ? 75 : fontSize
      document.documentElement.style.fontSize = fontSize + "px"
      flag = false
    }, 50)
  }
}())
