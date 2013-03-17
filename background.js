// Add Bookmark
function addBookmark(info, tab) {
    chrome.windows.create({
        url: "http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=" + encodeURIComponent(tab.url) + "&title=" + encodeURIComponent(tab.title),
        type: "popup",
        height: 540,
        width: 650
    });
}

// Context menu
var menuId = chrome.contextMenus.create({
    "title": "Add to Google Bookmarks",
    "contexts": [ "all" ],
    "onclick": addBookmark
});