---
title: "Opting out of complexity"
description: "I've always been drawn to making tools that do a lot with very little"
pubDate: 2026-06-20
heroImage: '../../assets/more.jpg'
tags: ["thoughts", "products"]
---

I’ve always been drawn to [making tools](https://minitools.carrd.co/) that do a lot with very little.

Maybe it’s [my graphic design background](https://www.markbowley.com/). The priority for the last 30 years has been to do exactly that, but visually. Complexity was what I was working against.

I consider this my unfair advantage now I’m building products.

Always trying not to use complexity unless I really have to.

One recent quick build clearly follows this pattern.

[Sheet Gallery](https://sheetgallery.netlify.app/) is a super simple, single HTML file that turns a Google Sheet into a live, beautiful, image gallery.

That’s it. No backend, no database, no hosting costs.

You paste some image URLs into a Sheet, drop the Sheet ID into the HTML file, host it [somewhere for free](https://www.netlify.com/), and you’ve got a gallery.

I built it because… I wanted it. A simple way to show curated collections of images to people, like mood boards, photo shoots, logo collections. But without the usual friction.

No uploads, no login walls. No faff. Just a clean page full of images, where you can manage the content easily.

The interesting part isn’t the gallery itself. It’s where the images live. Well, they don’t.

You’re not hosting anything than an HTML file.

The images can be from literally anywhere. Any random corner of the internet, so long as it’s a publicly accessible link.

You’re just curating URLs. The gallery is just a lens.

I’ve made something similar before with [Dropbox](https://boxgallery.pages.dev/). But that meant all the images had to live in one place. This felt freer. The web is the storage.

You’re not collecting images, you’re collecting references

Managing it afterwards is where it really clicks. Want to add something? Drop a URL. Remove something? Delete the row. Reorder? Drag it.

The Sheet is the CMS. There’s no interface to learn because you already know it.

So it’s a product, that’s not a product.

It’s not trying to be. I built it for myself, mostly.

Even if I’m building for myself, I still I want the interface out of the way.