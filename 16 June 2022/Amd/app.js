require(['myModule.js'], function (myModule) {
    console.log(myModule);
    let a = myModule("INCREMENT");
    console.log(a);
    let b = myModule();
    console.log(b);
})