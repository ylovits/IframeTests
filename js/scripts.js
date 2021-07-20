const localFunction = function(event) {
    if(event.data === "messageToIframe") {
        console.log("Local function run!");
    }
}

/* Test event listener with message iframe > parent */
const checkParentMessaging = () => {
    parent.postMessage('messageToParent','*')
}

/* Test tunneling methods to iframe */
const checkParentTunneling = () => {
    parent.tunnelingMethod(localFunction);
}

const receiveMessage = (event) => {
    if(event) {
        localFunction(event);
    }
}

/* Test exposed iframe window methods */
window.exposedIframeFunction = function() {
    alert("Exposed Iframe function Works!");
}


/* Test event listener with message parent > iframe */
window.addEventListener("message", receiveMessage, false);
 

