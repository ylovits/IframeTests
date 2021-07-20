const localFunction = function() {
    alert("Local function run!");
}

/* Test tunneling methods to iframe */
const checkParentTunneling = () => {
    parent.tunnelingMethod(localFunction);
}


/* Test exposed iframe window methods */
window.exposedIframeFunction = function() {
    alert("Exposed Iframe function Works!");
}


/* Test event listener with message parent > iframe */
window.addEventListener("message", receiveMessage, false);
 
const receiveMessage = (event) => {
    if(event) {
        localFunction();
    }
}

/* Test event listener with message iframe > parent */
const checkParentMessaging = () => {
    window.parent.postMessage('foo','*')
}