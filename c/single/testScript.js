//alert("hello123");
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log("hello");

});
//chrome.tabs.getAllInWindow(null, function(tabs){
    //for (var i = 0; i < tabs.length; i++) {
        //var tab = tabs[i];
        //console.log(tab);
        //chrome.tabs.sendRequest(tabs[i].id, { action: "xxx" });                         
    //}
//});
//var bkg = chrome.extension.getBackgroundPage();
//bkg.console.log('foo');
