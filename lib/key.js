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