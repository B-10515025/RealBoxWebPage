function Http(url, method, params, err, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
            if(callback !== null){
                callback(xhr.responseText);
            }
        } else if(xhr.readyState == 4) {
            err();
        }
    };
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onerror = ()=>{
        err();
    }
    if (params) 
        xhr.send(JSON.stringify(params));
    else
        xhr.send();
}
class Client {
    serverURL = " http://127.0.0.1:8080";

    Init(callback) {
        callback();
    }
    GetTables (name, callback) {
        let url;
        if(name != undefined) {
            url = this.serverURL + "/Paytables?name:" + name;
        } else {
            url = this.serverURL + "/Paytables";
        }
        Http(url, "GET", {}, ()=>{}, (data)=>{
            callback(data);
        });
    }
    GetFrozenTables (name, callback) {
        Http_post(this.serverURL + "/FrozenPaytables", "GET", {}, ()=>{}, (data)=>{
            callback(data);
        });
    }
    AddTable (table, callback) {
        Http(this.serverURL + "/Paytables", "POST", table, ()=>{}, (data)=>{
            callback(data);
        });
    }
    SetTable (name, config, callback) {
        Http(this.serverURL + "/Paytables?name:" + name, "POST", config, ()=>{}, (data)=>{
            callback(data);
        });
    }
    DeleteTable (name, callback) {
        Http(this.serverURL + "/Paytables?", "DELETE", name, ()=>{}, (data)=>{
            callback(data);
        });
    }
}
var client = new Client();
window.client = client;
