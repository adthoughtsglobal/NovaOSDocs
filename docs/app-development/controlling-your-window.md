# Controlling your window

In NovaOS, apps are provided with an object to let the manage themselves. For example, closing your app window or changing to title in the window navigation bar.

Developers can use the `myWindow` object to handle these.  The `myWindow` object is injected to all application windows and can be accessed within a [`greenflag` function](timing.md).

{% hint style="warning" %}
An application cannot run scripts without an opened window in NovaOS2. Be sure to save important data while closing your application by itself.

It is highly unrecommended to block the user from managing aspects of your application.
{% endhint %}

## Using myWindow

Here is an example script to close the current application.&#x20;

```javascript
function closeApp() {
  myWindow.close();
}
```

Here is an example script to return the IDs of your app.

```javascript
function whatIsMyFileId() {
  return myWindow.appID; // returns the ID of the source file
}

function whatIsMyWindowId() {
  return myWindow.windowID; // returns the ID of the current window
}
```

myWindow is also used under OLP for initiating your app as a handler, [learn how.](the-open-launch-protocol.md#using-olp-as-a-trigger)
