# Database management

{% hint style="warning" %}
Most memory management functions are **asynchronous**.
{% endhint %}

## updateMemoryData()

A function to refresh the current memory tree object from the local db. Has a brief cache for requests. Possible outputs are:

* Null: No data is found in the db.
* 3: Password doesnt match; Data is available, but the password is incorrect.
* object: sucess in operation; returns memory object.

## getallusers()

Returns an array of the usernames of all the local users in the current NovaOS system.

## removeUser()&#x20;

Precisely removes the current user from the db and logs out.
