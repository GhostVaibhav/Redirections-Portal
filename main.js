setTimeout(function() {
    const arr = window.location.href.split('/');
    const site = arr[arr.length - 1].slice(1);
    if (site === "old") {
        window.location.replace('https://legacy.ghostvaibhav.me');
    }
    else if (site === "blue") {
        window.location.replace('https://blue.ghostvaibhav.me');
    }
    else if (site === "") {
        window.location.replace('https://new.ghostvaibhav.me');
    }
}, 5000);