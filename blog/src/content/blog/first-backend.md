---
title: "Built my first mini backend "
description: "I had become good at leveraging local storage."
pubDate: 2026-03-17
tags: ["Thoughts", "AI"]
---


I'm not a developer, so I've always been a no-backend person. 

I've become good at leveraging local storage, query strings, single HTML files as far as they can go. 

Ship fast, keep it simple, don't touch a server if you can help it.

[Soources](https://soources.com/?s=c9yrmq) started exactly like that. Your grid of RSS feeds encoded into a URL query string. Share it, load it, done. No database, no accounts, no infrastructure. Then the URLs got out of hand.

A grid of 8 feeds produced a query string so long it looked broken. Not something you'd confidently paste into a chat or post on X. The sharing mechanic (the whole point of the product) felt fragile.

So I needed short URLs. Which meant I needed somewhere to store them.

For someone who's avoided backends for years, this felt like crossing a line. But it turned out to be much less scary than I expected.
I'm already on Netlify, so I used two things I already had access to: Netlify Functions and Netlify Blobs. Functions are serverless: no server to manage, they just run when called. Blobs is a simple key-value store. No database schema, no SQL, just store a thing and retrieve a thing.

The whole mechanic is four steps:
1. When you share a grid, the client POSTs the long URL to a Netlify Function
2. The function generates a 6-character random ID, stores id → longURL in Blobs, and returns the ID
3. You get a short URL like [soources.com/?s=c9yrmq](https://soources.com/?s=c9yrmq)
4. When someone opens that URL, another function fetches the long URL from Blobs and hands it to the client to parse

That's it. No database. No authentication. No DevOps. Maybe 60 lines of code across two files.

The thing I didn't expect: having a backend touchpoint means I can track how many times each grid is shared. 

Sometimes the thing you've been avoiding is simpler than you thought. This was one of those times.