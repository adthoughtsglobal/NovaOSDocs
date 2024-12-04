# User choices

In NovaOS, users can decide what their choices are on various OS-wide topics on the NovaOS settings application. If you wish to let your app reflect on these choices, consider using the NovaOS `getSetting()` function

Developers can use _**settings codes**_ to access NovaOS settings choices.

{% hint style="info" %}
See a list of default NovaOS settings keys, [here](settings-keys.md).
{% endhint %}

```javascript
await window.parent.getSetting("SETTNGS_CODE_HERE") // returns settings value stored in system.
```

