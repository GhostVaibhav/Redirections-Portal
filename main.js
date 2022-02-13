const arr = window.location.href.split('/');
const site = arr[arr.length - 1].slice(1);
if (site === "old") {
    document.getElementById("output").innerHTML = 'https://legacy.ghostvaibhav.me';
    document.getElementById("output").href = 'https://legacy.ghostvaibhav.me';
}
else if (site === "blue") {
    document.getElementById("output").innerHTML = 'https://blue.ghostvaibhav.me';
    document.getElementById("output").href = 'https://blue.ghostvaibhav.me';
}
else if (site === "") {
    document.getElementById("output").innerHTML = 'https://new.ghostvaibhav.me';
    document.getElementById("output").href = 'https://new.ghostvaibhav.me';
}
else {
    document.getElementById("output").innerHTML = 'https://404.ghostvaibhav.me';
    document.getElementById("output").href = 'https://404.ghostvaibhav.me';
}
setTimeout(function () {
    const arr = window.location.href.split('/');
    const site = arr[arr.length - 1].slice(1);
    if (site === "old")
        window.location.replace('https://legacy.ghostvaibhav.me');
    else if (site === "blue")
        window.location.replace('https://blue.ghostvaibhav.me');
    else if (site === "")
        window.location.replace('https://new.ghostvaibhav.me');
    else
        window.location.replace("https://404.ghostvaibhav.me");
}, 2000);