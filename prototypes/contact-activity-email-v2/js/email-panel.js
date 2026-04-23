  // ── Email detail panel ──
  var currentEmailIdx = 0;
  var emailPanelJustOpened = false;
  var recipientsExpanded = false;

  function toggleRecipients() {
    recipientsExpanded = !recipientsExpanded;
    var collapsed = document.getElementById('edp-recip-collapsed');
    var expanded = document.getElementById('edp-recip-expanded');
    var chevron = document.getElementById('edp-recip-chevron');
    if (collapsed) collapsed.style.display = recipientsExpanded ? 'none' : 'flex';
    if (expanded) expanded.style.display = recipientsExpanded ? 'block' : 'none';
    if (chevron) chevron.style.transform = recipientsExpanded ? 'rotate(180deg)' : '';
  }

  function renderEmailThread(idx) {
    recipientsExpanded = false;
    var d = emailData[idx];
    var msg = d.threads[d.threads.length - 1];
    var recip = msg.recipients;
    var primaryTo = recip && recip.to && recip.to.length > 0 ? recip.to[0].name || recip.to[0].email : msg.to;

    var html = '';
    html += '<div class="edp-thread-msg">';
    html += '<div class="edp-thread-msg-header">';
    html += '<div class="user-avatar avatar-xs" style="background-image:url(\'' + msg.senderAvatar + '\');flex-shrink:0;"></div>';
    html += '<div class="edp-thread-msg-meta">';
    html += '<div class="edp-thread-msg-sender">' + msg.senderName + '</div>';

    // Collapsed recipients row
    html += '<div class="edp-recip-collapsed" id="edp-recip-collapsed" onclick="event.stopPropagation();toggleRecipients()" style="display:flex;align-items:center;gap:4px;cursor:pointer;">';
    html += '<span class="edp-thread-msg-to">to ' + primaryTo + '</span>';
    html += '<svg id="edp-recip-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="flex-shrink:0;color:var(--text-muted);transition:transform 0.15s;"><path d="M1 1l4 4 4-4"/></svg>';
    html += '</div>';

    // Expanded recipients panel
    if (recip) {
      html += '<div class="edp-recip-expanded" id="edp-recip-expanded" style="display:none;">';
      html += '<table class="edp-recip-table">';
      html += '<tr>';
      html += '<td class="edp-recip-label">From</td>';
      html += '<td class="edp-recip-value"><span class="edp-recip-name">' + recip.from.name + '</span><span class="edp-recip-email">' + recip.from.email + '</span></td>';
      html += '</tr>';
      for (var ti = 0; ti < recip.to.length; ti++) {
        html += '<tr>';
        html += '<td class="edp-recip-label">' + (ti === 0 ? 'To' : '') + '</td>';
        html += '<td class="edp-recip-value"><span class="edp-recip-name">' + (recip.to[ti].name || '') + '</span><span class="edp-recip-email">' + recip.to[ti].email + '</span></td>';
        html += '</tr>';
      }
      for (var ci = 0; ci < recip.cc.length; ci++) {
        html += '<tr>';
        html += '<td class="edp-recip-label">' + (ci === 0 ? 'Cc' : '') + '</td>';
        html += '<td class="edp-recip-value"><span class="edp-recip-name">' + (recip.cc[ci].name || '') + '</span><span class="edp-recip-email">' + recip.cc[ci].email + '</span></td>';
        html += '</tr>';
      }
      html += '</table>';
      html += '</div>';
    }

    html += '</div>'; // end meta
    html += '<span class="edp-thread-msg-date">' + msg.date + '</span>';
    html += '<div class="edp-thread-msg-actions">';
    html += '<button class="edp-action-btn" data-tooltip="Reply" onclick="openInlineComposer(\'reply\')">' + SVG_REPLY + '</button>';
    html += '<button class="edp-action-btn" data-tooltip="Reply all" onclick="openInlineComposer(\'replyall\')">' + SVG_REPLY_ALL + '</button>';
    html += '<button class="edp-action-btn" data-tooltip="Forward" onclick="openInlineComposer(\'forward\')">' + SVG_FORWARD + '</button>';
    html += '</div>';
    html += '</div>'; // end header
    html += '<div class="edp-thread-msg-body">' + msg.body + '</div>';
    html += '</div>'; // end thread-msg
    document.getElementById('edp-body').innerHTML = html;
  }

  function renderEmailComments(idx) {
    var d = emailData[idx];
    var comments = d.comments || [];
    var displayEl = document.getElementById('edp-comments-display');
    if (!displayEl) return;
    var html = '';
    for (var i = 0; i < comments.length; i++) {
      var c = comments[i];
      html += '<div class="edp-comment-item">';
      html += '<div class="user-avatar avatar-xs" style="background-image:url(\'' + c.avatar + '\');flex-shrink:0;margin-top:2px;"></div>';
      html += '<div class="edp-comment-bubble">';
      html += '<div class="edp-comment-author">' + c.author + '</div>';
      html += '<div class="edp-comment-text">' + c.text + '</div>';
      html += '<div class="edp-comment-time">' + c.time + '</div>';
      html += '</div></div>';
    }
    displayEl.innerHTML = html;
  }

  function submitNoteFromTab() {
    var compose = document.getElementById('edp-note-compose');
    var text = compose ? compose.innerText.trim() : '';
    if (!text) return;
    var d = emailData[currentEmailIdx];
    d.comments.push({
      author: 'You',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: text,
      time: 'Just now'
    });
    compose.innerHTML = '';
    renderEmailComments(currentEmailIdx);
    // Scroll thread area to show the new comment
    var viewMode = document.querySelector('.edp-view-mode');
    if (viewMode) viewMode.scrollTop = viewMode.scrollHeight;
  }

  function switchComposeTab(tab) {
    var replyTab = document.getElementById('edp-tc-tab-reply');
    var noteTab = document.getElementById('edp-tc-tab-note');
    var replyPanel = document.getElementById('edp-tc-panel-reply');
    var notePanel = document.getElementById('edp-tc-panel-note');
    var tabCompose = document.getElementById('edp-tabbed-compose');
    if (tab === 'reply') {
      replyTab.classList.add('edp-tc-tab--active');
      noteTab.classList.remove('edp-tc-tab--active');
      replyPanel.classList.add('edp-tc-panel--active');
      notePanel.classList.remove('edp-tc-panel--active');
      tabCompose.style.background = '';
      document.getElementById('edp-reply-compose').focus();
    } else {
      noteTab.classList.add('edp-tc-tab--active');
      replyTab.classList.remove('edp-tc-tab--active');
      notePanel.classList.add('edp-tc-panel--active');
      replyPanel.classList.remove('edp-tc-panel--active');
      tabCompose.style.background = '#fffcf0';
      document.getElementById('edp-note-compose').focus();
    }
  }

  var aiTimer = null;
  function generateWithAI() {
    // Switch to Reply tab
    switchComposeTab('reply');
    // Show AI overlay
    var overlay = document.getElementById('edp-ai-overlay');
    overlay.classList.add('visible');
    // Simulate AI generation (1.8s delay)
    aiTimer = setTimeout(function() {
      overlay.classList.remove('visible');
      var d = emailData[currentEmailIdx];
      var lastMsg = d.threads[d.threads.length - 1];
      var suggestions = [
        'Hi ' + lastMsg.senderName.split(' ')[0] + ',\n\nThanks for the update — this all sounds good. Happy to proceed with the approach you\'ve outlined.\n\nOne quick note: could you send over the latest version once you\'ve made those changes? I\'d like to review before it goes out.\n\nThanks,\nMichael',
        'Hi ' + lastMsg.senderName.split(' ')[0] + ',\n\nGreat, thanks for looping me in. I\'ll take a look and come back to you by end of day tomorrow.\n\nBest,\nMichael',
        lastMsg.senderName.split(' ')[0] + ' — thanks for this. A few thoughts:\n\n1. The approach looks solid overall.\n2. I\'d suggest we schedule a short sync to align on next steps before moving forward.\n3. Happy to make the final call once we\'ve spoken.\n\nDoes Thursday work for a 20-min call?\n\nMichael'
      ];
      var compose = document.getElementById('edp-reply-compose');
      if (compose) {
        compose.innerText = suggestions[Math.floor(Math.random() * suggestions.length)];
        compose.focus();
      }
    }, 1800);
  }

  function cancelAI() {
    if (aiTimer) { clearTimeout(aiTimer); aiTimer = null; }
    var overlay = document.getElementById('edp-ai-overlay');
    if (overlay) overlay.classList.remove('visible');
  }

  function openEmailPanel(idx) {
    var d = emailData[idx];
    currentEmailIdx = idx;
    // Ensure we're in view mode
    var panel = document.getElementById('email-detail-panel');
    panel.classList.remove('compose-mode');
    document.querySelector('.edp-top-bar-label').textContent = 'View email';
    // Populate subject
    document.getElementById('edp-subject').textContent = d.subject;
    // Render thread messages and comments
    renderEmailThread(idx);
    renderEmailComments(idx);
    // Hide inline composer
    if (typeof hideInlineComposer === 'function') hideInlineComposer();
    cancelAI();
    edpSharePopoverOpen = false;
    document.getElementById('edp-share-popover').style.display = 'none';
    panel.classList.add('open');
    emailPanelJustOpened = true;
  }

  function closeEmailPanel() {
    // Check if inline composer has content
    var icBody = document.getElementById('edp-ic-body');
    var composer = document.getElementById('edp-inline-composer');
    if (composer && composer.style.display !== 'none' && icBody && icBody.innerText.trim().length > 0) {
      if (!confirm('Discard this draft?')) return;
    }
    var panel = document.getElementById('email-detail-panel');
    panel.classList.remove('open');
    panel.classList.remove('compose-mode');
    document.querySelector('.edp-top-bar-label').textContent = 'View email';
    if (typeof hideInlineComposer === 'function') hideInlineComposer();
    edpSharePopoverOpen = false;
    document.getElementById('edp-share-popover').style.display = 'none';
  }

  // Legacy stubs (kept for backwards compatibility)
  function openReply() { if (typeof openInlineComposer === 'function') openInlineComposer('reply'); }
  function clearReply() {}
  function discardDraft() { closeEmailPanel(); }

  // ── Share popover (inside email detail panel) ──
  var edpSharePopoverOpen = false;
  function toggleSharePopover(e) {
    e.stopPropagation();
    edpSharePopoverOpen = !edpSharePopoverOpen;
    document.getElementById('edp-share-popover').style.display = edpSharePopoverOpen ? 'block' : 'none';
    if (edpSharePopoverOpen) {
      // Set title to current email subject
      var d = emailData[currentEmailIdx];
      document.getElementById('edp-share-title').textContent = '"' + d.subject + '"';
    }
  }
  var shareAccessHasAccess = true;
  function toggleShareAccessLevel() {
    shareAccessHasAccess = !shareAccessHasAccess;
    document.getElementById('edp-share-access-label').textContent = shareAccessHasAccess ? 'Access' : 'No Access';
    document.getElementById('edp-share-description').textContent = shareAccessHasAccess
      ? 'Bodies and attachments of this email are visible to all workspace members.'
      : 'This email body and attachments are private. Only users with explicit access can view them.';
  }

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.add-btn-wrap')) {
      document.getElementById('add-activity-menu').classList.remove('open');
    }
    if (!e.target.closest('.email-dots-wrap')) {
      if (emailDotsMenuOpen) {
        emailDotsMenuOpen = false;
        document.getElementById('email-dots-menu').style.display = 'none';
      }
      if (emailAccessPopoverOpen) {
        emailAccessPopoverOpen = false;
        document.getElementById('email-access-popover').style.display = 'none';
      }
    }
    // Close share popover when clicking outside subject bar
    if (edpSharePopoverOpen && !e.target.closest('.edp-subject-bar')) {
      edpSharePopoverOpen = false;
      document.getElementById('edp-share-popover').style.display = 'none';
    }
    // Close email detail panel when clicking outside it
    // Skip if this is the same click that just opened the panel
    if (emailPanelJustOpened) {
      emailPanelJustOpened = false;
    } else {
      var panel = document.getElementById('email-detail-panel');
      if (panel && panel.classList.contains('open') && !e.target.closest('#email-detail-panel')) {
        closeEmailPanel();
      }
    }
  });
