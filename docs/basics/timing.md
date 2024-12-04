# Timing

### Green Flag Request

The `greenflag` serves as a prompt dispatched precisely during post application launch. It functions as an app instigator, managing the initial execution of the application. On a more pragmatic level, `greenflag` is simply a function, dedicated to run the script content of the application during app launch. The `greenflag` request delineates the procedural pathway through this function, which, in turn, is invoked by the App launcher directly into the application WebView. (Every app has their own unique `greenflag` broadcast, they will not interfere.)

But, from NovaOS 1.5, the greenflag function is not required for an application, and orphaned scripts will get executed in order.

Sample code:

```js
function greenflag() {
  initialiseUI();
}
```
