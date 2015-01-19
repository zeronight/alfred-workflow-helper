# install

    $ npm install alfred-workflow-helper

# example

    var Alfred = require("alfred-workflow-helper");

    var items = {
        uid: "flick",
        valid: "no",
        autocomplete: "flickr",
        title: "Flickr",
        icon: "flickr.png"
    };

    Alfred.buildItem(items);
    Alfred.end();

This will print xml like this:

    <?xml version="1.0"?>
    <items>
      <item uid="flick" valid="no" autocomplete="flickr">
        <title>Flickr</title>
        <icon>flickr.png</icon>
      </item>
    </items>

# usage

It is really esay to use this package, but you should know ScriptFilter for Alfred Workflow first. The xml for Alfred Workflow: [script-filter](http://support.alfredapp.com/workflows:config:inputs-script-filter)

There is only 3 methods, include: buildItem, buildItems, end.

#### buldItem

Add an item for xml, and you need to pass an object. 

    var Alfred = require("alfred-workflow-helper");

    var item ={
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
    };

    Alfred.buildItem(item);
    Alfred.end();

This will print xml:

    <?xml version="1.0"?>
    <items>
      <item uid="home" arg="~/" valid="YES" autocomplete="YES" type="file">
        <title>Home Folder</title>
        <subtitle>Home Folder ~/</subtitle>
        <subtitle mod="shift">Subtext when shift is pressed</subtitle>
        <subtitle mod="fn">Subtext when fn is pressed</subtitle>
        <subtitle mod="ctrl">Subtext when ctrl is pressed</subtitle>
        <subtitle mod="alt">Subtext when alt is pressed</subtitle>
        <subtitle mod="cmd">Subtext when cmd is pressed</subtitle>
        <icon type="fileicon">~/</icon>
        <text type="copy">Text when copying</text>
        <text type="largetype">Text fo LargeType</text>
      </item>
    </items>

#### buildItems

Add items for xml. It is like buildItem method, the only thing you need is to put all objects in an array.

    var Alfred = require("alfred-workflow-helper");

    var items =[
        {
            uid: "desktop",
            arg: "~/Desktop",
            valid: "YES",
            autocomplete: "Desktop",
            type: "file",
            title: "Desktop",
            subtitle: "~/Desktop",
            icon_fileicon: "~/Desktop"
        },
        {
            uid: "image",
            autocomplete: "My holiday photo",
            type: "file",
            title: "My holiday photo",
            subtitle: "~/Pictures/my holiday photo.jpg",
            icon_filetype: "public.jpeg"
        }
    ];

    Alfred.buildItems(items);
    Alfred.end();

#### end

Print the generated xml. Before you call this method, you can call buildItem and buildItems again and again.



