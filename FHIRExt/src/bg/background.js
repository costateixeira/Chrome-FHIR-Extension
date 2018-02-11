// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });

var view_id;
var tblvc;
var fullURL;
var baseURL;
var base;



chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
		
    if (!tabs[0]) { console.log('Could not get current tab'); return; }
    let baseurl = new URL(tabs[0].url);

    let base = baseurl.protocol + '//' + baseurl.hostname;
       //alert(base);            
    let view_id = baseurl.searchParams.get('view');
       //alert(view_id);            
//        var newURL = tabs[0].url + "?origin="+base+"&view="+view_id;
        var newURL = "reppage.html" + "?origin="+base+"&view="+view_id;
        chrome.windows.create({ url: newURL, type:"popup" , height: 600, width:1300});
    });
});




//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });



  
  
//chrome.browserAction.onClicked.addListener(function(activeTab) {
//    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
//        var newURL = tabs[0].url + "/images";
//  chrome.windows.create({
//    url: chrome.runtime.getURL("reppage.html"),
//	type : "popup",
//	height: 600, 
//	width:1300
//       alert(view_id);
//	   });
//   });
//});
  
 
