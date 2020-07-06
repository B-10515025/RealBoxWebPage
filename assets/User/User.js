cc.Class({
    extends: cc.Component,

    properties: {
        Tables: cc.Node,
        Detail: cc.Node,
        Awards: cc.Node,
        Config: cc.EditBox,
        Result: cc.EditBox
    },

    SetPayTable () {
        this.Tables.active = true;
        this.Awards.active = false;
    },

    ShowDetail () {
        this.Detail.active = true;
    },

    Apply () {
        this.Detail.active = false;
    },

    TakeAwards () {
        this.Awards.active = true;
        this.Tables.active = false;
    },

    Take () {
        this.Result.string = this.Config.string;
    },

    Logout() {
        cc.director.loadScene("Login");
    }
});
