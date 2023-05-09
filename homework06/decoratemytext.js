let bigger = () => {
    let element = document.getElementById("textarea");
    let size = getComputedStyle(element).fontSize
    size = parseInt(size.substring(0, size.length - 2));
    size += 2;
    document.getElementById("textarea").style.fontSize = size + "px";
}

let bling = () => {
    if (document.getElementById("bling").checked === true) {
        document.getElementById("textarea").style.fontWeight = "bold";
        document.getElementById("textarea").style.textDecoration = "underline";
        document.getElementById("textarea").style.color = "green";
    } else {
        document.getElementById("textarea").style.fontWeight = "normal";
        document.getElementById("textarea").style.textDecoration = "none";
        document.getElementById("textarea").style.color = "black";
    }
}