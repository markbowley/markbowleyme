---
title: "A small problem needs a small solution"
description: "The cheapest, simplest CMS is a spreadsheet."
pubDate: 2026-07-20
heroImage: '../../assets/blog-placeholder-3.jpg'
tags: ["thoughts", "building-online"]
---

There are dozens of ways to build a business website, but every now and then we all need to build a really small site. One where the non-technical user just needs a handful of pages – Home About, Services, maybe a case study or two.

It needs to be done efficiently, and without lumbering them with monthly bills that don’t match the purpose.

With vibe coding or a web builder platform you can just whip up a site in no time. But here’s the constraint that complicates it: there’ll be one or two sections they want to update themselves, like Blog, Press or Case Studies.

They don’t need much else. Nothing dynamic, no user accounts, no complicated data. Just some static pages and two lists that need a new row every few weeks.

The obvious answer is WordPress. Give them a login, a bunch of plugins, host it, done. Except now you’re maintaining a CMS forever – updates, plugins breaking, a whole admin panel standing behind two lists that could be a table. That’s bloat for a problem this small.

The other obvious answer is a hosted site builder. Except now they’re paying a monthly fee to host a handful of static pages, and you’re building inside someone else’s constraints instead of just building a website.

So when this recently came up I built one in plain HTML, CSS and JS. No framework, no CMS, no database. And for the two sections that need updating… I set it to pull the list content from a Google Sheet instead.

> They already know how to edit a spreadsheet.

The user just updates a Sheet. They already know how to edit a spreadsheet. So instead of teaching them a new interface, I published the Sheet to the web as CSV and pull it into the page on load. New row in the sheet, new item on the site. No login for me to manage, no admin panel to break. No pushing to Git.

It’s not clever, exactly. It’s the smallest possible CMS. It just happens to already exist.

There are always catches of course, and this only works if you’re aware and upfront about them.

The free Sheets API has limits. If every visitor triggers a fresh fetch, a decent burst of traffic could run into them. But you can get the page to cache the response in the browser – load once, reuse it, don’t hammer the API on every view.

Images need a URL. The Sheet can hold text and links, not files. So any image for a blog post, press mention, or a publication cover has to live somewhere public – a Dropbox link, or hosted properly. Not the client’s problem to solve, but it’s a constraint they need to know about going in.

Google can’t see the list content. Content pulled in with JavaScript after the page loads doesn’t get indexed the way content baked into the static pages does. If those lists needed to rank in search, this would be the wrong approach.

None of that matters for my client this time, and that’s the actual point. Low-traffic site. SEO was never the goal. Referrals, social and word of mouth do the distribution, not Google.

Hosting’s free too. It’s plain HTML, so [Netlify](https://www.netlify.com/) or Cloudflare Pages does the job with nothing to pay for.

I don’t think this is a technique so much as a fit. It won’t work for every small site, and it’ll be the wrong call the moment someone needs three content types instead of two, or needs that content findable on Google. But for a client who just needs to add a line to a list now and then?

A spreadsheet they already understand beats a CMS they’ll never fully learn. This is the lean way.