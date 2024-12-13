# Choose files

This page is all about letting a user choose a file from their file system. NovaOS lets users select files from the registered app which has its capabilities including 'file'.

## Determining the file app

To allow for customizability, NovaOS lets users use a files app of their choice. But which files app do we open to choose a file?

`fileTypeAssociations` is a system that lets apps register their supporting file types - file types they can handle.&#x20;

```javascript
 let appIdToOpen = window.parent.fileTypeAssociations['file'][0] || null;
```

Now, as we got appIdToOpen, which is the files app we can request to let the user choose a file, lets ask it.

## Requesting an 'opener'

Here is the method to summon a choose file window with the default files app in NovaOS.

```javascript
let appIdToOpen = window.parent.fileTypeAssociations['file'][0] || null;
window.parent.openlaunchprotocol(appIdToOpen, { 
                "opener":'any', "dir": "Downloads/" 
                }, currentreqID, myWindow.windowID);
```

Here, we use the [OL protocol](../managing-self/the-open-launch-protocol.md) to launch the application with the data, which has some params.

{% hint style="warning" %}
Apps can access this feature through the `myWindow` method. To use the myWindow method, you have to use the `greenflag()` function. Otherwise, it will return undefined. This is due to the fact that the `myWindow` object is only defined after the app document is loaded.

More: [greenflag](../timing.md), [mywindow](../managing-self/).
{% endhint %}

### Opener params

| Opener param | description                                            | examples                                   |
| ------------ | ------------------------------------------------------ | ------------------------------------------ |
| opener       | A file type to filter with.                            | <p>"opener":"json"<br>"opener":"app"</p>   |
| dir          | A directory to initialize the choose file window with. | <p>"dir":"Downloads/"<br>"dir":"Apps/"</p> |

### Reciving the selected file

Here is a snippet that recives a file from a choose file window.

```javascript
window.addEventListener('message', async (event) => {
  if (event.data.action === 'loadlocalfile') {
    if (event.data.id === myWindow.windowID) {
      console.log(event.data.returned); // this is the file ID.
    }
  }
});
```

