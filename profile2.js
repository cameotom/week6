    var yourname = document.querySelector("#what");
console.log(yourname);

console.log("script run");
    function nameChange(e) {
        e.preventDefault();
        console.log("link clicked");
        yourname.innerText = "Zach Wonder";
    }

    function reject(id) {
        var element = document.querySelector(id);
        console.log(element);
        element.remove();
    }