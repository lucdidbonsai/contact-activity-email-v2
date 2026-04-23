  var emailData = [
    {
      subject: 'Brand refresh timeline',
      threads: [
        {
          senderName: 'Michael Fawler',
          senderAvatar: 'https://ui-avatars.com/api/?name=MF&size=250&background=4c525a&color=ffffff&format=png',
          to: 'tom.bradley@catalystconsulting.io',
          date: 'Jan 19, 10:22 AM',
          snip: 'Tom, just wanted to check in on the mood board timeline before we sync Thursday...',
          body: '<p>Tom,</p><p>Just wanted to check in on the mood board timeline before we sync Thursday. Are we still planning to present all three directions or have you narrowed it down? Also — should we include the secondary colour palette in this first round or keep it to the primary system?</p><p>Michael</p>'
        },
        {
          senderName: 'Tom Bradley',
          senderAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          to: 'Michael Fawler, jessica.moore@techstart.co',
          date: 'Jan 21, 2:07 PM',
          snip: 'Michael, all three directions are ready. I\'d lean towards presenting all for now...',
          body: '<p>Michael,</p><p>All three directions are ready. I\'d lean towards presenting all for now — better to have options on the table than to pre-filter and miss something the client connects with.</p><p>Looping in Jess on the studio question — she\'s coordinating with the photography team this week.</p><p>Tom</p>'
        },
        {
          senderName: 'Tom Bradley',
          senderAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          to: 'Michael Fawler, jessica.moore@techstart.co',
          date: 'Jan 22, 3:15 PM',
          snip: 'I\'ve pushed the mood board review to Thursday to keep us on track...',
          body: '<p>Hi both,</p><p>I\'ve pushed the mood board review to Thursday to keep us on track for the Feb 14 deliverable. One question: do you want to include the secondary colour palette in the first round, or should we keep it focused on the primary system for now?</p><p>Also flagging that the photography team needs a final answer on the location by end of week — Jess, can you confirm if we\'re using the Canary Wharf studio or moving to the East London space?</p><p>Thanks,<br>Tom</p>',
          recipients: {
            from: { name: 'Tom Bradley', email: 'tom.bradley@catalystconsulting.io' },
            to: [{ name: 'Michael Fawler', email: 'michael.fawler@techstart.co' }],
            cc: [{ name: 'Jessica Moore', email: 'jessica.moore@techstart.co' }]
          }
        }
      ],
      comments: [
        { author: 'Tom Bradley', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'Should we loop in the photography team on this thread or create a separate one for the studio booking?', time: 'Jan 22, 3:30 PM' },
        { author: 'You', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'Good call — let\'s keep them separate. I\'ll create a dedicated thread for the studio booking so it doesn\'t get buried here.', time: 'Jan 22, 4:01 PM' }
      ]
    },
    {
      subject: 'Q1 Retainer hours update',
      threads: [
        {
          senderName: 'Michael Fawler',
          senderAvatar: 'https://ui-avatars.com/api/?name=MF&size=250&background=4c525a&color=ffffff&format=png',
          to: 'amanda.chen@catalystconsulting.io',
          date: 'Jan 18, 11:15 AM',
          snip: 'Amanda, I wanted to flag that the market positioning analysis is running long...',
          body: '<p>Amanda,</p><p>I wanted to flag that the market positioning analysis is running longer than we originally scoped. Is it possible to get a revised estimate before we continue, or would it be easier to just run slightly over and reconcile at the end of the month?</p><p>Happy to jump on a quick call if that\'s easier.</p><p>Michael</p>'
        },
        {
          senderName: 'Amanda Chen',
          senderAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          to: 'Michael Fawler, billing@techstart.co',
          date: 'Jan 20, 9:31 AM',
          snip: 'Quick heads up — we\'re at 34 of 40 hours for the month...',
          body: '<p>Michael,</p><p>Quick heads up — we\'re at 34 of 40 hours for the month. The market positioning analysis took longer than scoped. Want us to pause and check in, or are you happy for us to go slightly over to complete the deliverable?</p><p>If you\'d prefer we hold, I can scope a small add-on and send it over for sign-off before we continue. Let me know how you\'d like to handle it.</p><p>Best,<br>Amanda</p>',
          recipients: {
            from: { name: 'Amanda Chen', email: 'amanda.chen@catalystconsulting.io' },
            to: [{ name: 'Michael Fawler', email: 'michael.fawler@techstart.co' }],
            cc: [{ name: '', email: 'billing@techstart.co' }]
          }
        }
      ],
      comments: []
    },
    {
      subject: 'Sales deck feedback',
      threads: [
        {
          senderName: 'Tom Bradley',
          senderAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          to: 'michael.fawler@techstart.co',
          date: 'Jan 14, 9:42 AM',
          snip: 'Michael, sharing the first cut of the updated sales deck. Let me know your thoughts...',
          body: '<p>Michael,</p><p>Sharing the first cut of the updated sales deck. Let me know your thoughts on the narrative — I\'ve restructured the problem framing on slides 3–5 and added a new case study on slide 11. Happy to iterate further based on your feedback.</p><p>Tom</p>'
        },
        {
          senderName: 'Michael Fawler',
          senderAvatar: 'https://ui-avatars.com/api/?name=MF&size=250&background=4c525a&color=ffffff&format=png',
          to: 'Tom Bradley',
          date: 'Jan 16, 3:55 PM',
          snip: 'Tom, strong start — the restructured narrative lands much better. A few notes...',
          body: '<p>Tom,</p><p>Strong start — the restructured narrative lands much better. A few notes: I\'d tighten the opening hook on slide 2, and slide 9 feels a bit disconnected from the rest of the story. Otherwise looking good. I\'ve looped in Priya for a second set of eyes.</p><p>Michael</p>'
        },
        {
          senderName: 'Tom Bradley',
          senderAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          to: 'Michael Fawler, priya.sharma@techstart.co',
          date: 'Jan 17, 11:28 AM',
          snip: 'Updated deck attached — I\'ve tightened slide 2 and removed slide 9...',
          body: '<p>Michael, Priya,</p><p>Updated deck attached — I\'ve tightened slide 2 and removed slide 9 (it was trying to do too much). Priya, happy to walk you through the full flow if it helps before you give feedback.</p><p>Tom</p>'
        },
        {
          senderName: 'Michael Fawler',
          senderAvatar: 'https://ui-avatars.com/api/?name=MF&size=250&background=4c525a&color=ffffff&format=png',
          to: 'Tom Bradley, priya.sharma@techstart.co',
          date: 'Jan 18, 12:03 PM',
          snip: 'The updated deck looks great. Priya had one note — can we swap the customer logos on slide 8?',
          body: '<p>Tom,</p><p>The updated deck looks great. Priya had one note — can we swap the customer logos on slide 8? Two of them churned last quarter and it\'ll be awkward if prospects recognise them. Otherwise the narrative flow is exactly right and the case study on slide 11 lands really well.</p><p>Happy to jump on a quick call tomorrow if it\'s easier to run through the remaining tweaks together.</p><p>Michael</p>',
          recipients: {
            from: { name: 'Michael Fawler', email: 'michael.fawler@techstart.co' },
            to: [{ name: 'Tom Bradley', email: 'tom.bradley@catalystconsulting.io' }],
            cc: [{ name: 'Priya Sharma', email: 'priya.sharma@techstart.co' }]
          }
        }
      ],
      comments: [
        { author: 'Priya Sharma', avatar: 'https://randomuser.me/api/portraits/women/22.jpg', text: 'Those two logos are Acme Corp and Dynamo — both churned in October. Michael is right to flag this before it goes to a prospect.', time: 'Jan 18, 12:45 PM' }
      ]
    },
    {
      subject: 'Workshop prep – stakeholder list',
      threads: [
        {
          senderName: 'Michael Fawler',
          senderAvatar: 'https://ui-avatars.com/api/?name=MF&size=250&background=4c525a&color=ffffff&format=png',
          to: 'amanda.chen@catalystconsulting.io',
          date: 'Jan 14, 2:30 PM',
          snip: 'Amanda, quick question on the workshop — do you need the full exec list or just the...',
          body: '<p>Amanda,</p><p>Quick question on the workshop — do you need the full exec list now, or just the confirmed attendees? I\'m still chasing two people and don\'t want to delay your prep if you can work with what we have confirmed so far.</p><p>Michael</p>'
        },
        {
          senderName: 'Amanda Chen',
          senderAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          to: 'Michael Fawler, Tom Bradley',
          date: 'Jan 15, 4:11 PM',
          snip: 'Attached is the pre-read for next week\'s positioning workshop...',
          body: '<p>Michael, Tom,</p><p>Attached is the pre-read for next week\'s positioning workshop. Michael, can you confirm who from the exec team will attend? We\'re designing breakout exercises and need to know if we\'re working with five people or eight.</p><p>Tom — the agenda draft is on slide 3. Let me know if you want to add the competitive landscape section back in; I removed it to keep the day tighter but happy to reinstate it if it\'s useful context for the group.</p><p>See you both next Tuesday.</p><p>Amanda</p>',
          recipients: {
            from: { name: 'Amanda Chen', email: 'amanda.chen@catalystconsulting.io' },
            to: [{ name: 'Michael Fawler', email: 'michael.fawler@techstart.co' }],
            cc: [{ name: 'Tom Bradley', email: 'tom.bradley@catalystconsulting.io' }]
          }
        }
      ],
      comments: []
    },
    {
      subject: 'Case study draft – Northvolt',
      threads: [
        {
          senderName: 'Amanda Chen',
          senderAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
          to: 'michael.fawler@techstart.co, marketing@techstart.co',
          date: 'Jan 10, 2:18 PM',
          snip: 'Michael, sharing the Northvolt case study draft for your review...',
          body: '<p>Michael,</p><p>Sharing the Northvolt case study draft for your review. We\'ve led with the pipeline ROI numbers as they\'re the most compelling proof point. Please let me know if there are any approvals still outstanding on our end before we finalise.</p><p>Amanda</p>'
        },
        {
          senderName: 'Michael Fawler',
          senderAvatar: 'https://ui-avatars.com/api/?name=MF&size=250&background=4c525a&color=ffffff&format=png',
          to: 'amanda.chen@catalystconsulting.io, marketing@techstart.co',
          date: 'Jan 12, 8:55 AM',
          snip: 'Legal flagged one issue — we can\'t disclose the actual revenue numbers in section 3...',
          body: '<p>Amanda,</p><p>Legal flagged one issue — we can\'t disclose the actual revenue numbers in section 3. Can you rework it to use percentages instead? "340% ROI in pipeline" rather than the absolute figures. The rest of the draft reads well and the intro is particularly strong.</p><p>One other thing: marketing would like to add a pull quote from the Northvolt CPO. I\'ll chase them for the approval and forward it over as soon as I have it.</p><p>Thanks,<br>Michael</p>',
          recipients: {
            from: { name: 'Michael Fawler', email: 'michael.fawler@techstart.co' },
            to: [{ name: 'Amanda Chen', email: 'amanda.chen@catalystconsulting.io' }],
            cc: [{ name: '', email: 'marketing@techstart.co' }]
          }
        }
      ],
      comments: []
    },
    {
      subject: 'Brand Retainer Wrapping Up - Shall We Continue?',
      threads: [
        {
          senderName: 'Tom Bradley',
          senderAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          to: 'michael.fawler@techstart.co',
          date: 'Jan 12, 11:40 AM',
          snip: 'Michael, the current brand retainer wraps up at the end of this month...',
          body: '<p>Michael,</p><p>The current brand retainer wraps up at the end of this month. We\'ve loved working on the TechStart rebrand and wanted to check in — would you like to roll into a new retainer for Q2, or is there a specific project scope you\'d prefer to move to?</p><p>Happy to put together a couple of options if it\'s helpful. Let me know what works.</p><p>Tom</p>'
        },
        {
          senderName: 'Michael Fawler',
          senderAvatar: 'https://ui-avatars.com/api/?name=MF&size=250&background=4c525a&color=ffffff&format=png',
          to: 'tom.bradley@catalystconsulting.io',
          date: 'Jan 13, 9:15 AM',
          snip: 'Tom, great timing — I was going to reach out this week...',
          body: '<p>Tom,</p><p>Great timing on this — I was going to reach out this week. Let\'s definitely continue. A rolling retainer makes more sense than project-by-project at this stage. Can you send over what a Q2 continuation would look like scope-wise? We may want to shift some of the hours toward the investor materials we discussed.</p><p>Michael</p>',
          recipients: {
            from: { name: 'Michael Fawler', email: 'michael.fawler@techstart.co' },
            to: [{ name: 'Tom Bradley', email: 'tom.bradley@catalystconsulting.io' }],
            cc: []
          }
        }
      ],
      comments: []
    }
  ];
