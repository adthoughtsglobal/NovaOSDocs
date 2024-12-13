# The Open Launch Protocol

## What is Open Launch Protocol (OLP)?

OLP is a method to open local applications but also carrying some data in the process. Unlike the [EventBusWorker](the-eventbusworker.md), OLP can launch an application from a file ID and transmit data to it.&#x20;

But even though OLP can launch any app, it doesn't mean that all apps will respond to the given information. OLP needs receiver side listeners for it to work.

With OLP, you can make 'Open file' popups or even create an app that runs a custom file extension! The possibilities are pretty much endless!

{% hint style="warning" %}
Apps can access this feature through the `myWindow` method. To use the myWindow method, you have to use the `greenflag()` function. Otherwise, it will return undefined. This is due to the fact that the `myWindow` object is only defined after the app document is loaded.

More: [greenflag](../timing.md), [mywindow](./).
{% endhint %}

OLP, relies on cross-origin communication based on `window.postMessage` API and the "message" event listener.&#x20;

## Using OLP

```javascript
const currentreqID = window.parent.genUID();
window.parent.openlaunchprotocol(appid, data, id, winuid);
```

* `appid` is the ID of the application to launch
* `data` can be anything you need to transmit.
* `id` must be a UID string. It is used to handle multiple requests.
* `winuid` will be the ID of the window where the response should be transmitted to.

## Receiving OLP returns

Here is a code snippet on how to receive an OLP return:

```javascript
window.addEventListener('message', (event) => {
  if (event.data.id === myWindow.windowID) {
    let result = event.data.returned;
    console.log(result);
  }
});
```

{% hint style="danger" %}
It is highly recommended to have the response id checked, because it may also get triggered when there is an another OLP process ongoing.

<pre class="language-javascript"><code class="lang-javascript"><strong>event.data.id === myWindow.windowID
</strong></code></pre>
{% endhint %}

## Using OLP as a trigger

To interpret OLP requests and return data to requesters, apps need to have this following method in their source file:

<pre class="language-javascript"><code class="lang-javascript">async function greenflag() {
<strong>  if (myWindow.params &#x26;&#x26; myWindow.params.appid == myWindow.appID) {
</strong><strong>    // intepret the data
</strong><strong>    sessionReqID = myWindow.params.winuid;
</strong><strong>    console.log(myWindow.params.data);
</strong>  }
}
</code></pre>

Basically, what we are doing here is to check for window params, if any, to find out that if theres a request in the launch of the process, and the request of for the ID of the current application.

Which means that we simply check every time if there's an OLP requests, simply put, params in the `myWindow` object matches our current app ID.

We also need to store the requesting window UID to 'respond' or to return any data.

## Returning OLP requests

```javascript
window.parent.OLPreturn(data, sessionReqID)
```

* `sessionReqID` is the requestor window UID we saved when the application got triggered of OLP.

The OLPreturn function can be used anywhere in your appliction allowing time intensive operations to get carried out.
