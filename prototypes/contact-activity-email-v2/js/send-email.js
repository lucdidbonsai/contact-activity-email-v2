  // ── Send Email Modal (multi-select To) ──
  var semSelectedContacts = [];

  function openSendEmailModal(prefilledContact) {
    var modal = document.getElementById('modal-send-email');
    modal.classList.remove('hidden');
    semSelectedContacts = [];
    renderToChips();
    // Pre-fill with current contact page contact
    var contact = prefilledContact || contactsList[0]; // Michael Fawler
    addRecipient(contact);
    document.getElementById('sem-subject-input').value = '';
    document.getElementById('sem-editor').innerHTML = '';
    document.getElementById('sem-attachments').innerHTML = '';
    document.getElementById('sem-warning').style.display = 'none';
    // Reset preview state
    document.getElementById('sem-composer-area').style.display = 'block';
    document.getElementById('sem-preview-area').style.display = 'none';
    updateSendEmailBtn();
  }

  function closeSendEmailModal() {
    var editor = document.getElementById('sem-editor');
    var subject = document.getElementById('sem-subject-input');
    var hasContent = (editor && editor.innerText.trim().length > 0) || (subject && subject.value.trim().length > 0);
    if (hasContent) {
      if (!confirm('Discard this draft? Your changes will be lost.')) return;
    }
    document.getElementById('modal-send-email').classList.add('hidden');
    semSelectedContacts = [];
  }

  function addRecipient(contact) {
    // Don't add duplicates
    for (var i = 0; i < semSelectedContacts.length; i++) {
      if (semSelectedContacts[i].name === contact.name) return;
    }
    semSelectedContacts.push(contact);
    renderToChips();
    closeContactDropdown();
    document.getElementById('sem-to-search').value = '';
    // Show warning if any selected contact has no email
    checkNoEmailWarning();
    updateSendEmailBtn();
  }

  function removeRecipientAt(index) {
    semSelectedContacts.splice(index, 1);
    renderToChips();
    checkNoEmailWarning();
    updateSendEmailBtn();
  }

  function renderToChips() {
    var area = document.getElementById('sem-to-chips-area');
    var search = document.getElementById('sem-to-search');
    // Remove existing chips
    var existing = area.querySelectorAll('.sem-chip');
    for (var i = existing.length - 1; i >= 0; i--) existing[i].remove();
    // Add chips before the search input
    for (var j = 0; j < semSelectedContacts.length; j++) {
      var chip = document.createElement('span');
      chip.className = 'sem-chip';
      chip.innerHTML = '<span class="sem-chip-name">' + semSelectedContacts[j].name + '</span>'
        + '<span class="sem-chip-remove" onclick="event.stopPropagation(); removeRecipientAt(' + j + ')">&times;</span>';
      area.insertBefore(chip, search);
    }
    search.placeholder = semSelectedContacts.length === 0 ? 'Select a contact…' : '';
  }

  function checkNoEmailWarning() {
    var warning = document.getElementById('sem-warning');
    var hasNoEmail = false;
    for (var i = 0; i < semSelectedContacts.length; i++) {
      if (!semSelectedContacts[i].email) { hasNoEmail = true; break; }
    }
    warning.style.display = hasNoEmail ? 'block' : 'none';
  }

  function updateSendEmailBtn() {
    var btn = document.getElementById('sem-send-btn');
    var subject = document.getElementById('sem-subject-input').value.trim();
    var hasRecipients = semSelectedContacts.length > 0;
    var allHaveEmail = true;
    for (var i = 0; i < semSelectedContacts.length; i++) {
      if (!semSelectedContacts[i].email) { allHaveEmail = false; break; }
    }
    btn.disabled = !(hasRecipients && allHaveEmail && subject.length > 0);
  }

  // Listen for subject input changes
  document.addEventListener('input', function(e) {
    if (e.target.id === 'sem-subject-input') updateSendEmailBtn();
  });

  // ── Contact Dropdown ──
  function openContactDropdown() {
    var dropdown = document.getElementById('sem-contact-dropdown');
    renderContactDropdown('');
    dropdown.style.display = 'block';
  }

  function closeContactDropdown() {
    document.getElementById('sem-contact-dropdown').style.display = 'none';
  }

  function filterContactDropdown() {
    var query = document.getElementById('sem-to-search').value;
    renderContactDropdown(query);
    if (!document.getElementById('sem-contact-dropdown').style.display || document.getElementById('sem-contact-dropdown').style.display === 'none') {
      document.getElementById('sem-contact-dropdown').style.display = 'block';
    }
  }

  function renderContactDropdown(query) {
    var dropdown = document.getElementById('sem-contact-dropdown');
    var q = (query || '').toLowerCase();
    var filtered = contactsList.filter(function(c) {
      return c.name.toLowerCase().indexOf(q) !== -1 ||
             c.company.toLowerCase().indexOf(q) !== -1 ||
             c.email.toLowerCase().indexOf(q) !== -1;
    });
    if (filtered.length === 0) {
      dropdown.innerHTML = '<div class="sem-dd-empty">No contacts found.</div>';
      return;
    }
    var html = '';
    for (var i = 0; i < filtered.length; i++) {
      var c = filtered[i];
      html += '<div class="sem-dd-row" onclick="addRecipient(contactsList[' + contactsList.indexOf(c) + '])">';
      html += '<div class="user-avatar avatar-xs" style="background-image:url(\'' + c.avatar + '\'); flex-shrink:0;"></div>';
      html += '<div class="sem-dd-info">';
      html += '<div class="sem-dd-top"><span class="sem-dd-name">' + c.name + '</span><span class="sem-dd-company">' + c.company + '</span></div>';
      if (c.email) {
        html += '<div class="sem-dd-email">' + c.email + '</div>';
      } else {
        html += '<div class="sem-dd-no-email">No email on file</div>';
      }
      html += '</div></div>';
    }
    dropdown.innerHTML = html;
  }

  // ── Attachments ──
  var FILE_ICON_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22AD01" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>';

  function handleSemAttachment(input) {
    var container = document.getElementById('sem-attachments');
    for (var i = 0; i < input.files.length; i++) {
      var file = input.files[i];
      var pill = document.createElement('div');
      pill.className = 'sem-attachment-pill';
      var name = file.name.length > 48 ? file.name.substring(0, 48) + '…' : file.name;
      pill.innerHTML = '<span class="sem-attachment-icon">' + FILE_ICON_SVG + '</span>'
        + '<span class="sem-attachment-name">' + name + '</span>'
        + '<span class="sem-attachment-remove" onclick="this.parentElement.remove()">&times;</span>';
      container.appendChild(pill);
    }
    input.value = '';
  }

  // ── Email Preview Toggle ──
  function toggleEmailPreview() {
    var composerArea = document.getElementById('sem-composer-area');
    var previewArea = document.getElementById('sem-preview-area');
    if (previewArea.style.display === 'none') {
      // Build preview content
      var editor = document.getElementById('sem-editor');
      var bodyHtml = editor.innerHTML || '<span style="color:#9ca3af;">No content</span>';
      var attachments = document.querySelectorAll('#sem-attachments .sem-attachment-pill');
      var previewHtml = '<div style="margin-bottom:8px;">' + bodyHtml + '</div>';
      if (attachments.length > 0) {
        for (var i = 0; i < attachments.length; i++) {
          var fname = attachments[i].querySelector('.sem-attachment-name');
          previewHtml += '<div class="sem-preview-attachment-row">' + (fname ? fname.textContent : '') + '</div>';
        }
      }
      document.getElementById('sem-preview-content').innerHTML = previewHtml;
      composerArea.style.display = 'none';
      previewArea.style.display = 'block';
    } else {
      composerArea.style.display = 'block';
      previewArea.style.display = 'none';
    }
  }

  // ── Send ──
  function sendEmailFromModal() {
    if (semSelectedContacts.length === 0) return;
    var names = semSelectedContacts.map(function(c) { return c.name; }).join(', ');
    document.getElementById('modal-send-email').classList.add('hidden');
    showToast('Email sent to ' + names + '.');
    semSelectedContacts = [];
  }

  // Close dropdown on click outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#sem-to-row') && !e.target.closest('#sem-contact-dropdown')) {
      closeContactDropdown();
    }
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeContactDropdown();
    }
  });

  // ── Inline Composer (Email Side Panel) ──
  var inlineComposerMode = null; // 'reply' | 'replyall' | 'forward'

  function openInlineComposer(mode) {
    var composer = document.getElementById('edp-inline-composer');
    var body = document.getElementById('edp-ic-body');

    // Toggle: clicking the same action again hides the composer
    if (inlineComposerMode === mode && composer.style.display !== 'none') {
      hideInlineComposer();
      return;
    }

    inlineComposerMode = mode;
    composer.style.display = 'block';
    body.innerHTML = '';

    // Update action button active states
    updateActionBtnStates(mode);

    // Pre-fill To chips
    var d = emailData[currentEmailIdx];
    var lastMsg = d.threads[d.threads.length - 1];
    var chipsEl = document.getElementById('edp-ic-to-chips');
    var chips = [];

    if (mode === 'reply') {
      chips.push(lastMsg.senderName);
    } else if (mode === 'replyall') {
      chips.push(lastMsg.senderName);
      // Add other recipients, excluding "You"
      if (lastMsg.to) {
        var recipients = lastMsg.to.split(',');
        for (var i = 0; i < recipients.length; i++) {
          var r = recipients[i].trim();
          if (r && r !== 'You' && r !== lastMsg.senderName) {
            chips.push(r);
          }
        }
      }
    }
    // Forward: no pre-fill

    var chipsHtml = '';
    for (var j = 0; j < chips.length; j++) {
      chipsHtml += '<span class="edp-ic-chip">' + chips[j] + '</span>';
    }
    chipsEl.innerHTML = chipsHtml;

    // Hide Cc/Bcc
    document.getElementById('edp-ic-cc-row').style.display = 'none';
    document.getElementById('edp-ic-bcc-row').style.display = 'none';

    // Scroll panel to bottom
    var viewMode = document.querySelector('.edp-view-mode');
    if (viewMode) {
      setTimeout(function() { viewMode.scrollTop = viewMode.scrollHeight; }, 50);
    }

    body.focus();
  }

  function hideInlineComposer() {
    var composer = document.getElementById('edp-inline-composer');
    composer.style.display = 'none';
    inlineComposerMode = null;
    updateActionBtnStates(null);
  }

  function updateActionBtnStates(activeMode) {
    var btns = document.querySelectorAll('.edp-action-btn');
    btns.forEach(function(btn) {
      var tooltip = btn.getAttribute('data-tooltip');
      if (!tooltip) return;
      var btnMode = tooltip === 'Reply' ? 'reply' : tooltip === 'Reply all' ? 'replyall' : tooltip === 'Forward' ? 'forward' : null;
      if (btnMode === activeMode) {
        btn.classList.add('edp-action-btn--active');
      } else {
        btn.classList.remove('edp-action-btn--active');
      }
    });
  }

  function discardInlineComposer() {
    var body = document.getElementById('edp-ic-body');
    var hasContent = body && body.innerText.trim().length > 0;
    if (hasContent) {
      if (!confirm('Discard this draft?')) return;
    }
    hideInlineComposer();
  }

  function toggleCcBcc() {
    var cc = document.getElementById('edp-ic-cc-row');
    var bcc = document.getElementById('edp-ic-bcc-row');
    var show = cc.style.display === 'none';
    cc.style.display = show ? 'flex' : 'none';
    bcc.style.display = show ? 'flex' : 'none';
  }

  function handleIcAttachment(input) {
    var container = document.getElementById('edp-ic-attachments');
    for (var i = 0; i < input.files.length; i++) {
      var file = input.files[i];
      var pill = document.createElement('div');
      pill.className = 'sem-attachment-pill';
      var name = file.name.length > 32 ? file.name.substring(0, 32) + '…' : file.name;
      pill.innerHTML = '<span>' + name + '</span><span class="sem-attachment-remove" onclick="this.parentElement.remove()">&times;</span>';
      container.appendChild(pill);
    }
    input.value = '';
  }

  function sendInlineReply() {
    hideInlineComposer();
    showToast('Reply sent.');
  }
