cc.Class({
    extends: cc.Component,
    
    properties: {
        UserName: cc.EditBox,
        Failed: cc.Node
    },

    Login () {
        if (this.UserName.string === "User") {
            cc.director.loadScene("User");
        } else if (this.UserName.string === "Manager") {
            cc.director.loadScene("Manager");
        } else {
            this.Failed.active = true;
        }
    },
});
