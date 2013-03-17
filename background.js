// Add Bookmark
function addBookmark(info, tab) {
    var w = 560, h = 460;
    chrome.windows.create({
        url: "http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + encodeURIComponent(tab.url) + "&title=" + encodeURIComponent(tab.title),
        type: "popup",
        width: w,
        height: h,
        top: (screen.height/2)-(w/2),
        left: (screen.width/2)-(h/2)
    });
}

// Context menu
var menuId = chrome.contextMenus.create({
    "title": "Add to Google Bookmarks",
    "contexts": [ "all" ],
    "onclick": addBookmark
});