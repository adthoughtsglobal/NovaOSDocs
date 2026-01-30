# Setting Keys

In NovaOS, users can decide what their choices are on various OS-wide topics on the NovaOS settings application. If you wish to let your app reflect on these choices, consider using the NovaOS `getSetting()` function

Developers can use _**setting codes**_ to access NovaOS settings choices.

```javascript
await ntx.settings.get("SETTNGS_CODE_HERE") // returns settings value stored in system
```

## Common setting keys

| Key               | Description                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| `focusMode`       | Blur the wallpaper while using apps.                                                              |
| `smartsearch`     | Search with similarity algorithms in file search.                                                 |
| `wsnapping`       | Snap your windows into place by dragging and dropping them along the sides of your system screen. |
| `CamImgFormat`    | Choose what file type to save your images saved from the camera app to.                           |
| `defFileLayout`   | Choose how the files app shows you the file lists.                                                |
| `timefrmt`        | Choose in what format time gets displayed in the _Nova Nav_.                                      |
| `defSearchEngine` | Choose the default search engine for Nova browser. (valid values are: NWP, Bing)                  |
