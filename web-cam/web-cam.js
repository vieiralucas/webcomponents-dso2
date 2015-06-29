var video = document.createElement('video');
var Camera = Object.create(HTMLElement.prototype)

Camera.createdCallback = function() {
  var handleVideo = function(stream) {
      video.src = window.URL.createObjectURL(stream);
  }
  var videoError = function(e) {
    alert('panic mode on!')
  }

  video.setAttribute('autoplay', true)
  video.style.height = "100vh"
  this.appendChild(video)

  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

  if (navigator.getUserMedia) {
      navigator.getUserMedia({video: true}, handleVideo, videoError);
  }

}

document.registerElement('web-cam', {
  prototype: Camera
})
