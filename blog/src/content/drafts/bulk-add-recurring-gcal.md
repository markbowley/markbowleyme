---
title: "How to bulk-add recurring events to GCal"
description: "**How to bulk-add recurring events to GCal**"
draft: true
pubDate: "February 02, 2026"
---

**How to bulk-add recurring events to GCal**

Google Calendar is free and handy, but have you tried to add lots of recurring events.

Birthdays. Anniversaries. Annual reminders. Team milestones.

Individually? Fine.

At scale? Absolute nonsense.

There’s no clean way to bulk-import recurring events. So I built a small tool that fixes that gap: spreadsheet → Google Calendar, including recurrence.

No scripts. No APIs. No Zapier glue.

The basic idea is simple. You manage events in a spreadsheet (where bulk editing actually works), export it as a CSV, convert it to a proper calendar file, add recurrence in one go, then import once into Google Calendar.

Think of it as treating Google Calendar like a rendering layer, not a database.

Here’s a concrete example using birthdays.

First, put events in a Google Sheet.

You can copy this example sheet:

[https://docs.google.com/spreadsheets/d/1x1hhoOsFasI0fUG4in_TS7lY2UUngb5xp7Zr_DVxLKY/edit?usp=sharing](https://docs.google.com/spreadsheets/d/1x1hhoOsFasI0fUG4in_TS7lY2UUngb5xp7Zr_DVxLKY/edit?usp=sharing)

Each row is one event. Nothing clever.

Next, export the sheet as a CSV.

In Google Sheets: File → Download → Comma-separated values (.csv).

Then convert the CSV to an ICS file.

Open my tool and use the first tab to upload the CSV, convert it to an `.ics` calendar file, and download it. At this point the file works, but the events don’t repeat yet.

Now add yearly recurrence to everything. This is the bit Google Calendar makes weirdly hard.

In the second tab of the tool, upload the ICS file and add a new property to all entries. Use `RRULE` as the property name and `FREQ=YEARLY` as the value (the orange box). Download the updated ICS file.

Finally, import it into Google Calendar.

Go to Settings → Import, choose the updated ICS file, select your Birthdays (or any) calendar, and import.

Done. Once. Forever recurring.

This exists because Google Calendar is great at display and terrible at bulk operations, while spreadsheets are ugly but incredibly good at structured data. This workflow lets each tool do what it’s good at.

You edit events where bulk edits are cheap, import once, and let Google handle reminders. No ongoing sync. No brittle automations.

This is useful if you think in systems, already live in spreadsheets, get annoyed when “simple” tools don’t scale, and prefer one-off utilities over SaaS subscriptions. If you’re happy clicking the same form 200 times, skip it.

If you want a tighter or more opinionated version, screenshots, or a rewrite aimed at Indie Hackers or Hacker News, say the word.