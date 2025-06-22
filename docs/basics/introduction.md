# Introduction

Applications in NovaOS are singular HTML files saved with a .app extension. The syntax and functionality are that of native web development, but with certain additions that let the app perform natively with an expanded set of features.

App files can be launched from anywhere and will follow the same method. In NovaOS, the launching of apps is controlled by the NovaOS Kernel, whereas the inter-app communications are controlled by a centralized transaction system, the Nova Transaction Exchange (or NTX).

Applications can function as packagers or installers, which can be done via the JavaScript native fetch API and NTX's file management namespaces. Applications require user permissions to manipulate any directories or items in them.&#x20;

App permissions are also managed by the NTX, which provides numerous API functions that applications can use, operating similarly to Remote Procedure Calls. Here's a list of all namespaces:

* Tools and utility functions: utility
* File management: fileGet, fileSet
* Directory management: dir
* Handler management and trigger app launches: olp
* Settings management: settings
* User management: accounts
* Application management: apps
* System UI management: sysUI
* System management: system
* Specific system functions and sequences: specific
* Run Unsandboxed \[_deprecated_]: unsandboxed&#x20;

The user can turn off any of these namespaces for your application; this will cause ntx actions to return _undefined_. Some namespaces, if enabled, can let the application prevent further limiting of permissions (by effectively 'escaping the cage'). These namespaces include fileSet, settings, system, and unsandboxed.

## Setting Up Your Application

There are some constraints you have to work with to make great Nova OS applications.&#x20;

* The users can disable and enable permissions at any given time.
* The users will be able to view and manipulate the source code.

## Submitting Apps

When you [submit an app to Nova Store](../../how-to/publish-to-nova-store.md), we modify its source code for Nova OS to enhance compatibility and screen for malware, ensuring increased user safety.

## Future

{% hint style="info" %}
The upcoming NovaOS Panels in Nova Nav would have a different syntax from the applications. Which would allow them to function best in a widget-like fashion.
{% endhint %}

If you are using NovaOS and enjoying it, and if you want to support NovaOS, Joining our [Patreon membership](https://www.patreon.com/adthoughtsglobal/membership), starting from a dollar a month, helps you get instant access to interesting new applications and lets you support NovaOS. It also gives you a special discord server role!
