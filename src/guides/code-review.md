---
slug: '/code-review'
date: '2022-12-18'
title: 'Code review guide'
---

# Goals

The goal of this guide is a) to help you see the benefits of good code review practices and b) to help you improve your own code review practices and those of your team. This guide does not describe the _only_ way to do code review, or the "right" way to do code review. Instead, this guide describes how I do code review. I think that it is the best way, because in my experience it has been best for me and my teams. However, it's possible that some of the things laid out below will not work for you or your team, and that's fine. Every suggestion below should stand on its own, so feel free to pick and choose and implement those practices that work for you and your team and ignore the rest, or put them aside and revisit them later.

# Why is code review so important to me?

I firmly believe that code review has the highest bang-to-buck ratio (high bang, low buck) of just about any development practice out there. When done well, it takes a relatively low amount of time and effort compared to other development practices. Depending on the size of the changeset, reviewing the changes should take much less time than it took to plan, code, write tests for, or QA the changes. Also, because code review happens (ideally) soon after the code is written and because the scope of the changes under review is (ideally) limited, it should be easier for the reviewer to understand and for the author to explain than it would be at any other point in time.

I think you will see the following benefits from a good code review practice:

-   Code reviewers and reviewees learning and growing as engineers by closely studying a limited subset of a codebase, and by giving and receiving targeted, constructive feedback.
-   Higher quality code because a second or third set of eyes helps us catch things that we missed, edge cases (or even happy paths) that we hadn't considered, or alternative solutions we hadn't thought of (not to mention helps teams to share tribal knowledge like "if you use Service A here, you might want to strip parentheses from the usernames because over in this other part of the code we are going to use Service D to plug those into URLs and Service Y which we use for routing will treat anything in parenthesis as optional and you might have some undesired side-effects like infinite re-render loops in the frontend and the requests that those re-renderings fire off will take down the production database if left to sit for more than a few seconds" - which is a totally hypothetical example).
-   More eyes often means fewer bugs. Just as it helps to [talk to a rubber duck](https://rubberduckdebugging.com/) or another human when you are stuck on something, so too does it help to have a rubber duck or another human look at your code before sending it out into the wild.

## For reviewers

## For reviewees

## How many reviewers?

## Use screenshots of _everything_

## Review your own pull request **_first_**

## What should I focus on in a code review?

### Assume that all regular expressions are wrong

### Know your audience

### It's your responsibility to point out breaking changes

### Leave everything you possibly can to automated tools

## Use the tools the UI provides to you:

### Viewed files

### Accept/reject

### Number of required reviews

### Multiline comments

### PR templates

### Individual comments vs. the whole thing at once

### ...But know the limitations of the tools

Take things offline when things get too heated, too complicated, or you keep getting your wires crossed. Then go back and summarize the offline discussion for posterity. https://jamesgralian.com/sida/

### ...And don't let the UI work against you

Make sure there you don't miss files that are automatically collapsed by the UI

## Read the tests

Here are some things to consider:

-   Are there any tests that are poorly named?
-   Are there any tests where the assertion doesn't match what the name claims to be testing?
-   Are there test cases that are missing based on the functionality introduced by the MR?

## Reduce noise through tooling

### Snapshots

### Package locks

How do you actually reduce this noise?

## Check your work

## Show your work

## Be humble

## Set expectations

Make sure your team knows when you expect a comment to be addressed, and when something is optional, mearly a suggestion or you thinking out loud.

## If something is cool, clever, our taught you something: say it!

## Run the code yourself

## Give the reviewer a way to run the code themselves

## If you see something that you don't think will work or find problematic, try to suggest a solution

## Let's make a card for it (not a todo comment)

## Keep MRs small

## Prioritize code review (don't let them sit too long)

## Recommendations about how long you should spend reviewing code.

## Lead by example

---
