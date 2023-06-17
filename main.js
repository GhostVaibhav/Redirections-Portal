const arr = window.location.href.split('/');
const site = arr[arr.length - 1].slice(1);
if (site === "old") {
    document.getElementById("output").innerHTML = 'https://legacy.ghostvaibhav.codes';
    document.getElementById("output").href = 'https://legacy.ghostvaibhav.codes';
}
else if (site === "blue") {
    document.getElementById("output").innerHTML = 'https://blue.ghostvaibhav.codes';
    document.getElementById("output").href = 'https://blue.ghostvaibhav.codes';
}
else if (site === "") {
    document.getElementById("output").innerHTML = 'https://new.ghostvaibhav.codes';
    document.getElementById("output").href = 'https://new.ghostvaibhav.codes';
}
else {
    document.getElementById("output").innerHTML = 'https://404.ghostvaibhav.codes';
    document.getElementById("output").href = 'https://404.ghostvaibhav.codes';
}
setTimeout(function () {
    const arr = window.location.href.split('/');
    const site = arr[arr.length - 1].slice(1);
    if (site === "old")
        window.location.replace('https://legacy.ghostvaibhav.codes');
    else if (site === "blue")
        window.location.replace('https://blue.ghostvaibhav.codes');
    else if (site === "")
        window.location.replace('https://new.ghostvaibhav.codes');
    else
        window.location.replace("https://404.ghostvaibhav.codes");
}, 2000);
