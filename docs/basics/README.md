---
icon: book-blank
---

# Basics

## App Ecosystem

Nova OS works with a very _functionality centered app ecosystem_, where apps _will be open source and user editable_. However, apps get to use many permissions that are normally flagged. Apps have the ability to directly manage files, control its appearance, manipulate its own source code etc. Nova OS Apps works as an injected sandbox, where the loaded code from the memory runs directly on an isolated WebView to prevent the system from conflicting with any of the other apps.

### Nova OS creators

Nova OS Creators produces the Nova Store, where people can publish their applications for free and for public use. These Applications will be hosted by the Nova Store and these applications can be installed on Nova OS.

## Basics of making your own apps

Even though Nova OS comes with Some basic apps, it, for sure, will not be enough for all your needs. So that, Nova OS creators helps creators make applications that will fit right onto your needs.

### App Files

A nova OS app file is a file containing the information for an app to run. This main content in the app file is written in HTML and may contain the style, link or the script tag. This file can be hosted under the nova store if the app completes all necessary requirements, and if it is, it will be listed for install at the Store app.

## Setting Up your application

There's some constraints you have to work along with to make great Nova OS applications. Be aware that,

* The users will be able to view and manipulate the source code in one way or the other.
* The App store monitors the app for suspicious activity unless specified before installation, if found, the store might remove your app from its database.

<table data-view="cards"><thead><tr><th></th><th data-type="content-ref"></th><th></th></tr></thead><tbody><tr><td>Timing your application to gain more control.</td><td><a href="timing.md">timing.md</a></td><td></td></tr><tr><td>Making your app useful to the user by changing along their choices.</td><td><a href="user-choices/">user-choices</a></td><td></td></tr><tr><td>Let the app manage parts of itself.</td><td><a href="managing-self/">managing-self</a></td><td></td></tr><tr><td>Letting your app interact with the NovaOS filesystem</td><td><a href="file-system/">file-system</a></td><td></td></tr></tbody></table>

### Nova.js

In order to manage Nova files, memory or access default Nova Navigator functions, you can include the Nova.js library. If you are in NovaOS2, you can do this by adding the following code to your app source code.

```html
<script src="nova.js" defer></script>
```

{% hint style="info" %}
Meanwhile there are other ways to access nova navigator functions, Nova.js is simple, efficient and powerful and can keep up with the newest NovaOS changes.
{% endhint %}

### Usage Limits

Overuse of these functions can lead to memory issues, higher lag / increased load or other issues that might hurt your device. The OS may stop the execution your app if it seems to overuse these functions. Some of these functions may not be available on all versions, you can inquire about changes in functions via our discord server by joining via [this link](https://discord.gg/NhC8N2Mxta).

### Submitting Apps

When you submit an app towards Nova Store, we never change its source code, instead, we create a new file, where it is adjusted for Nova OS for increased compatibility and screening for malwares - to keep the users safer.

#### How can I submit apps?

Consider joining our discord to discuss about adding your app host to the database.

## Future

As of 25 Feb 2024, Nova supports app installation via the store listing and by local sources like file uploading or file generators like the text app.

If you are using NovaOS and enjoying it, and if you want to support NovaOS, [Patreon membership](https://www.patreon.com/adthoughtsglobal/membership).