const arr = window.location.href.split('/');
const site = arr[arr.length - 1].slice(1);
if (site === "old") {
    document.getElementById("output").innerHTML = 'https://legacy.ghostvaibhav.tech';
    document.getElementById("output").href = 'https://legacy.ghostvaibhav.tech';
}
else if (site === "blue") {
    document.getElementById("output").innerHTML = 'https://blue.ghostvaibhav.tech';
    document.getElementById("output").href = 'https://blue.ghostvaibhav.tech';
}
else if (site === "") {
    document.getElementById("output").innerHTML = 'https://new.ghostvaibhav.tech';
    document.getElementById("output").href = 'https://new.ghostvaibhav.tech';
}
else {
    document.getElementById("output").innerHTML = 'https://404.ghostvaibhav.tech';
    document.getElementById("output").href = 'https://404.ghostvaibhav.tech';
}
setTimeout(function () {
    const arr = window.location.href.split('/');
    const site = arr[arr.length - 1].slice(1);
    if (site === "old")
        window.location.replace('https://legacy.ghostvaibhav.tech');
    else if (site === "blue")
        window.location.replace('https://blue.ghostvaibhav.tech');
    else if (site === "")
        window.location.replace('https://new.ghostvaibhav.tech');
    else
        window.location.replace("https://404.ghostvaibhav.tech");
}, 2000);
