

while(true) {
    const keys = query_keys();
    console.log(keys.toString());
}

setInterval(function(){
    console.log("Space Pressed", aks.getAsyncKeyState(0x20));
}, 100);