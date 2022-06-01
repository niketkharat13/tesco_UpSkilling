var db;
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
if (window.indexedDB) {
    var connection = window.indexedDB.open('dbName', 'dbVersion');
    connection.onsuccess = (e) => {
        db = e.target.result;
        console.log("success !");
        // for first version below code
        var table = db.createObjectStore('tableName');
        table.createIndex('tableIndex', "table_key_path", {unique: true});
    }
    connection.onerror = () => {
        console.log("error");
    }
    connection.onupgradeneeded = (e) => {
        db = e.target.result;
        var table = db.createObjectStore('tableName');
        table.createIndex('tableIndex', "table_key_path", {unique: true});
    }
}
function store() {
    var txn = db.transaction(['tableName'], 'readwrite');
    var store = txn.objectStore('tableName')
    store.add(data, 'uniqueIndentifier');
}
function get() {
    var txn = db.transaction(['tableName'], 'readwrite');
    var store = txn.objectStore('tableName')
    var getReq = store.get('uniqueIndentifier');
    getReq.onsuccess = (e) => {

    }
}