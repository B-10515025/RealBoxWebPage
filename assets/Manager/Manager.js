cc.Class({
    extends: cc.Component,

    properties: {
        Tables: cc.Node,
        TableDetail: cc.Node,
        Logs: cc.Node,
        LogDetail: cc.Node,
    },

    GetTables () {
        this.Tables.active = true;
        this.Logs.active = false;
    },

    GetTableDetail () {
        this.TableDetail.active = true;
    },

    TableClose () {
        this.TableDetail.active = false;
    },

    GetLogs () {
        this.Logs.active = true;
        this.Tables.active = false;
    },

    GetLogDetail () {
        this.LogDetail.active = true;
    },

    LogClose () {
        this.LogDetail.active = false;
    },

    Logout() {
        cc.director.loadScene("Login");
    }
});
