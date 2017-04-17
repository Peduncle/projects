chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    chrome.tabs.executeScript(tab.id, {
        "file": "testScript.js"
    }, function () { // Execute your code
        console.log("Script Executed .. "); // Notification on Completion
        chrome.tabs.getAllInWindow(null, function(tabs){
            
            for (var i = 0; i < tabs.length; i++) {
                var tab = tabs[i];
                console.log(tab.title);
                chrome.tabs.sendRequest(tabs[i].id, { action: "xxx" });                         
            }
        });
    });
});
