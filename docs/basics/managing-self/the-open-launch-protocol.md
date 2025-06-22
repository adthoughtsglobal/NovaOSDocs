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

To interpret OLP requests and return data to requesters, apps need to have the following method in their source file:

<pre class="language-javascript"><code class="lang-javascript">async function greenflag() {
<strong>  if (myWindow.params) {
</strong><strong>    // interpret the data
</strong><strong>    sessionReqID = myWindow.params.trid;
</strong><strong>    console.log(myWindow.params.data);
</strong>  }
}
</code></pre>

We also require apps to save the sessionReqID (`myWindow.params.trid`) as it is requird to return any Data. You can ignore it if the app handler doesnt return anything.&#x20;

## Returning OLP requests

```javascript
window.parent.OLPreturn(data, sessionReqID)
```

* `sessionReqID` is the requestor window UID we saved when the application got triggered of OLP.

The OLPreturn function can be used anywhere in your appliction allowing time intensive operations to get carried out.
