---
icon: book-blank
---

# Basics

## App Ecosystem

Nova OS works with a very _functionality-centered app ecosystem_, where apps _will be open source and user-editable_. However, apps get to use many permissions that are normally flagged. Apps can directly manage files, control their appearance, manipulate source code, etc. Nova OS Apps works as an injected sandbox, where the loaded code from memory runs directly on an isolated WebView to prevent the system from conflicting with any other apps.

{% hint style="danger" %}
Future NovaOS versions may introduce '_permissions_'. As planned, permissions would mean that your apps would _'not function correctly'_ without the user permission for the function you triggered. Consider adding conditional dynamics (checking if the function returns an undefined value.) to your app when using NovaOS features so that your app continues to be relevant.
{% endhint %}

### Nova OS creators

Nova OS Creators produces the Nova Store, where people can publish their applications for free and public use. The Nova Store hosts these applications, which can be installed on Nova OS.

## Basics of making your apps

Even though Nova OS comes with some basic apps, it might not be enough for all your needs. So, Nova OS creators help creators make applications that will fit perfectly for your needs.

### App Files

A nova OS app file is a file containing the information for an app to run. This main content in the app file is written in HTML and may include the style, link, or script tags. This file can be hosted under the Nova store if the app completes all requirements, and if it is, it will be listed for installation in the Store app.

## Setting Up your application

There's some constraints you have to work along with to make great Nova OS applications. Be aware that,

* The users will be able to view and manipulate the source code in one way or the other.
* The App Store monitors the app for suspicious activity unless specified before installation, if found, the store might remove your app from its database.

<table data-view="cards"><thead><tr><th></th><th data-type="content-ref"></th><th></th></tr></thead><tbody><tr><td>Timing your application to gain more control.</td><td><a href="timing.md">timing.md</a></td><td></td></tr><tr><td>Making your app useful to the user by changing along their choices.</td><td><a href="user-choices/">user-choices</a></td><td></td></tr><tr><td>Let the app manage parts of itself.</td><td><a href="managing-self/">managing-self</a></td><td></td></tr><tr><td>Letting your app interact with the NovaOS filesystem</td><td><a href="file-system/">file-system</a></td><td></td></tr></tbody></table>

### Nova.js

To manage Nova files, and memory or access default Nova Navigator functions, you can include the Nova.js library. If you are in NovaOS2, you can achieve this by adding the following code to your app source code.

```html
<script src="nova.js" defer></script>
```

{% hint style="info" %}
We do not recommend using Nova.js, as it will have changes soon.
{% endhint %}

### Usage Limits

Misuse of these functions can lead to memory issues, higher lag / increased load, or other issues that might hurt your device. The OS may stop the execution of your app if it seems to overuse these functions. Some of these functions may not be available on all versions, you can inquire about changes in functions via our discord server by joining via [this link](https://discord.gg/NhC8N2Mxta).

### Submitting Apps

When you [submit an app to Nova Store](../../how-to/publish-to-nova-store.md), we modify its source code for Nova OS to enhance compatibility and screen for malware, ensuring increased user safety.

## Future

As of today, Nova supports app installation via the store listing and by local sources like file uploading or file generators like the text app.

If you are using NovaOS and enjoying it, and if you want to support NovaOS, Joining our [Patreon membership](https://www.patreon.com/adthoughtsglobal/membership), starting from a dollar, helps you get instant access to interesting new applications and lets you support NovaOS.
