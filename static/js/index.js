window.HELP_IMPROVE_VIDEOJS = false;

// Swap a video whose file is missing for a labelled placeholder.
function showPlaceholder(video) {
  var source = video.querySelector('source');
  var path = source ? source.getAttribute('src') : 'video';
  var box = document.createElement('div');
  box.className = 'video-placeholder';
  box.textContent = 'Video coming soon (' + path.replace('./', '') + ')';
  video.replaceWith(box);
}

$(document).ready(function() {
  // Attach first: the carousel clones slides, and the clones are handled below too.
  bulmaCarousel.attach('.carousel', {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
  });

  document.querySelectorAll('video').forEach(function(video) {
    var source = video.querySelector('source');
    if (!source) return;
    // Only a failed request (e.g. 404) counts as missing.
    source.addEventListener('error', function() {
      if (video.id === 'teaser') video.remove(); else showPlaceholder(video);
    });
    // Cloned carousel videos don't start loading on their own.
    if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE ||
        video.networkState === HTMLMediaElement.NETWORK_EMPTY) {
      video.load();
    }
  });
});
