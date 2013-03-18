// Add Bookmark
function addBookmark(info, tab) {

    var w = 560, h = 460;
    window.open (
        "http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk="+encodeURIComponent(tab.url)+"&title="+encodeURIComponent(tab.title),
        "bkmk_popup",
        "left="+((screen.width/2)-(h/2))+", top="+((screen.height/2)-(w/2))+", height="+h+"px, width="+w+"px, resizable=1, alwaysRaised=1"
    );

//    var windowId = chrome.windows.create({
//        url: "http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + encodeURIComponent(tab.url) + "&title=" + encodeURIComponent(tab.title),
//        type: "popup",
//        width: w,
//        height: h,
//        focused: true,
//        top: (screen.height/2)-(w/2),
//        left: (screen.width/2)-(h/2)
//    });

}

// Context menu
chrome.contextMenus.create({
    "title": "Add to Google Bookmarks",
    "contexts": [ "all" ],
    "onclick": addBookmark
});