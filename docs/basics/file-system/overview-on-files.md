# Overview on files

Nova has a GUI for managing files, which is the text app and files app, but what if you want to make one such? what if you need to make a file explorer or a text editor, what about a media player?

You will see just that in this documentation!

## Creating a file

How do you make a file out of thin air in nova? well, you can make a file using the Nova.js `createFile()` function, nothing big nor complicated.

### Using `createFile`

Take this, you are making a very basic text editor app, you need to save the stuff the user have been typing, here's how to use the `createFile` function for that.

```javascript
await novaos.createFile(folderName, fileName, type, content, metadata)
```

Where `folderName` is the folder that the file should be saved at (the folder would be created if it doesn't exist.). `fileName` is the name of the file without file type extension. `type` is the type of the file, possible types are:

* `app` : apps will be executed in a new window once opened.
* `image/png`, `image/svg`, `image/jpeg`, `image/jpg` or any other will open in media viewer.
* `video/mp4`, `video/mpeg`, `video/mkv` or any other will open in media viewer.
* other supported formats (html, wav, mp3 etc.)
* 8-bit arrays will be opened by default in text app as plain text.

### File Metadata

{% hint style="info" %}
Metadata is not a requirement for creating a file. Imagine you are taking a picture with the camera app, the next week you need that picture to see it again, you know when it was taken - how do you locate it? This is why metadata is a huge deal, saving more data like the date, time, location or other statuses can increase the chances of a file becoming more useful. Metadata in nova file ecosystem allows you to do just that, storing more data about the file content without changing the content.
{% endhint %}

By default, Nova OS saves the timestamp metadata. This is its format:

```json
{"via":"nope","datetime":1731327471707}
```

> ⚠ This saves the current date and time in the _system's_ local time zone. `datetime` is the same as `Date.now()` method in JavaScript.
