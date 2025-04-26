# File management

## getFileNamesByFolder(_folderpath_)

A function to return an array of file names along with their ID's in a folder, using the folder's path.

Example:

```javascript
await fileList = getFileNamesByFolder("Apps/Subfolder/");
await fileItem = getFileById(fileList[0].id);
console.log("File content: " + fileItem.content)
```

{% hint style="danger" %}
We recommend using a `try ... catch ()` block around code that deals with file management.
{% endhint %}

## getFileByPath(_path_)

Returns an object with file name, metadata, ID and type.

## getFileById(_id_, _datatype_)

Returns an object with file name, metadata, ID, type, path and content.

## createFile()
