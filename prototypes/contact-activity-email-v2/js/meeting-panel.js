  function openMeetingPanel(idx) {
    var d = meetingData[idx];

    // Title + top-bar meta
    document.getElementById('mdp-title').textContent = d.title;
    document.getElementById('mdp-date').textContent = d.date;
    document.getElementById('mdp-duration').textContent = d.duration;

    // Video player
    var videoWrap = document.getElementById('mdp-video-wrap');
    videoWrap.style.display = d.hasRecording ? '' : 'none';

    // Owner row
    document.getElementById('mdp-owner-row').innerHTML =
      '<div class="meetings-user-avatar" style="width:24px;height:24px;background-image:url(\'' + d.owner.img + '\');"></div>'
      + '<span class="mdp-meta-owner-name">' + d.owner.name + ' (Me)</span>';

    // Invitees stack
    var invHtml = d.invitees.map(function(inv) {
      return '<div class="meetings-user-avatar" style="width:24px;height:24px;background-image:url(\'' + inv.img + '\');" title="' + inv.name + '"></div>';
    }).join('');
    document.getElementById('mdp-invitees-stack').innerHTML = invHtml;

    // Quick Recap
    document.getElementById('mdp-recap').textContent = d.recap || '';

    // Chapters
    var chapHtml = '';
    if (d.chapters && d.chapters.length) {
      d.chapters.forEach(function(ch, i) {
        var hasContent = !!ch.content;
        chapHtml += '<div class="mdp-chapter">'
          + '<div class="mdp-chapter-header" onclick="toggleMdpChapter(this)">'
          + '<svg class="mdp-chapter-chevron' + (i === 0 && hasContent ? ' open' : '') + '" width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.654 11.498L7.12 4.889C6.957 4.726 6.96 4.456 7.128 4.29L8.297 3.128C8.465 2.961 8.738 2.957 8.903 3.12L16.882 11.194C16.968 11.278 17.007 11.392 16.999 11.502C17.003 11.616 16.964 11.726 16.882 11.81L8.903 19.88C8.738 20.043 8.465 20.039 8.297 19.872L7.128 18.711C6.96 18.544 6.957 18.274 7.12 18.111L13.654 11.498Z" fill="currentColor"/></svg>'
          + '<span class="mdp-chapter-title">' + ch.title + '</span>'
          + '</div>';
        if (hasContent) {
          chapHtml += '<div class="mdp-chapter-content' + (i === 0 ? ' open' : '') + '">' + ch.content + '</div>';
        }
        chapHtml += '</div>';
      });
    }
    document.getElementById('mdp-chapters').innerHTML = chapHtml;
    document.getElementById('mdp-chapters-section').style.display = (d.chapters && d.chapters.length) ? '' : 'none';

    // Next Steps
    var stepsHtml = '';
    if (d.nextSteps && d.nextSteps.length) {
      d.nextSteps.forEach(function(step) {
        stepsHtml += '<div class="mdp-next-step">'
          + '<span class="mdp-next-step-arrow">→</span>'
          + '<span>' + step + '</span>'
          + '</div>';
      });
    }
    document.getElementById('mdp-nextsteps').innerHTML = stepsHtml;
    document.getElementById('mdp-nextsteps-section').style.display = (d.nextSteps && d.nextSteps.length) ? '' : 'none';

    // Transcript
    var txHtml = '';
    if (d.transcript && d.transcript.length) {
      d.transcript.forEach(function(block) {
        txHtml += '<div class="mdp-transcript-block">'
          + '<div class="mdp-transcript-meta">'
          + '<span class="mdp-transcript-speaker">' + block.speaker + '</span>'
          + '<span class="mdp-transcript-time">' + block.time + '</span>'
          + '</div>'
          + '<p class="mdp-transcript-text">' + block.text + '</p>'
          + '</div>';
      });
    } else {
      txHtml = '<div class="mdp-no-transcript">No transcript available for this meeting.</div>';
    }
    document.getElementById('mdp-transcript').innerHTML = txHtml;

    // Reset to summary tab
    switchMdpTab('summary', document.querySelector('.mdp-subnav-item'));

    // Close dots menu
    document.getElementById('mdp-top-dropdown').classList.remove('open');

    document.getElementById('meeting-detail-panel').classList.add('open');
  }

  function closeMeetingPanel() {
    document.getElementById('meeting-detail-panel').classList.remove('open');
    document.getElementById('mdp-top-dropdown').classList.remove('open');
  }

  function switchMdpTab(tab, el) {
    document.querySelectorAll('.mdp-subnav-item').forEach(function(t) { t.classList.remove('active'); });
    if (el) el.classList.add('active');
    var summaryPanel = document.getElementById('mdp-tab-summary');
    var transcriptPanel = document.getElementById('mdp-tab-transcript');
    if (tab === 'summary') {
      summaryPanel.hidden = false;
      transcriptPanel.hidden = true;
    } else {
      summaryPanel.hidden = true;
      transcriptPanel.hidden = false;
    }
  }

  function toggleMdpChapter(headerEl) {
    var content = headerEl.nextElementSibling;
    var chevron = headerEl.querySelector('.mdp-chapter-chevron');
    if (!content) return;
    var isOpen = content.classList.contains('open');
    content.classList.toggle('open', !isOpen);
    chevron.classList.toggle('open', !isOpen);
  }

  function toggleMdpMenu(e) {
    e.stopPropagation();
    document.getElementById('mdp-top-dropdown').classList.toggle('open');
  }

  document.addEventListener('click', function(e) {
    var dd = document.getElementById('mdp-top-dropdown');
    if (dd && !dd.closest('.mdp-dots-wrap').contains(e.target)) {
      dd.classList.remove('open');
    }
  });

  function selectSharingOption(el) {
    var section = el.closest('.sharing-section');
    section.querySelectorAll('.sharing-option').forEach(function(o) { o.classList.remove('selected'); });
    el.classList.add('selected');
  }
