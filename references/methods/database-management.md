# Database management

A function to refresh the current memory tree object from the local db. Has a brief cache for requests. Possible outputs are:

* Null: No data is found in the database.
* 3: Password doesn't match; Data is available, but the password is incorrect.
* object: success in operation; returns the root as an object.

## getallusers()

Returns an array of the usernames of all the local users in the current NovaOS system.

## removeUser()&#x20;

Precisely removes the current user from the database and logs out.

## erdbsfull()

Erases the NovaOS database. Deletes all accounts and reloads the page.
