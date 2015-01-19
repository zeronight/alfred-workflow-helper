var Alfred = require("../index.js");

var items = [];

items.push({
    uid: "desktop",
    arg: "~/Desktop",
    valid: "YES",
    autocomplete: "Desktop",
    type: "file",
    title: "Desktop",
    subtitle: "~/Desktop",
    icon_fileicon: "~/Desktop"
});

items.push({
    uid: "flick",
    valid: "no",
    autocomplete: "flickr",
    title: "Flickr",
    icon: "flickr.png"
});

items.push({
    uid: "image",
    autocomplete: "My holiday photo",
    type: "file",
    title: "My holiday photo",
    subtitle: "~/Pictures/my holiday photo.jpg",
    icon_filetype: "public.jpeg"
});

items.push({
    uid: "home",
    arg: "~/",
    valid: "YES",
    autocomplete: "YES",
    type: "file",
    title: "Home Folder",
    icon_fileicon: "~/",
    subtitle: "Home Folder ~/",
    subtitle_shift: "Subtext when shift is pressed",
    subtitle_fn: "Subtext when fn is pressed",
    subtitle_ctrl: "Subtext when ctrl is pressed",
    subtitle_alt: "Subtext when alt is pressed",
    subtitle_cmd: "Subtext when cmd is pressed",
    text_copy: "Text when copying",
    text_largetype: "Text fo LargeType"
});

Alfred.buildItems(items);

Alfred.end();


