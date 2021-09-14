

function getKeysDepressed() {
    const ret = [];
    for(let i = 0; i < 256; i++) {
        if(aks.getAsyncKeyState(i) == true) {
            ret.push(i);
        }
    }
    return ret
}


while(true) {
    const keys = getKeysDepressed();
    // parse keys
    console.log(keys.toString());

}

// setInterval(function(){
//     console.log("Space Pressed", aks.getAsyncKeyState(0x20));
// }, 100);

while (true){
    get keys//
}