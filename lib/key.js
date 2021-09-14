var aks = require("asynckeystate");

const keyCodes = {
    ['']
}

let object_type = kindOf.TYPE1;

function getKeysDepressed() {
    const ret = [];
    for(let i = 0; i < 256; i++) {
        if(aks.getAsyncKeyState(i) == true) {
            ret.push(i);
        }
    }
    return ret
}

// if a key has been pressed for at least 20 ms -- return that it has been pressed

keys = get async key state
wait 20 ms
if all the non-modifier keys are still pressed, 


module.exports = {
  queryKeys: () => {
    const keys = [];
    for(let i = 0; i < 256; i++) {
        if(aks.getAsyncKeyState(i) == true) {
            keys.push(i);
        }
    }
    return keys
    }
};