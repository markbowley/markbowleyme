---
title: "A simple blog"
description: "I’ve had a secret for a while. A secret blog."
pubDate: 2025-10-04
heroImage: '../../assets/simple-blog.png'
tags: ["side-projects", "thoughts"]
---

I’ve had a secret this summer. Well, a secret blog. 

I don’t tell anyone about it as it’s just me, brain dumping thoughts. I find it useful to write, but not to have to show it. It just feels better if I publish, rather than just writing in a notes app.

It’s just a simple blog technically too. I built my own setup, which pulls in data from a Google Doc to an HTML/JS setup. 

It’s handy being able to just write in Docs. I just tag the title as an H1, and write the date as an H2. The rest is just plain text. New posts are shown immediately - there’s no draft stage too it. 

> It’s handy being able to just write a blog post in Docs.
> 

This is a demo version of my setup. You can see it at [blogdemo.carrd.co](http://blogdemo.carrd.co)

![image](../../assets/simple-blog.png)

This is all done with free tools. Yes I’ve used Carrd but you could easily just use an HTML page and free hosting on Cloudflare. 

> This is all done with free tools.
> 

There are two main limitations. One is that it can’t show formatting like bold or italic, although it can show links. This is because Google adds random CSS classes to inline formatting, so I can’t target them. 

The other is that, as JavaScript inserted content, there are no SEO benefits. It’s just a log or blog for publishing purposes only.

I could build a version with an API but there’s something about the simplicity here that’s appealing. 

If you like the sound of this setup, send me a message. I’m thinking of offering it as a tool.