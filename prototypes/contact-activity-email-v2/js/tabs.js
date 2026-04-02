  // ── Tab switching ──
  function switchTab(name) {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.subnavigation-item').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + name).classList.add('active');
    document.getElementById('tab-btn-' + name).classList.add('active');
    closeAllDropdowns();
  }

  // ── Activity "+" dropdown ──
  function toggleAddMenu() {
    const menu = document.getElementById('add-activity-menu');
    menu.classList.toggle('open');
  }

  // ── Close everything when clicking outside ──
  function closeAllDropdowns() {
    document.getElementById('add-activity-menu').classList.remove('open');
  }

  // ── Companies section expand/collapse ──
  document.querySelector('.sidebar-section-title').addEventListener('click', function() {
    this.closest('.sidebar-section').classList.toggle('sidebar-section--open');
  });

  // ── Properties section expand/collapse ──
  document.querySelector('.page-properties-section-title-toggle').addEventListener('click', function() {
    var title = this.closest('.page-properties-section-title');
    var icon = this.querySelector('.page-properties-section-title-toggle-icon');
    title.classList.toggle('page-properties-section-title--open');
    icon.classList.toggle('page-properties-section-title-toggle-icon--open');
  });
