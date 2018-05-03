var equipment = 'views'

function isMobile () {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag
}
if (isMobile()) {
  equipment = 'views'
} else {
  equipment = 'pages'
}
export default {
  equipment
}
