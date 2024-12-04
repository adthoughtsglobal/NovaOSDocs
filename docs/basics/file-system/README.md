# File system

The core file system of NovaOS is saved in a very low-level local browser API called the IndexedDB. This can safely store a large amount of data right on your browser's storage.

The file system is a tree of folders and files which form a very unique memory state.

At first, the NovaOS Memory is simply a JS Object. This JS object contains keys and values which make up different Items.

The core file system, as mentioned above is saved in IDB, but inside indexedDB, we open a domain wide IDB database, this database has a store called `objectStore`, and in this object store, we have a key for each user. This key if accessed, appears with a value, which contains an array of another set of keys and values which are tree and `contentpool`.

The `tree` is the folder structure of the memory, which contains an array of another set of keys and values, these keys and values are called 'folders'. In NovaOS, these folders directly contain an array of arrays, which are the files or subfolders. Whereas the `contentpool` contains the file contents as values with file IDs as their keys.

## Rules

* Folder names should end with a slash (/)
* every file must have a file name with a file extension.
* the file name can only contain a period (.) symbol, which will separate the file name and its type / extension. If more than one period (.) symbols are present, the system will treat the last occurrence as the file name terminator.
* every file must have defined its Unique ID, which is a string with 12 characters.
* There are not special rules for folders or subfolders. Both should be treated equally as much as possible.

Based on that, we could make this diagram of the filesystem:

```json
"root":{
	"Downloads/": {
		"Welcome.txt": {
			"id": "sibq81"
		},
		"Subfolder/": {
			"Subfile.txt": {
				"id": "1283jh"
			}
		}
	},
	"Apps/": {}
},
"contentpool":{
	'1283jh': '',
	'sibq81': ''
}
```

## For a more efficient filesystem

We are putting efforts to create the best filesystem on the web. Balancing speed and simplicity, we may create new filesystems that are better at doing what it should.
