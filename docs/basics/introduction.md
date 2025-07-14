# Introduction

Applications in NovaOS are singular HTML files saved with an `.app` extension. The syntax and functionality are similar to that of native web development, but with certain additions that let the app perform natively with NovaOS features.

App files can be launched from anywhere and will follow the same method. In NovaOS, the launching of apps is controlled by the NovaOS Kernel

## NTX

{% hint style="info" %}
From NovaOS 2.1, NTX has become the heart of NovaOS applications. Even though it's optional, features like NTX and Nova.CSS give access to a library of native features in the system.
{% endhint %}

Inter-app and other communications are controlled by a centralized transaction system, the Nova Transaction Exchange (or NTX). NTX also deals with application-system communication. NTX is separated into many namespaces, like utility, fileGet, settings, etc.

Each NTX namespace requires permission from the user to resolve correctly. If required permissions aren't granted on app install, namespace permissions would be asked one at a time.

Applications can function as packagers or installers, which can be done via the JavaScript native fetch API and NTX's file management namespaces. Applications require user permissions to manipulate any directories or items in them.&#x20;

## App permissions

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

{% hint style="warning" %}
The user can turn off any of these namespaces for your application; this will cause ntx actions to return _undefined_. Some namespaces, if enabled, can let the application prevent further limiting of permissions (by effectively 'escaping the cage'). These namespaces include `fileSet`, `settings`, `system`, and `unsandboxed`.
{% endhint %}

## Ideals NovaOS applications

There are some constraints you have to work with to make great Nova OS applications.&#x20;

* The users can disable and enable permissions at any given time.
* The users will be able to view and manipulate the source code.

## Submitting Apps

When you [submit an app to Nova Store](introduction.md#submitting-apps), we modify its source code for Nova OS to enhance compatibility and screen for malware, ensuring increased user safety.

## Future

{% hint style="info" %}
The upcoming NovaOS Panels in Nova Nav would have a different syntax from the applications, which would allow them to function best in a widget-like fashion.
{% endhint %}

If you're using NovaOS and enjoying it, consider supporting us by joining our Patreon membership. Starting at just $1 a month, you'll gain instant access to exciting new applications and help us continue developing NovaOS. It also gives you a special Discord server role!
