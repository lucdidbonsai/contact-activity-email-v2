  // ── Toast notification ──
  var _toastTimer = null;
  function showToast(msg) {
    var t = document.getElementById('toast-notification');
    t.querySelector('.toast-msg').textContent = msg;
    t.classList.add('visible');
    clearTimeout(_toastTimer);
    _toastTimer = setTimeout(function() { t.classList.remove('visible'); }, 4000);
  }
  function closeToast() {
    document.getElementById('toast-notification').classList.remove('visible');
    clearTimeout(_toastTimer);
  }
