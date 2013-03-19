// Add Bookmark
function addBookmark(info, tab) {

    var w = 560, h = 460;
    window.open (
        "http://www.google.com/bookmarks/mark?op=edit&output=popup&annotation="+info.selectionText+"&bkmk="+encodeURIComponent(tab.url)+"&title="+encodeURIComponent(tab.title),
        "bkmk_popup",
        "left="+((screen.width/2)-(h/2))+", top="+((screen.height/2)-(w/2))+", height="+h+"px, width="+w+"px, resizable=1, alwaysRaised=1"
    );

    //alert(JSON.stringify(info));

}

// Context menu
chrome.contextMenus.create({
    "title": "Add to Google Bookmarks",
    "contexts": [ "all" ],
    "onclick": addBookmark
});