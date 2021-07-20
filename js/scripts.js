
/* Test event listener with message iframe > parent */
// This should be called remotely
const checkParentMessaging = () => {
    parent.postMessage('messageToParent','*')
}

/* Test tunneling methods to iframe */
// This should be called remotely
const checkParentTunneling = () => {
    parent.tunnelingMethod(() => {
        const pElement = document.createElement("p");
        const text = document.createTextNode("tunneling worked");
        pElement.appendChild(text);
        document.body.appendChild(pElement);
    });
}

/* Expose a function in the iframe window methods */
window.exposedIframeFunction = () => {
    alert("Exposed Iframe Function Works!");
}

/* Function for the iframe's receive event listener  */
const receiveMessage = (event) => {
    if (event && event.data === "messageToIframe") {
        const pElement = document.createElement("p");
        const text = document.createTextNode("Messaging worked");
        pElement.appendChild(text);
        document.body.appendChild(pElement);
    }
}
/* TEvent listener to test messaging parent > iframe */
window.addEventListener("message", receiveMessage, false);
 

