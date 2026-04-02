  // ── Email connection flow ──
  var currentEmailProvider = 'gmail';

  /* ── POC: Gmail connect flow (replaces complex integration modal) ── */
  function openConnectGmailModal() {
    document.getElementById('modal-connect-gmail').classList.remove('hidden');
  }

  function closeConnectGmailModal() {
    document.getElementById('modal-connect-gmail').classList.add('hidden');
  }

  function proceedToOAuth() {
    closeConnectGmailModal();
    showToast('Successfully connected Gmail integration.');
    document.getElementById('import-modal-logo').innerHTML = gmailLogoLg;
    document.getElementById('modal-import').classList.remove('hidden');
  }

  function finishImport() {
    document.getElementById('modal-import').classList.add('hidden');
    showEmailConnected(true); // import → show threads
  }

  function skipImport() {
    document.getElementById('modal-import').classList.add('hidden');
    showEmailConnected(false); // skip → empty state
  }

  function showEmailConnected(withThreads) {
    document.getElementById('email-disconnected-state').style.display = 'none';
    document.getElementById('email-connected-state').style.display = 'block';
    document.getElementById('email-empty-state').style.display = withThreads ? 'none' : '';
    document.getElementById('email-thread-list').style.display = withThreads ? '' : 'none';
  }

  function disconnectGmail() {
    document.getElementById('email-dots-menu').style.display = 'none';
    document.getElementById('email-disconnected-state').style.display = '';
    document.getElementById('email-connected-state').style.display = 'none';
  }

  // Legacy — kept so existing references don't break
  function connectEmail(provider) { openConnectGmailModal(); }
  function closeIntegModal() {}
  function saveIntegrationSettings() {}

  // ── Email three-dot menu ──
  var emailDotsMenuOpen = false;
  var emailAccessPopoverOpen = false;

  function toggleEmailDotsMenu(e) {
    e.stopPropagation();
    // Close access popover if open
    if (emailAccessPopoverOpen) {
      emailAccessPopoverOpen = false;
      document.getElementById('email-access-popover').style.display = 'none';
    }
    emailDotsMenuOpen = !emailDotsMenuOpen;
    document.getElementById('email-dots-menu').style.display = emailDotsMenuOpen ? 'block' : 'none';
  }

  // ── Email three-dot actions ──
  function openManageAccess() {
    // Close the dropdown, open the access popover
    document.getElementById('email-dots-menu').style.display = 'none';
    emailDotsMenuOpen = false;
    emailAccessPopoverOpen = true;
    document.getElementById('email-access-popover').style.display = 'block';
  }

  function openEmailSyncSettings() {
    // Just close dropdown — prototype only, no action
    document.getElementById('email-dots-menu').style.display = 'none';
    emailDotsMenuOpen = false;
  }

  // ── Compose email (New Email button) ──
  function openComposePanel() {
    var panel = document.getElementById('email-detail-panel');
    panel.classList.add('compose-mode');
    panel.classList.add('open');
    document.querySelector('.edp-top-bar-label').textContent = 'Compose Email';
    // Reset fields
    document.getElementById('edp-compose-to').value = '';
    document.getElementById('edp-compose-subject').value = '';
    document.getElementById('edp-compose-body').innerHTML = '';
    setTimeout(function() { document.getElementById('edp-compose-to').focus(); }, 50);
    emailPanelJustOpened = true;
  }

  // Close modals on overlay click
  document.getElementById('modal-integration').addEventListener('click', function(e) {
    if (e.target === this) closeIntegModal();
  });
  document.getElementById('modal-import').addEventListener('click', function(e) {
    if (e.target === this) skipImport();
  });
