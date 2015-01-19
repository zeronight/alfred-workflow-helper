var builder = require('xmlbuilder');
var root = builder.create('items');

var AlfredNode = function (item) {
    this.item = item;
    this.xmlObj = {};

    this.buildAttributes();
    this.buildSubItems();

    return {item: this.xmlObj};
}

AlfredNode.prototype.buildAttributes = function () {
    var me = this;
    var attributes = ["uid", "arg", "valid", "autocomplete", "type"];

    attributes.forEach(function (attr) {
        if (!me.item[attr]) return;

        me.xmlObj['@' + attr] = me.item[attr];
    });
}

AlfredNode.prototype.buildSubItems = function () {
    var me = this;
    var subItems = ["title", "subtitle", "icon"];

    subItems.forEach(function (subItem) {
        if (!me.item[subItem]) return;

        me.xmlObj[subItem] = me.item[subItem];
    });

    me.buildSubtitleItems();
    me.buildIconItems();
    me.buildTextItems();
}

AlfredNode.prototype.buildSubtitleItems = function () {
    var me = this;
    var mods = ["shift", "fn", "ctrl", "alt", "cmd"];

    me.xmlObj["#list_shift"] = [];
    mods.forEach(function (mod) {
        var value = me.item["subtitle_" + mod]

        if(!value) return;

        me.xmlObj["#list_shift"].push({
            subtitle: {"#text": value, "@mod": mod}
        })
    });

    if(me.xmlObj["#list_shift"].length === 0) { delete me.xmlObj["#list_shift"] }
}

AlfredNode.prototype.buildIconItems = function () {
    var me = this;
    var types = ["fileicon", "filetype"];

    me.xmlObj["#list_icon"] = [];
    types.forEach(function (type) {
        var value = me.item["icon_" + type]

        if(!value) return;

        me.xmlObj["#list_icon"].push({
            icon: {"#text": value, "@type": type}
        })
    });

    if(me.xmlObj["#list_icon"].length === 0) { delete me.xmlObj["#list_icon"] }
}

AlfredNode.prototype.buildTextItems = function () {
    var me = this;
    var types = ["copy", "largetype"];

    me.xmlObj["#list_text"] = [];
    types.forEach(function (type) {
        var value = me.item["text_" + type]

        if(!value) return;

        me.xmlObj["#list_text"].push({
            text: {"#text": value, "@type": type}
        })
    });

    if(me.xmlObj["#list_text"].length === 0) { delete me.xmlObj["#list_text"] }
}

module.exports = {
    buildErrorInfo: function (site, message) {
        this.buildItem({
            title: site,
            subtitle: message
        });
    },


    buildItem: function (item) {
        var node = new AlfredNode(item);

        root.ele(node);
    },

    buildItems: function (items) {
        if(!Array.isArray(items)) {
            this.buildErrorInfo("buildItems", "Arrguments error: require an array argument.");
            return;
        }

        items.forEach(this.buildItem);
    },

    end: function () {
        console.log(root.end({pretty: true}));
    }
};