const BODY = document.body;

function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function setChilds(el, childs) {
    for(var key in childs) {
        el.appendChild(childs[key]);
    }
}

function toSend() {
    var text = document.getElementById("note");
    var textValue = text.value;
    if (textValue.length < 1) {
        return false;
    }
    else {
        var textText = textValue.toString();
        var textSize = size(textText);
        var textNode = document.createTextNode(textSize);
        var textFinal = document.createTextNode(textText);

        createDiv(textNode, textFinal);
        text.value = "";
    }
    
}

function size(textLength) {

    if (textLength.length > 80) {
        var newSize = textLength.slice(0, 80) + "...";
        return newSize;
    }
    else {
        return textLength;
    }

}

function createDiv(textNode, textFinal) {

    var ghost = document.createElement("p");
    ghost.appendChild(textFinal);
    ghost.style.display = "none";

    var p = document.createElement("p");
    p.appendChild(textNode);

    var input = document.createElement("input");
    setAttributes(input, { "type": "button", "onclick": "openIt(this)", "value": "Full View" });

    var div = document.createElement("div");
    div.setAttribute("id", "secDiv");
    setChilds(div, { ghost, p, input });

    var container = document.getElementById("container-note");
    container.appendChild(div);

}

function createModal(text) {

    var div = document.createElement("div");
    div.setAttribute("class", "modal");

    var button = document.createElement("input");
    setAttributes(button, { "type": "button", "value": "Close", "onclick": "closeIt(this)" });

    var p = document.createElement("p");
    p.appendChild(text);
    setChilds(div, { p, button });

    var section = document.getElementById("secNote");
    section.appendChild(div);

} 

function openIt(este) {

    BODY.style.pointerEvents = "none";

    var parent = este.parentNode;
    var fc = parent.firstChild;

    var clone = fc.cloneNode(true);
    clone.style.display = "initial";
    
    createModal(clone);

}

function closeIt(este) {

    BODY.style.pointerEvents = "all";

    var parent = este.parentNode;
    parent.remove();

}
