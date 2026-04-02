  // ── Activity tab note composer ──
  function showActivityNoteComposer() {
    closeAllDropdowns();
    var wrap = document.getElementById('activity-note-composer-wrap');
    wrap.innerHTML = getNoteComposerHTML('activity-add');
    wrap.style.display = 'block';
    wrap.querySelector('.note-composer-body').focus();
  }

  // ── Access level toggle ──
  var hasAccess = true;
  function toggleAccessLevel() {
    hasAccess = !hasAccess;
    document.getElementById('access-label').textContent = hasAccess ? 'Access' : 'No access';
    document.getElementById('access-description').textContent = hasAccess
      ? 'Bodies and attachments of your emails with this record are visible to all workspace members.'
      : 'Email bodies and attachments are private. Only users with explicit access can view them.';
  }

  // ── Note menu (... button) ──
  function toggleNoteMenu(btn) {
    var dropdown = btn.nextElementSibling;
    var isOpen = dropdown.classList.contains('open');
    closeAllNoteMenus();
    if (!isOpen) dropdown.classList.add('open');
    event.stopPropagation();
  }
  function closeAllNoteMenus() {
    document.querySelectorAll('.note-dropdown').forEach(function(d) { d.classList.remove('open'); });
  }
  document.addEventListener('click', closeAllNoteMenus);

  // ── Add note composer ──
  function showNoteComposer() {
    document.getElementById('note-add-toggle').style.display = 'none';
    var composerSlot = document.getElementById('note-composer');
    composerSlot.innerHTML = getNoteComposerHTML('add');
    composerSlot.style.display = 'block';
    composerSlot.querySelector('.note-composer-body').focus();
  }

  function getNoteComposerHTML(mode) {
    return '<div class="note-edit-area">'
      + '<div class="note-composer-toolbar">'
      + '<button class="note-composer-toolbar-btn" title="Bold"><strong>B</strong></button>'
      + '<button class="note-composer-toolbar-btn" title="Italic"><em>i</em></button>'
      + '<button class="note-composer-toolbar-btn" title="Underline"><u>U</u></button>'
      + '<button class="note-composer-toolbar-btn" title="Strikethrough"><s>S</s></button>'
      + '<button class="note-composer-toolbar-btn" title="Font size" style="font-size:12px;">A<sub style="font-size:9px;">i</sub></button>'
      + '<div class="note-composer-toolbar-sep"></div>'
      + '<button class="note-composer-toolbar-btn" title="Link"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></button>'
      + '<button class="note-composer-toolbar-btn" title="Ordered list"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4M4 10H6M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg></button>'
      + '<button class="note-composer-toolbar-btn" title="Bullet list"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="4" cy="6" r="1" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1" fill="currentColor" stroke="none"/></svg></button>'
      + '<div class="note-composer-toolbar-sep"></div>'
      + '<button class="note-composer-toolbar-btn" title="Image"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></button>'
      + '<button class="note-composer-toolbar-btn" title="Attachment"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg></button>'
      + '<button class="note-composer-toolbar-btn" title="More"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></button>'
      + '</div>'
      + '<div class="note-composer-body" contenteditable="true" data-placeholder="Write a note..."></div>'
      + '<div class="note-composer-actions">'
      + '<button class="btn btn-default btn-smd" onclick="cancelNoteEdit(this)" data-mode="' + mode + '">Cancel</button>'
      + '<button class="btn btn-primary btn-smd">Save Changes</button>'
      + '</div>'
      + '</div>';
  }

  function cancelNoteEdit(btn) {
    var mode = btn.getAttribute('data-mode');
    if (mode === 'add') {
      document.getElementById('note-composer').style.display = 'none';
      document.getElementById('note-composer').innerHTML = '';
      document.getElementById('note-add-toggle').style.display = 'flex';
    } else if (mode === 'activity-add') {
      var wrap = document.getElementById('activity-note-composer-wrap');
      wrap.style.display = 'none';
      wrap.innerHTML = '';
    } else {
      var editArea = btn.closest('.note-edit-area');
      var noteItem = btn.closest('.note-item, .activity-item');
      var noteBody = noteItem.querySelector('.note-item-body, .activity-item-body');
      editArea.remove();
      var noteText = noteBody.querySelector('.note-text, .activity-text');
      if (noteText) noteText.style.display = '';
    }
  }

  // ── Edit a note ──
  function editNote(link) {
    closeAllNoteMenus();
    var noteItem = link.closest('.note-item, .activity-item');
    var noteText = noteItem.querySelector('.note-text, .activity-text');
    var originalText = noteText ? noteText.textContent.trim() : '';
    if (noteText) noteText.style.display = 'none';
    var noteBody = noteItem.querySelector('.note-item-body, .activity-item-body');
    var wrapper = document.createElement('div');
    wrapper.innerHTML = getNoteComposerHTML('edit');
    var editArea = wrapper.firstChild;
    editArea.querySelector('.note-composer-body').textContent = originalText;
    noteBody.appendChild(editArea);
    noteBody.querySelector('.note-composer-body').focus();
  }

  // ── Delete a note ──
  var _noteItemToDelete = null;
  function deleteNote(link) {
    closeAllNoteMenus();
    _noteItemToDelete = link.closest('.note-item, .activity-item');
    document.getElementById('delete-note-modal').classList.remove('hidden');
  }
  function confirmDeleteNote() {
    if (_noteItemToDelete) {
      _noteItemToDelete.remove();
      _noteItemToDelete = null;
    }
    closeDeleteModal();
  }
  function closeDeleteModal() {
    document.getElementById('delete-note-modal').classList.add('hidden');
  }
